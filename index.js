'use strict'
require('dotenv').config();
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const path = require('path')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandingMiddleware')


const PORT = process.env.PORT || 7000

// Create the express app
const app = express()
app.use(cors());
app.use(express.json());
app.use('/api', router)
// app.get('/', (req, res) => {
//   res.send("ToDo Работает!!!")
// })

// Routes and middleware
// app.use(/* ... */)
// app.get(/* ... */)

// Error handlers
/*app.use(function fourOhFourHandler (req, res) {
  res.status(404).send()
})
app.use(function fiveHundredHandler (err, req, res, next) {
  console.error(err)
  res.status(500).send()
})

// Start server
app.listen(1234, function (err) {
  if (err) {
    return console.error(err)
  }

  console.log('Started at http://localhost:1234')
})*/

app.use(errorHandler)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server started on ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()