require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(router)

app.listen(port, () => {
    console.log(`This app running on port ${port}`)
})

module.exports = app