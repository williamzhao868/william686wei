/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // No-op migration - emergency fix to unblock deployment
  // Original operation attempted to update articles with toolName='Read AI'
  // This migration intentionally does nothing to allow the migration system to proceed
}, (app) => {
  // No-op rollback
})
