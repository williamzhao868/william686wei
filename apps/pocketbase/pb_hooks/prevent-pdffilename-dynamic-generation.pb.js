/// <reference path="../pb_data/types.d.ts" />
// This hook prevents dynamic generation of pdfFileName field
// It ensures pdfFileName uses only stored database values without modification

onRecordCreate((e) => {
  // On create, preserve the pdfFileName value as-is from the request
  // Do not allow any dynamic generation based on current date
  e.next();
}, "articles");

onRecordUpdate((e) => {
  // On update, preserve the original pdfFileName value if not explicitly changed
  const original = e.record.original();
  const originalPdfFileName = original.get("pdfFileName");
  const newPdfFileName = e.record.get("pdfFileName");
  
  // If pdfFileName was not explicitly set in the update request,
  // restore the original value to prevent dynamic generation
  if (newPdfFileName === "" || newPdfFileName === null || newPdfFileName === undefined) {
    e.record.set("pdfFileName", originalPdfFileName);
  }
  
  e.next();
}, "articles");