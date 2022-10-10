module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define("Books", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Books;
};
