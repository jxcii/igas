express = require('express')
const app = express()
app.listen(process.env.Port || 8083, '192.168.42.198')
app.get('/', (req, res) => {
    console.log(req)
    res.sendFile(__dirname + '/html/main.html')
})