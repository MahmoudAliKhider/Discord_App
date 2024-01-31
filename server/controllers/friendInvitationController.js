const User = require("../models/user");

exports.postInvite = async (req, res) => {

    const { targetMailAddress } = req.body;
    const { userId, mail } = req.user;

    if (mail.toLowerCase() === targetMailAddress) {
        return res.status(409).send("You can not send invitation to your Self")
    }
    const targitUser = await User.findOne({
        mail: targetMailAddress.toLowerCase(),
    })
    if (!targitUser) {
        return res.status(404).send(`friends of ${targetMailAddress} is Not found`);
    }

    return res.send("Okkkkkkkkkkkk")
}