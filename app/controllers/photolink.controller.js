const db = require("../models");
const PhotoLink = db.photolinks;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  res.json({ message: "create" });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  // var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  var condition =  null;
  PhotoLink.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  res.json({ message: "findOne" });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  res.json({ message: "update" });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  res.json({ message: "delete" });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  res.json({ message: "deleteAll" });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
  res.json({ message: "deleteAll" });
};
