express = require('express')
const app = express()
app.listen(process.env.Port || 8083, '192.168.43.68')
app.get('/', (req, res) => {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
    res.sendFile(__dirname + '/html/main.html')
})
app.get('/css', (req, res) => {
    res.sendFile(__dirname + '/css/main.css')
})
app.get('/public/bundle.js', (req, res) => {
    res.sendFile(__dirname + '/public/bundle.js')
})

app.get('/gjwfwhf39201920.json', (req, res)=>{
    con.query("Select * from username", function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
        res.json(result)
      });
})

var mysql = require('mysql')

var con = mysql.createConnection({
    host: "95.46.96.15",
    user: "jxciiuz_users",
    database: "jxciiuz_new",
    password: "1055"
  });