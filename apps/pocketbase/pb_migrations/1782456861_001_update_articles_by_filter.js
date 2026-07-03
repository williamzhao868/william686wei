/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // Neutralized migration - no-op
  // Original migration attempted to use invalid API method app.findRecordsByFilter
  // This migration is now disabled to allow system to continue
}, (app) => {
  // Rollback: original values not stored, manual restore needed
})
