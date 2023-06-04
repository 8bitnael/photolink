module.exports = (sequelize, Sequelize) => {
  const SerieTv = sequelize.define("serietv", {
    title: {
      type: Sequelize.STRING
    },
    year: {
      type: Sequelize.STRING
    },
    link: {
      type: Sequelize.STRING
    } 
  });
  return SerieTv;
};
