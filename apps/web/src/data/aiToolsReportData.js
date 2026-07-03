
/*
Template for 'C' items (AI 工具 / AI Tool Benchmark Report):
Data migrated to 5-point scale (original score ÷ 2).
*/

const rawAiToolsReportData = [
  {
    id: 'c-001',
    toolName: 'ChatGPT-4 Omni Benchmark',
    date: '2026-06-25',
    category: 'Text Generation',
    shortDescription: 'A comprehensive evaluation of GPT-4o capabilities in reasoning, coding, and multilingual tasks.',
    pdfFileName: 'benchmark-gpt4o.pdf',
    score: 4.5, // Converted from 9.0/10
    maxScore: 5
  },
  {
    id: 'c-002',
    toolName: 'Claude 3.5 Sonnet Analysis',
    date: '2026-06-20',
    category: 'Text Generation',
    shortDescription: 'In-depth review of execution speed, context window handling, and vision capabilities.',
    pdfFileName: 'benchmark-claude35.pdf',
    score: 4.8, // Converted from 9.6/10
    maxScore: 5
  },
  {
    id: 'c-003',
    toolName: 'Midjourney v6.1 Evaluation',
    date: '2026-06-15',
    category: 'Image Generation',
    shortDescription: 'Detailed assessment of prompt adherence, text rendering, and photorealism improvements.',
    pdfFileName: 'benchmark-mj61.pdf',
    score: 4.2, // Converted from 8.4/10
    maxScore: 5
  },
  {
    id: 'c-004',
    toolName: 'Sora Video Generation Report',
    date: '2026-05-10',
    category: 'Video Generation',
    shortDescription: 'Early access benchmark evaluating temporal consistency and physical simulation fidelity.',
    pdfFileName: 'benchmark-sora.pdf',
    score: 4.0, // Converted from 8.0/10
    maxScore: 5
  }
];

// Export sorted by date descending (newest first)
export const aiToolsReportData = rawAiToolsReportData.sort((a, b) => new Date(b.date) - new Date(a.date));
