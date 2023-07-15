const userRepository = require("../repositories/user-repository");

exports.checkEmailOrMobileExist = async (emailOrMobile) => {
  const existUser = await userRepository.getUserByEmailOrMobile(emailOrMobile);
  return !!existUser;
};

exports.createUser = (user) => userRepository.createUser(user);
