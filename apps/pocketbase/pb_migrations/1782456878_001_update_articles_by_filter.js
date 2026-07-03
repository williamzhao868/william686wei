/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("articles");
  if (!collection) {
    console.log("Collection 'articles' not found, skipping");
    return;
  }

  // Query all records matching the filter
  const records = [];
  try {
    const result = app.findRecordsByExpr("articles", $dbx.exp("toolName = {:toolName}", {toolName: "Readywhen"}));
    result.forEach((record) => {
      records.push(record);
    });
  } catch (e) {
    console.log("No records found or error querying: " + e.message);
    return;
  }
  
  // Update each matching record
  for (let i = 0; i < records.length; i++) {
    const record = records[i];
    record.set("pdfFileName", "Engma_C_AI_Tool_Benchmark_Readywhen_06242026.pdf");
    try {
      app.save(record);
    } catch (e) {
      if (e.message && e.message.includes("Value must be unique")) {
        console.log("Record with unique value already exists, skipping");
      } else {
        throw e;
      }
    }
  }
}, (app) => {
  // Rollback: original values not stored, manual restore needed
})
