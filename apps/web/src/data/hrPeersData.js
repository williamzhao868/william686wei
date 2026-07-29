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

const rawHrPeerArticles = [
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
  },
{
  "id": "hr-peer-workday-learning-sana",
  "title": "Workday Learning, powered by Sana Becomes Generally Available",
  "summary": "Workday 把 Sana 的 AI-native learning 能力正式做成了可部署的企业学习层，继续往“岗位、技能、学习一体化”走。",
  "fullContent": "Workday Learning, powered by Sana 的意义，不只是又出了一个学习产品，而是 Workday 在把 HR 的核心能力往“技能驱动”的方向再往前推了一步。它把学习内容创建、个人化推荐、实时 tutor、课程更新和治理合规放到同一层里，让学习不再是 HR 后台的孤岛，而是工作流里的一部分。\n\n对同行来说，这个动作说明企业学习的竞争重点已经变了。过去大家比的是课程库多不多、后台稳不稳；现在大家比的是能不能把员工的岗位、技能、培训和成长路径连起来。如果学习系统不能接住 HCM 数据，它就很难真的成为企业的运营层。",
  "date": "2026-07-22",
  "category": [
    "Product Release",
    "Learning Platform"
  ],
  "tags": [
    "Learning",
    "Enterprise AI"
  ],
  "keywords": [
    "global-hr",
    "reporting",
    "ai-agents"
  ],
  "impactLevel": "High",
  "companies": [
    {
      "en": "Workday",
      "zh": "Workday"
    }
  ],
  "imageUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
  "websiteUrl": "https://www.workday.com/en-us/products/talent-management/learning.html",
  "zh": {
    "title": "Workday Learning, powered by Sana 正式进入可用阶段",
    "summary": "Workday 把 Sana 的 AI-native learning 能力正式做成企业可部署的学习层，继续推动岗位、技能和学习一体化。",
    "fullContent": "Workday Learning, powered by Sana 的意义，不只是又出了一个学习产品，而是 Workday 在把 HR 的核心能力往“技能驱动”的方向再往前推了一步。它把学习内容创建、个人化推荐、实时 tutor、课程更新和治理合规放到同一层里，让学习不再是 HR 后台的孤岛，而是工作流里的一部分。\n\n对同行来说，这个动作说明企业学习的竞争重点已经变了。过去大家比的是课程库多不多、后台稳不稳；现在大家比的是能不能把员工的岗位、技能、培训和成长路径连起来。如果学习系统不能接住 HCM 数据，它就很难真的成为企业的运营层。",
    "category": [
      "产品发布",
      "学习平台"
    ],
    "tags": [
      "学习",
      "企业 AI"
    ],
    "keywords": [
      "全球用工",
      "行业报告",
      "AI 智能体"
    ],
    "impactLevel": "High"
  }
},
{
  "id": "hr-peer-adp-ner-july-2026",
  "title": "ADP National Employment Report Still Reads Like a High-Frequency Labor Signal",
  "summary": "ADP 继续把工资和就业数据做成高频劳动力信号，这种数据层能力对 HR 和管理层都更有用。",
  "fullContent": "ADP 的 National Employment Report 一直是我认为很有代表性的 HR 数据产品。它不是在讲一个“招聘故事”，而是在用 payroll data 去构建劳动力市场的高频观察窗口。这个产品价值大，是因为它可以比月度宏观数据更快地告诉企业：招工有没有放缓、薪酬有没有变动、哪些行业更活跃。\n\n对 HR 行业来说，这种高频数据本身就是护城河。谁能把 payroll、pay insights 和管理决策连起来，谁就更像一个真正的运营平台，而不是单纯的薪酬系统。",
  "date": "2026-07-21",
  "category": [
    "Research",
    "Labor Market Data"
  ],
  "tags": [
    "Payroll",
    "Workforce Analytics"
  ],
  "keywords": [
    "reporting",
    "global-hr",
    "workforce"
  ],
  "impactLevel": "High",
  "companies": [
    {
      "en": "ADP",
      "zh": "ADP"
    }
  ],
  "imageUrl": "https://images.unsplash.com/photo-1677442135136-54c1f0f4e2a8?q=80&w=2070&auto=format&fit=crop",
  "websiteUrl": "https://adpemploymentreport.com/",
  "zh": {
    "title": "ADP National Employment Report 继续把劳动力数据做成高频信号",
    "summary": "ADP 继续把薪酬和就业数据做成高频劳动力市场信号，对 HR 和管理层都很有参考价值。",
    "fullContent": "ADP 的 National Employment Report 一直是我认为很有代表性的 HR 数据产品。它不是在讲一个“招聘故事”，而是在用 payroll data 去构建劳动力市场的高频观察窗口。这个产品价值大，是因为它可以比月度宏观数据更快地告诉企业：招工有没有放缓、薪酬有没有变动、哪些行业更活跃。\n\n对 HR 行业来说，这种高频数据本身就是护城河。谁能把 payroll、pay insights 和管理决策连起来，谁就更像一个真正的运营平台，而不是单纯的薪酬系统。",
    "category": [
      "研究",
      "劳动力数据"
    ],
    "tags": [
      "薪酬",
      "劳动力分析"
    ],
    "keywords": [
      "行业报告",
      "全球用工",
      "劳动力"
    ],
    "impactLevel": "High"
  }
},
{
  "id": "hr-peer-manpowergroup-q3-2026",
  "title": "ManpowerGroup Q3 2026 Employment Outlook Survey Keeps the Focus on Hiring Intentions",
  "summary": "ManpowerGroup 的 Q3 2026 调查继续强调招聘意愿、人才短缺和全球劳动力配置，这对大规模用工业务尤其关键。",
  "fullContent": "ManpowerGroup 的 Employment Outlook Survey 之所以值得看，不是因为它又给出了一个单独数字，而是因为它把全球雇主的招聘预期放在同一张图里看。对于 staffing 和用工服务公司来说，这类 survey 的意义很大：它能提前判断企业是在扩张、观望还是收缩。\n\n我的判断是，ManpowerGroup 这类公司最有价值的地方，不只是“帮你找人”，而是帮你理解“什么时候更难找人、什么行业更缺人、哪些地区更需要灵活用工”。这已经不是传统中介逻辑，而是劳动力配置逻辑。",
  "date": "2026-07-24",
  "category": [
    "Research",
    "Workforce Planning"
  ],
  "tags": [
    "Recruiting",
    "Talent Shortage"
  ],
  "keywords": [
    "talent-shortage",
    "workforce",
    "global-hr"
  ],
  "impactLevel": "High",
  "companies": [
    {
      "en": "ManpowerGroup",
      "zh": "ManpowerGroup"
    }
  ],
  "imageUrl": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
  "websiteUrl": "https://www.manpowergroup.com/en/insights/report/q3-2026-manpowergroup-employment-outlook-survey",
  "zh": {
    "title": "ManpowerGroup Q3 2026 Employment Outlook Survey 继续盯紧招聘意愿",
    "summary": "ManpowerGroup 的 Q3 2026 调查继续聚焦招聘预期、人才短缺和全球劳动力配置。",
    "fullContent": "ManpowerGroup 的 Employment Outlook Survey 之所以值得看，不是因为它又给出了一个单独数字，而是因为它把全球雇主的招聘预期放在同一张图里看。对于 staffing 和用工服务公司来说，这类 survey 的意义很大：它能提前判断企业是在扩张、观望还是收缩。\n\n我的判断是，ManpowerGroup 这类公司最有价值的地方，不只是“帮你找人”，而是帮你理解“什么时候更难找人、什么行业更缺人、哪些地区更需要灵活用工”。这已经不是传统中介逻辑，而是劳动力配置逻辑。",
    "category": [
      "研究",
      "劳动力规划"
    ],
    "tags": [
      "招聘",
      "人才短缺"
    ],
    "keywords": [
      "人才短缺",
      "劳动力",
      "全球用工"
    ],
    "impactLevel": "High"
  }
},
{
  "id": "hr-peer-persol-wiffy",
  "title": "PERSOL Holdings Invests in Wiffy to Strengthen Skilled Workforce Operations",
  "summary": "PERSOL 通过投资 Wiffy，把日本 HR 服务的能力继续往“技能型外包 + 数字化运营”方向往前推。",
  "fullContent": "PERSOL 投资 Wiffy 这件事，我会把它理解成一类非常典型的日本 HR 行业升级：它不只是把钱投到一个项目里，而是在寻找能够把“人力供给”变成“技能供给”的服务模式。Wiffy 本身做的是安装和售后服务，背后其实是一个很典型的 workforce development 模型：招聘、培训、派工、交付、再培训。\n\n这对 PERSOL 这样的公司很重要，因为它证明 HR 服务公司可以通过技术和流程设计，去做比传统派遣更深一层的事情。不是只卖人，而是卖稳定交付能力。",
  "date": "2026-07-15",
  "category": [
    "Investment",
    "Service Operations"
  ],
  "tags": [
    "Recruiting",
    "Global HR"
  ],
  "keywords": [
    "global-hr",
    "hiring",
    "marketplace"
  ],
  "impactLevel": "High",
  "companies": [
    {
      "en": "PERSOL Holdings",
      "zh": "PERSOL Holdings"
    }
  ],
  "imageUrl": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  "websiteUrl": "https://www.persol-group.co.jp/en/news/20260715_01/",
  "zh": {
    "title": "PERSOL Holdings 投资 Wiffy，强化技能型用工运营",
    "summary": "PERSOL 通过投资 Wiffy，把 HR 服务继续往“技能型外包 + 数字化运营”方向推进。",
    "fullContent": "PERSOL 投资 Wiffy 这件事，我会把它理解成一类非常典型的日本 HR 行业升级：它不只是把钱投到一个项目里，而是在寻找能够把“人力供给”变成“技能供给”的服务模式。Wiffy 本身做的是安装和售后服务，背后其实是一个很典型的 workforce development 模型：招聘、培训、派工、交付、再培训。\n\n这对 PERSOL 这样的公司很重要，因为它证明 HR 服务公司可以通过技术和流程设计，去做比传统派遣更深一层的事情。不是只卖人，而是卖稳定交付能力。",
    "category": [
      "投资",
      "服务运营"
    ],
    "tags": [
      "招聘",
      "全球用工"
    ],
    "keywords": [
      "全球用工",
      "招聘",
      "生态平台"
    ],
    "impactLevel": "High"
  }
},
{
  id: 'hr-peer-linkedin-hiring-assistant-international',
  title: 'LinkedIn Pushes Hiring Assistant Beyond Domestic Workflows',
  summary: 'LinkedIn keeps moving its Hiring Assistant concept toward international hiring workflows, which matters because the real challenge is not the demo, but whether the system can stay useful across markets, languages and recruiter habits.',
  fullContent: `LinkedIn's Hiring Assistant direction is interesting because it shows where the platform thinks the next layer of value sits: not just in sourcing candidates, but in helping recruiters move from search to action faster. When a product starts to handle more of the repetitive coordination around job discovery, outreach and candidate screening, the bar is no longer "does it work in one market?" The bar becomes "can it stay accurate, relevant and trusted when the recruiter stack gets more complex?"

The strategic point for HR peers is that LinkedIn is trying to turn its talent graph into an operational layer. That means recruiter workflows, profile signals, semantic search and AI-assisted actions have to work together. If the system cannot connect those pieces cleanly, it stays a feature. If it can, it becomes part of the recruiting operating model.`,
  date: '2026-06-08',
  category: ['Platform Intelligence', 'AI Recruiting'],
  tags: ['Recruiting', 'AI Agents'],
  keywords: ['ai-agents', 'matching', 'recruiting'],
  impactLevel: 'High',
  companies: [{ en: 'LinkedIn', zh: 'LinkedIn' }],
  imageUrl: getImg(0),
  websiteUrl: 'https://www.linkedin.com/blog/engineering/search-and-discovery',
  zh: {
    title: 'LinkedIn 把 Hiring Assistant 往国际化招聘场景推进',
    summary: 'LinkedIn 继续把 Hiring Assistant 往国际化招聘场景推进，关键不在演示本身，而在它能否跨市场、跨语言、跨招聘习惯保持可用。',
    fullContent: `LinkedIn 的 Hiring Assistant 方向很有意思，因为它说明平台认为下一层价值不只在“找人”，而是在帮助招聘者更快从搜索走向行动。 当产品开始处理更多围绕职位发现、触达候选人和筛选流程的重复性工作时，真正的门槛就不是“它在一个市场里能不能跑”，而是“它能不能在更复杂的招聘体系里依然准确、相关、可信”。

对 HR 同行来说，核心信号是：LinkedIn 正在尝试把人才图谱变成操作层。也就是说，招聘工作流、档案信号、语义搜索和 AI 辅助动作都必须协同起来。如果这些能力不能很好地串联起来，它只是一个功能；如果能串联起来，它就会变成招聘操作系统的一部分。`,
    category: ['平台智能', 'AI 招聘'],
    tags: ['招聘', 'AI 智能体'],
    keywords: ['AI 智能体', '智能匹配', '招聘'],
    impactLevel: 'High'
  }
},
{
  id: 'hr-peer-linkedin-semantic-search-scale',
  title: 'LinkedIn Treats Semantic Search as Core Infrastructure for Talent Discovery',
  summary: 'LinkedIn is moving recruiting search away from keyword matching and toward semantic understanding, which is the only way an AI-first talent graph can keep scaling cleanly.',
  fullContent: `Semantic search matters in HR because candidate discovery breaks down quickly when recruiters depend on exact keywords. LinkedIn's direction suggests that the company wants search to understand intent, skill adjacency and role context instead of only literal term matching. That is a big shift. Once search starts to understand meaning, it can support better recommendations, more useful ranking and less manual filtering.

The more important implication is architectural. A semantic layer only becomes valuable when it is wired into the platform's graph, ranking and recruiter workflows. Otherwise it stays a nice demo. LinkedIn's advantage is that it already sits on top of a dense talent network, so semantic search can improve the system without replacing the system.`,
  date: '2026-06-11',
  category: ['Search', 'Talent Discovery'],
  tags: ['Recruiting', 'Marketplace'],
  keywords: ['job-discovery', 'matching', 'global-hr'],
  impactLevel: 'High',
  companies: [{ en: 'LinkedIn', zh: 'LinkedIn' }],
  imageUrl: getImg(0),
  websiteUrl: 'https://www.linkedin.com/blog/engineering/search-and-discovery',
  zh: {
    title: 'LinkedIn 把语义搜索做成了人才发现的核心底座',
    summary: 'LinkedIn 正在把招聘搜索从关键词匹配推进到语义理解，这也是 AI 时代的人才图谱能够继续扩展的关键。',
    fullContent: `HR 场景里，语义搜索很重要，因为候选人发现很容易在“只认关键词”的模式里失真。LinkedIn 的方向说明，公司希望搜索理解的是意图、技能邻近关系和岗位上下文，而不是单纯的字面匹配。这是很大的变化。 一旦搜索开始理解语义，它就能支持更好的推荐、更有用的排序和更少的人工筛选。

更关键的是架构层面的变化。语义层只有真正接入图谱、排序和招聘工作流，才会变成有用的能力，否则只是一个漂亮演示。LinkedIn 的优势在于它已经坐在密集的人才网络上，所以语义搜索可以在不推翻底层系统的情况下提升整个平台。`,
    category: ['搜索', '人才发现'],
    tags: ['招聘', '生态平台'],
    keywords: ['职位发现', '智能匹配', '全球用工'],
    impactLevel: 'High'
  }
},
{
  id: 'hr-peer-greenhouse-structured-ai-hiring',
  title: 'Greenhouse Uses AI to Support Structured Hiring Instead of Replacing It',
  summary: 'Greenhouse is shaping its AI story around structured hiring, better note-taking and more consistent interviews, which is a more credible enterprise direction than trying to fully automate the process.',
  fullContent: `Greenhouse keeps taking the line that hiring should stay structured even when AI is added to the workflow. That matters because a lot of AI hiring products oversell automation and then run into trust problems. Greenhouse is taking a more practical route: reduce interviewer admin work, make notes cleaner, support consistency and preserve the human-led nature of hiring.

From a market point of view, this is a useful enterprise pattern. The strongest HR products are not the ones that remove people from the process entirely. They are the ones that make the process less messy, less repetitive and easier to govern. In hiring, that usually wins.`,
  date: '2026-06-10',
  category: ['Product Update', 'Candidate Experience'],
  tags: ['Recruiting', 'Assessment'],
  keywords: ['interviews', 'hiring', 'ai-agents'],
  impactLevel: 'High',
  companies: [{ en: 'Greenhouse', zh: 'Greenhouse' }],
  imageUrl: getImg(2),
  websiteUrl: 'https://www.greenhouse.com/newsroom',
  zh: {
    title: 'Greenhouse 用 AI 支持结构化招聘，而不是替代招聘',
    summary: 'Greenhouse 把 AI 叙事放在结构化招聘、面试记录和一致性上，这比完全自动化更像企业会买单的方向。',
    fullContent: `Greenhouse 一直坚持：即使加上 AI，招聘也应该保持结构化。这很重要，因为很多 AI 招聘产品把自动化说得太满，最后往往会遇到信任问题。Greenhouse 走的是更实用的一条路：减少面试官的行政负担，让记录更整齐，提升一致性，同时保留招聘的人主导属性。

从市场角度看，这是一种很有用的企业产品路径。真正强的 HR 产品，不是把人从流程里全部拿掉，而是让流程更少混乱、更少重复、也更容易治理。招聘场景里，这种思路通常更容易赢。`,
    category: ['产品更新', '候选人体验'],
    tags: ['招聘', '评估'],
    keywords: ['面试', '招聘', 'AI 智能体'],
    impactLevel: 'High'
  }
},
{
  id: 'hr-peer-deel-ai-payroll-compliance',
  title: 'Deel Keeps Building AI Around Payroll, Compliance and Workflow Guardrails',
  summary: 'Deel is pushing its AI story toward payroll accuracy, compliance support and operational guardrails, which is exactly where a global payroll SaaS player can create durable value.',
  fullContent: `Deel's real moat is not "AI for the sake of AI." It is the fact that payroll, compliance and contractor operations already sit inside a high-friction global workflow. That means AI can be used where it is actually useful: catching errors earlier, reducing manual review, supporting local rule handling and making distributed work a little less fragile.

For the HR tech market, Deel is a good reminder that the best AI use cases often show up in boring but expensive processes. When payroll and compliance are the parts that can break trust quickly, a small improvement in accuracy or review speed can be worth a lot.`,
  date: '2026-07-23',
  category: ['Platform', 'Global Payroll'],
  tags: ['Payroll', 'Compliance'],
  keywords: ['global-hr', 'compliance', 'workforce'],
  impactLevel: 'High',
  companies: [{ en: 'Deel', zh: 'Deel' }],
  imageUrl: getImg(1),
  websiteUrl: 'https://www.deel.com/blog',
  zh: {
    title: 'Deel 继续把 AI 用在薪酬、合规和流程护栏上',
    summary: 'Deel 的 AI 重点放在薪酬准确性、合规支持和运营护栏，这正是全球薪酬 SaaS 最容易形成长期价值的地方。',
    fullContent: `Deel 真正的护城河并不是“AI 这个词本身”，而是薪酬、合规和外包人员管理本来就处在高摩擦的全球工作流中。 这意味着 AI 应该被放到真正有用的地方：更早发现错误、减少人工复核、辅助处理当地规则，以及让分布式工作不要那么脆弱。

对 HR Tech 市场来说，Deel 提醒我们：最好的 AI 场景往往不在最炫的地方，而是在最贵、最容易出错的地方。薪酬和合规一旦出问题，信任成本很高；而哪怕只是提升一点点准确性或复核速度，价值都很大。`,
    category: ['平台', '全球薪酬'],
    tags: ['薪酬', '合规'],
    keywords: ['全球用工', '合规', '劳动力'],
    impactLevel: 'High'
  }
}
];

function enrichHrPeerArticle(article) {
  if (!article || String(article.fullContent || '').includes('## 对 Engma 的价值')) {
    return article;
  }

  const companyNames = (article.companies || [])
    .map((company) => company.zh || company.en || '')
    .filter(Boolean)
    .join('、');
  const englishCompanies = (article.companies || [])
    .map((company) => company.en || company.zh || '')
    .filter(Boolean)
    .join(', ');
  const focusCompanyText = companyNames || englishCompanies || '这类公司';
  const engmaAngle = `对 Engma 的启发：这条动向不只是“同行在做什么”，而是在告诉我们真正该盯的是 ${focusCompanyText} 背后的产品结构、交付节奏和商业路径。`;
  const opportunityText = `可落地机会：Engma 后面可以把这类信息继续拆成“产品信号 / 客户价值 / 组织影响 / 可复用表达”四层，直接服务内容输出、客户沟通和内部判断。`;
  const actionText = `我们可以怎么用：把它和 Engma 现有的洞察、工具测试、竞品监测串起来，形成更稳定的观察模板，帮助判断哪些能力值得继续追，哪些只是短期噪音。`;

  return {
    ...article,
    fullContent: `${article.fullContent || article.summary || ''}\n\n## 对 Engma 的价值\n\n${engmaAngle}\n\n${opportunityText}\n\n${actionText}`,
    zh: article.zh
      ? {
          ...article.zh,
          fullContent: `${article.zh.fullContent || article.zh.summary || article.fullContent || article.summary || ''}\n\n## 对 Engma 的价值\n\n${engmaAngle}\n\n${opportunityText}\n\n${actionText}`,
        }
      : article.zh,
  };
}

export const hrPeerArticles = rawHrPeerArticles.map(enrichHrPeerArticle);

export const getHrPeerArticleById = (id) => hrPeerArticles.find((item) => item.id === id) || null;
