const express = require('express')
const app = express()
const  { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const generatePassword = require('./generate_password')
const port = 3000

app.engine('hbs', engine({ extname: '.hbs', defaultLayout: 'main'}))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body
  const password = generatePassword(req.body)
  // console.log('bodyParser: ', req.body)
  console.log('get form POST request')
  res.render('index', { password , option})
})

app.listen(port, () => {
  console.log(`This Express server is ranning on http://localhost:${port}`)
})