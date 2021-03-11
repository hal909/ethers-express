const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const { circulatingSupply} = require('./src/routes')


const app = express()
const port = process.env.PORT || 3000
const limit = rateLimit({
    max: 2,             // max requests
    windowMs: 1000,     // 1 Sec
    message: {code:429,message:'Too many requests'} // message to send
});

app.use(cors())
app.use('/circulatingSupply', limit)
app.get('/circulatingSupply', circulatingSupply)
app.listen(port, () => console.log(`App listening on PORT ${port}`))
