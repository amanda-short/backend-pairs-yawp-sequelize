'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movies.belongsTo(models.Genre, {
        foreignKey: 'genre_id',
      });
    }
  }
  Movies.init(
    {
      title: { type: DataTypes.STRING },

      description: { type: DataTypes.STRING },

      image: {
        type: DataTypes.STRING,
        validate: {
          isUrl: {
            msg: 'Image must be a valid url',
          },
        },
      },
      releaseYear: { type: DataTypes.INTEGER },

      genre_id: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: 'Movies',
    }
  );
  return Movies;
};
