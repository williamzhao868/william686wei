/*
Template for 'A' items (最新洞察与出版物 / AI Insight Daily):
{
  id: 'a-001',
  title: 'Sample Article Title (示例文章标题)',
  date: '2026-06-25',
  category: 'Research',
  summary: 'A brief summary of the article. (文章的简短摘要。)',
  fullContent: '<p>The full HTML content of the article goes here. (文章的完整HTML内容。)</p>',
  pdfFileName: 'sample-report.pdf', // Optional
  keywords: ['kw-001', 'kw-002'] // Optional array of keyword IDs
}
*/

const rawArticlesData = [
  {
    id: 'a-001',
    title: 'OpenAI 与 Broadcom 推 Jalapeño，推理成本战正式加速',
    date: '2026-06-25',
    category: 'Industry News',
    summary: 'OpenAI and Broadcom launch Jalapeño, accelerating the inference cost war. This move signals a major shift in how AI hardware economics will play out in the coming years.',
    fullContent: '<p>OpenAI and Broadcom have officially announced their joint project, Jalapeño, aimed at drastically reducing the cost of AI inference. As models grow larger, the focus has shifted from training to deployment efficiency. This partnership leverages Broadcom\'s custom silicon expertise with OpenAI\'s algorithmic efficiency to create a highly optimized inference engine.</p><h2>The Impact on the Market</h2><p>By lowering the barrier to entry for running massive language models, Jalapeño is expected to disrupt the current hardware monopoly and accelerate the adoption of generative AI across various enterprise sectors.</p>',
    keywords: ['kw-001', 'kw-008']
  },
  {
    id: 'a-002',
    title: 'Anthropic 推 Claude Tag，企业 Agent 开始进入 Slack 工作流',
    date: '2026-06-24',
    category: 'Product Update',
    summary: 'Anthropic launches Claude Tag, bringing enterprise agents directly into Slack workflows, enabling seamless team collaboration with AI.',
    fullContent: '<p>Anthropic has introduced Claude Tag, a new feature that integrates its powerful AI agents directly into Slack. This allows enterprise teams to tag Claude in ongoing conversations to summarize threads, generate reports, and execute automated tasks without leaving their primary communication platform.</p><h2>Seamless Integration</h2><p>Unlike previous chatbots, Claude Tag acts as an active participant in the workspace, capable of understanding complex context and executing multi-step workflows securely within the enterprise environment.</p>',
    keywords: ['kw-002', 'kw-006']
  },
  {
    id: 'a-003',
    title: 'Qualcomm 收购 Modular，AI 软件栈变成芯片竞争关键',
    date: '2026-06-23',
    category: 'Acquisition',
    summary: 'Qualcomm acquires Modular, highlighting that AI software stacks have become the critical battleground for chip manufacturers.',
    fullContent: '<p>In a strategic move to bolster its AI capabilities, Qualcomm has acquired Modular. This acquisition underscores the industry-wide realization that hardware alone is no longer sufficient; a robust, developer-friendly AI software stack is essential for market dominance.</p><h2>Software as the Differentiator</h2><p>Modular\'s expertise in creating unified, efficient AI development environments will allow Qualcomm to offer a more compelling ecosystem for developers, directly challenging competitors who have historically dominated the AI software landscape.</p>',
    keywords: ['kw-003', 'kw-011']
  }
];

// Export articles sorted by date descending (newest first)
export const articlesData = rawArticlesData.sort((a, b) => new Date(b.date) - new Date(a.date));

// Export predefined keywords for the KeywordCloud component
export const keywordsData = [
  { id: 'kw-001', zh: '大语言模型', en: 'LLM' },
  { id: 'kw-002', zh: '生成式AI', en: 'Generative AI' },
  { id: 'kw-003', zh: '机器学习', en: 'Machine Learning' },
  { id: 'kw-004', zh: '神经网络', en: 'Neural Networks' },
  { id: 'kw-005', zh: '计算机视觉', en: 'Computer Vision' },
  { id: 'kw-006', zh: '自然语言处理', en: 'NLP' },
  { id: 'kw-007', zh: '多模态', en: 'Multimodal' },
  { id: 'kw-008', zh: '开源生态', en: 'Open Source' },
  { id: 'kw-009', zh: 'AI伦理', en: 'AI Ethics' },
  { id: 'kw-010', zh: '强化学习', en: 'Reinforcement Learning' },
  { id: 'kw-011', zh: '边缘计算', en: 'Edge Computing' },
  { id: 'kw-012', zh: '自动驾驶', en: 'Autonomous Driving' }
];