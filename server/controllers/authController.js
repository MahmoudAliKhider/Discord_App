const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const User = require('../models/user');

exports.register = async (req, res) => {
    try {
        const { username, mail, password } = req.body;
        const userExists = await User.exists({ mail: mail.toLowerCase() });

        if (userExists) {
            return res.status(409).send("Email already registered");
        }

        const encryptPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            mail: mail.toLowerCase(),
            password: encryptPassword,
            _id: user._id,
        });

        const token = jwt.sign(
            {
                userId: user._id,
                mail
            },
            process.env.TOKEN_KEY,
            {
                expiresIn: '24h'
            }
        );
        res.status(201).send({
            userDetails: {
                mail: user.mail,
                token: token,
                username: user.username,
            }
        })
    } catch (error) {
        return res.status(500).send(`Error Please try again ${error.message}`)
    }
}

exports.login = async (req, res) => {
    try {
        const { mail, password } = req.body;
        const user = await User.findOne({ mail: mail.toLowerCase() });

        if (user && (await bcrypt.compare(password, user.password))) {

            const token = jwt.sign(
                {
                    userId: user._id,
                    mail
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: '24h'
                }
            );

            return res.status(200).json({
                userDetails: {
                    mail: user.mail,
                    token: token,
                    username: user.username,
                    _id: user._id
                }
            })
        }
        return res.status(400).send(`Invalid credentials . please try again`)

    } catch (error) {
        return res.status(500).send(`Error Please try again ${error.message}`)

    }
}