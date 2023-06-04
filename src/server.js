const express = require('express')
const helmet = require('helmet')
const dotenv = require("dotenv")
const { route } = require('./router/router.js')
const app = express()
dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(route)

app.listen(3000, () => {
})