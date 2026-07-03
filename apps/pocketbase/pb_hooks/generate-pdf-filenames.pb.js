/// <reference path="../pb_data/types.d.ts" />
// Safe date formatting function
function formatDateToMMDDYYYY(dateInput) {
  try {
    let date;
    
    if (!dateInput) {
      date = new Date();
    } else if (typeof dateInput === 'string') {
      date = new Date(dateInput);
    } else if (dateInput instanceof Date) {
      date = dateInput;
    } else {
      date = new Date();
    }
    
    if (isNaN(date.getTime())) {
      date = new Date();
    }
    
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    
    return month + day + year;
  } catch (err) {
    console.log('Error formatting date:', err.message);
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    return month + day + year;
  }
}

// Safe field access function
function getFieldValue(record, fieldName) {
  try {
    if (!record || typeof record.get !== 'function') {
      return null;
    }
    return record.get(fieldName) || null;
  } catch (err) {
    console.log('Error accessing field ' + fieldName + ':', err.message);
    return null;
  }
}

// Extract tool name from title (first 30 chars, remove special chars)
function extractToolName(title) {
  try {
    if (!title || typeof title !== 'string') {
      return 'Unknown';
    }
    const cleaned = title.substring(0, 30).replace(/[^a-zA-Z0-9_]/g, '_');
    return cleaned || 'Unknown';
  } catch (err) {
    console.log('Error extracting tool name:', err.message);
    return 'Unknown';
  }
}

// Generate PDF filename based on type and date
function generatePdfFileName(type, date, title) {
  try {
    const dateStr = formatDateToMMDDYYYY(date);
    
    if (type === 'A') {
      return 'Engma_A_AI_Insight_Daily_' + dateStr + '.pdf';
    } else if (type === 'C') {
      const toolName = extractToolName(title);
      return 'Engma_C_AI_Tool_Benchmark_' + toolName + '_' + dateStr + '.pdf';
    } else {
      return 'Engma_Article_' + dateStr + '.pdf';
    }
  } catch (err) {
    console.log('Error generating PDF filename:', err.message);
    return 'Engma_Article_' + formatDateToMMDDYYYY(null) + '.pdf';
  }
}

// Hook: Generate pdfFileName on record creation
onRecordAfterCreateSuccess((e) => {
  try {
    const currentPdfFileName = getFieldValue(e.record, 'pdfFileName');
    
    // Only generate if pdfFileName is empty
    if (!currentPdfFileName) {
      const type = getFieldValue(e.record, 'type');
      const date = getFieldValue(e.record, 'date');
      const title = getFieldValue(e.record, 'title');
      
      const newPdfFileName = generatePdfFileName(type, date, title);
      
      e.record.set('pdfFileName', newPdfFileName);
      $app.save(e.record);
      
      console.log('Generated pdfFileName for new article: ' + newPdfFileName);
    }
  } catch (err) {
    console.log('Error in onRecordAfterCreateSuccess:', err.message);
  }
  
  e.next();
}, 'articles');

// Hook: Regenerate pdfFileName on record update if type or date changed
onRecordAfterUpdateSuccess((e) => {
  try {
    const original = e.record.original();
    const originalType = original ? original.get('type') : null;
    const originalDate = original ? original.get('date') : null;
    
    const currentType = getFieldValue(e.record, 'type');
    const currentDate = getFieldValue(e.record, 'date');
    const currentTitle = getFieldValue(e.record, 'title');
    
    // Regenerate if type or date changed
    if (originalType !== currentType || originalDate !== currentDate) {
      const newPdfFileName = generatePdfFileName(currentType, currentDate, currentTitle);
      
      e.record.set('pdfFileName', newPdfFileName);
      $app.save(e.record);
      
      console.log('Regenerated pdfFileName after update: ' + newPdfFileName);
    }
  } catch (err) {
    console.log('Error in onRecordAfterUpdateSuccess:', err.message);
  }
  
  e.next();
}, 'articles');