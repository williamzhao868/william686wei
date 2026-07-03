/// <reference path="../pb_data/types.d.ts" />
onRecordCreate((e) => {
  const type = e.record.get("type");
  const date = e.record.get("date");
  const title = e.record.get("title");
  const toolName = e.record.get("toolName");
  
  let pdfFileName = "";
  
  if (date) {
    // Parse date and format as MMDDYYYY
    const dateObj = new Date(date);
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const formattedDate = month + day + year;
    
    if (type === "A") {
      pdfFileName = "Engma_A_AI_Insight_Daily_" + formattedDate + ".pdf";
    } else if (type === "C") {
      // Extract toolName from title if toolName field is empty
      let extractedToolName = toolName || title || "";
      // Remove special characters and replace with underscores
      extractedToolName = extractedToolName.replace(/[^a-zA-Z0-9]/g, "_");
      // Remove leading/trailing underscores and collapse multiple underscores
      extractedToolName = extractedToolName.replace(/^_+|_+$/g, "").replace(/_+/g, "_");
      pdfFileName = "Engma_C_AI_Tool_Benchmark_" + extractedToolName + "_" + formattedDate + ".pdf";
    } else {
      pdfFileName = "Engma_Article_" + formattedDate + ".pdf";
    }
  }
  
  if (pdfFileName) {
    e.record.set("pdfFileName", pdfFileName);
  }
  
  e.next();
}, "articles");

onRecordUpdate((e) => {
  const type = e.record.get("type");
  const date = e.record.get("date");
  const title = e.record.get("title");
  const toolName = e.record.get("toolName");
  
  let pdfFileName = "";
  
  if (date) {
    // Parse date and format as MMDDYYYY
    const dateObj = new Date(date);
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const formattedDate = month + day + year;
    
    if (type === "A") {
      pdfFileName = "Engma_A_AI_Insight_Daily_" + formattedDate + ".pdf";
    } else if (type === "C") {
      // Extract toolName from title if toolName field is empty
      let extractedToolName = toolName || title || "";
      // Remove special characters and replace with underscores
      extractedToolName = extractedToolName.replace(/[^a-zA-Z0-9]/g, "_");
      // Remove leading/trailing underscores and collapse multiple underscores
      extractedToolName = extractedToolName.replace(/^_+|_+$/g, "").replace(/_+/g, "_");
      pdfFileName = "Engma_C_AI_Tool_Benchmark_" + extractedToolName + "_" + formattedDate + ".pdf";
    } else {
      pdfFileName = "Engma_Article_" + formattedDate + ".pdf";
    }
  }
  
  if (pdfFileName) {
    e.record.set("pdfFileName", pdfFileName);
  }
  
  e.next();
}, "articles");