const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const db = require("../db");
const Sequelize = require("sequelize");
const bcrypt = require(`bcrypt`);
const User = require(`./model`)

const router = new Router();

router.post("/user", (request, response, next) => {
  const { email, password } = request.body;
  // const user = {
  //   email: req.body.email,
  //   password: bcrypt.hashSync(req.body.password, 10)                //Look at this closely!!
  // }
  User.create({
    email: email,
    password: bcrypt.hashSync(password, 10)
  })
    .then(user => {
      if (!email || !password) {
        response.status(400).send({
          message: "Please supply a valid email and password"
        });
      } else {
        response.send({
          jwt: toJWT({ userId: 1 })
        });
      }
    })
    .catch(error => next(error));
});

module.exports = router
