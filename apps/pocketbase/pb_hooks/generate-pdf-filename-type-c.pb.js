/// <reference path="../pb_data/types.d.ts" />
onRecordCreate((e) => {
  if (e.record.get("type") === "C") {
    const toolName = e.record.get("toolName") || e.record.get("title") || "";
    
    // Replace spaces with underscores
    let cleanName = toolName.replace(/\s+/g, "_");
    
    // Remove or replace special characters - keep only letters, numbers, underscores
    cleanName = cleanName.replace(/[^a-zA-Z0-9_]/g, "");
    
    // Generate date in MMDDYYYY format
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const year = now.getFullYear();
    const dateStr = month + day + year;
    
    // Generate filename: Engma_C_AI_Tool_Benchmark_{toolName_with_underscores}_{MMDDYYYY}.pdf
    const pdfFileName = "Engma_C_AI_Tool_Benchmark_" + cleanName + "_" + dateStr + ".pdf";
    
    e.record.set("pdfFileName", pdfFileName);
  }
  e.next();
}, "articles");

onRecordUpdate((e) => {
  if (e.record.get("type") === "C") {
    const toolName = e.record.get("toolName") || e.record.get("title") || "";
    
    // Replace spaces with underscores
    let cleanName = toolName.replace(/\s+/g, "_");
    
    // Remove or replace special characters - keep only letters, numbers, underscores
    cleanName = cleanName.replace(/[^a-zA-Z0-9_]/g, "");
    
    // Generate date in MMDDYYYY format
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const year = now.getFullYear();
    const dateStr = month + day + year;
    
    // Generate filename: Engma_C_AI_Tool_Benchmark_{toolName_with_underscores}_{MMDDYYYY}.pdf
    const pdfFileName = "Engma_C_AI_Tool_Benchmark_" + cleanName + "_" + dateStr + ".pdf";
    
    e.record.set("pdfFileName", pdfFileName);
  }
  e.next();
}, "articles");