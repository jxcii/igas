express = require('express')
const app = express()
app.listen(process.env.Port || 8083, '192.168.43.68')
app.get('/', (req, res) => {
    console.log(req)
    res.sendFile(__dirname + '/html/main.html')
})
app.get('/css', (req, res) => {
    console.log(req)
    res.sendFile(__dirname + '/css/main.css')
})
app.get('/public/bundle.js', (req, res) => {
    console.log(req)
    console.log("\n\n\n\n\n")
    console.log(res)
    res.sendFile(__dirname + '/public/bundle.js')
})
