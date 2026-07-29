#!/usr/bin/env python3
"""Generate Engma report PDFs from the site content JSON.

This script rebuilds the article/tool PDFs so the downloadable file matches the
same long-form content shown on the detail pages.
"""

from __future__ import annotations

import html
import json
import re
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, List

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


BASE_DIR = Path(__file__).resolve().parents[1]
DATA_FILE = BASE_DIR / "src" / "data" / "Hostinger_A_C_Content_Data.json"
OUTPUT_DIR = BASE_DIR / "public" / "reports" / "pdf"

BODY_FONT = "EngmaAppleBody"
HEADING_FONT = "EngmaAppleHeading"


def first_existing_path(candidates: Iterable[str]) -> str | None:
  for candidate in candidates:
    path = Path(candidate).expanduser()
    if path.exists():
      return str(path)
  return None


def register_fonts() -> None:
  font_candidates = [
      (
          BODY_FONT,
          first_existing_path(
              [
                  "/System/Library/Fonts/Supplemental/AppleGothic.ttf",
                  "/System/Library/Fonts/STHeiti Light.ttc",
                  "/System/Library/Fonts/STHeiti Medium.ttc",
                  "/System/Library/Fonts/Supplemental/Songti.ttc",
              ]
          ),
      ),
      (
          HEADING_FONT,
          first_existing_path(
              [
                  "/System/Library/Fonts/STHeiti Medium.ttc",
                  "/System/Library/Fonts/STHeiti Light.ttc",
                  "/System/Library/Fonts/Supplemental/AppleGothic.ttf",
                  "/System/Library/Fonts/Supplemental/Songti.ttc",
              ]
          ),
      ),
  ]

  for font_name, font_path in font_candidates:
    if font_name in pdfmetrics.getRegisteredFontNames():
      continue
    if not font_path:
      continue
    pdfmetrics.registerFont(TTFont(font_name, font_path))


def escape_inline(text: str) -> str:
  text = html.escape(text, quote=False)
  text = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", text)
  text = re.sub(r"`(.+?)`", r"<font face='Courier'>\1</font>", text)

  def link_repl(match: re.Match[str]) -> str:
    label, url = match.group(1), match.group(2)
    safe_url = html.escape(url, quote=True)
    return f'<a href="{safe_url}">{label}</a>'

  text = re.sub(r"\[(.+?)\]\((.+?)\)", link_repl, text)
  return text


def normalize_lines(markdown: str) -> List[str]:
  return [line.rstrip() for line in markdown.replace("\r\n", "\n").replace("\r", "\n").split("\n")]


def strip_intro(lines: List[str]) -> List[str]:
  result: List[str] = []
  skipped_title = False
  skipped_date = False
  for line in lines:
    stripped = line.strip()
    if not skipped_title and stripped.startswith("# "):
      skipped_title = True
      continue
    if skipped_title and not skipped_date and stripped.startswith("日期："):
      skipped_date = True
      continue
    if skipped_title and skipped_date and stripped == "":
      # Drop one empty spacer after the title/date block.
      continue
    result.append(line)
  return result


def looks_like_separator(line: str) -> bool:
  stripped = line.strip()
  return stripped in {"---", "***", "___"}


def bullet_prefix(line: str):
  stripped = line.lstrip()
  if re.match(r"^\d+\.\s+", stripped):
    return "numbered"
  if stripped.startswith("- ") or stripped.startswith("* "):
    return "bullet"
  return None


@dataclass
class RenderStyles:
  title: ParagraphStyle
  subtitle: ParagraphStyle
  h2: ParagraphStyle
  h3: ParagraphStyle
  body: ParagraphStyle
  bullet: ParagraphStyle
  note: ParagraphStyle
  small: ParagraphStyle


def build_styles() -> RenderStyles:
  base = getSampleStyleSheet()
  return RenderStyles(
      title=ParagraphStyle(
          "EngmaTitle",
          parent=base["Title"],
          fontName=HEADING_FONT,
          fontSize=24,
          leading=30,
          textColor=colors.HexColor("#0f172a"),
          alignment=TA_LEFT,
          spaceAfter=10,
      ),
      subtitle=ParagraphStyle(
          "EngmaSubtitle",
          parent=base["Normal"],
          fontName=BODY_FONT,
          fontSize=11.5,
          leading=17,
          textColor=colors.HexColor("#64748b"),
          spaceAfter=14,
      ),
      h2=ParagraphStyle(
          "EngmaH2",
          parent=base["Heading2"],
          fontName=HEADING_FONT,
          fontSize=15.5,
          leading=21,
          textColor=colors.HexColor("#0f172a"),
          spaceBefore=12,
          spaceAfter=6,
      ),
      h3=ParagraphStyle(
          "EngmaH3",
          parent=base["Heading3"],
          fontName=HEADING_FONT,
          fontSize=13,
          leading=18,
          textColor=colors.HexColor("#0f172a"),
          spaceBefore=10,
          spaceAfter=5,
      ),
      body=ParagraphStyle(
          "EngmaBody",
          parent=base["BodyText"],
          fontName=BODY_FONT,
          fontSize=11.2,
          leading=18,
          textColor=colors.HexColor("#111827"),
          spaceAfter=6,
      ),
      bullet=ParagraphStyle(
          "EngmaBullet",
          parent=base["BodyText"],
          fontName=BODY_FONT,
          fontSize=11.2,
          leading=18,
          leftIndent=14,
          firstLineIndent=0,
          bulletIndent=0,
          textColor=colors.HexColor("#111827"),
          spaceAfter=5,
      ),
      note=ParagraphStyle(
          "EngmaNote",
          parent=base["BodyText"],
          fontName=BODY_FONT,
          fontSize=10.2,
          leading=15,
          textColor=colors.HexColor("#475569"),
          spaceAfter=4,
      ),
      small=ParagraphStyle(
          "EngmaSmall",
          parent=base["BodyText"],
          fontName=BODY_FONT,
          fontSize=9.2,
          leading=12,
          textColor=colors.HexColor("#64748b"),
          spaceAfter=0,
      ),
  )


def paragraph(text: str, style: ParagraphStyle) -> Paragraph:
  return Paragraph(escape_inline(text), style)


def markdown_to_story(markdown: str, styles: RenderStyles) -> List[object]:
  story: List[object] = []
  lines = strip_intro(normalize_lines(markdown))
  pending_blank = 0

  for raw_line in lines:
    line = raw_line.rstrip()
    stripped = line.strip()

    if not stripped:
      pending_blank += 1
      continue

    if pending_blank:
      story.append(Spacer(1, 8 + 3 * min(pending_blank, 3)))
      pending_blank = 0

    if looks_like_separator(line):
      story.append(Spacer(1, 6))
      story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor("#e2e8f0")))
      story.append(Spacer(1, 6))
      continue

    if line.startswith("### "):
      story.append(paragraph(line[4:], styles.h3))
      continue

    if line.startswith("## "):
      story.append(paragraph(line[3:], styles.h2))
      continue

    if line.startswith("# "):
      story.append(paragraph(line[2:], styles.title))
      continue

    bullet = bullet_prefix(line)
    if bullet == "numbered":
      story.append(paragraph(line.lstrip(), styles.bullet))
      continue
    if bullet == "bullet":
      story.append(paragraph("• " + line.lstrip()[2:], styles.bullet))
      continue

    if re.fullmatch(r"\*\*[^*]+\*\*", stripped):
      story.append(paragraph(stripped, styles.note))
      continue

    story.append(paragraph(line, styles.body))

  return story


def short_summary(article: dict) -> str:
  summary = str(article.get("summary") or "").strip()
  if summary:
    return summary
  content = str(article.get("contentMarkdown") or "")
  first_paragraph = []
  for line in strip_intro(normalize_lines(content)):
    if line.strip().startswith("## "):
      break
    if line.strip():
      first_paragraph.append(line.strip())
  return " ".join(first_paragraph)[:140]


def render_pdf(item: dict) -> None:
  pdf_name = str(item.get("pdfFileName") or "").strip()
  content = str(item.get("contentMarkdown") or "").strip()
  if not pdf_name or not content:
    return

  output_path = OUTPUT_DIR / pdf_name
  output_path.parent.mkdir(parents=True, exist_ok=True)

  title = str(item.get("title") or "").strip() or pdf_name.replace(".pdf", "")
  date = str(item.get("date") or "").strip()
  category = str(item.get("category") or "").strip()
  subtitle = short_summary(item)

  doc = SimpleDocTemplate(
      str(output_path),
      pagesize=A4,
      leftMargin=0.7 * inch,
      rightMargin=0.7 * inch,
      topMargin=0.7 * inch,
      bottomMargin=0.7 * inch,
      title=title,
      author="Engma AI Lab",
  )

  styles = build_styles()
  story: List[object] = []
  story.append(paragraph(title, styles.title))

  meta_bits = []
  if date:
    meta_bits.append(date)
  if category:
    meta_bits.append(category)
  if meta_bits:
    story.append(paragraph("  ·  ".join(meta_bits), styles.small))

  if subtitle:
    story.append(paragraph(subtitle, styles.subtitle))

  story.append(Spacer(1, 4))
  story.extend(markdown_to_story(content, styles))

  def draw_page(canvas, doc_obj):
    canvas.saveState()
    width, height = A4
    canvas.setStrokeColor(colors.HexColor("#e2e8f0"))
    canvas.setLineWidth(0.7)
    canvas.line(doc_obj.leftMargin, height - doc_obj.topMargin + 10, width - doc_obj.rightMargin, height - doc_obj.topMargin + 10)
    canvas.line(doc_obj.leftMargin, doc_obj.bottomMargin - 12, width - doc_obj.rightMargin, doc_obj.bottomMargin - 12)
    canvas.setFont(BODY_FONT, 8.5)
    canvas.setFillColor(colors.HexColor("#64748b"))
    canvas.drawString(doc_obj.leftMargin, 18, "Engma AI Lab")
    canvas.drawRightString(width - doc_obj.rightMargin, 18, f"Page {canvas.getPageNumber()}")
    canvas.restoreState()

  doc.build(story, onFirstPage=draw_page, onLaterPages=draw_page)


def iter_items() -> Iterable[dict]:
  data = json.loads(DATA_FILE.read_text(encoding="utf-8"))
  for item in data.get("insights", []):
    yield item
  for item in data.get("tools", []):
    yield item


def main() -> None:
  register_fonts()
  written = 0
  for item in iter_items():
    if not item.get("pdfFileName") or not item.get("contentMarkdown"):
      continue
    render_pdf(item)
    written += 1
  print(f"Generated {written} PDFs into {OUTPUT_DIR}")


if __name__ == "__main__":
  main()
