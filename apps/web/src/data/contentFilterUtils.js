const keywordDefinitions = [
  { id: 'agents', en: 'Agents', zh: '智能体', terms: ['agent', 'agents', '智能体', '数字员工'] },
  { id: 'enterprise-ai', en: 'Enterprise AI', zh: '企业 AI', terms: ['enterprise ai', '企业 ai', '企业级 ai'] },
  { id: 'foundation-models', en: 'Foundation Models', zh: '基础模型', terms: ['foundation model', 'large language model', 'llm', '大模型', '基础模型'] },
  { id: 'coding', en: 'AI Coding', zh: 'AI 编程', terms: ['coding', 'code', '编程', '代码', '开发者'] },
  { id: 'productivity', en: 'Productivity', zh: '生产力', terms: ['productivity', 'workflow', '办公', '生产力', '工作流'] },
  { id: 'automation', en: 'Automation', zh: '自动化', terms: ['automation', 'automated', '自动化', '自动执行'] },
  { id: 'multimodal', en: 'Multimodal', zh: '多模态', terms: ['multimodal', '多模态', '图像', '视频生成'] },
  { id: 'robotics', en: 'Robotics', zh: '机器人', terms: ['robot', 'robotics', '机器人', '具身智能', 'physical ai'] },
  { id: 'hrtech', en: 'HRTech', zh: '人力资源科技', terms: ['hrtech', 'hr tech', 'human resources', '招聘', '人力资源', '人才'] },
  { id: 'cloud', en: 'Cloud & Compute', zh: '云与算力', terms: ['cloud', 'compute', 'gpu', '云计算', '算力', '芯片'] },
  { id: 'open-source', en: 'Open Source', zh: '开源生态', terms: ['open source', 'open-source', '开源'] },
  { id: 'security', en: 'AI Security', zh: 'AI 安全', terms: ['security', 'safety', '安全', '合规'] },
  { id: 'research', en: 'AI Research', zh: 'AI 研究', terms: ['research', 'benchmark', '研究', '评测', '基准'] },
  { id: 'investment', en: 'Investment', zh: '投融资', terms: ['funding', 'investment', '融资', '投资', '收购'] },
  { id: 'data', en: 'Data & RAG', zh: '数据与 RAG', terms: ['rag', 'data', 'knowledge base', '数据', '知识库'] },
];

const companyDefinitions = [
  { en: 'OpenAI', zh: 'OpenAI', terms: ['openai', 'chatgpt', 'codex'] },
  { en: 'Anthropic', zh: 'Anthropic', terms: ['anthropic', 'claude'] },
  { en: 'Microsoft', zh: '微软', terms: ['microsoft', '微软', 'copilot'] },
  { en: 'Google', zh: '谷歌', terms: ['google', '谷歌', 'gemini'] },
  { en: 'Meta', zh: 'Meta', terms: ['meta', 'llama'] },
  { en: 'NVIDIA', zh: '英伟达', terms: ['nvidia', '英伟达'] },
  { en: 'Apple', zh: '苹果', terms: ['apple', '苹果', 'siri'] },
  { en: 'Amazon', zh: '亚马逊', terms: ['amazon', '亚马逊', 'aws'] },
  { en: 'Alibaba', zh: '阿里巴巴', terms: ['alibaba', '阿里', 'qwen', '千问'] },
  { en: 'Tencent', zh: '腾讯', terms: ['tencent', '腾讯', '混元', 'hunyuan'] },
  { en: 'Baidu', zh: '百度', terms: ['baidu', '百度', '文心'] },
  { en: 'ByteDance', zh: '字节跳动', terms: ['bytedance', '字节', '豆包'] },
  { en: 'Huawei', zh: '华为', terms: ['huawei', '华为', '盘古'] },
  { en: 'Moka', zh: 'Moka', terms: ['moka'] },
  { en: 'Beisen', zh: '北森', terms: ['beisen', '北森'] },
  { en: 'Asana', zh: 'Asana', terms: ['asana'] },
  { en: 'Notion', zh: 'Notion', terms: ['notion'] },
  { en: 'Perplexity', zh: 'Perplexity', terms: ['perplexity'] },
  { en: 'Midjourney', zh: 'Midjourney', terms: ['midjourney'] },
  { en: 'Mistral', zh: 'Mistral', terms: ['mistral'] },
];

const searchableText = (item) => [
  item.title,
  item.toolName,
  item.summary,
  item.shortDescription,
  item.fullDescription,
  item.content,
  item.contentMarkdown,
].filter(Boolean).join(' ').toLowerCase();

const includesTerm = (text, term) => {
  const normalizedTerm = term.toLowerCase();
  if (/^[a-z0-9 .+-]+$/.test(normalizedTerm)) {
    const escaped = normalizedTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, 'i').test(text);
  }
  return text.includes(normalizedTerm);
};

export const enrichContentForFilters = (item) => {
  const text = searchableText(item);
  const keywords = keywordDefinitions
    .filter((definition) => definition.terms.some((term) => includesTerm(text, term)))
    .map((definition) => definition.id);
  const companies = companyDefinitions
    .filter((definition) => definition.terms.some((term) => includesTerm(text, term)))
    .map(({ en, zh }) => ({ en, zh }));

  return { ...item, filterKeywords: keywords, companies };
};

export const buildKeywordCloudData = (items) => keywordDefinitions
  .map((definition) => ({
    ...definition,
    count: items.filter((item) => item.filterKeywords?.includes(definition.id)).length,
  }))
  .filter((definition) => definition.count > 0)
  .sort((a, b) => b.count - a.count)
  .slice(0, 15);

