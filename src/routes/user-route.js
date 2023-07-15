const express = require("express");
const upload = require("../middlewares/upload");
const router = express.Router();
const userController = require("../controllers/user-controller");
const authenticateMiddleware = require("../middlewares/authenticate");

router.patch(
  "/image",
  authenticateMiddleware,
  upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  userController.uploadImage
);
router.get("/faq", authenticateMiddleware, userController.getFaq);

module.exports = router;
