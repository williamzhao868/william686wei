/*
Template for 'C' items (AI 工具 / AI Tool Benchmark Report):
{
  id: 'c-001',
  toolName: 'Sample AI Tool (示例AI工具)',
  date: '2026-06-25',
  website: 'https://example.com',
  shortDescription: 'A brief description of the tool. (工具的简短描述。)',
  testTask: 'Description of the test scenario. (测试任务描述。)',
  result: 'Outcome of the test. (测试结果。)',
  prosAndCons: { 
    pros: ['Pro 1 (优点1)', 'Pro 2 (优点2)'], 
    cons: ['Con 1 (缺点1)'] 
  },
  recommendationScore: 9.5, // Numeric score
  fullContent: '<p>Full detailed review and findings. (详细评测内容。)</p>',
  pdfFileName: 'benchmark-001.pdf' // Optional
}
*/

const rawAiToolsData = [
  // Demo content has been removed to provide a clean reusable data structure.
  /*
  {
    id: 'c-demo-1',
    toolName: 'ChatGPT (GPT-4o)',
    date: '2026-06-20',
    website: 'https://chatgpt.com',
    shortDescription: 'Leading conversational AI by OpenAI with robust multimodal capabilities.',
    testTask: 'Complex logical reasoning and code generation.',
    result: 'Successfully completed 95% of tasks without human intervention.',
    prosAndCons: {
      pros: ['Highly versatile', 'Excellent conversational memory'],
      cons: ['Can occasionally hallucinate facts']
    },
    recommendationScore: 9.5,
    fullContent: '<p>In-depth analysis of GPT-4o capabilities...</p>',
    pdfFileName: 'gpt4o-benchmark.pdf'
  }
  */
];

// Export sorted by date descending (newest first)
export const aiToolsData = rawAiToolsData.sort((a, b) => new Date(b.date) - new Date(a.date));