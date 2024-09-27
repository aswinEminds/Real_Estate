const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

exports.createToken = (id) => {
  const token = jwt.sign({ id }, JWT_SECRET, { expiresIn: "30m" });
  return token;
};
