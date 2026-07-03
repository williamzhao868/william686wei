/// <reference path="../pb_data/types.d.ts" />
onRecordUpdate((e) => {
  // Only process articles with type='C' that have a score
  if (e.record.get("type") === "C" && e.record.get("score") !== null && e.record.get("score") !== undefined) {
    const currentScore = e.record.get("score");
    const convertedScore = currentScore / 2;
    e.record.set("score", convertedScore);
  }
  e.next();
}, "articles");