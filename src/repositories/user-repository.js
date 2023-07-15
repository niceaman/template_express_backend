const { Op } = require("sequelize");
const { Users } = require("../models");

exports.getUserByEmailOrMobile = (emailOrMobile) =>
  Users.findOne({
    where: {
      [Op.or]: [{ email: emailOrMobile }, { mobile: emailOrMobile }],
    },
  });

exports.createUser = (user) => Users.create(user);
