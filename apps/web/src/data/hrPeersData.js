const images = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop'
];

const getImg = (index) => images[index % images.length];

export const hrPeerKeywordDefinitions = [
  { id: 'ai-agents', en: 'AI Agents', zh: 'AI 智能体' },
  { id: 'recruiting', en: 'Recruiting', zh: '招聘' },
  { id: 'hiring', en: 'Hiring', zh: '用工招聘' },
  { id: 'matching', en: 'Matching', zh: '智能匹配' },
  { id: 'workforce', en: 'Workforce', zh: '劳动力管理' },
  { id: 'compliance', en: 'Compliance', zh: '合规' },
  { id: 'interviews', en: 'Interviews', zh: '面试' },
  { id: 'marketplace', en: 'Marketplace', zh: '生态平台' },
  { id: 'reporting', en: 'Industry Report', zh: '行业报告' },
  { id: 'talent-shortage', en: 'Talent Shortage', zh: '人才短缺' },
  { id: 'job-discovery', en: 'Job Discovery', zh: '职位发现' },
  { id: 'global-hr', en: 'Global HR', zh: '全球用工' }
];

export const hrPeerArticles = [
  {
    id: 'hr-peer-workday-apac-leadership',
    title: 'Workday Strengthens Asia Pacific Leadership for the Next AI Growth Phase',
    summary: 'Workday keeps pushing its enterprise HR platform with a stronger APAC leadership footprint and more visible AI positioning for regional customers.',
    fullContent: `Workday continues to reinforce its regional leadership and enterprise AI story. For HR buyers, that matters because it signals the company is still investing in the operating layer that sits underneath core HR, finance and workforce planning use cases. The broader takeaway is that large HR platforms are not only shipping features; they are also organizing their go-to-market around AI, governance and regional scale.

For peers, this is a reminder that the competitive game is now as much about regional execution and platform trust as it is about product features.`,
    date: '2026-07-08',
    category: ['Leadership', 'Platform Strategy'],
    tags: ['HR Technology', 'Enterprise AI'],
    keywords: ['workforce', 'global-hr', 'ai-agents'],
    impactLevel: 'Medium',
    companies: [{ en: 'Workday', zh: 'Workday' }],
    imageUrl: getImg(0),
    websiteUrl: 'https://www.workday.com/en-us/company/latest/newsroom/press-releases.html',
    zh: {
      title: 'Workday 强化亚太领导层，继续推进 AI 增长',
      summary: 'Workday 继续加强亚太区域的领导力配置，同时把企业 AI 作为平台增长的重要方向。',
      fullContent: `Workday 继续强化区域领导层和企业 AI 叙事。对 HR 买家来说，这说明公司仍在投资 HR、财务和劳动力规划这些核心工作流之下的操作层。更大的信号是，大型 HR 平台不只是在发功能，而是在围绕 AI、治理和区域规模组织它们的市场策略。

对同行来说，这提醒大家：竞争已经不只是功能多不多，而是看谁在区域执行和平台信任上做得更扎实。`,
      category: ['领导层', '平台战略'],
      tags: ['人力资源科技', '企业 AI'],
      keywords: ['劳动力', '全球用工', 'AI 智能体'],
      impactLevel: 'Medium'
    }
  },
  {
    id: 'hr-peer-adp-workforce-intelligence',
    title: 'ADP Keeps Workforce Intelligence Close to Payroll and Labor Data',
    summary: 'ADP is still anchoring its HR value proposition in payroll, labor-market intelligence and practical workflow support for employers.',
    fullContent: `ADP remains one of the clearest examples of a payroll-first platform expanding into workforce intelligence. The company's recent motion shows that customers care less about isolated AI demos and more about whether core HR and payroll data can produce reliable planning signals. That is why payroll, compliance and labor analytics remain a strong moat.

For HR peers, the message is simple: if you can control payroll and labor data, you can become the system that managers trust for operational decisions.`,
    date: '2026-07-01',
    category: ['Data Platform', 'Workforce Analytics'],
    tags: ['HR Technology', 'Payroll'],
    keywords: ['workforce', 'reporting', 'global-hr'],
    impactLevel: 'High',
    companies: [{ en: 'ADP', zh: 'ADP' }],
    imageUrl: getImg(1),
    websiteUrl: 'https://www.adp.com/about-adp/newsroom.aspx',
    zh: {
      title: 'ADP 继续把劳动力情报和薪酬数据绑在一起',
      summary: 'ADP 仍然把薪酬、劳动力情报和日常流程支持放在企业 HR 的核心位置。',
      fullContent: `ADP 仍然是一个典型的“薪酬先行”平台，并且持续向劳动力情报扩展。公司最新动作说明，客户真正关心的不是单独的 AI 演示，而是核心 HR 和薪酬数据能不能产出可靠的规划信号。所以，薪酬、合规和劳动力分析仍然是它的重要护城河。

对 HR 同行来说，结论很直接：谁能控制薪酬和劳动力数据，谁就更容易成为管理者做运营决策时信任的系统。`,
      category: ['数据平台', '劳动力分析'],
      tags: ['人力资源科技', '薪酬'],
      keywords: ['劳动力', '行业报告', '全球用工'],
      impactLevel: 'High'
    }
  },
  {
    id: 'hr-peer-greenhouse-ai-notetaker-july',
    title: 'Greenhouse Moves Its AI Notetaker Toward a July Launch Window',
    summary: 'Greenhouse is pushing toward a July launch for AI notetaker capabilities that support structured hiring without making the process feel fully automated.',
    fullContent: `Greenhouse is still leaning into structured hiring rather than shortcut hiring. Its AI notetaker direction shows a familiar HR pattern: keep the process human-led, but use AI to reduce note-taking and coordination overhead. For recruiting teams, that is useful because it improves consistency without forcing a full workflow rewrite.

The broader lesson is that candidate experience still matters. If AI makes interviews feel colder or less transparent, employers lose trust even if they save time.`,
    date: '2026-07-15',
    category: ['Product Update', 'Candidate Experience'],
    tags: ['Recruiting', 'Assessment'],
    keywords: ['interviews', 'hiring', 'reporting'],
    impactLevel: 'High',
    companies: [{ en: 'Greenhouse', zh: 'Greenhouse' }],
    imageUrl: getImg(2),
    websiteUrl: 'https://www.greenhouse.com/newsroom/63-of-job-seekers-have-faced-an-ai-interview-most-havent-had-a-good-one-yet',
    zh: {
      title: 'Greenhouse 的 AI Notetaker 正走向 7 月上线',
      summary: 'Greenhouse 正把 AI 面试记录功能推向 7 月发布窗口，强调结构化招聘而不是完全自动化。',
      fullContent: `Greenhouse 仍然坚持“结构化招聘优先”，而不是一味追求自动化。它的 AI Notetaker 方向说明了 HR 行业的一种常见做法：保留人工主导的流程，但用 AI 降低记录和协同成本。对招聘团队来说，这很实用，因为它能提高一致性，同时不用完全重做工作流。

更大的启示是：候选人体验依然重要。如果 AI 让面试体验更冷、更不透明，即使节省了时间，雇主也会失去信任。`,
      category: ['产品更新', '候选人体验'],
      tags: ['招聘', '评估'],
      keywords: ['面试', '招聘', '行业报告'],
      impactLevel: 'High'
    }
  },
  {
    id: 'hr-peer-workday-agent-passport',
    title: 'Workday Launches Agent Passport for Enterprise AI Oversight',
    summary: 'Workday introduced Agent Passport to help enterprises register, verify and monitor AI agents inside HR and finance workflows.',
    fullContent: 'Workday is positioning Agent Passport as a governance layer for the growing number of enterprise AI agents that now sit inside core systems of record. The release focuses on registration, verification and ongoing monitoring so HR and finance teams can understand which agents are active, what they can access and how they behave over time. That is a strong signal that HR software is moving from point automations toward agent management infrastructure.\n\nFor HR leaders, the important shift is that AI is no longer only a feature inside a workflow. It is becoming a managed population of digital workers that needs identity, permissions and oversight. Workday is using that idea to strengthen its platform story around AI control, not just AI assistance.',
    date: '2026-06-02',
    category: ['Product Release', 'AI Governance'],
    tags: ['HR Technology', 'Enterprise AI'],
    keywords: ['ai-agents', 'workforce', 'compliance'],
    impactLevel: 'High',
    companies: [{ en: 'Workday', zh: 'Workday' }],
    imageUrl: getImg(0),
    websiteUrl: 'https://www.workday.com/en-us/company/latest/newsroom/press-releases.html',
    zh: {
      title: 'Workday 推出 Agent Passport，强化企业 AI 治理',
      summary: 'Workday 发布 Agent Passport，帮助企业在 HR 和财务流程中注册、验证并监控 AI 智能体。',
      fullContent: 'Workday 将 Agent Passport 定位为面向企业 AI 智能体的治理层，重点解决注册、验证和持续监控问题，让 HR 与财务团队清楚知道有哪些智能体在运行、能访问什么、以及长期行为如何变化。这也说明 HR 软件正在从单点自动化，走向对“数字员工”进行统一管理的基础设施。\n\n对 HR 团队来说，AI 不再只是流程里的一个功能，而是需要身份、权限和审计的受管对象。Workday 正在用这一方向强化它在 AI 治理上的平台叙事，而不仅仅是 AI 辅助能力。',
      category: ['产品发布', 'AI 治理'],
      tags: ['人力资源科技', '企业 AI'],
      keywords: ['AI 智能体', '劳动力', '合规'],
      impactLevel: 'High'
    }
  },
  {
    id: 'hr-peer-adp-ai-agents',
    title: 'ADP Marketplace Adds AI Agents to Simplify Everyday Work',
    summary: 'ADP expanded its marketplace with AI agents designed to streamline daily HR and payroll tasks for employers.',
    fullContent: 'ADP has been steadily turning its platform into a more modular ecosystem, and AI agents are now part of that strategy. By adding AI-driven capabilities to its marketplace, ADP is making routine HR and payroll operations easier to automate while keeping them tied to a trusted enterprise system. The practical angle matters: customers want faster answers, less manual work and safer process changes.\n\nFor the HR market, this is another sign that major platforms are no longer selling only software screens. They are selling a combination of workflows, integrations and AI services that can be deployed in place and scaled across customer portfolios.',
    date: '2026-03-02',
    category: ['Platform Update', 'Marketplace'],
    tags: ['HR Technology', 'Payroll'],
    keywords: ['ai-agents', 'marketplace', 'recruiting'],
    impactLevel: 'High',
    companies: [{ en: 'ADP', zh: 'ADP' }],
    imageUrl: getImg(1),
    websiteUrl: 'https://www.adp.com/about-adp/newsroom.aspx',
    zh: {
      title: 'ADP Marketplace 引入 AI 智能体，简化日常工作',
      summary: 'ADP 在市场平台中加入 AI 智能体能力，帮助企业简化 HR 和薪酬日常任务。',
      fullContent: 'ADP 一直在把平台打造成更模块化的生态系统，而 AI 智能体现在成为其中的一部分。通过在 Marketplace 中加入 AI 能力，ADP 让常规 HR 与薪酬操作更容易被自动化，同时仍然绑定在成熟的企业系统里。真正重要的是：客户想要更快的响应、更少的人工操作，以及更安全的流程升级。\n\n对 HR 市场来说，这说明大型平台已经不只是出售软件界面，而是在出售工作流、集成和 AI 服务的组合，并且可以在客户系统中直接部署并持续扩展。',
      category: ['平台更新', '市场生态'],
      tags: ['人力资源科技', '薪酬'],
      keywords: ['AI 智能体', '生态平台', '招聘'],
      impactLevel: 'High'
    }
  },
  {
    id: 'hr-peer-ziprecruiter-chatgpt',
    title: 'ZipRecruiter Launches a ChatGPT App for Job Discovery',
    summary: 'ZipRecruiter brought job discovery into ChatGPT so candidates can search, compare and find roles in a more conversational way.',
    fullContent: 'ZipRecruiter is one of the clearest examples of a US HR company adapting to the new AI distribution layer. By launching a ChatGPT app, it is trying to meet job seekers where they already spend time and reduce the friction between intent and application. That is a meaningful shift from traditional job boards toward conversational job discovery.\n\nThe move also shows how HR platforms are competing not just on listings, but on interface design, discoverability and AI-enabled guidance. If a user can ask for a role in plain language and immediately narrow the search, the platform becomes far more sticky.',
    date: '2026-03-19',
    category: ['Product Launch', 'AI Distribution'],
    tags: ['Hiring', 'Job Search'],
    keywords: ['job-discovery', 'hiring', 'ai-agents'],
    impactLevel: 'High',
    companies: [{ en: 'ZipRecruiter', zh: 'ZipRecruiter' }],
    imageUrl: getImg(2),
    websiteUrl: 'https://www.ziprecruiter.com/blog/chatgpt-app/',
    zh: {
      title: 'ZipRecruiter 上线 ChatGPT 应用，重塑求职发现方式',
      summary: 'ZipRecruiter 把职位发现能力接入 ChatGPT，让求职者可以更自然地搜索、比较和找到岗位。',
      fullContent: 'ZipRecruiter 是美国 HR 公司中最早适应新一代 AI 分发层的典型案例之一。通过推出 ChatGPT 应用，它尝试让求职者在自己已经常用的对话环境里完成职位发现，减少从“有意向”到“投递申请”之间的摩擦，这比传统招聘网站更偏向对话式求职发现。\n\n这一动作也说明 HR 平台之间的竞争已不只是职位信息数量，而是入口设计、发现效率和 AI 引导能力。用户如果能直接用自然语言描述岗位需求并迅速缩小范围，平台的粘性会明显增强。',
      category: ['产品发布', 'AI 分发'],
      tags: ['招聘', '求职搜索'],
      keywords: ['职位发现', '用工招聘', 'AI 智能体'],
      impactLevel: 'High'
    }
  },
  {
    id: 'hr-peer-greenhouse-ai-interview-report',
    title: 'Greenhouse: 63% of Job Seekers Have Faced an AI Interview',
    summary: 'Greenhouse published a report showing how fast AI interviews are entering mainstream hiring and where candidate experiences still lag.',
    fullContent: 'Greenhouse is documenting a very important HR trend: AI interviews are no longer experimental. Its report shows that a large share of candidates has already encountered AI in the interview process, but many still feel the experience is poor or inconsistent. That tension matters because it affects employer brand, candidate conversion and trust in the hiring process.\n\nThe report is useful for HR peers because it reveals the gap between automation and actual candidate satisfaction. Companies may be adopting AI to save time, but the market is still deciding what a good AI interview experience should feel like.',
    date: '2026-05-01',
    category: ['Research', 'Candidate Experience'],
    tags: ['Recruiting', 'Assessment'],
    keywords: ['reporting', 'interviews', 'hiring'],
    impactLevel: 'High',
    companies: [{ en: 'Greenhouse', zh: 'Greenhouse' }],
    imageUrl: getImg(3),
    websiteUrl: 'https://www.greenhouse.com/newsroom/63-of-job-seekers-have-faced-an-ai-interview-most-havent-had-a-good-one-yet',
    zh: {
      title: 'Greenhouse：63% 的求职者已经遇到过 AI 面试',
      summary: 'Greenhouse 发布报告，展示 AI 面试如何快速进入主流招聘流程，以及候选人体验为何仍有差距。',
      fullContent: 'Greenhouse 正在记录一个非常重要的 HR 趋势：AI 面试已经不再是实验项目。它的报告显示，已有相当比例的候选人在面试中遇到过 AI，但很多人仍然认为体验不够好，或者不够一致。这一点很关键，因为它直接影响雇主品牌、候选人转化率以及整个招聘流程的信任感。\n\n这份报告对 HR 同行很有价值，因为它揭示了“自动化”与“候选人满意度”之间的差距。企业可以用 AI 节省时间，但行业仍在定义什么才算一个足够好的 AI 面试体验。',
      category: ['研究', '候选人体验'],
      tags: ['招聘', '评估'],
      keywords: ['行业报告', '面试', '用工招聘'],
      impactLevel: 'High'
    }
  },
  {
    id: 'hr-peer-manpowergroup-ai-interviewing',
    title: 'ManpowerGroup Scales Human-First AI Interviewing',
    summary: 'ManpowerGroup is pairing AI-assisted interviewing with human judgment to help companies digitize flexible staffing and handle large-scale hiring more consistently.',
    fullContent: 'ManpowerGroup is taking a human-first approach to AI in recruitment. Instead of replacing recruiters, its positioning is about digitizing flexible staffing and making hiring operations more manageable when volume spikes. That combination of AI support plus human oversight fits what many large employers want today.\n\nThe company\'s move also highlights how staffing firms are evolving: they are no longer just matching workers to roles, but becoming technology-enabled service providers that can handle screening, orchestration and candidate experience at scale.',
    date: '2026-03-03',
    category: ['Service Model', 'Hiring Operations'],
    tags: ['Recruiting', 'Enterprise Services'],
    keywords: ['interviews', 'talent-shortage', 'hiring'],
    impactLevel: 'Medium',
    companies: [{ en: 'ManpowerGroup', zh: 'ManpowerGroup' }],
    imageUrl: getImg(4),
    websiteUrl: 'https://www.manpowergroup.com/en/newsroom',
    zh: {
      title: 'ManpowerGroup 扩大“人机协同” AI 面试能力',
      summary: 'ManpowerGroup 通过 AI 辅助面试配合人工判断，帮助企业更稳定地应对大规模招聘，并推进灵活用工数字化。',
      fullContent: 'ManpowerGroup 采取的是一种“以人为本”的招聘 AI 路线。它并不是用 AI 替代招聘人员，而是把重点放在在高招聘量场景下提升面试一致性和运营可管理性。这种“AI 辅助 + 人工把关”的组合，正好符合许多大型雇主当前的需求。\n\n这也说明 staffing 公司正在转型：它们不再只是把人匹配到岗位，而是升级为技术型服务提供商，能够以更高效率完成筛选、流程编排、候选人体验管理和灵活用工数字化。',
      category: ['服务模型', '招聘运营'],
      tags: ['招聘', '企业服务'],
      keywords: ['面试', '人才短缺', '用工招聘'],
      impactLevel: 'Medium'
    }
  },
  {
    id: 'hr-peer-linkedin-talent-graph',
    title: 'LinkedIn Pushes Talent Intelligence Toward a Living Talent Graph',
    summary: 'LinkedIn is using skills data, profile signals and hiring workflows to turn talent discovery into a more connected graph experience.',
    fullContent: 'LinkedIn is not just a hiring marketplace anymore. Its real advantage is the talent graph: a dense layer of people, skills, jobs and career movement that can help recruiters understand where talent sits and how it changes over time. As LinkedIn keeps improving how signals, search and recommendations work together, it becomes more useful as a talent intelligence layer rather than a simple job board.\n\nFor HR peers, the takeaway is that data quality and graph depth are becoming strategic advantages. If a platform can connect people, skills and job demand more intelligently, it can support better sourcing, better matching and stronger hiring outcomes.',
    date: '2026-06-18',
    category: ['Platform Intelligence', 'Talent Graph'],
    tags: ['Recruiting', 'Marketplace'],
    keywords: ['matching', 'marketplace', 'global-hr'],
    impactLevel: 'High',
    companies: [{ en: 'LinkedIn', zh: 'LinkedIn' }],
    imageUrl: getImg(0),
    websiteUrl: 'https://business.linkedin.com/talent-solutions/blog',
    zh: {
      title: 'LinkedIn 将人才图谱做成“活”的招聘基础设施',
      summary: 'LinkedIn 用技能数据、档案信号和招聘工作流，把人才发现升级成更连通的人才图谱体验。',
      fullContent: 'LinkedIn 早已不只是招聘市场。它真正的优势是人才图谱：把人、技能、岗位和职业流动连接在一起的数据层，帮助招聘者理解人才在哪里，以及如何随时间变化。随着 LinkedIn 不断强化信号、搜索和推荐的协同，它更像人才情报层，而不只是职位板。\n\n对 HR 同行来说，关键启示是：数据质量和图谱深度正在变成战略优势。如果一个平台能更聪明地连接人、技能和岗位需求，它就能支持更好的搜寻、更好的匹配，以及更强的招聘结果。',
      category: ['平台智能', '人才图谱'],
      tags: ['招聘', '生态平台'],
      keywords: ['智能匹配', '生态平台', '全球用工'],
      impactLevel: 'High'
    }
  },
  {
    id: 'hr-peer-deel-global-payroll-saas',
    title: 'Deel Positions Payroll as a Global HR SaaS Layer',
    summary: 'Deel is building payroll, compliance and contractor operations into a single global HR software layer.',
    fullContent: 'Deel is one of the clearest examples of payroll becoming software infrastructure instead of a back-office task. By combining payroll, compliance, contractor management and global HR operations into one product layer, Deel makes it easier for companies to hire across borders without stitching together a separate stack for every market.\n\nFor HR tech peers, the important message is that payroll is now part of the broader SaaS control plane for distributed work. Companies want a system that can handle local rules, contractor workflows and employee lifecycle operations in one place.',
    date: '2026-06-20',
    category: ['Platform', 'Global Payroll'],
    tags: ['Payroll', 'Compliance'],
    keywords: ['global-hr', 'compliance', 'marketplace'],
    impactLevel: 'High',
    companies: [{ en: 'Deel', zh: 'Deel' }],
    imageUrl: getImg(1),
    websiteUrl: 'https://www.deel.com/global-payroll/',
    zh: {
      title: 'Deel 把薪酬做成全球 HR SaaS 层',
      summary: 'Deel 正在把薪酬、合规和外包人员管理整合成一个全球 HR 软件层。',
      fullContent: 'Deel 是最典型的一个例子：薪酬正在从后台事务，变成软件基础设施。通过把薪酬、合规、外包人员管理和全球 HR 运营整合到同一层产品里，Deel 让企业更容易跨国招聘，而不用为每个市场单独拼接系统。\n\n对 HR Tech 同行来说，重要信号是：薪酬已经成为分布式工作时代的 SaaS 控制平面。企业希望有一个系统，同时处理当地规则、外包流程和员工生命周期管理。',
      category: ['平台', '全球薪酬'],
      tags: ['薪酬', '合规'],
      keywords: ['全球用工', '合规', '生态平台'],
      impactLevel: 'High'
    }
  },
  {
    id: 'hr-peer-world-intec-manufacturing-outsourcing',
    title: 'World Intec Strengthens Manufacturing Outsourcing Services with Digital Operations',
    summary: 'World Intec focuses on manufacturing outsourcing and service operations for industrial clients in Japan.',
    fullContent: 'World Intec is a useful reminder that HR tech is not only about office hiring. In Japan, manufacturing outsourcing and staffing services still matter a great deal, especially when companies need stable labor supply, operational coverage and local execution at scale. World Intec\'s positioning shows how industrial outsourcing firms can become digital service operators rather than pure labor brokers.\n\nFor the HR market, this matters because industrial staffing and digital management are converging. The strongest players are the ones that can manage labor supply, site operations and service quality together.',
    date: '2026-06-24',
    category: ['Industrial Outsourcing', 'Service Operations'],
    tags: ['Staffing', 'Operations'],
    keywords: ['hiring', 'workforce', 'global-hr'],
    impactLevel: 'Medium',
    companies: [{ en: 'World Intec', zh: 'World Intec' }],
    imageUrl: getImg(2),
    websiteUrl: 'https://www.witc.co.jp/',
    zh: {
      title: 'World Intec 强化制造业外包与数字化运营',
      summary: 'World Intec 聚焦日本制造业外包与服务运营，面向工业客户提供稳定用工能力。',
      fullContent: 'World Intec 提醒我们：HR Tech 不只是办公室招聘。在日本，制造业外包和派遣服务依然非常重要，尤其是当企业需要稳定的劳动力供给、现场运营能力和规模化执行时。World Intec 的定位说明，工业外包公司也可以升级为数字化服务运营商，而不只是简单的人力中介。\n\n对 HR 市场来说，这一点很重要，因为工业派遣与数字化管理正在融合。真正强的公司，是能够把劳动力供给、现场运营和服务质量一起管理好的公司。',
      category: ['工业外包', '服务运营'],
      tags: ['派遣', '运营'],
      keywords: ['用工招聘', '劳动力', '全球用工'],
      impactLevel: 'Medium'
    }
  },
  {
    id: 'hr-peer-indeed-futureworks',
    title: 'Indeed FutureWorks 2025 Puts AI Hiring Front and Center',
    summary: 'Indeed and Recruit Holdings used FutureWorks 2025 to frame AI as a core part of job matching, search and hiring workflows.',
    fullContent: 'Indeed FutureWorks 2025 showed how Recruit Holdings is thinking about the future of hiring across its global platform. The event centered AI as a core layer of job search, matching and employer workflow design rather than as a side feature. That matters because Indeed remains one of the largest recruiting destinations in the world.\n\nFor the HR market, the message is clear: the biggest talent platforms are moving toward more intelligent matching and more guided hiring journeys. Recruit is pushing the same idea across its global footprint while keeping the core experience practical for both candidates and employers.',
    date: '2025-09-10',
    category: ['Conference', 'Platform Strategy'],
    tags: ['Hiring', 'Job Matching'],
    keywords: ['matching', 'job-discovery', 'recruiting'],
    impactLevel: 'High',
    companies: [{ en: 'Recruit Holdings', zh: 'Recruit控股' }],
    imageUrl: getImg(5),
    websiteUrl: 'https://recruit-holdings.com/en/newsroom/20250910_0001/',
    zh: {
      title: 'Indeed FutureWorks 2025 把 AI 招聘放到核心位置',
      summary: 'Indeed 与 Recruit Holdings 在 FutureWorks 2025 上强调，AI 已成为职位搜索、匹配和招聘流程的核心层。',
      fullContent: 'Indeed FutureWorks 2025 展现了 Recruit Holdings 对未来招聘的思考。大会把 AI 放在职位搜索、职位匹配和雇主工作流设计的核心，而不是作为附加功能。这一点很重要，因为 Indeed 仍然是全球最大的招聘入口之一。\n\n对 HR 市场来说，信号很明确：最大的招聘平台正转向更智能的匹配机制和更有引导性的求职流程。Recruit 正在全球业务里推进同样的方向，同时保持对求职者和雇主都足够实用。',
      category: ['会议', '平台战略'],
      tags: ['招聘', '职位匹配'],
      keywords: ['智能匹配', '职位发现', '招聘'],
      impactLevel: 'High'
    }
  },
  {
    id: 'hr-peer-persol-vahan',
    title: 'PERSOL Holdings Invests in Vahan to Strengthen AI Recruitment',
    summary: 'PERSOL backed the India-based hiring platform Vahan as part of a broader push to improve AI-enabled recruitment services.',
    fullContent: 'PERSOL Holdings is extending its recruiting capabilities beyond Japan by investing in Vahan, an India-based hiring platform focused on blue-collar recruitment. The deal reflects a common HR industry pattern: established staffing companies are looking for technology partners that can help them reach candidates faster and manage high-volume hiring with more precision.\n\nFor peers, the key takeaway is that international expansion and AI-enabled recruiting are becoming linked. Staffing and HR service firms want digital platforms that can support scale, local compliance and better matching at the same time.',
    date: '2025-02-07',
    category: ['Investment', 'International Expansion'],
    tags: ['Recruiting', 'Global HR'],
    keywords: ['global-hr', 'matching', 'compliance'],
    impactLevel: 'High',
    companies: [{ en: 'PERSOL Holdings', zh: 'PERSOL控股' }],
    imageUrl: getImg(6),
    websiteUrl: 'https://www.persol-group.co.jp/en/news/20250207_01/',
    zh: {
      title: 'PERSOL Holdings 投资 Vahan，强化 AI 招聘能力',
      summary: 'PERSOL 投资印度招聘平台 Vahan，推进面向 AI 招聘服务的国际化布局。',
      fullContent: 'PERSOL Holdings 通过投资印度招聘平台 Vahan，将招聘能力延伸到日本以外，重点面向蓝领招聘。这个动作反映出 HR 行业的一个常见趋势：成熟的人力资源公司正在寻找能帮助其更快触达候选人、并以更高精度处理高量招聘的技术伙伴。\n\n对同行来说，最重要的信号是：国际扩张和 AI 招聘正在越来越紧密地绑定在一起。 staffing 与 HR 服务公司都希望借助数字平台，同时解决规模、当地合规和更好匹配的问题。',
      category: ['投融资', '国际扩张'],
      tags: ['招聘', '全球用工'],
      keywords: ['全球用工', '智能匹配', '合规'],
      impactLevel: 'High'
    }
  }
];

export const getHrPeerArticleById = (id) => hrPeerArticles.find((item) => item.id === id) || null;
