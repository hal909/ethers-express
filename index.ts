const express = require('express')
const { 
    totalSupply,
    burned,
    circulatingSupply
} = require('./src/routes')

const app = express()

app.get('/', (req, res) => {
    res.send('TrueFi API')
})

app.get('/totalSupply', totalSupply)
app.get('/burned', burned)
app.get('/circulatingSupply', circulatingSupply)


const port = process.env.PORT || 3000

app.listen(port, () => console.log(`App listening on PORT ${port}`))