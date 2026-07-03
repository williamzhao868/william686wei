/*
Template for 'A' items (最新洞察与出版物 / AI Insight Daily):
{
  id: 'a-001',
  title: 'Sample Article Title (示例文章标题)',
  date: '2026-06-25',
  category: 'Research',
  summary: 'A brief summary of the article. (文章的简短摘要。)',
  pdfFileName: 'sample-report.pdf'
}

To add new items, create an object matching the structure above and add it to the rawInsightsData array.
*/

const rawInsightsData = [];

// Export articles sorted by date descending (newest first)
export const insightsData = rawInsightsData.sort((a, b) => new Date(b.date) - new Date(a.date));