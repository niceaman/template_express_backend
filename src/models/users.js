module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      firstName: {
        type: DataTypes.STRING(45),
      },
      lastName: {
        type: DataTypes.STRING(45),
      },
      email: {
        type: DataTypes.STRING(45),
        unique: true,
      },
      mobile: {
        type: DataTypes.STRING(10),
        unique: true,
        validate: {
          is: /^[0-9]{10}$/,
        },
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },

      permission: {
        type: DataTypes.ENUM({
          values: ["manager", "admin", "client"],
        }),
        allowNull: false,
      },
      profileImage: DataTypes.STRING(100),
    },
    {
      underscored: true,
    }
  );

  return Users;
};
