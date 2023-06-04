module.exports = app => {
  const photoLink = require("../controllers/photolink.controller.js");

  var router = require("express").Router();

  // Create a new PhotoLink
  router.post("/", photoLink.create);

  // Retrieve all PhotoLink
  router.get("/", photoLink.findAll);

  // Retrieve all published PhotoLink
  router.get("/published", photoLink.findAllPublished);

  // Retrieve a single PhotoLink with id
  router.get("/:id", photoLink.findOne);

  // Update a PhotoLink with id
  router.put("/:id", photoLink.update);

  // Delete a PhotoLink with id
  router.delete("/:id", photoLink.delete);

  // Delete all PhotoLink
  router.delete("/", photoLink.deleteAll);

  app.use("/api/photolinks", router);
};
