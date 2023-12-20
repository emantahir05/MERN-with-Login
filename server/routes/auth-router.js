const express = require("express");
const router = express.Router();
// controllers
const { home, register, login, user } = require("../controllers/auth-controller");
// validate Schema
const {SignupSchema, loginSchema } = require("../validators/auth-validator");
// middleware
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/").get(home);
router.route("/register").post(validate(SignupSchema), register);
router.route("/login").post(validate(loginSchema),login);
router.route("/user").get(authMiddleware ,user);

module.exports = router;
