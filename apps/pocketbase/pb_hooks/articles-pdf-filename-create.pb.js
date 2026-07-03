// Hook: Auto-correct pdfFileName on article creation
onRecordAfterCreateSuccess((e) => {
  // DISABLED: correctPdfFileName function is not defined
  // This hook previously called correctPdfFileName(e.record)
  // Commenting out to prevent ReferenceError
  
  // TODO: Implement correctPdfFileName function or remove this hook
  // correctPdfFileName(e.record);
  
  e.next();
}, "articles");