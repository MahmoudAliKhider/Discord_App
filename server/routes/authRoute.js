const router = require("express").Router();

const Joi = require("joi");
const validate = require("express-joi-validation").createValidator({});

const { register, login } = require("../controllers/authController");

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(13).required(),
    password: Joi.string().min(6).max(16).required(),
    mail: Joi.string().email().required(),
})

const loginSchema = Joi.object({
    password: Joi.string().min(6).max(16).required(),
    mail: Joi.string().email().required(),
})

router.post('/signup', validate.body(registerSchema), register);
router.post('/login', validate.body(loginSchema), login);


module.exports = router;