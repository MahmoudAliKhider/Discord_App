const router = require("express").Router();

const Joi = require("joi");
const validate = require("express-joi-validation").createValidator({});
const auth = require('../middlewares/authMiddleware');
const { postInvite, postAccept, postReject } = require("../controllers/friendInvitationController");

const postFriendInvitationSchema = Joi.object({
    targetMailAddress: Joi.string().email()
})
const inviteDisitionSchema = Joi.object({
    id: Joi.string().required(),
});

router.post('/invite', validate.body(postFriendInvitationSchema),
    auth,
    postInvite
);
router.post('/accept', validate.body(inviteDisitionSchema),
    auth,
    postAccept
);
router.post('/reject', validate.body(inviteDisitionSchema),
    auth,
    postReject
);
module.exports = router;
