// Hook: Batch correct pdfFileName (disabled)
onRecordAfterCreateSuccess((e) => {
  // DISABLED: correctPdfFileName function is not defined
  // This hook previously attempted to batch correct pdfFileName
  // Commenting out to prevent ReferenceError
  
  // TODO: Implement batch correction logic or remove this hook
  // const articles = $app.findRecordsByFilter("articles", "pdfFileName != ''");
  // articles.forEach(article => correctPdfFileName(article));
  
  e.next();
}, "articles");