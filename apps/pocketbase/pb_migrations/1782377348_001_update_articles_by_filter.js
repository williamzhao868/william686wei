/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  let records;
  try {
    records = app.findRecordsByFilter("articles", "type='A' && title='AI Insight Daily｜2026-06-12' && date='2026-06-12'");
  } catch (e) {
    if (e.message.includes("no rows in result set")) {
      console.log("No records found, skipping");
      return;
    }
    throw e;
  }
  
  for (const record of records) {
    record.set("pdfUrl", "https://engma-ai-lab-1447133791.cos.ap-shanghai.myqcloud.com/reports/pdf/Engma_A_AI_Insight_Daily_06122026.pdf");
    try {
      app.save(record);
    } catch (e) {
      if (e.message.includes("Value must be unique")) {
        console.log("Record with unique value already exists, skipping");
      } else {
        throw e;
      }
    }
  }
}, (app) => {
  // Rollback: original values not stored, manual restore needed
})