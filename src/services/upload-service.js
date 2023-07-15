const cloudinary = require("../configs/cloudinary");

exports.upload = (path) => cloudinary.uploader.upload(path);
