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
);
