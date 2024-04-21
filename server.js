const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "penduduk_kota_bekasi",
})



app.get('/', (req, res) => {
    return res.json("from backend side");
})

app.get('/jumlah_Penduduk', (req, res)=> {
    const sql = "SELECT * FROM jumlah_penduduk"
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.get('/perhitungan', (req, res)=> {
    const sql = "SELECT * FROM perhitungan"
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.listen(8081, ()=> {
    console.log("listening")
})