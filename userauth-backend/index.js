const mongoose = require('./config/database')
const express =  require('express')
const { usersRouter } = require('./app/controllers/users_controller')

const app = express()
const port = 3001
app.use(express.json())

app.get('/', (req, res) => res.send('Welcome to User Authentication System'))

app.use('/users',usersRouter)


app.listen(port, () => console.log('Listening to port', port))