const express = require('express')
const { circulatingSupply} = require('./src/routes')

const app = express()

app.get('/circulatingSupply', circulatingSupply)


const port = process.env.PORT || 3000

app.listen(port, () => console.log(`App listening on PORT ${port}`))