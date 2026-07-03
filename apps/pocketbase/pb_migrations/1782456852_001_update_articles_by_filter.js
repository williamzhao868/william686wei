/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // No-op migration - original logic used invalid API (app.findRecordsByFilter does not exist)
}, (app) => {
  // No-op rollback
})
