const User = require("../models/user_model");
const CryptoJS = require("crypto-js");
const { PASS_KEY } = require("../config/config");
const { createToken } = require("../lib/lib");

class UserController {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;
      const existUser = await User.findOne({ email: email });
      if (existUser) return res.status(400).send("Email already exist!");
      const hashedPassword = CryptoJS.AES.encrypt(
        password,
        PASS_KEY
      ).toString();
      const new_user = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      if (!new_user) return res.status(400).send("bad request");
      return res.status(201).send("User Created");
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(400).send("Invalid username!");
      const pass_bytes = CryptoJS.AES.decrypt(user.password, PASS_KEY);
      const db_pass = pass_bytes.toString(CryptoJS.enc.Utf8);
      if (db_pass == password) {
        const token = createToken(user.id);
        return res.status(200).send({
          user_details: {
            name: user.name,
            email: user.email,
          },
          access_token: token,
        });
      } else {
        return res.status(400).send("Invalid password!");
      }
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  }
}

module.exports = UserController;
