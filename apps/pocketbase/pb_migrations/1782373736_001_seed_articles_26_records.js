/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("articles");

  const record0 = new Record(collection);
    record0.id = "6fxv6lw1vjmsvex";
    record0.set("type", "A");
    record0.set("title", "AI Insight Daily\uff5c2026-06-25");
    record0.set("date", "2026-06-25");
    record0.set("category", "A\uff5cAI Insight Daily");
    record0.set("summary", "OpenAI \u4e0e Broadcom \u63a8 Jalape\u00f1o\uff0c\u63a8\u7406\u6210\u672c\u6218\u6b63\u5f0f\u52a0\u901f\uff1bAnthropic \u63a8 Claude Tag\uff0c\u4f01\u4e1a Agent \u5f00\u59cb\u8fdb\u5165 Slack \u5de5\u4f5c\u6d41\uff1bQualcomm \u6536\u8d2d Modular\uff0cAI \u8f6f\u4ef6\u6808\u53d8\u6210\u82af\u7247\u7ade\u4e89\u5173\u952e\uff1bAgility Robotics \u51c6\u5907\u4e0a\u5e02\uff0c\u4eba\u5f62\u673a\u5668\u4eba\u8fdb\u5165\u8d44\u672c\u5e02\u573a\u9a8c\u8bc1");
    record0.set("content", "Full report available in PDF.");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.id = "rb2eeko9tv06iqx";
    record1.set("type", "A");
    record1.set("title", "AI Insight Daily\uff5c2026-06-24");
    record1.set("date", "2026-06-24");
    record1.set("category", "A\uff5cAI Insight Daily");
    record1.set("summary", "Mistral \u53d1\u5e03 OCR 4\uff0c\u6587\u6863\u667a\u80fd\u5f00\u59cb\u53d8\u6210\u4f01\u4e1a Agent \u7684\u57fa\u7840\u8bbe\u65bd\uff1bMoka AI \u63a8\u51fa\u62db\u8058 Agent\uff0cHR \u573a\u666f\u5f00\u59cb\u4ece ATS \u8d70\u5411\"\u81ea\u52a8\u7b5b\u4eba\"\uff1bOmnichat \u63a8\u51fa OmniClaw\uff0c\u96f6\u552e AI \u4ece\u5ba2\u670d\u673a\u5668\u4eba\u8d70\u5411\"\u7ecf\u8425\u7b56\u7565\u52a9\u624b\"\uff1bNVIDIA \u63a8\u7535\u4fe1 24/7 AI Agents\uff0cAgent \u5f00\u59cb\u8fdb\u5165\u9ad8\u98ce\u9669\u57fa\u7840\u8bbe\u65bd\u8fd0\u7ef4");
    record1.set("content", "Full report available in PDF.");
    record1.set("pdfUrl", "Engma_A_AI_Insight_Daily_06242026.pdf");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.id = "vr6kvekiycv5iqv";
    record2.set("type", "A");
    record2.set("title", "AI Insight Daily\uff5c2026-06-23");
    record2.set("date", "2026-06-23");
    record2.set("category", "A\uff5cAI Insight Daily");
    record2.set("summary", "OpenAI \u63a8\u51fa Patch the Planet\uff0cAI \u5b89\u5168\u5f00\u59cb\u4ece\"\u53d1\u73b0\u6f0f\u6d1e\"\u8d70\u5411\"\u4fee\u6f0f\u6d1e\"\uff1bGoogle DeepMind \u6295 A24\uff0cAI \u5f00\u59cb\u6b63\u5f0f\u8fdb\u5165\u5f71\u89c6\u5236\u4f5c\u94fe\uff1bTechCrunch \u5f00\u59cb\u8ffd\u8e2a\"\u660e\u786e\u7531 AI \u9a71\u52a8\u7684\u88c1\u5458\"\uff0cAI \u66ff\u4ee3\u52b3\u52a8\u6b63\u5728\u4ece\u731c\u6d4b\u53d8\u6210\u62ab\u9732\u9879\uff1bAI \u6570\u636e\u4e2d\u5fc3\u6210\u672c\u5f00\u59cb\u4f20\u5bfc\u5230\u6d88\u8d39\u54c1\u4ef7\u683c");
    record2.set("content", "Full report available in PDF.");
    record2.set("pdfUrl", "Engma_A_AI_Insight_Daily_06232026.pdf");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.id = "5pm3f6h9elvuyvk";
    record3.set("type", "A");
    record3.set("title", "AI Insight Daily\uff5c2026-06-22");
    record3.set("date", "2026-06-22");
    record3.set("category", "A\uff5cAI Insight Daily");
    record3.set("summary", "AI \u4ea7\u54c1\u5f00\u59cb\u4ece\"\u5e2e\u4f60\u505a\"\u8d70\u5411\"\u76f4\u63a5\u66ff\u4f60\u505a\u5b8c\"\uff1b\"\u66f4\u5c11\u77e5\u9053\u4fe1\u606f\u7684 AI\" \u53cd\u800c\u5f00\u59cb\u88ab\u8ba4\u4e3a\u66f4\u9760\u8c31\uff1bAI \u4ea7\u54c1\u6b63\u5728\u8d8a\u6765\u8d8a\u50cf\"\u6570\u5b57\u5458\u5de5\"\uff0c\u800c\u4e0d\u662f\u8f6f\u4ef6\uff1bAI \u5de5\u5177\u5f00\u59cb\u4ece\"\u5355\u70b9\u529f\u80fd\"\u8f6c\u5411\"\u6574\u6761\u5de5\u4f5c\u6d41\u5165\u53e3\"");
    record3.set("content", "Full report available in PDF.");
    record3.set("pdfUrl", "Engma_A_AI_Insight_Daily_06222026.pdf");
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.id = "zmk45n5y0l21vvc";
    record4.set("type", "A");
    record4.set("title", "AI Insight Daily\uff5c2026-06-18");
    record4.set("date", "2026-06-18");
    record4.set("category", "A\uff5cAI Insight Daily");
    record4.set("summary", "Anthropic \u5728\u97e9\u56fd\u5f00\u9996\u4e2a\u4e9a\u6d32\u529e\u516c\u5ba4\uff0c\u5f00\u59cb\u505a\u533a\u57df\u5316\u751f\u6001\u5e03\u5c40\uff1bProbably \u4e0d\u505a\u66f4\u5f3a\u6a21\u578b\uff0c\u800c\u662f\u505a\"\u66f4\u4e0d\u5bb9\u6613\u80e1\u8bf4\u516b\u9053\"\u7684 AI\uff1b\u5fae\u8f6f\u628a Copilot Cowork \u6b63\u5f0f\u63a8\u5411\u5e02\u573a\uff0c\u8bf4\u660e\"\u591a\u4eba\u534f\u4f5c\u578b AI\"\u5f00\u59cb\u6210\u5f62\uff1bAnthropic \u52a0\u5165 Frontier\uff0c\u8bf4\u660e AI \u516c\u53f8\u5f00\u59cb\u9762\u5bf9\"\u80fd\u6e90\u548c\u78b3\u8db3\u8ff9\"\u95ee\u9898");
    record4.set("content", "Full report available in PDF.");
    record4.set("pdfUrl", "Engma_A_AI_Insight_Daily_06182026.pdf");
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.id = "bhhqp0b9g9hgd39";
    record5.set("type", "A");
    record5.set("title", "AI Insight Daily\uff5c2026-06-17");
    record5.set("date", "2026-06-17");
    record5.set("category", "A\uff5cAI Insight Daily");
    record5.set("summary", "Prometheus \u878d\u8d44 120 \u4ebf\u7f8e\u5143\uff0c\u5de5\u4e1a AI \u5f00\u59cb\u8131\u79bb\u804a\u5929\u6846\u53d9\u4e8b\uff1bGenesis AI \u4e0d\u505a\u4eba\u5f62\uff0c\u8f6c\u5411\u66f4\u5b9e\u7528\u7684\u901a\u7528\u673a\u5668\u4eba\u5f62\u6001\uff1bCoram AI \u628a\u4f20\u7edf\u76d1\u63a7\u7cfb\u7edf\u53d8\u6210\"AI \u5b89\u4fdd\u4fa6\u63a2\"\uff1bCursor \u88ab SpaceX \u4ee5 600 \u4ebf\u7f8e\u5143\u62ff\u4e0b\uff0cAI \u7f16\u7a0b\u5de5\u5177\u5f00\u59cb\u8fdb\u5165\u5e76\u8d2d\u65f6\u4ee3");
    record5.set("content", "Full report available in PDF.");
    record5.set("pdfUrl", "Engma_A_AI_Insight_Daily_06172026.pdf");
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.id = "xn2tblcbczar2w8";
    record6.set("type", "A");
    record6.set("title", "AI Insight Daily\uff5c2026-06-16");
    record6.set("date", "2026-06-16");
    record6.set("category", "A\uff5cAI Insight Daily");
    record6.set("summary", "OpenAI \u5f00\u59cb\u7cfb\u7edf\u5316\u505a\u4f01\u4e1a\u843d\u5730\u6e20\u9053\uff1bAnthropic \u9876\u7ea7\u6a21\u578b\u8bbf\u95ee\u9650\u5236\uff0c\u8bf4\u660e\u6700\u5f3a\u6a21\u578b\u6b63\u5728\u53d8\u6210\u6218\u7565\u8d44\u6e90\uff1b\u516c\u4f17\u771f\u6b63\u62c5\u5fc3\u7684\u4e0d\u662f AI \u5931\u63a7\uff0c\u800c\u662f\u5931\u4e1a\u3001\u4f9d\u8d56\u548c\u8d23\u4efb\u5f52\u5c5e\uff1bClaude \u5f00\u59cb\u6b63\u5f0f\u8fdb\u5165\u5f3a\u5408\u89c4\u884c\u4e1a\u4ea4\u4ed8");
    record6.set("content", "Full report available in PDF.");
    record6.set("pdfUrl", "Engma_A_AI_Insight_Daily_06162026.pdf");
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.id = "kmlnqh778ruvww6";
    record7.set("type", "A");
    record7.set("title", "AI Insight Daily\uff5c2026-06-15");
    record7.set("date", "2026-06-15");
    record7.set("category", "A\uff5cAI Insight Daily");
    record7.set("summary", "KPMG \u4e0e Microsoft \u5f00\u59cb\u628a Agent \u63a8\u5411\u53ef\u6cbb\u7406\u7684\u5927\u4f01\u4e1a\u4f53\u7cfb\uff1bGoogle \u6b63\u5728\u628a Gemini \u63a5\u5165 Apple \u5f00\u53d1\u8005\u5de5\u4f5c\u6d41\uff1bClaude \u6b63\u5728\u8fdb\u5165\u94f6\u884c\u3001\u822a\u7a7a\u3001\u4fdd\u9669\u7b49\u53d7\u76d1\u7ba1\u884c\u4e1a\u7cfb\u7edf\uff1bAI \u516c\u53f8\u5f00\u59cb\u88ab\u63a8\u5411\u516c\u5f00\u5e02\u573a\u63a5\u53d7\u5546\u4e1a\u5316\u68c0\u9a8c");
    record7.set("content", "Full report available in PDF.");
    record7.set("pdfUrl", "Engma_A_AI_Insight_Daily_06152026.pdf");
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.id = "ua7k3o3rfuk72di";
    record8.set("type", "A");
    record8.set("title", "AI Insight Daily\uff5c2026-06-12");
    record8.set("date", "2026-06-12");
    record8.set("category", "A\uff5cAI Insight Daily");
    record8.set("summary", "OpenAI \u4e0e Anthropic \u53ef\u80fd\u8fdb\u5165\u4ef7\u683c\u6218\uff1bMicrosoft \u628a Agent \u63a8\u5411\u4f01\u4e1a\u8f6f\u4ef6\u6838\u5fc3\u5c42\uff1bAnthropic \u63a8\u51fa Claude Corps\uff0c\u5f00\u59cb\u505a\u5927\u89c4\u6a21\u7ec4\u7ec7\u843d\u5730\uff1bNeura Robotics \u83b7\u5927\u989d\u878d\u8d44\uff0cPhysical AI \u7ee7\u7eed\u5347\u6e29");
    record8.set("content", "Full report available in PDF.");
    record8.set("pdfUrl", "Engma_A_AI_Insight_Daily_06122026.pdf");
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.id = "izutu0mrymamva8";
    record9.set("type", "A");
    record9.set("title", "AI Insight Daily\uff5c2026-06-11");
    record9.set("date", "2026-06-11");
    record9.set("category", "A\uff5cAI Insight Daily");
    record9.set("summary", "Apple WWDC AI \u8868\u73b0\u504f\u5f31\uff0cSiri \u4ecd\u7136\u6ca1\u6253\u51fa\u771f\u6b63\u7684\u65b0\u4e1c\u897f\uff1bApple \u667a\u80fd\u773c\u955c\u4f20\u95fb\u5347\u6e29\uff0c\u4e0b\u4e00\u4ee3\u786c\u4ef6\u5165\u53e3\u53ef\u80fd\u4ece\u624b\u8155\u8d70\u5411\u773c\u775b\uff1b23andMe \u8fde\u63a5\u533b\u7597\u6570\u636e\uff0c\u4e2a\u4eba\u5065\u5eb7 AI \u5f00\u59cb\u4ece\u57fa\u56e0\u68c0\u6d4b\u8d70\u5411\u9884\u6d4b\u533b\u5b66\uff1b\u98de\u4e66\u548c\u9489\u9489\u51fa\u6d77\u5dee\u5f02\uff0c\u672c\u8d28\u662f\"\u751f\u4ea7\u529b\u5de5\u5177\"\u548c\"\u7ba1\u7406\u5de5\u5177\"\u7684\u5dee\u5f02");
    record9.set("content", "Full report available in PDF.");
    record9.set("pdfUrl", "Engma_A_AI_Insight_Daily_06112026.pdf");
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record10 = new Record(collection);
    record10.id = "3q53a7nfzplmenx";
    record10.set("type", "A");
    record10.set("title", "AI Insight Daily\uff5c2026-06-09");
    record10.set("date", "2026-06-09");
    record10.set("category", "A\uff5cAI Insight Daily");
    record10.set("summary", "Microsoft Build 2026 \u5f3a\u8c03 Agents Everywhere\uff0c\u4f01\u4e1a\u8f6f\u4ef6\u5f00\u59cb\u6362\u5165\u53e3\uff1bGoogle \u5411 SpaceX \u79df\u7b97\u529b\uff0cAI \u7ade\u4e89\u8fdb\u5165\u57fa\u7840\u8bbe\u65bd\u6218\u4e89\uff1bOpenAI\u3001Anthropic\u3001xAI \u51c6\u5907 IPO\uff0cAI \u5de8\u5934\u8d22\u52a1\u8981\u63a5\u53d7\u516c\u5f00\u5e02\u573a\u68c0\u9a8c\uff1bTrump \u66f4\u65b0 1260H List\uff0c\u4e2d\u7f8e AI \u7ade\u4e89\u7ee7\u7eed\u4ece\u6a21\u578b\u5ef6\u4f38\u5230\u82af\u7247");
    record10.set("content", "Full report available in PDF.");
    record10.set("pdfUrl", "Engma_A_AI_Insight_Daily_06092026.pdf");
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    record11.id = "sa1328x2q96dwpu";
    record11.set("type", "A");
    record11.set("title", "AI Insight Daily\uff5c2026-06-08");
    record11.set("date", "2026-06-08");
    record11.set("category", "A\uff5cAI Insight Daily");
    record11.set("summary", "Sam Altman \u6295 Alfred\uff0c\u673a\u5668\u4eba\u8f6f\u4ef6\u5e73\u53f0\u5f00\u59cb\u53d8\u6210\u65b0\u673a\u4f1a\uff1bNVIDIA \u53d1\u5e03\u4eba\u5f62\u673a\u5668\u4eba\u53c2\u8003\u8bbe\u8ba1\uff0c\u673a\u5668\u4eba\u5f00\u53d1\u8fdb\u5165\"\u5e95\u5c42\u5e73\u53f0\u5316\"\uff1bUnitree IPO \u8fc7\u4f1a\uff0c\u56fd\u5185\u5177\u8eab\u667a\u80fd\u8fdb\u5165\u8d44\u672c\u5e02\u573a\uff1b\u673a\u5668\u4eba\u8bad\u7ec3\u6570\u636e\u5f00\u59cb\u8fdb\u5165\u771f\u5b9e\u5bb6\u5ead\u573a\u666f");
    record11.set("content", "Full report available in PDF.");
    record11.set("pdfUrl", "Engma_A_AI_Insight_Daily_06082026.pdf");
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record12 = new Record(collection);
    record12.id = "d3hlhy24dxg13jl";
    record12.set("type", "C");
    record12.set("toolName", "Readywhen");
    record12.set("title", "Readywhen\uff5cAI Tool Benchmark Report");
    record12.set("date", "2026-06-24");
    record12.set("category", "C\uff5cAI Tool Benchmark Report");
    record12.set("summary", "\u5b83\u50cf\u4e00\u4e2a\u5f88\u8f7b\u7684 AI Chief of Staff\u3002\u91cd\u70b9\u4e0d\u662f\u5199\u5185\u5bb9\uff0c\u800c\u662f\u63d0\u9192\u4f60\u8c01\u8fd8\u6ca1\u56de\u3001\u4f60\u7b54\u5e94\u4e86\u4ec0\u4e48\u3001\u4e0b\u4e00\u6b65\u8be5\u505a\u4ec0\u4e48\u3002");
    record12.set("websiteUrl", "https://www.producthunt.com/posts/readywhen-2");
    record12.set("score", 4.0);
    record12.set("content", "Full benchmark report available in PDF.");
    record12.set("pdfUrl", "Engma_C_AI_Tool_Benchmark_Readywhen_06242026.pdf");
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record13 = new Record(collection);
    record13.id = "kygkt860ezei5cj";
    record13.set("type", "C");
    record13.set("toolName", "Wispr Flow");
    record13.set("title", "Wispr Flow\uff5cAI Tool Benchmark Report");
    record13.set("date", "2026-06-23");
    record13.set("category", "C\uff5cAI Tool Benchmark Report");
    record13.set("summary", "\u5b83\u5c31\u662f\u4e00\u4e2a\u5f88\u8f7b\u7684\u8bed\u97f3\u8f6c\u6587\u5b57\u5de5\u5177\u3002\u652f\u6301\u7535\u8111\u548c\u624b\u673a\uff0c\u6709\u514d\u8d39\u7248\uff0cPro \u7248\u5927\u6982 12-15 \u7f8e\u5143/\u6708\u3002\u6211\u7684\u5224\u65ad\uff1a\u9002\u5408\u4e0d\u60f3\u6253\u5b57\u3001\u4f46\u6bcf\u5929\u8981\u5199\u90ae\u4ef6\u3001\u65e5\u62a5\u3001\u7fa4\u6d88\u606f\u7684\u4eba\u3002");
    record13.set("websiteUrl", "https://wisprflow.ai/");
    record13.set("score", 4.0);
    record13.set("content", "Full benchmark report available in PDF.");
    record13.set("pdfUrl", "Engma_C_AI_Tool_Benchmark_Wispr_Flow_06232026.pdf");
  try {
    app.save(record13);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record14 = new Record(collection);
    record14.id = "utay4mxt0hfo2u9";
    record14.set("type", "C");
    record14.set("toolName", "Read AI");
    record14.set("title", "Read AI\uff5cAI Tool Benchmark Report");
    record14.set("date", "2026-06-23");
    record14.set("category", "C\uff5cAI Tool Benchmark Report");
    record14.set("summary", "\u5b83\u4e0d\u662f\u5355\u7eaf\u8f6c\u6587\u5b57 - \u66f4\u50cf\u4e00\u4e2a\u4f1a\u8bae\u91cc\u7684 AI \u52a9\u7406 - \u4f1a\u540e\u80fd\u7ed9\u603b\u7ed3\u3001\u884c\u52a8\u9879\u3001\u91cd\u70b9\u5185\u5bb9\u3002\u7ed3\u8bba\uff1a\u8fd9\u4e2a\u5de5\u5177\u503c\u5f97\u770b\u3002\u56e0\u4e3a\u5b83\u4e0d\u662f\u5e2e\u4f60\u8bb0\u7b14\u8bb0\uff0c\u800c\u662f\u5728\u5e2e\u4f60\u63a5\u4f1a\u8bae\u6742\u6d3b\u3002");
    record14.set("websiteUrl", "https://www.read.ai/");
    record14.set("score", 4.0);
    record14.set("content", "Full benchmark report available in PDF.");
    record14.set("pdfUrl", "Engma_C_AI_Tool_Benchmark_Read_AI_06232026.pdf");
  try {
    app.save(record14);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record15 = new Record(collection);
    record15.id = "ygylojcokvm9l6m";
    record15.set("type", "C");
    record15.set("toolName", "Fyxer");
    record15.set("title", "Fyxer\uff5cAI Tool Benchmark Report");
    record15.set("date", "2026-06-22");
    record15.set("category", "C\uff5cAI Tool Benchmark Report");
    record15.set("summary", "\u8fd9\u4e2a\u5de5\u5177\u8bb2\u5f97\u5f88\u76f4\u63a5\uff0c\u5c31\u662f\u90ae\u7bb1\u91cc\u7684 AI \u52a9\u7406 - \u5b83\u4e3b\u8981\u505a\u4e09\u4ef6\u4e8b\uff1a\u5206\u90ae\u4ef6\u3001\u5199\u56de\u590d\u3001\u8bb0\u4f1a\u8bae\u7eaa\u8981 - Gmail \u548c Outlook \u90fd\u80fd\u7528\u3002\u7ed3\u8bba\uff1a\u8fd9\u4e2a\u5de5\u5177\u53ef\u4ee5\u770b\u3002\u5b83\u4e0d\u662f\u90a3\u79cd\u770b\u8d77\u6765\u5f88\u5389\u5bb3\u4f46\u843d\u4e0d\u5230\u5730\u4e0a\u7684\u5de5\u5177\uff0c\u505a\u7684\u5c31\u662f\u6700\u70e6\u7684\u90a3\u4e9b\u6742\u6d3b\u3002");
    record15.set("websiteUrl", "https://www.fyxer.com/");
    record15.set("score", 4.0);
    record15.set("content", "Full benchmark report available in PDF.");
    record15.set("pdfUrl", "Engma_C_AI_Tool_Benchmark_Fyxer_06222026.pdf");
  try {
    app.save(record15);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record16 = new Record(collection);
    record16.id = "8kty3gsoxp22qc5";
    record16.set("type", "C");
    record16.set("toolName", "Facebook AI Tools");
    record16.set("title", "Facebook AI Tools\uff5cAI Tool Benchmark Report");
    record16.set("date", "2026-06-18");
    record16.set("category", "C\uff5cAI Tool Benchmark Report");
    record16.set("summary", "Meta \u5df2\u7ecf\u628a\u65b0\u7684 AI \u5de5\u5177\u76f4\u63a5\u63a5\u8fdb Facebook \u91cc - \u6838\u5fc3\u4e0d\u662f\u505a\u804a\u5929\uff0c\u800c\u662f\u5e2e\u7528\u6237\u627e\u5185\u5bb9\u3001\u505a\u4e8b\u3001\u5b8c\u6210\u52a8\u4f5c - \u8fd9\u8bf4\u660e AI \u6b63\u5728\u76f4\u63a5\u957f\u8fdb\u5e73\u53f0\u6d41\u91cf\u5165\u53e3\u3002\u7ed3\u8bba\uff1a\u8fd9\u4e2a\u65b9\u5411\u503c\u5f97\u770b\u3002\u56e0\u4e3a\u5b83\u4e0d\u662f\u72ec\u7acb AI \u5de5\u5177\uff0c\u800c\u662f\u5e73\u53f0\u628a AI \u53d8\u6210\u4e86\u7528\u6237\u884c\u4e3a\u5f15\u5bfc\u5c42\u3002");
    record16.set("websiteUrl", "https://about.fb.com/news/2026/06/new-ai-tools-to-help-you-make-things-happen-on-facebook/");
    record16.set("score", 4.0);
    record16.set("content", "Full benchmark report available in PDF.");
    record16.set("pdfUrl", "Engma_C_AI_Tool_Benchmark_Facebook_AI_Tools_06182026.pdf");
  try {
    app.save(record16);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record17 = new Record(collection);
    record17.id = "14fmqcv9v3kiaer";
    record17.set("type", "C");
    record17.set("toolName", "Bond");
    record17.set("title", "Bond\uff5cAI Tool Benchmark Report");
    record17.set("date", "2026-06-18");
    record17.set("category", "C\uff5cAI Tool Benchmark Report");
    record17.set("summary", "\u5b83\u7684\u5b9a\u4f4d\u5f88\u76f4\u63a5\uff1aThe AI to-do list that does itself - \u80fd\u628a\u90ae\u4ef6\u3001\u804a\u5929\u3001\u4f1a\u8bae\u91cc\u7684\u4efb\u52a1\u6536\u8fdb\u6765 - \u4e0d\u53ea\u662f\u5217\u5f85\u529e\uff0c\u800c\u662f\u4f1a\u5e2e\u4f60\u6392\u4f18\u5148\u7ea7\u3001\u51c6\u5907\u4f1a\u8bae\u3001\u5199\u8ddf\u8fdb\u3001\u627e blocker\u3002\u7ed3\u8bba\uff1a\u8fd9\u4e2a\u5de5\u5177\u503c\u5f97\u6d4b\u3002\u56e0\u4e3a\u5b83\u4e0d\u662f\u666e\u901a\u5f85\u529e\u5de5\u5177\uff0c\u800c\u662f\u5728\u5f80\"AI Chief of Staff\"\u8d70\u3002");
    record17.set("websiteUrl", "https://www.producthunt.com/products/bond-12");
    record17.set("score", 4.5);
    record17.set("content", "Full benchmark report available in PDF.");
    record17.set("pdfUrl", "Engma_C_AI_Tool_Benchmark_Bond_06182026.pdf");
  try {
    app.save(record17);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record18 = new Record(collection);
    record18.id = "z1h63vm8rgfmf3u";
    record18.set("type", "C");
    record18.set("toolName", "Claude Code Security");
    record18.set("title", "Claude Code Security\uff5cAI Tool Benchmark Report");
    record18.set("date", "2026-06-17");
    record18.set("category", "C\uff5cAI Tool Benchmark Report");
    record18.set("summary", "Anthropic \u628a\u5b83\u5b9a\u4f4d\u6210\u7ed9 defenders \u7528\u7684\u5de5\u5177 - \u5b83\u80fd\u626b\u4ee3\u7801\u5e93\u3001\u627e\u6f0f\u6d1e\u3001\u7ed9\u4fee\u590d\u5efa\u8bae - \u76ee\u524d\u662f Enterprise \u548c Team \u7684 limited research preview\u3002\u7ed3\u8bba\uff1a\u8fd9\u4e2a\u5de5\u5177\u503c\u5f97\u770b\u3002\u56e0\u4e3a\u5b83\u4e0d\u662f\u666e\u901a coding assistant\uff0c\u800c\u662f\u5f00\u59cb\u76f4\u63a5\u8fdb\u5b89\u5168\u5de5\u4f5c\u6d41\u3002");
    record18.set("websiteUrl", "https://www.anthropic.com/news/claude-code-security");
    record18.set("score", 4.0);
    record18.set("content", "Full benchmark report available in PDF.");
    record18.set("pdfUrl", "Engma_C_AI_Tool_Benchmark_Claude_Code_Security_06172026.pdf");
  try {
    app.save(record18);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record19 = new Record(collection);
    record19.id = "u4v0v2i83kuy1pl";
    record19.set("type", "C");
    record19.set("toolName", "OpenAI Codex");
    record19.set("title", "OpenAI Codex\uff5cAI Tool Benchmark Report");
    record19.set("date", "2026-06-16");
    record19.set("category", "C\uff5cAI Tool Benchmark Report");
    record19.set("summary", "OpenAI \u6700\u8fd1\u7ed9 Codex \u52a0\u4e86 role-specific plugins\u3001Sites\u3001annotations - GPT-5.4 \u4e5f\u5df2\u7ecf\u63a5\u8fdb Codex\uff0c\u957f\u4e0a\u4e0b\u6587\u548c computer use \u90fd\u5728\u5f80\u524d\u63a8 - \u8fd9\u8bf4\u660e Codex \u4e0d\u662f\u5355\u7eaf\u5199\u4ee3\u7801\u5de5\u5177\uff0c\u800c\u662f\u5728\u5f80\"\u56e2\u961f\u534f\u4f5c\u578b Agent\"\u8d70\u3002\u7ed3\u8bba\uff1a\u8fd9\u4e2a\u5de5\u5177\u503c\u5f97\u770b\u3002");
    record19.set("websiteUrl", "https://openai.com/index/codex-for-every-role-tool-workflow/");
    record19.set("score", 4.5);
    record19.set("content", "Full benchmark report available in PDF.");
    record19.set("pdfUrl", "Engma_C_AI_Tool_Benchmark_OpenAI_Codex_06162026.pdf");
  try {
    app.save(record19);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record20 = new Record(collection);
    record20.id = "caj38m3lsr6gb41";
    record20.set("type", "C");
    record20.set("toolName", "Meta Business Agent");
    record20.set("title", "Meta Business Agent\uff5cAI Tool Benchmark Report");
    record20.set("date", "2026-06-16");
    record20.set("category", "C\uff5cAI Tool Benchmark Report");
    record20.set("summary", "\u5df2\u7ecf\u8fdb\u4e86 WhatsApp\u3001Messenger\u3001Instagram - \u80fd\u7b54\u95ee\u9898\u3001\u63a8\u5546\u54c1\u3001\u7ea6\u65f6\u95f4\u3001\u7b5b\u7ebf\u7d22\u3002\u7ed3\u8bba\uff1a\u8fd9\u4e2a\u5de5\u5177\u503c\u5f97\u770b\u3002\u5b83\u4e0d\u662f\u666e\u901a\u804a\u5929\u673a\u5668\u4eba\uff0c\u800c\u662f\u76f4\u63a5\u957f\u5728\u6d41\u91cf\u5165\u53e3\u4e0a\u3002");
    record20.set("websiteUrl", "https://about.fb.com/news/2026/06/meta-business-agent/");
    record20.set("score", 4.5);
    record20.set("content", "Full benchmark report available in PDF.");
    record20.set("pdfUrl", "Engma_C_AI_Tool_Benchmark_Meta_Business_Agent_06162026.pdf");
  try {
    app.save(record20);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record21 = new Record(collection);
    record21.id = "vb0ck69n24bud8x";
    record21.set("type", "C");
    record21.set("toolName", "Google AI Studio");
    record21.set("title", "Google AI Studio\uff5cAI Tool Benchmark Report");
    record21.set("date", "2026-06-15");
    record21.set("category", "C\uff5cAI Tool Benchmark Report");
    record21.set("summary", "Google \u628a\u5b83\u5b9a\u4f4d\u6210\u4ece prompt \u5230\u539f\u578b\u6700\u5feb\u7684\u5165\u53e3 - \u73b0\u5728\u5df2\u7ecf\u4e0d\u53ea\u662f playground \u4e86\uff0c\u80fd\u63a5 Gemini API \u548c Google \u5de5\u5177\u94fe\u3002\u7ed3\u8bba\uff1a\u503c\u5f97\u6d4b\u3002\u9002\u5408\u5feb\u901f\u9a8c\u8bc1\uff0c\u9002\u5408\u505a demo\u3002\u4f46\u5b83\u4e0d\u662f\u957f\u671f\u4f01\u4e1a\u5de5\u4f5c\u53f0\u3002");
    record21.set("websiteUrl", "https://ai.google.dev/aistudio");
    record21.set("score", 4.0);
    record21.set("content", "Full benchmark report available in PDF.");
    record21.set("pdfUrl", "Engma_C_AI_Tool_Benchmark_Google_AI_Studio_06152026.pdf");
  try {
    app.save(record21);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record22 = new Record(collection);
    record22.id = "e5dhy3vgai5y7pb";
    record22.set("type", "C");
    record22.set("toolName", "Asana Dash / Asana Agentic Work Management");
    record22.set("title", "Asana Dash / Asana Agentic Work Management\uff5cAI Tool Benchmark Report");
    record22.set("date", "2026-06-12");
    record22.set("category", "C\uff5cAI Tool Benchmark Report");
    record22.set("summary", "\u5b98\u65b9\u5b9a\u4f4d\u662f AI Chief of Staff\uff0c\u4e5f\u5c31\u662f AI \u7248\"\u5de5\u4f5c\u53c2\u8c0b\" - \u5b83\u80fd\u4ece\u4f1a\u8bae\u3001\u90ae\u4ef6\u3001\u4efb\u52a1\u91cc\u63d0\u70bc\u4f18\u5148\u7ea7\u548c next action - \u5b98\u65b9\u4ea7\u54c1\u91cc\u5305\u542b AI Teammates\u3001AI Studio\u3001Asana Dash\u3001MCP \u548c AI Connectors\u3002");
    record22.set("websiteUrl", "https://asana.com/product/ai");
    record22.set("score", 4.0);
    record22.set("content", "Full benchmark report available in PDF.");
    record22.set("pdfUrl", "Engma_C_AI_Tool_Benchmark_Asana_Dash_06122026.pdf");
  try {
    app.save(record22);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record23 = new Record(collection);
    record23.id = "iuq5vcypcb1nj0p";
    record23.set("type", "C");
    record23.set("toolName", "Tavus");
    record23.set("title", "Tavus\uff5cAI Tool Benchmark Report");
    record23.set("date", "2026-06-11");
    record23.set("category", "C\uff5cAI Tool Benchmark Report");
    record23.set("summary", "Tavus \u7684\u65b9\u5411\u662f AI \u89c6\u9891\u5206\u8eab\u3002\u4f60\u4e0a\u4f20\u7167\u7247\u3001\u8d44\u6599\u548c\u8fc7\u5f80\u8868\u8fbe\u98ce\u683c\uff0c\u5b83\u53ef\u4ee5\u751f\u6210\u4e00\u4e2a\u66f4\u50cf\u4f60\u7684\u6570\u5b57\u4eba\uff0c\u7528\u6765\u505a\u89c6\u9891\u4e92\u52a8\u3002\u6211\u7684\u5224\u65ad\uff1a\u8fd9\u4e2a\u5de5\u5177\u5f88\u6709\u610f\u601d\uff0c\u9002\u5408\u9500\u552e\u3001\u5ba2\u6237\u6210\u529f\u3001\u57f9\u8bad\u3001\u521b\u59cb\u4eba\u5206\u8eab\u8fd9\u7c7b\u573a\u666f\u3002");
    record23.set("websiteUrl", "https://www.tavus.io/");
    record23.set("score", 4.0);
    record23.set("content", "Full benchmark report available in PDF.");
    record23.set("pdfUrl", "Engma_C_AI_Tool_Benchmark_Tavus_06112026.pdf");
  try {
    app.save(record23);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record24 = new Record(collection);
    record24.id = "xqt89hwa4jnb6r7";
    record24.set("type", "C");
    record24.set("toolName", "Microsoft Agents");
    record24.set("title", "Microsoft Agents\uff5cAI Tool Benchmark Report");
    record24.set("date", "2026-06-09");
    record24.set("category", "C\uff5cAI Tool Benchmark Report");
    record24.set("summary", "\u5b83\u7684\u65b9\u5411\u4e0d\u662f\u5355\u72ec\u804a\u5929\uff0c\u800c\u662f\u8ba9 Agent \u8c03\u7528 Office\u3001\u90ae\u4ef6\u3001\u6587\u4ef6\u3001\u6570\u636e\u5e93\u548c\u4e1a\u52a1\u7cfb\u7edf\u3002\u6211\u7684\u5224\u65ad\uff1a\u9002\u5408\u5927\u4f01\u4e1a\uff0c\u4f46\u6210\u672c\u548c\u751f\u6001\u7ed1\u5b9a\u4f1a\u6bd4\u8f83\u5f3a\u3002");
    record24.set("websiteUrl", "https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work/");
    record24.set("score", 4.0);
    record24.set("content", "Full benchmark report available in PDF.");
    record24.set("pdfUrl", "Engma_C_AI_Tool_Benchmark_Microsoft_Agents_06092026.pdf");
  try {
    app.save(record24);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record25 = new Record(collection);
    record25.id = "34m78t2clmrkce4";
    record25.set("type", "C");
    record25.set("toolName", "Hera");
    record25.set("title", "Hera\uff5cAI Tool Benchmark Report");
    record25.set("date", "2026-06-08");
    record25.set("category", "C\uff5cAI Tool Benchmark Report");
    record25.set("summary", "Hera \u662f YC \u6295\u7684 AI motion design \u5de5\u5177\uff0c\u6838\u5fc3\u662f\u628a\u539f\u6765\u5f88\u8d39\u65f6\u95f4\u7684\u52a8\u753b\u8bbe\u8ba1\uff0c\u53d8\u6210\u66f4\u5feb\u7684\u751f\u6210\u548c\u7f16\u8f91\u6d41\u7a0b\u3002\u6211\u7684\u5224\u65ad\uff1a\u5b83\u9002\u5408\u505a\u4ecb\u7ecd\u89c6\u9891\u3001\u8bfe\u7a0b\u77ed\u7247\u3001\u6d3b\u52a8\u5ba3\u4f20\u3001PPT \u52a8\u753b\u7d20\u6750\u3002");
    record25.set("websiteUrl", "https://www.ycombinator.com/companies/hera-video");
    record25.set("score", 4.0);
    record25.set("content", "Full benchmark report available in PDF.");
    record25.set("pdfUrl", "Engma_C_AI_Tool_Benchmark_Hera_06082026.pdf");
  try {
    app.save(record25);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["34m78t2clmrkce4", "xqt89hwa4jnb6r7", "iuq5vcypcb1nj0p", "e5dhy3vgai5y7pb", "vb0ck69n24bud8x", "caj38m3lsr6gb41", "u4v0v2i83kuy1pl", "z1h63vm8rgfmf3u", "14fmqcv9v3kiaer", "8kty3gsoxp22qc5", "ygylojcokvm9l6m", "utay4mxt0hfo2u9", "kygkt860ezei5cj", "d3hlhy24dxg13jl", "sa1328x2q96dwpu", "3q53a7nfzplmenx", "izutu0mrymamva8", "ua7k3o3rfuk72di", "kmlnqh778ruvww6", "xn2tblcbczar2w8", "bhhqp0b9g9hgd39", "zmk45n5y0l21vvc", "5pm3f6h9elvuyvk", "vr6kvekiycv5iqv", "rb2eeko9tv06iqx", "6fxv6lw1vjmsvex"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("articles", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})