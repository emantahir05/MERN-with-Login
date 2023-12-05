const express = require('express');
const router = express.Router();
// controllers 
const {home, register, login} = require("../controllers/auth-controller")
// validate Schema
const SignupSchema = require ("../validators/auth-validator")
// middleware 
const validate = require("../middlewares/validate-middleware");


router.route("/").get(home);
router.route("/register").post( validate(SignupSchema), register)
router.route("/login").post(login)

module.exports = router;

