require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser');
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const DB_QUERY_STRING = process.env.DB
  || 'mongodb://localhost:27017/crm'

const companiesRoutes = require('./routes/companies')
const contactsRoutes = require('./routes/contacts')
const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

app.set('port', process.env.PORT || 8081)

mongoose.connect(DB_QUERY_STRING)

app.get('/', (req, res) => {
  res.send('TODO API HOME PAGE 💩')
})

app.use('/api/v2/companies', companiesRoutes)
app.use('/api/v2/contacts', contactsRoutes)

// app.get('/about', (req, res) => {
//   res.send('ABOUT 💩')
// })

app.listen(app.get('port'), err => {
  if (err) return console.log(`something bad happened 💩 ${err}`)
  console.log(`server listening on ${app.get('port')}`)
})



