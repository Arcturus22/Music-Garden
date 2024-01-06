const jwt = require("jsonwebtoken");

exports = {};
exports.getToken = async (userID, user) => {

    const token = jwt.sign({ identifier: userID }, "CHANGETHISTO.env");
    return token;
};

module.exports = exports