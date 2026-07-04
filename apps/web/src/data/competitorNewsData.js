const images = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop"
];

const getImg = (i) => images[i % images.length];

export const competitorNewsData = [
  {
    id: 'comp-20260624-beisen-mavens',
    title: 'Beisen Transforms into an AI Application Company and Launches Mavens',
    summary: 'Beisen introduced Mavens, an AI HR expert platform built on SenGPT, SenClaw and its People Science capabilities.',
    fullContent: 'Beisen announced that it is moving beyond the traditional HR software category to become an AI application company. Its new Mavens platform is positioned as a team of digital HR experts that can work alongside human HR professionals, rather than as a lightweight AI add-on. Mavens combines Beisen\'s SenGPT vertical model, SenClaw agent framework and People Science expertise. The company says its AI product contracts exceeded RMB 87 million in 2025, growing tenfold, with more than 1,400 AI customers.',
    date: '2026-06-24',
    category: ['Product Launch', 'Platform Strategy'],
    tags: ['HR Technology', 'Enterprise AI'],
    keywords: ['Mavens', 'AI HR', 'Digital Employee'],
    impactLevel: 'High',
    companies: [{ en: 'Beisen', zh: '北森', type: 'hrtech' }],
    imageUrl: getImg(0),
    websiteUrl: 'https://www.beisen.com/news/670.html',
    zh: {
      title: '北森全面转型 AI 应用公司并发布 Mavens',
      summary: '北森发布基于 SenGPT、SenClaw 与 People Science 的一站式 AI HR 专家平台 Mavens。',
      fullContent: '北森宣布从传统 HR 软件厂商全面升级为 HR 领域的 AI 应用公司，并推出一站式 AI HR 专家平台 Mavens。该平台并非附着在旧系统上的轻量 AI 插件，而是由数字 HR 专家与真人 HR 协作完成任务。Mavens 融合北森自研 SenGPT 垂直模型、SenClaw Agent 体系与 People Science 能力。北森披露，2025 年 AI 产品合同额突破 8700 万元，同比增长 10 倍，AI 客户超过 1400 家。',
      category: ['产品发布', '平台战略'],
      tags: ['人力资源科技', '企业 AI'],
      keywords: ['Mavens', 'AI HR', '数字员工'],
      impactLevel: 'High'
    }
  },
  {
    id: 'comp-20260514-moka-ai-eva',
    title: 'Moka Upgrades Its HR SaaS Business into Moka AI',
    summary: 'Moka launched Recruiting Eva, HR Eva, BP Eva and Moka AI Studio as an AI-native HR product portfolio.',
    fullContent: 'At Moka Ascend 2026, Moka announced its largest product strategy upgrade since the company was founded. The company upgraded its HR SaaS brand to Moka AI and introduced three AI coworkers: Recruiting Eva, HR Eva and BP Eva. It also launched Moka AI Studio as the underlying engine for enterprise customization and data accumulation. The product shift moves Moka from workflow software toward proactive AI agents spanning recruitment, personnel operations and talent decision support.',
    date: '2026-05-14',
    category: ['Product Launch'],
    tags: ['HR Technology', 'Recruitment Tech'],
    keywords: ['Moka AI', 'Eva', 'AI Coworker'],
    impactLevel: 'High',
    companies: [{ en: 'Moka', zh: 'Moka', type: 'hrtech' }],
    imageUrl: getImg(1),
    websiteUrl: 'https://www.mokahr.com/blog/34557.html',
    zh: {
      title: 'Moka 将 HR SaaS 全面升级为 Moka AI',
      summary: 'Moka 推出招聘 Eva、人事 Eva、BP Eva 与 Moka AI 工坊，形成 AI 原生 HR 产品矩阵。',
      fullContent: '在 Moka Ascend 2026 产品发布会上，Moka 完成创立以来规模最大的产品战略升级，将 HR SaaS 主品牌全面升级为 Moka AI，并推出招聘 Eva、人事 Eva、BP Eva 三位 AI 同事，以及用于企业 AI 定制和数据沉淀的 Moka AI 工坊。此次转型推动 Moka 从流程型软件走向覆盖招聘、人事运营和人才决策的主动式智能体产品。',
      category: ['产品发布'],
      tags: ['人力资源科技', '招聘科技'],
      keywords: ['Moka AI', 'Eva', 'AI 同事'],
      impactLevel: 'High'
    }
  },
  {
    id: 'comp-20260407-beisen-workforce-scheduling',
    title: 'Beisen Expands Intelligent Workforce Scheduling for Complex Industries',
    summary: 'Beisen is applying forecasting and optimization algorithms to workforce scheduling in retail, manufacturing and automotive companies.',
    fullContent: 'Beisen described a broader rollout of intelligent workforce scheduling across retail, equipment manufacturing and new-energy automotive scenarios. Its system combines historical demand data with simulated annealing, neural networks and multiple constraints such as employee skills, availability, preferences and labor regulations. The product reflects a shift in domestic HR technology from administrative workflow automation toward operational forecasting and optimized labor allocation.',
    date: '2026-04-07',
    category: ['Technology Update'],
    tags: ['Workforce Management', 'HR Technology'],
    keywords: ['Scheduling', 'Forecasting', 'Optimization'],
    impactLevel: 'Medium',
    companies: [{ en: 'Beisen', zh: '北森', type: 'hrtech' }],
    imageUrl: getImg(2),
    websiteUrl: 'https://www.beisen.com/res/2342.html',
    zh: {
      title: '北森加速智能排班在复杂行业落地',
      summary: '北森将需求预测与优化算法应用于零售、制造和汽车等行业的劳动力调度。',
      fullContent: '北森正在连锁零售、装备制造和汽车新能源等场景扩大智能排班应用。其系统结合历史业务需求数据、退火算法、神经网络，并综合员工技能、可用时间、排班偏好和劳动法规等多重约束，自动生成更优的人力配置方案。这反映出国内 HR 科技正从行政流程自动化走向经营预测和劳动力资源优化。',
      category: ['技术更新'],
      tags: ['劳动力管理', '人力资源科技'],
      keywords: ['智能排班', '需求预测', '优化'],
      impactLevel: 'Medium'
    }
  },
  {
    id: 'comp-20260313-kingdee-ai-hr-refresh',
    title: 'Kingdee Refreshes Its AI HR Platform for Large Enterprises',
    summary: 'Kingdee expanded its AI HR offering across organization, workforce and talent management for medium and large enterprises.',
    fullContent: 'Kingdee unveiled a refreshed AI HR portfolio at its AI and Human Resources forum in Shenzhen. The company is positioning AI HR as a full-scenario platform across organization management, workforce operations and talent management, with a stronger focus on skills-based organizations and dynamic talent allocation. The release deepens Kingdee\'s competition with specialist HCM SaaS vendors by combining HR applications with its broader enterprise management and data platform.',
    date: '2026-03-13',
    category: ['Product Launch'],
    tags: ['HR Technology', 'Enterprise Software'],
    keywords: ['AI HR', 'Skills', 'Talent Management'],
    impactLevel: 'High',
    companies: [{ en: 'Kingdee', zh: '金蝶', type: 'hrtech' }],
    imageUrl: getImg(3),
    websiteUrl: 'https://www.kingdee.com/resources/articles/1493979358712008641',
    zh: {
      title: '金蝶焕新 AI HR 平台，覆盖大中型企业全场景',
      summary: '金蝶升级覆盖组织、人力与人才管理的 AI HR 产品，面向大中型企业强化全场景能力。',
      fullContent: '金蝶在深圳举办的 AI+人力资源论坛上发布焕新的 AI HR 产品组合，覆盖组织管理、人力运营和人才管理，重点支持技能型组织与动态人才配置。此次发布让金蝶凭借更广泛的企业管理与数据平台能力，进一步参与国内 HCM SaaS 竞争，并与垂直型 HR 科技厂商形成差异化竞争。',
      category: ['产品发布'],
      tags: ['人力资源科技', '企业软件'],
      keywords: ['AI HR', '技能管理', '人才管理'],
      impactLevel: 'High'
    }
  },
  {
    id: 'comp-20260210-irenshi-global-hr',
    title: 'iHR Builds an AI-Powered Cross-Border Employment Compliance Solution',
    summary: 'Litan iHR combines HR SaaS, aPaaS and AI to support Chinese companies managing overseas workforces and local compliance.',
    fullContent: 'Litan iHR presented its Global HR solution for Chinese companies expanding overseas. The platform combines HR SaaS, aPaaS and AI capabilities for employee self-service, compliance alerts, data insights and policy adaptation across Belt and Road markets. Through open APIs and integration with offline HR services, iHR aims to provide a unified system for cross-border logistics, manufacturing and retail companies facing fragmented local employment rules.',
    date: '2026-02-10',
    category: ['Product Update', 'Expansion'],
    tags: ['HR Technology', 'Global Workforce'],
    keywords: ['Compliance', 'Global HR', 'aPaaS'],
    impactLevel: 'Medium',
    companies: [{ en: 'Litan iHR', zh: '利唐 i人事', type: 'hrtech' }],
    imageUrl: getImg(4),
    websiteUrl: 'https://irenshi.cn/article/34301.html',
    zh: {
      title: '利唐 i人事推出 AI 驱动的跨境用工合规方案',
      summary: '利唐 i人事融合 HR SaaS、aPaaS 与 AI，帮助中国企业管理海外员工及本地用工合规。',
      fullContent: '利唐 i人事面向中国企业出海推出 Global HR 方案，以 HR SaaS、aPaaS 与 AI 为核心，覆盖员工自助、合规预警、数据洞察及“一带一路”相关市场的政策适配。平台通过开放 API 与线下人力资源服务衔接，为跨境物流、制造和新零售企业应对分散的本地劳动规则提供统一系统。',
      category: ['产品更新', '业务扩张'],
      tags: ['人力资源科技', '全球用工'],
      keywords: ['用工合规', 'Global HR', 'aPaaS'],
      impactLevel: 'Medium'
    }
  },
  {
    id: 'comp-20260630-alibaba-ai-growth',
    title: 'Alibaba Consolidates AI Operations and Accelerates Infrastructure Expansion',
    summary: 'Alibaba brought its core AI teams into the Alibaba Token Hub while advancing Qwen models and expanding its global cloud footprint.',
    fullContent: 'Alibaba outlined major first-half milestones in its AI strategy. The company established the Alibaba Token Hub business group to bring Tongyi Laboratory, Model-as-a-Service, Qwen, Wukong and AI application teams under one organization. It also highlighted advances including Qwen3.7-Max and the HappyHorse 1.1 video model, while expanding Alibaba Cloud to 105 availability zones across 32 regions. The move shows Alibaba combining models, chips, infrastructure and applications into a more tightly coordinated full-stack AI business.',
    date: '2026-06-30',
    category: ['Platform Strategy'],
    tags: ['Cloud Computing', 'Foundation Models'],
    keywords: ['Qwen', 'Infrastructure', 'Enterprise AI'],
    impactLevel: 'High',
    companies: [{ en: 'Alibaba', zh: '阿里巴巴', type: 'domestic' }],
    imageUrl: getImg(0),
    websiteUrl: 'https://www.alibabacloud.com/press-room/alibaba-positions-for-accelerated-ai-growth-in-sec',
    zh: {
      title: '阿里整合 AI 业务并加速扩张基础设施',
      summary: '阿里将核心 AI 团队整合进 Alibaba Token Hub，同时推进千问模型并扩大全球云基础设施。',
      fullContent: '阿里公布了 2026 年上半年 AI 战略的重要进展。公司成立 Alibaba Token Hub 业务集团，将通义实验室、MaaS、千问、悟空及 AI 应用团队纳入统一组织；同时推进 Qwen3.7-Max、HappyHorse 1.1 视频模型等产品，并将阿里云扩展至 32 个地域的 105 个可用区。这表明阿里正在把模型、芯片、云基础设施和应用整合为协同更紧密的全栈 AI 业务。',
      category: ['平台战略'],
      tags: ['云计算', '基础模型'],
      keywords: ['千问', '基础设施', '企业 AI'],
      impactLevel: 'High'
    }
  },
  {
    id: 'comp-20260629-alibaba-flink-agentic-streaming',
    title: 'Alibaba Cloud Pushes Apache Flink Toward Agentic Streaming',
    summary: 'Alibaba Cloud is evolving Flink from cloud-native streaming toward real-time multimodal data infrastructure for always-on AI agents.',
    fullContent: 'At Flink Forward Asia 2026, Alibaba Cloud shared plans for Apache Flink 3.0 and an agentic streaming architecture. The company introduced multimodal stream processing for text, images, audio, video and sensor data, alongside an agentic lake built around Apache Paimon and Apache Fluss. The strategy gives AI agents live data, persistent memory and fault-tolerant processing, strengthening Alibaba Cloud\'s position in the data layer beneath enterprise agents.',
    date: '2026-06-29',
    category: ['Technology Update'],
    tags: ['Open Source', 'Data Infrastructure'],
    keywords: ['Flink', 'Agents', 'Multimodal'],
    impactLevel: 'High',
    companies: [{ en: 'Alibaba Cloud', zh: '阿里云', type: 'domestic' }],
    imageUrl: getImg(1),
    websiteUrl: 'https://www.alibabacloud.com/blog/alibaba-cloud-pushes-open-source-apache-flink-toward-agentic-streaming-for-ai_603313',
    zh: {
      title: '阿里云推动 Apache Flink 迈向 Agentic Streaming',
      summary: '阿里云正推动 Flink 从云原生流处理升级为面向常驻智能体的实时多模态数据基础设施。',
      fullContent: '在 Flink Forward Asia 2026 上，阿里云公布了 Apache Flink 3.0 与 Agentic Streaming 架构方向，推出覆盖文本、图像、音频、视频及传感器数据的多模态流处理能力，并围绕 Apache Paimon 和 Apache Fluss 构建 Agentic Lake。该体系为 AI 智能体提供实时数据、持久记忆和容错处理能力，强化了阿里云在企业智能体底层数据设施上的竞争位置。',
      category: ['技术更新'],
      tags: ['开源生态', '数据基础设施'],
      keywords: ['Flink', '智能体', '多模态'],
      impactLevel: 'High'
    }
  },
  {
    id: 'comp-20260625-qwen-agentworld',
    title: 'Alibaba Releases Qwen-AgentWorld for General Agent Training',
    summary: 'Qwen-AgentWorld simulates seven interaction environments and gives developers a new foundation for training and evaluating general agents.',
    fullContent: 'Alibaba released Qwen-AgentWorld, a language world model trained to simulate seven agent environments: MCP, search, terminal, software engineering, web, operating systems and Android. The accompanying AgentWorldBench provides paired observations from real environments. By training on more than ten million interaction trajectories, the project aims to make agent reinforcement learning more scalable, controllable and transferable across tasks.',
    date: '2026-06-25',
    category: ['Open Source Release'],
    tags: ['Foundation Models', 'Agents'],
    keywords: ['World Model', 'Agent Training', 'Benchmark'],
    impactLevel: 'High',
    companies: [{ en: 'Alibaba', zh: '阿里巴巴', type: 'domestic' }],
    imageUrl: getImg(2),
    websiteUrl: 'https://www.alibabacloud.com/blog/qwen-agentworld-language-world-models-for-general-agents_603304',
    zh: {
      title: '阿里发布面向通用智能体训练的 Qwen-AgentWorld',
      summary: 'Qwen-AgentWorld 可模拟七类交互环境，为通用智能体训练与评测提供新的基础模型。',
      fullContent: '阿里发布 Qwen-AgentWorld，这是一款能够模拟 MCP、搜索、终端、软件工程、网页、操作系统和 Android 七类智能体环境的语言世界模型，并同步推出基于真实环境配对观测的 AgentWorldBench。项目使用超过一千万条环境交互轨迹训练，目标是让智能体强化学习更具扩展性、可控性，并能跨任务迁移。',
      category: ['开源发布'],
      tags: ['基础模型', '智能体'],
      keywords: ['世界模型', '智能体训练', '评测'],
      impactLevel: 'High'
    }
  },
  {
    id: 'comp-20260605-tencent-agent-suite',
    title: 'Tencent Cloud Launches a Full Productivity Agent Suite',
    summary: 'Tencent bundled WorkBuddy Enterprise, CodeBuddy, ADP 4.0 and agent infrastructure into an end-to-end productivity portfolio.',
    fullContent: 'Tencent Cloud launched a broad Productivity Agent Suite for individuals and enterprises. The portfolio includes WorkBuddy Enterprise, CodeBuddy, office collaboration agents and the ADP 4.0 AgentOps platform. Tencent says CodeBuddy now supports more than 95% of its engineers and cuts coding time by 40%. Its upgraded agent runtime also targets production deployment with elastic scheduling, memory services and secure access across more than 20 industries.',
    date: '2026-06-05',
    category: ['Product Launch'],
    tags: ['Enterprise AI', 'Productivity'],
    keywords: ['WorkBuddy', 'CodeBuddy', 'AgentOps'],
    impactLevel: 'High',
    companies: [{ en: 'Tencent', zh: '腾讯', type: 'domestic' }],
    imageUrl: getImg(3),
    websiteUrl: 'https://www.tencent.com/en-us/articles/2202350.html',
    zh: {
      title: '腾讯云发布全栈生产力智能体套件',
      summary: '腾讯将 WorkBuddy Enterprise、CodeBuddy、ADP 4.0 与智能体基础设施整合为端到端生产力产品组合。',
      fullContent: '腾讯云面向个人与企业推出生产力智能体套件，覆盖 WorkBuddy Enterprise、CodeBuddy、办公协作智能体和 ADP 4.0 AgentOps 平台。腾讯表示，CodeBuddy 已服务超过 95% 的内部工程师，并使整体编码时间减少 40%。升级后的 Agent Runtime 还提供弹性调度、记忆服务和安全访问能力，面向超过 20 个行业推进智能体生产部署。',
      category: ['产品发布'],
      tags: ['企业 AI', '生产力'],
      keywords: ['WorkBuddy', 'CodeBuddy', 'AgentOps'],
      impactLevel: 'High'
    }
  },
  {
    id: 'comp-20260501-tencent-hy3-preview',
    title: 'Tencent Hy3 Preview Targets Complex Real-World Agent Workflows',
    summary: 'Tencent upgraded Hunyuan reasoning, coding and tool use while integrating the model across its consumer and workplace products.',
    fullContent: 'Tencent introduced Hy3 Preview as its most capable Hunyuan model so far, with improvements in reasoning, long-context understanding, coding and tool use. The model has been integrated into Yuanbao, ima, CodeBuddy, WorkBuddy, QQ and Tencent Docs. Tencent reports that Hy3 can reliably support agent workflows up to 495 steps and has improved response speed and task completion time in production products.',
    date: '2026-05-01',
    category: ['Model Release'],
    tags: ['Foundation Models', 'Agents'],
    keywords: ['Hunyuan', 'Tool Use', 'Long Context'],
    impactLevel: 'High',
    companies: [{ en: 'Tencent', zh: '腾讯', type: 'domestic' }],
    imageUrl: getImg(4),
    websiteUrl: 'https://www.tencent.com/en-us/articles/2202320.html',
    zh: {
      title: '腾讯混元 Hy3 Preview 瞄准复杂真实智能体工作流',
      summary: '腾讯升级混元的推理、编码和工具调用能力，并将模型接入消费与办公产品矩阵。',
      fullContent: '腾讯推出 Hy3 Preview，将其定位为目前能力最强的混元模型，在推理、长上下文理解、编码和工具调用方面均有提升。模型已接入元宝、ima、CodeBuddy、WorkBuddy、QQ 和腾讯文档。腾讯称 Hy3 能稳定支撑最长 495 步的复杂智能体工作流，并在实际产品中提升首响应速度、缩短任务完成时间。',
      category: ['模型发布'],
      tags: ['基础模型', '智能体'],
      keywords: ['混元', '工具调用', '长上下文'],
      impactLevel: 'High'
    }
  },
  {
    id: 'comp-20260518-baidu-ai-cloud-growth',
    title: 'Baidu AI Cloud Infrastructure Revenue Jumps 79% in Q1',
    summary: 'Baidu reported rapid growth in AI cloud infrastructure while expanding its portfolio of productivity and self-evolving agents.',
    fullContent: 'Baidu reported RMB 8.8 billion in first-quarter AI Cloud Infrastructure revenue, up 79% year over year, while GPU Cloud revenue increased 184%. The company also expanded its application layer with DuMate, Miaoda 3.0, Famou Agent 2.0 and GenFlow 4.0. Together, the results show Baidu shifting more of its business mix toward AI infrastructure and agent applications as legacy online marketing declines.',
    date: '2026-05-18',
    category: ['Financial Results'],
    tags: ['Cloud Computing', 'Enterprise AI'],
    keywords: ['AI Cloud', 'GPU', 'Agents'],
    impactLevel: 'High',
    companies: [{ en: 'Baidu', zh: '百度', type: 'domestic' }],
    imageUrl: getImg(5),
    websiteUrl: 'https://ir.baidu.com/node/14561/pdf',
    zh: {
      title: '百度一季度 AI 云基础设施收入同比增长 79%',
      summary: '百度 AI 云基础设施保持高速增长，同时扩展生产力智能体与自进化智能体产品组合。',
      fullContent: '百度公布一季度 AI 云基础设施收入 88 亿元，同比增长 79%，其中 GPU 云收入同比增长 184%。公司同时在应用层推出或升级 DuMate、秒哒 3.0、伐谋 Agent 2.0 和 GenFlow 4.0。相关数据表明，在传统在线营销业务承压的同时，百度正加速把业务重心转向 AI 基础设施和智能体应用。',
      category: ['财务业绩'],
      tags: ['云计算', '企业 AI'],
      keywords: ['AI 云', 'GPU', '智能体'],
      impactLevel: 'High'
    }
  },
  {
    id: 'comp-20260630-anthropic-sonnet-5',
    title: 'Anthropic Pushes Claude Sonnet 5 Toward Agentic Workflows',
    summary: 'Anthropic says Sonnet 5 can plan, use tools, and run autonomously, making the model a stronger competitor for coding and professional work.',
    fullContent: 'Anthropic introduced Claude Sonnet 5 and positioned it as the most agentic Sonnet model yet. According to the company, Sonnet 5 can make plans, use tools such as browsers and terminals, and run autonomously at a level that previously required larger and more expensive models. That matters because it shifts Anthropic\'s competitive posture from “we also have a strong model” to “we have a model built for real workflows.” The update strengthens Anthropic\'s position in coding, knowledge work, and agentic task execution, where product teams increasingly care about persistence, tool use, and long-horizon work rather than only benchmark scores.',
    date: '2026-06-30',
    category: ['Product Launch'],
    tags: ['Foundation Models', 'Agents'],
    keywords: ['Agents', 'Coding', 'Enterprise'],
    impactLevel: 'High',
    companies: [{ en: 'Anthropic', zh: 'Anthropic', type: 'global' }],
    imageUrl: getImg(0),
    websiteUrl: 'https://www.anthropic.com/news/claude-sonnet-5',
    zh: {
      title: 'Anthropic 将 Claude Sonnet 5 推向更强的 Agent 工作流',
      summary: 'Anthropic 表示 Sonnet 5 可以规划、使用工具并自主执行，使其在编码和专业工作场景中更具竞争力。',
      fullContent: 'Anthropic 发布了 Claude Sonnet 5，并将其定位为迄今最具 Agent 能力的 Sonnet 模型。公司表示，Sonnet 5 可以制定计划、使用浏览器和终端等工具，并以此前只有更大、更昂贵模型才能达到的水平自主运行。这一点很重要，因为它把 Anthropic 的竞争姿态从“我们也有强模型”推进到“我们有一个能真正跑工作流的模型”。这次更新强化了 Anthropic 在编码、知识工作和 Agent 任务执行上的位置，而这些场景里，产品团队越来越看重的是持续性、工具调用和长周期任务，而不只是单点 benchmark 分数。',
      category: ['产品发布'],
      tags: ['基础模型', 'Agents'],
      keywords: ['Agents', '编码', '企业'],
      impactLevel: 'High'
    }
  },
  {
    id: 'comp-20260630-anthropic-science',
    title: 'Anthropic Launches Claude Science for Scientific Work',
    summary: 'Claude Science gives researchers a customizable workbench with auditable artifacts and flexible compute, pushing Anthropic deeper into vertical AI.',
    fullContent: 'Anthropic also announced Claude Science, an AI workbench for scientists. The product is designed around the practical needs of researchers: it integrates commonly used tools and packages, produces auditable artifacts, and offers flexible access to compute resources. That moves Anthropic beyond a general-purpose assistant and into verticalized workflow software, where the value is not just answers but a reproducible working environment. For competitors, the signal is clear: frontier model companies are increasingly shipping purpose-built surfaces for specific professions, not just general chat interfaces.',
    date: '2026-06-30',
    category: ['Product Launch'],
    tags: ['Research AI', 'Life Sciences'],
    keywords: ['Science', 'Workflow', 'Compute'],
    impactLevel: 'Medium',
    companies: [{ en: 'Anthropic', zh: 'Anthropic', type: 'global' }],
    imageUrl: getImg(1),
    websiteUrl: 'https://www.anthropic.com/news/claude-science-ai-workbench',
    zh: {
      title: 'Anthropic 推出面向科研的 Claude Science',
      summary: 'Claude Science 为研究人员提供可定制的工作台、可审计工件和灵活算力，进一步推进 Anthropic 的垂直化 AI 方向。',
      fullContent: 'Anthropic 还发布了 Claude Science，这是一款面向科学家的 AI 工作台。这个产品围绕研究人员的实际需求来设计：它整合了常用工具和软件包，生成可审计的工件，并提供灵活的算力访问。这让 Anthropic 不再只是在做通用助手，而是在进入垂直化的工作流软件领域，因为真正的价值已经不只是回答问题，而是提供一个可复现的工作环境。对竞争对手来说，信号很明确：前沿模型公司越来越多地在针对特定职业推出专用界面，而不只是通用聊天框。',
      category: ['产品发布'],
      tags: ['科研 AI', '生命科学'],
      keywords: ['科学', '工作流', '算力'],
      impactLevel: 'Medium'
    }
  },
  {
    id: 'comp-20260615-meta-facebook-ai-tools',
    title: 'Meta Rolls Out New AI Tools on Facebook',
    summary: 'Meta is adding AI Mode, AI-powered search, and creator tools inside Facebook to strengthen its consumer distribution advantage.',
    fullContent: 'Meta launched a new wave of AI-powered Facebook features, including AI Mode in search, creative tools for photos and video, and creator recommendations that get smarter over time. The strategic point is not just that Meta is adding AI; it is that Meta is embedding AI into products with massive distribution and strong social context. That makes the company harder to ignore in consumer AI because it can turn existing attention, identity, and creator graphs into AI usage almost immediately. For the competitive landscape, this is a reminder that distribution can matter as much as model quality when AI products are being discovered by everyday users.',
    date: '2026-06-15',
    category: ['Product Update'],
    tags: ['Consumer AI', 'Social Platform'],
    keywords: ['Search', 'Creation', 'Distribution'],
    impactLevel: 'Medium',
    companies: [{ en: 'Meta', zh: 'Meta', type: 'global' }],
    imageUrl: getImg(2),
    websiteUrl: 'https://about.fb.com/news/2026/06/new-ai-tools-to-help-you-make-things-happen-on-facebook/',
    zh: {
      title: 'Meta 在 Facebook 上推出新 AI 工具',
      summary: 'Meta 正在 Facebook 内加入 AI Mode、AI 搜索和创作工具，以强化其消费端分发优势。',
      fullContent: 'Meta 发布了一系列新的 Facebook AI 功能，包括搜索中的 AI Mode、照片和视频创作工具，以及越来越智能的创作者推荐。这里最重要的不是 Meta 又加了多少 AI 功能，而是它把 AI 嵌进了拥有巨大分发能力和强社交上下文的产品里。这让公司在消费级 AI 竞争中更难被忽视，因为它可以几乎立即把现有的注意力、身份关系和创作者网络转化为 AI 使用。放到竞争格局里看，这提醒我们：当 AI 产品进入普通用户发现和使用的阶段时，分发能力和模型能力一样重要。',
      category: ['产品更新'],
      tags: ['消费级 AI', '社交平台'],
      keywords: ['搜索', '创作', '分发'],
      impactLevel: 'Medium'
    }
  },
  {
    id: 'comp-20260608-google-gemini-apple-devs',
    title: 'Google Brings Gemini Models into Apple Developers\' Workflow',
    summary: 'Google is pushing Gemini deeper into Apple developer tooling, showing that ecosystem access is now part of the AI competition.',
    fullContent: 'Google announced that Apple developers can now access cloud Gemini models through Apple\'s Foundation Models framework and the Firebase Apple SDK, and use Gemini in Xcode. The competitive implication is bigger than the feature itself: Google is no longer just selling a standalone model, it is pushing Gemini into the tools where developers already work. That makes model distribution an ecosystem battle, not just a benchmark battle. For any team watching the market, this is a strong signal that the best AI companies will be the ones that can sit inside other platforms, not only ones that ask users to come to them.',
    date: '2026-06-08',
    category: ['Platform Expansion'],
    tags: ['Developer Ecosystem', 'Cloud'],
    keywords: ['Distribution', 'Platform', 'Developers'],
    impactLevel: 'High',
    companies: [{ en: 'Google', zh: 'Google', type: 'global' }],
    imageUrl: getImg(3),
    websiteUrl: 'https://blog.google/innovation-and-ai/technology/developers-tools/bringing-gemini-models-to-apple-developers/',
    zh: {
      title: 'Google 将 Gemini 模型带入 Apple 开发者工作流',
      summary: 'Google 正在通过 Apple 开发框架和 Firebase Apple SDK 将 Gemini 更深地嵌入 Apple 开发者工具链。',
      fullContent: 'Google 宣布 Apple 开发者现在可以通过 Apple 的 Foundation Models framework 和 Firebase Apple SDK 访问云端 Gemini 模型，并在 Xcode 中使用 Gemini。这个动作的竞争含义远大于功能本身：Google 不再只是卖一个独立模型，而是在把 Gemini 推进开发者已经在使用的工具里。这意味着模型分发已经变成生态之战，而不仅仅是 benchmark 之战。对任何观察市场的人来说，这都是一个强信号：未来最强的 AI 公司，不只是模型最强的公司，更是能嵌入其他平台的公司。',
      category: ['平台扩张'],
      tags: ['开发者生态', '云'],
      keywords: ['分发', '平台', '开发者'],
      impactLevel: 'High'
    }
  },
  {
    id: 'comp-20260602-openai-codex-every-role',
    title: 'OpenAI Pushes Codex Beyond Developers',
    summary: 'OpenAI is adding role-specific plugins, annotations, and shareable apps to make Codex useful for analysts, marketers, operators, and researchers.',
    fullContent: 'OpenAI announced Codex for every role, tool, and workflow, adding role-specific plugins, in-place annotations, and a preview of shareable interactive websites and apps. The strategic shift is clear: Codex is no longer positioned only as a coding assistant but as a broader workflow layer for non-developers as well. That widens OpenAI\'s competitive surface into analysis, operations, marketing, design, research, and business teams. It also raises the bar for competitors because the product is no longer just about generating text or code; it is about helping teams produce and refine real work outputs inside the tool itself.',
    date: '2026-06-02',
    category: ['Product Update'],
    tags: ['Enterprise AI', 'Developer Tools'],
    keywords: ['Agents', 'Workflow', 'Productivity'],
    impactLevel: 'High',
    companies: [{ en: 'OpenAI', zh: 'OpenAI', type: 'global' }],
    imageUrl: getImg(4),
    websiteUrl: 'https://openai.com/index/codex-for-every-role-tool-workflow/',
    zh: {
      title: 'OpenAI 让 Codex 超越开发者场景',
      summary: 'OpenAI 新增角色型插件、批注和可分享应用，让 Codex 对分析、市场、运营和研究等岗位都更有用。',
      fullContent: 'OpenAI 发布了 Codex for every role, tool, and workflow，新增了适配岗位的插件、原地批注，以及可分享交互式网站和应用的预览。这个战略转向非常清晰：Codex 不再只被定位为编码助手，而是在更广泛的工作流层面服务非开发者。这样一来，OpenAI 的竞争面就扩大到了分析、运营、市场、设计、研究和业务团队。它也把竞争门槛抬高了，因为产品不再只是“生成文本或代码”，而是要帮助团队在工具内部产出并打磨真实工作结果。',
      category: ['产品更新'],
      tags: ['企业 AI', '开发者工具'],
      keywords: ['Agents', '工作流', '生产力'],
      impactLevel: 'High'
    }
  },
  {
    id: 'comp-20260602-microsoft-build-agent-ops',
    title: 'Microsoft Frames Build 2026 Around Agents and Operations',
    summary: 'Microsoft emphasizes building, operating, optimizing, and observing agents, signaling that enterprise AI is moving toward managed infrastructure.',
    fullContent: 'Microsoft Build 2026 makes a strong statement about where the market is heading: the company is no longer talking only about building AI, but about building, operating, optimizing, and observing agents. That framing is important because it reflects the next phase of enterprise adoption, where governance, monitoring, and deployment discipline matter as much as raw model capability. In practical terms, Microsoft is positioning itself as the operating layer for enterprise agents, not just the model provider. Competitors now need to answer a harder question: can they support agents at production scale, with controls and observability, inside real enterprise environments?',
    date: '2026-06-02',
    category: ['Platform Strategy'],
    tags: ['Developer Ecosystem', 'Enterprise AI'],
    keywords: ['Agents', 'Governance', 'Infrastructure'],
    impactLevel: 'High',
    companies: [{ en: 'Microsoft', zh: 'Microsoft', type: 'global' }],
    imageUrl: getImg(5),
    websiteUrl: 'https://blogs.microsoft.com/blog/2026/06/02/microsoft-build-2026-be-yourself-at-work/',
    zh: {
      title: 'Microsoft 将 Build 2026 聚焦在 Agents 与运维层',
      summary: 'Microsoft 强调构建、运行、优化和观察 Agents，说明企业 AI 正转向可管理的基础设施。',
      fullContent: 'Microsoft Build 2026 对市场走向给出了非常明确的信号：公司不再只谈如何构建 AI，而是开始谈如何构建、运行、优化和观察 Agents。这个表述非常重要，因为它反映了企业采用的下一阶段：治理、监控和部署纪律的重要性将不亚于模型本身。换句话说，Microsoft 正在把自己定位成企业 Agent 的运维层，而不只是模型提供商。竞争对手现在要回答的问题更难了：你是否能在真实企业环境中，带着控制能力和可观测性，支撑 Agents 进入生产系统？',
      category: ['平台战略'],
      tags: ['开发者生态', '企业 AI'],
      keywords: ['Agents', '治理', '基础设施'],
      impactLevel: 'High'
    }
  },
  {
    id: 'comp-2',
    title: 'Beisen Integrates Predictive Attrition Models into Core SaaS',
    summary: 'China’s leading HR SaaS provider adds advanced machine learning models to predict employee turnover with 89% accuracy.',
    fullContent: 'Beisen has announced a major update to its core HR SaaS platform, integrating a proprietary predictive attrition model. Utilizing historical employee data, engagement metrics, and market trends, the new module can flag high-risk employees with an impressive 89% accuracy rate up to three months before they submit their resignation. This allows HR teams to proactively intervene with retention strategies. The move solidifies Beisen\'s position in the domestic market, transitioning their offering from a system of record to a system of intelligence. The feature is currently rolling out to enterprise tier customers.',
    date: '2026-06-02',
    category: ['Technology Update'],
    tags: ['Enterprise Services', 'Employee Experience'],
    keywords: ['Machine Learning', 'Human Resources'],
    impactLevel: 'Medium',
    companies: [{ en: 'Beisen', zh: '北森', type: 'hrtech' }],
    imageUrl: getImg(1),
    zh: {
      title: '北森将预测性离职模型集成到核心 SaaS 中',
      summary: '中国领先的 HR SaaS 提供商添加了先进的机器学习模型，以 89% 的准确率预测员工流失。',
      fullContent: '北森宣布对其核心 HR SaaS 平台进行重大更新，集成了一个专有的预测性离职模型。利用历史员工数据、敬业度指标和市场趋势，新模块能够以高达 89% 的准确率在员工提交辞呈前三个月标记出高风险员工。这使得 HR 团队能够主动采取保留策略进行干预。此举巩固了北森在国内市场的地位，将其产品从记录系统转变为智能系统。该功能目前正向企业级客户推出。',
      category: ['技术更新'],
      tags: ['企业服务', '员工体验'],
      keywords: ['机器学习', '人力资源'],
      impactLevel: 'Medium'
    }
  },
  {
    id: 'comp-4',
    title: 'Alibaba Cloud Unveils Tongyi Qianwen HR Edition',
    summary: 'Alibaba releases a specialized version of its large language model optimized for Chinese labor laws and corporate management.',
    fullContent: 'Alibaba Cloud has officially launched the "Tongyi Qianwen HR Edition," a domain-specific large language model tailored for the Chinese market. Trained extensively on Chinese labor laws, local corporate governance structures, and regional HR practices, the model excels at drafting compliant employment contracts, answering complex employee relations queries, and generating localized training materials. Alibaba is offering this model both via API and as a private cloud deployment option for state-owned enterprises and large corporations requiring strict data sovereignty. This launch directly challenges Baidu\'s Ernie bot in the enterprise sector.',
    date: '2026-05-25',
    category: ['Product Launch'],
    tags: ['Cloud Computing', 'AI'],
    keywords: ['Enterprise Services', 'Digital Transformation'],
    impactLevel: 'High',
    companies: [{ en: 'Alibaba', zh: '阿里', type: 'domestic' }],
    imageUrl: getImg(3),
    zh: {
      title: '阿里云发布通义千问 HR 版',
      summary: '阿里巴巴发布了其大语言模型的专用版本，针对中国劳动法和企业管理进行了优化。',
      fullContent: '阿里云正式发布了“通义千问 HR 版”，这是一个专为中国市场量身定制的特定领域大语言模型。该模型在中国劳动法、当地公司治理结构和区域 HR 实践方面进行了广泛训练，擅长起草合规的雇佣合同、回答复杂的员工关系查询以及生成本地化的培训材料。阿里巴巴通过 API 以及为需要严格数据主权的国有企业和大型公司提供私有云部署选项来提供此模型。此次发布直接挑战了百度文心一言在企业领域的地位。',
      category: ['产品发布'],
      tags: ['云计算', '人工智能'],
      keywords: ['企业服务', '数字化转型'],
      impactLevel: 'High'
    }
  },
  {
    id: 'comp-5',
    title: 'Moka Secures $50M Series D to Expand AI Recruitment Tools',
    summary: 'The ATS provider will use the fresh capital to develop autonomous sourcing agents and expand into Southeast Asia.',
    fullContent: 'Moka, a prominent player in the Applicant Tracking System (ATS) space, has successfully closed a $50 million Series D funding round led by top-tier venture capital firms. The company plans to allocate the majority of the funds towards R&D, specifically focusing on developing "autonomous sourcing agents"—AI bots capable of independently identifying, contacting, and pre-screening candidates across multiple platforms. Additionally, Moka announced plans to expand its operations into Southeast Asia, targeting the rapidly digitizing HR markets in Singapore and Indonesia. This aggressive expansion highlights the growing investor confidence in AI-native HR solutions.',
    date: '2026-05-20',
    category: ['Investment', 'Expansion'],
    tags: ['Recruitment Tech', 'Enterprise Services'],
    keywords: ['Automation', 'Human Resources'],
    impactLevel: 'Medium',
    companies: [{ en: 'Moka', zh: 'Moka', type: 'hrtech' }],
    imageUrl: getImg(4),
    zh: {
      title: 'Moka 获 5000 万美元 D 轮融资以扩展 AI 招聘工具',
      summary: '这家 ATS 提供商将利用这笔新资金开发自主寻源代理并扩展到东南亚市场。',
      fullContent: '在申请人跟踪系统 (ATS) 领域的知名企业 Moka 已成功完成由顶级风险投资公司领投的 5000 万美元 D 轮融资。该公司计划将大部分资金用于研发，特别侧重于开发“自主寻源代理”——能够跨多个平台独立识别、联系和预筛选候选人的 AI 机器人。此外，Moka 宣布计划将其业务扩展到东南亚，瞄准新加坡和印度尼西亚快速数字化的 HR 市场。这种积极的扩张凸显了投资者对 AI 原生 HR 解决方案日益增长的信心。',
      category: ['投资', '扩张'],
      tags: ['招聘科技', '企业服务'],
      keywords: ['自动化', '人力资源'],
      impactLevel: 'Medium'
    }
  },
  {
    id: 'comp-7',
    title: 'ByteDance Open-Sources "PeopleOS" Core Modules',
    summary: 'The tech giant releases parts of its internal HR system to the open-source community, challenging established enterprise software vendors.',
    fullContent: 'In a surprising move, ByteDance has open-sourced core modules of its highly regarded internal HR management system, dubbed "PeopleOS". The release includes frameworks for dynamic organizational chart rendering, high-concurrency payroll calculation engines, and a lightweight performance review module. By making these tools freely available, ByteDance aims to establish industry standards and attract top engineering talent to its ecosystem. Industry experts view this as a disruptive play that could commoditize basic HR software functionalities, forcing traditional vendors to compete purely on advanced AI features and premium support.',
    date: '2026-05-10',
    category: ['Technology Update'],
    tags: ['Short Video', 'Enterprise Services'],
    keywords: ['Human Resources', 'Digital Transformation'],
    impactLevel: 'High',
    companies: [{ en: 'ByteDance', zh: '字节', type: 'domestic' }],
    imageUrl: getImg(0),
    zh: {
      title: '字节跳动开源 "PeopleOS" 核心模块',
      summary: '这家科技巨头向开源社区发布了其内部 HR 系统的部分内容，挑战了老牌企业软件供应商。',
      fullContent: '出人意料的是，字节跳动开源了其备受推崇的内部 HR 管理系统（被称为 "PeopleOS"）的核心模块。此次发布包括用于动态组织架构图渲染的框架、高并发薪酬计算引擎以及轻量级绩效评估模块。通过免费提供这些工具，字节跳动旨在建立行业标准，并吸引顶尖工程人才加入其生态系统。行业专家认为这是一项颠覆性的举措，可能会使基本的 HR 软件功能商品化，迫使传统供应商纯粹在高级 AI 功能和优质支持方面展开竞争。',
      category: ['技术更新'],
      tags: ['短视频', '企业服务'],
      keywords: ['人力资源', '数字化转型'],
      impactLevel: 'High'
    }
  },
  {
    id: 'comp-8',
    title: 'Zhaopin Acquires AI Interview Startup for $35M',
    summary: 'The recruitment platform strengthens its automated assessment capabilities through strategic acquisition.',
    fullContent: 'Zhaopin, one of China\'s largest recruitment platforms, has announced the acquisition of a promising AI video interview startup for $35 million. The acquired technology specializes in micro-expression analysis and natural language processing to assess candidate soft skills during asynchronous video interviews. Zhaopin plans to integrate this technology into its premium enterprise offering, allowing employers to screen thousands of applicants rapidly without human bias. The acquisition highlights the accelerating consolidation in the HR tech space, as established platforms buy up niche AI capabilities rather than building them in-house.',
    date: '2026-05-05',
    category: ['Acquisition'],
    tags: ['Recruitment Tech', 'AI'],
    keywords: ['Data Analysis', 'Human Resources'],
    impactLevel: 'Medium',
    companies: [{ en: 'Zhaopin', zh: '智联招聘', type: 'hrtech' }],
    imageUrl: getImg(1),
    zh: {
      title: '智联招聘以 3500 万美元收购 AI 面试初创公司',
      summary: '该招聘平台通过战略收购加强了其自动化评估能力。',
      fullContent: '中国最大的招聘平台之一智联招聘宣布以 3500 万美元收购一家极具潜力的 AI 视频面试初创公司。被收购的技术专长于微表情分析和自然语言处理，以在异步视频面试中评估候选人的软技能。智联招聘计划将这项技术整合到其高级企业产品中，使雇主能够快速筛选数千名申请人，而不会产生人为偏见。此次收购凸显了 HR 科技领域正在加速整合，因为老牌平台倾向于收购利基 AI 功能，而不是在内部进行构建。',
      category: ['收购'],
      tags: ['招聘科技', '人工智能'],
      keywords: ['数据分析', '人力资源'],
      impactLevel: 'Medium'
    }
  },
  {
    id: 'comp-9',
    title: 'Tencent Launches Hunyuan-Powered Corporate Training Platform',
    summary: 'Tencent leverages its proprietary large model to generate interactive, personalized training courses for enterprise clients.',
    fullContent: 'Tencent has officially entered the corporate learning market with a new platform powered by its Hunyuan large language model. The platform allows HR departments to upload raw materials (like PDFs, videos, or manuals), which the AI then transforms into interactive, gamified training modules complete with quizzes and conversational role-play scenarios. Furthermore, the system adapts the difficulty and learning style to individual employees based on their progress. This launch leverages Tencent\'s deep expertise in gaming and social interaction, presenting a unique, highly engaging alternative to traditional Learning Management Systems (LMS).',
    date: '2026-04-28',
    category: ['Product Launch'],
    tags: ['Social Media', 'Enterprise Services'],
    keywords: ['AI', 'Employee Experience'],
    impactLevel: 'Medium',
    companies: [{ en: 'Tencent', zh: '腾讯', type: 'domestic' }],
    imageUrl: getImg(2),
    zh: {
      title: '腾讯推出由混元驱动的企业培训平台',
      summary: '腾讯利用其专有的大模型为企业客户生成交互式、个性化的培训课程。',
      fullContent: '腾讯凭借由其混元大语言模型驱动的新平台正式进入企业学习市场。该平台允许 HR 部门上传原始材料（如 PDF、视频或手册），然后 AI 将其转化为交互式、游戏化的培训模块，并配有测验和对话式角色扮演场景。此外，系统会根据员工的进度，针对个别员工调整难度和学习风格。此次发布利用了腾讯在游戏和社交互动方面的深厚专业知识，提供了一种独特且极具吸引力的替代传统学习管理系统 (LMS) 的方案。',
      category: ['产品发布'],
      tags: ['社交媒体', '企业服务'],
      keywords: ['人工智能', '员工体验'],
      impactLevel: 'Medium'
    }
  },
  {
    id: 'comp-10',
    title: 'Xinrenxinshi Reports 150% Growth in AI Payroll Assistant Usage',
    summary: 'The HR tech firm sees massive adoption of its automated compliance and payroll calculation tools among SMEs.',
    fullContent: 'Xinrenxinshi released its Q1 2026 usage metrics, highlighting a staggering 150% year-over-year growth in the adoption of its "AI Payroll Assistant." The tool, designed primarily for Small and Medium Enterprises (SMEs), automates complex multi-city tax calculations, social security deductions, and compliance reporting. The surge in adoption is attributed to recent changes in regional tax codes across China, which have overwhelmed small HR teams. Xinrenxinshi\'s ability to push real-time regulatory updates to its AI engine has proven to be a killer feature, significantly reducing payroll errors and administrative overhead for its clients.',
    date: '2026-04-20',
    category: ['Technology Update'],
    tags: ['Payroll Management', 'Enterprise Services'],
    keywords: ['Automation', 'Human Resources'],
    impactLevel: 'Low',
    companies: [{ en: 'Xinrenxinshi', zh: '薪人薪事', type: 'hrtech' }],
    imageUrl: getImg(3),
    zh: {
      title: '薪人薪事报告其 AI 薪酬助手使用量增长 150%',
      summary: '这家 HR 科技公司看到其自动化合规和薪酬计算工具在中小企业中得到大规模采用。',
      fullContent: '薪人薪事发布了其 2026 年第一季度的使用指标，突出显示其“AI 薪酬助手”的采用率同比增长了惊人的 150%。该工具主要为中小型企业 (SME) 设计，可自动执行复杂的多城市税务计算、社会保障扣除和合规报告。采用率的激增归因于近期中国各地区域税法的变化，这让小型 HR 团队不堪重负。薪人薪事能够将实时监管更新推送到其 AI 引擎，这已被证明是一项杀手级功能，显著减少了客户的薪酬错误和管理开销。',
      category: ['技术更新'],
      tags: ['薪资管理', '企业服务'],
      keywords: ['自动化', '人力资源'],
      impactLevel: 'Low'
    }
  },
  {
    id: 'comp-12',
    title: 'Baidu Integrates Ernie Bot into Enterprise Performance Management',
    summary: 'Baidu’s new module uses AI to eliminate bias in performance reviews and suggest personalized career development paths.',
    fullContent: 'Baidu has expanded its enterprise software suite by integrating the Ernie Bot into a new Performance Management module. The system is designed to tackle the persistent issue of manager bias in annual reviews. By analyzing a year\'s worth of an employee\'s digital footprint—including code commits, project deliverables, and peer feedback—the AI generates an objective baseline review. Managers can then adjust this draft. Furthermore, the system automatically suggests personalized career development paths and relevant training courses based on the identified skill gaps. This represents a significant step towards fully AI-augmented talent management.',
    date: '2026-04-10',
    category: ['Technology Update'],
    tags: ['AI', 'Cloud Computing'],
    keywords: ['Machine Learning', 'Employee Experience'],
    impactLevel: 'High',
    companies: [{ en: 'Baidu', zh: '百度', type: 'domestic' }],
    imageUrl: getImg(5),
    zh: {
      title: '百度将文心一言集成到企业绩效管理中',
      summary: '百度的新模块利用 AI 消除绩效评估中的偏见，并建议个性化的职业发展路径。',
      fullContent: '百度通过将文心一言集成到新的绩效管理模块中，扩展了其企业软件套件。该系统旨在解决年度评估中长期存在的管理者偏见问题。通过分析员工一年的数字足迹（包括代码提交、项目交付成果和同行反馈），AI 会生成客观的基线评估。然后，管理者可以调整此草案。此外，系统会根据识别出的技能差距，自动建议个性化的职业发展路径和相关培训课程。这代表着向完全 AI 增强的人才管理迈出了重要一步。',
      category: ['技术更新'],
      tags: ['人工智能', '云计算'],
      keywords: ['机器学习', '员工体验'],
      impactLevel: 'High'
    }
  },
  {
    id: 'comp-13',
    title: 'Dayi Launches "Interview Copilot" for Hiring Managers',
    summary: 'The new tool provides real-time suggested questions and fact-checking during live video interviews.',
    fullContent: 'HR tech firm Dayi has launched an innovative "Interview Copilot" designed to assist hiring managers during live video interviews. Operating as a discreet overlay on popular video conferencing platforms, the AI listens to the conversation in real-time. It dynamically suggests follow-up questions based on the candidate\'s responses, flags inconsistencies in their stated experience, and ensures the interviewer covers all required competency areas. Post-interview, it instantly generates a structured summary and scoring matrix. Dayi claims this tool reduces time-to-hire by 25% while significantly improving the quality of technical assessments.',
    date: '2026-04-05',
    category: ['Product Launch'],
    tags: ['Recruitment Tech', 'AI'],
    keywords: ['Automation', 'Enterprise Services'],
    impactLevel: 'Medium',
    companies: [{ en: 'Dayi', zh: '大易', type: 'hrtech' }],
    imageUrl: getImg(0),
    zh: {
      title: '大易为招聘经理推出“面试 Copilot”',
      summary: '新工具在实时视频面试期间提供实时建议问题和事实核查。',
      fullContent: 'HR 科技公司大易推出了一款创新的“面试 Copilot”，旨在在实时视频面试期间协助招聘经理。作为流行视频会议平台上的一个隐蔽覆盖层，AI 实时倾听对话。它会根据候选人的回答动态建议后续问题，标记其陈述经验中的不一致之处，并确保面试官涵盖所有必需的能力领域。面试结束后，它会立即生成结构化的摘要和评分矩阵。大易声称，该工具将招聘时间缩短了 25%，同时显著提高了技术评估的质量。',
      category: ['产品发布'],
      tags: ['招聘科技', '人工智能'],
      keywords: ['自动化', '企业服务'],
      impactLevel: 'Medium'
    }
  },
  {
    id: 'comp-15',
    title: '51job Partners with Huawei Cloud for Secure AI Recruitment',
    summary: 'The partnership focuses on delivering highly secure, localized AI recruitment tools for government and state-owned enterprises.',
    fullContent: '51job has announced a strategic partnership with Huawei Cloud to co-develop and host a highly secure suite of AI recruitment tools. The initiative specifically targets government agencies, state-owned enterprises (SOEs), and defense contractors who require strict data localization and air-gapped security protocols. By leveraging Huawei\'s secure cloud infrastructure and Pangu models, 51job can offer advanced resume parsing and candidate matching without compromising sensitive national data. This partnership allows 51job to capture a lucrative, highly regulated market segment that international cloud providers cannot access.',
    date: '2026-03-20',
    category: ['Partnership'],
    tags: ['Recruitment Tech', 'Cloud Computing'],
    keywords: ['AI', 'Enterprise Services'],
    impactLevel: 'Medium',
    companies: [
      { en: '51job', zh: '前程无忧', type: 'hrtech' },
      { en: 'Huawei', zh: '华为', type: 'domestic' }
    ],
    imageUrl: getImg(2),
    zh: {
      title: '前程无忧与华为云合作打造安全的 AI 招聘',
      summary: '该合作伙伴关系侧重于为政府和国有企业提供高度安全、本地化的 AI 招聘工具。',
      fullContent: '前程无忧宣布与华为云建立战略合作伙伴关系，共同开发和托管一套高度安全的 AI 招聘工具。该计划专门针对需要严格数据本地化和物理隔离安全协议的政府机构、国有企业 (SOE) 和国防承包商。通过利用华为安全的云基础设施和盘古模型，前程无忧可以提供高级简历解析和候选人匹配，而不会危及敏感的国家数据。这种合作伙伴关系使前程无忧能够占领一个利润丰厚、受到高度监管的市场细分领域，而国际云提供商无法进入该领域。',
      category: ['合作伙伴关系'],
      tags: ['招聘科技', '云计算'],
      keywords: ['人工智能', '企业服务'],
      impactLevel: 'Medium'
    }
  }
];

export const chinaCompetitorNewsData = competitorNewsData.filter(
  (item) =>
    Array.isArray(item.companies) &&
    item.companies.length > 0 &&
    item.companies.every((company) => company.type !== 'global')
).sort((a, b) => new Date(b.date) - new Date(a.date));
