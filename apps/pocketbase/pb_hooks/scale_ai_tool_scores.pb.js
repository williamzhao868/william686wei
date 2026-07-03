/// <reference path="../pb_data/types.d.ts" />
onRecordUpdate((e) => {
  // Only process articles with type='C' (AI tools)
  if (e.record.get("type") === "C") {
    const currentScore = e.record.get("score");
    // Only update if score exists and is not null
    if (currentScore !== null && currentScore !== undefined && currentScore !== "") {
      const scaledScore = currentScore / 2;
      e.record.set("score", scaledScore);
    }
  }
  e.next();
}, "articles");