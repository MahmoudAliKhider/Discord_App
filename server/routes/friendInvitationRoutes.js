const router = require("express").Router();

const Joi = require("joi");
const validate = require("express-joi-validation").createValidator({});
const auth = require('../middlewares/authMiddleware');
const { postInvite } = require("../controllers/friendInvitationController");

const postFriendInvitationSchema = Joi.object({
    targetMailAddress: Joi.string().email()
})

router.post('/invite', validate.body(postFriendInvitationSchema),
    auth,
    postInvite
)

module.exports = router;
