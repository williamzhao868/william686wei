/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("articles");

  const record0 = new Record(collection);
    record0.set("title", "Breakthrough in Neural Network Efficiency");
    record0.set("content", "Engma AI Lab announces a major breakthrough in developing more efficient neural networks that reduce computational costs by 40% while maintaining accuracy.");
    record0.set("author", "Dr. Sarah Chen");
    record0.set("date", "2026-05-15");
    record0.set("category", "Research");
    record0.set("description", "Engma AI Lab announces a major breakthrough in developing more efficient neural networks that reduce computational costs by 40% while maintaining accuracy.");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("title", "Machine Learning Transforms Healthcare Diagnostics");
    record1.set("content", "Our latest research demonstrates how machine learning models can improve medical image analysis accuracy, enabling faster and more reliable disease detection.");
    record1.set("author", "Prof. James Mitchell");
    record1.set("date", "2026-05-08");
    record1.set("category", "Applications");
    record1.set("description", "Our latest research demonstrates how machine learning models can improve medical image analysis accuracy, enabling faster and more reliable disease detection.");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.set("title", "Responsible AI: Building Trust in Autonomous Systems");
    record2.set("content", "Engma AI Lab releases comprehensive guidelines for developing AI systems that prioritize safety, transparency, and ethical considerations in real-world applications.");
    record2.set("author", "Dr. Lisa Wong");
    record2.set("date", "2026-04-28");
    record2.set("category", "Ethics");
    record2.set("description", "Engma AI Lab releases comprehensive guidelines for developing AI systems that prioritize safety, transparency, and ethical considerations in real-world applications.");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.set("title", "The Future of AI: Multimodal Learning and Beyond");
    record3.set("content", "Exploring the next frontier of AI research: multimodal learning systems that can process and understand text, images, and audio simultaneously for more intelligent applications.");
    record3.set("author", "Dr. Michael Zhang");
    record3.set("date", "2026-04-15");
    record3.set("category", "Research");
    record3.set("description", "Exploring the next frontier of AI research: multimodal learning systems that can process and understand text, images, and audio simultaneously for more intelligent applications.");
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})