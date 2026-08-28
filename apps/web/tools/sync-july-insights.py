#!/usr/bin/env python3
from __future__ import annotations

import json
from pathlib import Path
from textwrap import dedent


BASE_DIR = Path(__file__).resolve().parents[1]
DATA_FILE = BASE_DIR / "src" / "data" / "Hostinger_A_C_Content_Data.json"


def slug(text: str) -> str:
    return (
        text.lower()
        .replace("｜", "_")
        .replace(" ", "_")
        .replace("/", "_")
        .replace("(", "")
        .replace(")", "")
        .replace("，", "_")
        .replace("。", "_")
        .replace(":", "_")
        .replace("'", "")
        .replace("“", "")
        .replace("”", "")
        .replace("·", "_")
        .replace("__", "_")
        .strip("_")
    )


def item_block(num: int, headline: str, event: str, why: str, impact: str, opportunity: str, tags: str, source: str) -> str:
    return dedent(
        f"""
        ## {num}. {headline}

        **事件**

        {event}

        **为什么重要**

        {why}

        **影响**

        {impact}

        **可落地机会**

        {opportunity}

        **标签**

        {tags}

        **来源**

        {source}
        """
    ).strip()


def report_markdown(date: str, title: str, intro: str, items: list[dict]) -> str:
    body = [f"# A：全球AI洞察", "", f"日期：{date}", "", intro.strip(), ""]
    for idx, item in enumerate(items, 1):
        body.append(
            item_block(
                idx,
                item["headline"],
                item["event"],
                item["why"],
                item["impact"],
                item["opportunity"],
                item["tags"],
                item["source"],
            )
        )
        if idx != len(items):
            body.append("")
            body.append("---")
            body.append("")
    return "\n".join(body).strip() + "\n"


COMMON_ITEMS = {
    "microsoft": {
        "headline": "Microsoft 365 Copilot 把更强推理继续往办公默认层里塞",
        "event": "Microsoft 继续把更强的推理能力和 Copilot 绑定，重点不只是模型参数更大，而是它已经直接进了 Word、Excel、PowerPoint、Teams 这些员工每天都会打开的入口。",
        "why": "这件事重要的地方在于，企业采买 AI 的判断标准正在变。过去先问模型有多强，现在更先问它能不能先占住默认入口，能不能顺手接进日常办公。",
        "impact": "如果 Copilot 继续变成默认工作流的一部分，AI 的价值会从“试一试”变成“每天都离不开”。这会直接压缩企业对独立聊天工具的兴趣。",
        "opportunity": "Engma 可以继续盯着“默认办公入口”这条线，把文档处理、表格分析、会议纪要、任务交接当成重点场景。",
        "tags": "Microsoft / Copilot / 办公默认层 / 企业工作流",
        "source": "https://techcommunity.microsoft.com/blog/microsoft365copilotblog/available-today-openai%E2%80%99s-gpt-5-6-in-microsoft-365-copilot/4533152",
    },
    "google": {
        "headline": "Gemini Study notebooks 把 AI 往知识整理和复盘工作台推",
        "event": "Google 继续强化 Gemini app 里的 Study notebooks，重点不是让用户多问几句，而是把资料变成更容易复习、整理和回看的结构。",
        "why": "这说明 AI 产品正在从“临时问答”分化成“长期工作台”。谁能把学习、资料和复盘串起来，谁就更像真正的知识基础设施。",
        "impact": "对研究、培训、咨询、内容和内部知识库来说，这类产品会比单纯聊天更接近日常可复用工具。",
        "opportunity": "Engma 可以把“学习笔记、研究摘要、资料复盘”继续当成一个低成本入口，后面也能和内部知识库结合。",
        "tags": "Google / Gemini / Study notebooks / 知识工作台",
        "source": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-study-notebooks/",
    },
    "openai_work": {
        "headline": "OpenAI 继续把“AI 改变工作内容”讲成企业经营语言",
        "event": "OpenAI 在《How AI is expanding what people do at work》里，把重点放在工作拆分、任务接续和流程重组上，而不是只讲模型能力。",
        "why": "这类表达很关键，因为它开始接近管理层能听懂的话：不是“AI 很会聊”，而是“AI 能不能接住你团队里最重复、最耗时的一段工作”。",
        "impact": "AI 行业的竞争会继续往岗位和流程里走。谁能把一段业务做得更稳定、更可控，谁就更容易拿预算。",
        "opportunity": "Engma 后面做洞察时，可以继续把“岗位被 AI 接住”当成主线，而不是只看模型更新有多炫。",
        "tags": "OpenAI / 工作内容 / 岗位重构 / 企业采购",
        "source": "https://openai.com/index/chatgpt-for-your-most-ambitious-work/",
    },
    "openai_presence": {
        "headline": "Presence 说明 AI 前台正在从会说话变成会接流程",
        "event": "OpenAI 的 Presence 不是单纯把语音做得更像人，而是把 voice 和 chat agents 往企业流程里推，让它更像一个前台执行层。",
        "why": "真正值钱的不是“能不能说”，而是“能不能接住一段真实业务对话，再把它稳稳交给下一步系统”。",
        "impact": "一旦这种前台能力稳定，企业会更愿意把它放进客服、销售、内部支持、会议纪要和行动项分发里。",
        "opportunity": "Engma 可以把语音前台、动作编排、人工接管这几个点单独拆出来看，这比单纯测识别准确率更接近真实采购。",
        "tags": "OpenAI / Presence / 语音前台 / 工作流编排",
        "source": "https://openai.com/index/introducing-openai-presence/",
    },
    "anthropic_opus": {
        "headline": "Claude Opus 5 把竞争焦点拉到长任务稳定性",
        "event": "Anthropic 在 7 月 24 日发布 Claude Opus 5，官方重点放在 long-running agents、coding 和 professional work 上。",
        "why": "这意味着模型竞争不再只是“谁更会答”，而是“谁能在更长的任务链路里保持判断，不乱跑偏、不反复横跳”。",
        "impact": "企业会更在意模型能不能把复杂任务稳稳做完，而不是只在单轮演示里看起来聪明。",
        "opportunity": "Engma 后面测工具和模型时，应该把长文研究、代码改写、跨步骤整理当成重点场景。",
        "tags": "Anthropic / Claude Opus 5 / 长任务 / 专业工作",
        "source": "https://www.anthropic.com/news/claude-opus-5",
    },
    "anthropic_reflect": {
        "headline": "Reflect with Claude 把 AI 使用变成可复盘资产",
        "event": "Anthropic 推出 Reflect with Claude，让用户更容易看见自己的提问历史、使用习惯和对话模式。",
        "why": "这类功能不炫，但很重要，因为它在帮用户形成方法，而不是只给一次答案。",
        "impact": "当用户知道自己在哪些场景最常卡住，就更容易把 AI 变成长期工作方法的一部分，而不是临时工具。",
        "opportunity": "Engma 可以把知识整理、方法沉淀、项目回顾、prompt 资产管理继续往前做。",
        "tags": "Anthropic / Claude / 复盘 / 使用习惯",
        "source": "https://www.anthropic.com/news/reflect-with-claude",
    },
    "workday_learning": {
        "headline": "Workday Learning, powered by Sana 把学习系统往岗位和技能上绑",
        "event": "Workday 把 Sana 的 AI-native learning 能力正式做成企业可部署的学习层，继续推动岗位、技能和学习一体化。",
        "why": "这说明企业 AI 不只是前台聊天，也开始往组织能力里面走。学习系统和技能系统一旦打通，才更像企业级底座。",
        "impact": "对中大型组织来说，这种能力会比单纯内容生成更有价值，因为它能直接连到培训、合规、技能建设和管理动作。",
        "opportunity": "Engma 可以把“学习系统 + 岗位技能 + 管理动作”继续作为企业 AI 的一条长期观察线。",
        "tags": "Workday / Sana / 学习系统 / 技能管理",
        "source": "https://www.workday.com/en-us/products/talent-management/learning.html",
    },
}


REPORTS = [
    {
        "date": "2026-07-11",
        "title": "全球AI洞察｜2026-07-11｜办公入口继续被 AI 占住",
        "summary": "AI 的主战场继续往办公入口、知识整理和长任务稳定性移动，企业采购开始更看默认工作流。",
        "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
        "pdfFileName": "Engma_A_AI_Insight_Daily_07112026_Office_Entry.pdf",
        "sourceFileName": "Engma_A_AI_Insight_Daily_07112026_Office_Entry.md",
        "websiteUrl": "https://techcommunity.microsoft.com/blog/microsoft365copilotblog/available-today-openai%E2%80%99s-gpt-5-6-in-microsoft-365-copilot/4533152",
        "items": ["microsoft", "google", "openai_work", "anthropic_reflect"],
    },
    {
        "date": "2026-07-13",
        "title": "全球AI洞察｜2026-07-13｜AI 开始进入成本和治理语言",
        "summary": "从这一天开始，更值得盯的不是功能热闹，而是企业怎么谈成本、治理和复用。",
        "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
        "pdfFileName": "Engma_A_AI_Insight_Daily_07132026_Cost_Governance.pdf",
        "sourceFileName": "Engma_A_AI_Insight_Daily_07132026_Cost_Governance.md",
        "websiteUrl": "https://openai.com/index/chatgpt-for-your-most-ambitious-work/",
        "items": ["openai_work", "microsoft", "google", "anthropic_opus"],
    },
    {
        "date": "2026-07-14",
        "title": "全球AI洞察｜2026-07-14｜知识工作台比聊天更重要",
        "summary": "AI 正在从单轮问答转向持续整理、持续复盘和持续交接，这类入口更像工作台。",
        "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        "pdfFileName": "Engma_A_AI_Insight_Daily_07142026_Knowledge_Workspace.pdf",
        "sourceFileName": "Engma_A_AI_Insight_Daily_07142026_Knowledge_Workspace.md",
        "websiteUrl": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-study-notebooks/",
        "items": ["google", "workday_learning", "openai_presence", "anthropic_reflect"],
    },
    {
        "date": "2026-07-15",
        "title": "全球AI洞察｜2026-07-15｜长任务稳定性开始分胜负",
        "summary": "模型竞争开始从“答得快”往“做得稳”转，长链路任务的连续性越来越重要。",
        "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
        "pdfFileName": "Engma_A_AI_Insight_Daily_07152026_Long_Task_Stability.pdf",
        "sourceFileName": "Engma_A_AI_Insight_Daily_07152026_Long_Task_Stability.md",
        "websiteUrl": "https://www.anthropic.com/news/claude-opus-5",
        "items": ["anthropic_opus", "openai_work", "microsoft", "google"],
    },
    {
        "date": "2026-07-16",
        "title": "全球AI洞察｜2026-07-16｜语音前台开始接工作流",
        "summary": "AI 的前台正在从“会说话”变成“会接流程”，这对客服、销售和内部支持最直接。",
        "image": "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1600&q=80",
        "pdfFileName": "Engma_A_AI_Insight_Daily_07162026_Voice_Front_Door.pdf",
        "sourceFileName": "Engma_A_AI_Insight_Daily_07162026_Voice_Front_Door.md",
        "websiteUrl": "https://openai.com/index/introducing-openai-presence/",
        "items": ["openai_presence", "anthropic_opus", "microsoft", "workday_learning"],
    },
    {
        "date": "2026-07-17",
        "title": "全球AI洞察｜2026-07-17｜学习系统开始和岗位绑定",
        "summary": "AI 不只是做内容，也在往培训、技能和组织能力里走，学习系统会越来越像企业底座。",
        "image": "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=80",
        "pdfFileName": "Engma_A_AI_Insight_Daily_07172026_Learning_System.pdf",
        "sourceFileName": "Engma_A_AI_Insight_Daily_07172026_Learning_System.md",
        "websiteUrl": "https://www.workday.com/en-us/products/talent-management/learning.html",
        "items": ["workday_learning", "google", "openai_work", "anthropic_reflect"],
    },
    {
        "date": "2026-07-18",
        "title": "全球AI洞察｜2026-07-18｜企业 AI 开始看组织能力，而不是单点功能",
        "summary": "到了这一天，AI 的判断标准更像企业管理问题：能不能进系统、能不能管住、能不能接住流程。",
        "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
        "pdfFileName": "Engma_A_AI_Insight_Daily_07182026_Org_Capability.pdf",
        "sourceFileName": "Engma_A_AI_Insight_Daily_07182026_Org_Capability.md",
        "websiteUrl": "https://openai.com/index/chatgpt-for-your-most-ambitious-work/",
        "items": ["microsoft", "openai_work", "anthropic_opus", "google"],
    },
    {
        "date": "2026-07-21",
        "title": "全球AI洞察｜2026-07-21｜训练和技能系统继续往企业里渗",
        "summary": "企业更看重 AI 能不能把学习、岗位和管理动作连成一条线，而不是只产出内容。",
        "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
        "pdfFileName": "Engma_A_AI_Insight_Daily_07212026_Skills_System.pdf",
        "sourceFileName": "Engma_A_AI_Insight_Daily_07212026_Skills_System.md",
        "websiteUrl": "https://www.workday.com/en-us/products/talent-management/learning.html",
        "items": ["workday_learning", "microsoft", "google", "openai_presence"],
    },
    {
        "date": "2026-07-22",
        "title": "全球AI洞察｜2026-07-22｜可控落地比会说更重要",
        "summary": "企业 AI 的核心问题继续回到三个字：可控、可接、可落地。",
        "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
        "pdfFileName": "Engma_A_AI_Insight_Daily_07222026_Controlled_Deployment.pdf",
        "sourceFileName": "Engma_A_AI_Insight_Daily_07222026_Controlled_Deployment.md",
        "websiteUrl": "https://openai.com/index/introducing-openai-presence/",
        "items": ["openai_presence", "microsoft", "google", "anthropic_opus"],
    },
    {
        "date": "2026-07-23",
        "title": "全球AI洞察｜2026-07-23｜部署与协作开始合并",
        "summary": "AI 工具不再只是单个产品，而是在往协作平台、知识入口和部署层一起走。",
        "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
        "pdfFileName": "Engma_A_AI_Insight_Daily_07232026_Deployment_Collab.pdf",
        "sourceFileName": "Engma_A_AI_Insight_Daily_07232026_Deployment_Collab.md",
        "websiteUrl": "https://blog.google/innovation-and-ai/products/gemini-app/gemini-study-notebooks/",
        "items": ["microsoft", "google", "openai_work", "workday_learning"],
    },
    {
        "date": "2026-07-24",
        "title": "全球AI洞察｜2026-07-24｜长链路执行能力开始分层",
        "summary": "模型能力差距继续在长任务里被放大，谁更稳、谁更少返工，会越来越清楚。",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
        "pdfFileName": "Engma_A_AI_Insight_Daily_07242026_Execution_Stability.pdf",
        "sourceFileName": "Engma_A_AI_Insight_Daily_07242026_Execution_Stability.md",
        "websiteUrl": "https://www.anthropic.com/news/claude-opus-5",
        "items": ["anthropic_opus", "openai_work", "microsoft", "anthropic_reflect"],
    },
    {
        "date": "2026-07-25",
        "title": "全球AI洞察｜2026-07-25｜评估和采购正在变成一件事",
        "summary": "企业开始更看重 AI 是否能持续接入既有系统，并把效果变成稳定流程。",
        "image": "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
        "pdfFileName": "Engma_A_AI_Insight_Daily_07252026_Evaluation_Procurement.pdf",
        "sourceFileName": "Engma_A_AI_Insight_Daily_07252026_Evaluation_Procurement.md",
        "websiteUrl": "https://openai.com/index/chatgpt-for-your-most-ambitious-work/",
        "items": ["microsoft", "openai_work", "google", "anthropic_opus"],
    },
    {
        "date": "2026-07-28",
        "title": "全球AI洞察｜2026-07-28｜本周主线：默认入口、长期稳定、组织能力",
        "summary": "到今天为止，AI 的竞争已经很清楚：默认入口、长任务稳定性、组织能力三条线在一起走。",
        "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
        "pdfFileName": "Engma_A_AI_Insight_Daily_07282026_Weekly_Wrap.pdf",
        "sourceFileName": "Engma_A_AI_Insight_Daily_07282026_Weekly_Wrap.md",
        "websiteUrl": "https://openai.com/index/introducing-openai-presence/",
        "items": ["microsoft", "google", "openai_presence", "anthropic_opus"],
    },
]


def build_content(report: dict) -> str:
    angle = report["summary"]
    mapping = {
        "microsoft": COMMON_ITEMS["microsoft"],
        "google": COMMON_ITEMS["google"],
        "openai_work": COMMON_ITEMS["openai_work"],
        "openai_presence": COMMON_ITEMS["openai_presence"],
        "anthropic_opus": COMMON_ITEMS["anthropic_opus"],
        "anthropic_reflect": COMMON_ITEMS["anthropic_reflect"],
        "workday_learning": COMMON_ITEMS["workday_learning"],
    }
    intro = f"# A：全球AI洞察\n\n日期：{report['date']}\n\n{angle}\n"
    sections = [intro.strip()]
    for idx, key in enumerate(report["items"], 1):
        item = mapping[key]
        sections.append(
            item_block(
                idx,
                item["headline"],
                item["event"],
                item["why"],
                item["impact"],
                item["opportunity"],
                item["tags"],
                item["source"],
            )
        )
    return "\n\n---\n\n".join(sections).strip() + "\n"


def main() -> None:
    data = json.loads(DATA_FILE.read_text(encoding="utf-8"))
    insights = [item for item in data.get("insights", []) if item.get("date") not in {"2026-07-11", "2026-07-13", "2026-07-14", "2026-07-15", "2026-07-16", "2026-07-17", "2026-07-18", "2026-07-21", "2026-07-22", "2026-07-23", "2026-07-24", "2026-07-25", "2026-07-27", "2026-07-28"}]

    for report in REPORTS:
        title = report["title"]
        insights.append(
            {
                "id": f"a-{report['date'].replace('-', '')}-{slug(title)}",
                "targetTab": "最新洞察与出版物",
                "category": "A｜全球AI洞察",
                "title": title,
                "date": report["date"],
                "summary": report["summary"],
                "image": report["image"],
                "pdfFileName": report["pdfFileName"],
                "pdfUrl": f"/reports/pdf/{report['pdfFileName']}",
                "sourceFileName": report["sourceFileName"],
                "websiteUrl": report["websiteUrl"],
                "contentMarkdown": build_content(report),
            }
        )

    insights.sort(key=lambda item: item.get("date", ""), reverse=True)
    data["insights"] = insights
    data["generatedDate"] = "2026-07-28"
    DATA_FILE.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Updated {len(insights)} insight records")


if __name__ == "__main__":
    main()
