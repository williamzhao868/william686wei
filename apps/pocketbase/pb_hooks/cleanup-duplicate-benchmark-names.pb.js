/// <reference path="../pb_data/types.d.ts" />
onRecordCreate((e) => {
  // Only process Type C records
  if (e.record.get("type") !== "C") {
    e.next();
    return;
  }

  const toolName = e.record.get("toolName");
  if (!toolName) {
    e.next();
    return;
  }

  // Clean up duplicate 'AI Tool Benchmark' or 'AI_Tool_Benchmark' references
  let cleanedName = toolName;
  
  // Pattern 1: Remove " AI Tool Benchmark" suffix (with space)
  cleanedName = cleanedName.replace(/\s+AI\s+Tool\s+Benchmark\s*$/i, "");
  
  // Pattern 2: Remove " AI_Tool_Benchmark" suffix (with underscore)
  cleanedName = cleanedName.replace(/\s+AI_Tool_Benchmark\s*$/i, "");
  
  // Pattern 3: Remove " AI Tool Benchmark Repo" suffix
  cleanedName = cleanedName.replace(/\s+AI\s+Tool\s+Benchmark\s+Repo\s*$/i, "");
  
  // Pattern 4: Remove " AI_Tool_Benchmark_Repo" suffix
  cleanedName = cleanedName.replace(/\s+AI_Tool_Benchmark_Repo\s*$/i, "");
  
  // Trim any extra whitespace
  cleanedName = cleanedName.trim();
  
  // Only update if the name actually changed
  if (cleanedName !== toolName) {
    e.record.set("toolName", cleanedName);
  }
  
  e.next();
}, "articles");

onRecordUpdate((e) => {
  // Only process Type C records
  if (e.record.get("type") !== "C") {
    e.next();
    return;
  }

  const toolName = e.record.get("toolName");
  if (!toolName) {
    e.next();
    return;
  }

  // Clean up duplicate 'AI Tool Benchmark' or 'AI_Tool_Benchmark' references
  let cleanedName = toolName;
  
  // Pattern 1: Remove " AI Tool Benchmark" suffix (with space)
  cleanedName = cleanedName.replace(/\s+AI\s+Tool\s+Benchmark\s*$/i, "");
  
  // Pattern 2: Remove " AI_Tool_Benchmark" suffix (with underscore)
  cleanedName = cleanedName.replace(/\s+AI_Tool_Benchmark\s*$/i, "");
  
  // Pattern 3: Remove " AI Tool Benchmark Repo" suffix
  cleanedName = cleanedName.replace(/\s+AI\s+Tool\s+Benchmark\s+Repo\s*$/i, "");
  
  // Pattern 4: Remove " AI_Tool_Benchmark_Repo" suffix
  cleanedName = cleanedName.replace(/\s+AI_Tool_Benchmark_Repo\s*$/i, "");
  
  // Trim any extra whitespace
  cleanedName = cleanedName.trim();
  
  // Only update if the name actually changed
  if (cleanedName !== toolName) {
    e.record.set("toolName", cleanedName);
  }
  
  e.next();
}, "articles");