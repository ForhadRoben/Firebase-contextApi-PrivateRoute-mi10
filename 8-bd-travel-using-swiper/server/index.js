const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const destinations = require('./data/destination.json')

const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send('server is running')
})
app.get('/travel', (req, res) => {
    res.send(destinations)
})
app.get('/travel/:id', (req, res) => {
    const id = req.params.id
    const selected = destinations.find(s => s.id == id)
    res.send(selected)
})


app.listen(port, () => {
    console.log(`bd-travel server is running on port:${port}`)
})