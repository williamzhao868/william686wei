/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // No-op migration - skipping protected field modification
  // Original intent: update pdfFileName for records with toolName='Wispr Flow'
  // Skipped because pdfFileName is protected by hook
}, (app) => {
  // No-op rollback
})
