module.exports = (sequelize, Sequelize) => {
  const Photolink = sequelize.define("photolink", {
    description: {
      type: Sequelize.STRING
    },
    place: {
      type: Sequelize.STRING
    },
    photolink: {
      type: Sequelize.STRING
    } 
  });
  return Photolink;
};
