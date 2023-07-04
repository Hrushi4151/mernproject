
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()

dotenv.config({ path: './config.env' })
const Port = process.env.PORT || 5000

require('./dbconn/connDB')
app.use(express.json())
app.use(require('./router/routes'))

if(process.env.NODE_ENV === "production")
{
  app.use(express.static("client/build"))
}

app.listen(Port, () => {
    console.log(`App is running at port ${Port}`);
  });