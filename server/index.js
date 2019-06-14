const express = require('express')
require('dotenv/config')
const massive = require('massive')

const HouseCtrl = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is on')
    app.listen(SERVER_PORT, () => console.log('listening', SERVER_PORT))
})

app.get('/api/houses', HouseCtrl.getAll)
app.post('/api/houses', HouseCtrl.createHouse)
app.put('/api/houses/:id', HouseCtrl.updateHouse)
app.delete('/api/houses/:id', HouseCtrl.deleteHouse)
