const {
  validateRegister,
  validateLogin,
} = require("../validators/auth-validator");

const userService = require("../services/user-service");
const createError = require("../utils/create-error");
const bcryptService = require("../services/bcrypt-service");
const tokenService = require("../services/token-service");

exports.register = async (req, res, next) => {
  try {
    const value = validateRegister(req.body);
    console.log(value);

    const isUserExist = await userService.checkEmailOrMobileExist(
      value.email || value.mobile
    );
    if (isUserExist) {
      createError("email address or mobile number already in use");
    }

    value.password = await bcryptService.hash(value.password);

    const user = await userService.createUser(value);

    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  // console.log("######### hello controller.login");
  try {
    const value = validateLogin(req.body);
    // console.log(value);

    const isUserExist = await userService.checkUserLogin(
      value.email || value.mobile
    );
    console.log(isUserExist);

    // value.password = await bcryptService.hash(value.password);

    const accessToken = tokenService.sign({ id: isUserExist.id });
    res.status(200).json({ accessToken });
    // res.status(200).json({ msg: "user" });
  } catch (err) {
    next(err);
  }
};

exports.getMe = (req, res, next) => {
  res.status(200).json({ user: req.user });
};
