const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.post('/bmicalculator', function (req, res) {
  const weight = Number(req.body.weight)
  const height = Number(req.body.height)

  console.log(weight)

  const bmi = (weight / (height * height)).toFixed(2)

  res.send(`Your BMI is ${bmi}`)
})

app.listen(3000, function () {
  console.log('server is running on port 3000')
})
