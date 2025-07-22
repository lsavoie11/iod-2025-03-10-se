const { DataTypes, Model } = require("sequelize");
const sequelize = require("../dbConnect");
class User extends Model {}
// Sequelize will create this table if it doesn't exist on startup
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      field: "first_name",
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      field: "last_name",
    },
    emailId: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
      field: "email",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      required: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "users", // use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = User;
