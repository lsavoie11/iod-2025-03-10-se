const { DataTypes, Model } = require("sequelize");
const sequelize = require("../dbConnect");
const User = require("./user");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      field: "user_id",
    },
  },
  {
    sequelize,
    modelName: "posts", // table name
    timestamps: true,
    freezeTableName: true,
  }
);

// Associations
Post.belongsTo(User, { foreignKey: "userId" });

module.exports = Post;
