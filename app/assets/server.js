const cors = require("cors")
const data = require('./instruments.json')
const express = require('express')
const app = express()
const port = 3001

app.use(cors())
app.get('/instruments', (req, res) => {
    let data2 = data.map(instrument => ({ 
        ...instrument,
        currentPrice: 
            {   ...instrument.currentPrice,
                value: ((instrument.currentPrice.value) + (-0.5+Math.random())*(instrument.currentPrice.value*2)*0.1).toFixed(2)},
    }))
    res.json(data2)
})
app.listen(port, () => console.log(`Listening on port ${port}....`)) 

//IPv4 address: 192.168.0.39