/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("articles");

  const record0 = new Record(collection);
    record0.id = "5vzrdfnlduzqmws";
    record0.set("title", "Test Article 1");
    record0.set("content", "Test content 1");
    record0.set("date", "2026-06-25");
    record0.set("category", "Test");
    record0.set("description", "Test description 1");
    record0.set("author", "Test Author");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["5vzrdfnlduzqmws"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("articles", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})