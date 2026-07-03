/// <reference path="../pb_data/types.d.ts" />

// This hook has been disabled due to a runtime error.
// Original error: TypeError: Object has no member requireAdminAuth at pb.js:67:26(6)
// 
// To re-enable this hook, fix the requireAdminAuth issue and replace this file.
// The hook is now a no-op that safely passes through all events.

onRecordCreateRequest((e) => {
  e.next();
}, "articles");

onRecordUpdateRequest((e) => {
  e.next();
}, "articles");

onRecordDeleteRequest((e) => {
  e.next();
}, "articles");

onRecordsListRequest((e) => {
  e.next();
}, "articles");

onRecordViewRequest((e) => {
  e.next();
}, "articles");