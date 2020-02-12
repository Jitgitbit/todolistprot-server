const express = require(`express`);
// import db from `./db`;
// import Image from `./image/model`;
const db = require(`./db`)
const Image = require(`./image/model`)
const Sequelize = require(`sequelize`);
const imageRouter = require(`./image/router`)
const authRouter = require(`./auth/router.js`)
const userRouter = require(`./user/router.js`)
const cors = require(`cors`);

const port = process.env.PORT || 4000;

const app = express();

const corsMiddleware = cors()
app.use(corsMiddleware)
const parserMiddleware = express.json()  // body-parser and express have recently been put in one npm;
app.use(parserMiddleware)

app.use(imageRouter);
app.use(authRouter);
app.use(userRouter);

app.listen(port, () => console.log(`The imageboard-server API is listening on port ${port}!`));





