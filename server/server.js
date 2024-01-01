const express = require('express')
const mongoose = require('mongoose')
const dataRoute = require("./Routes/dataRoute")
const app = express()
const cors = require('cors')
const path = require('path')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true'); // This is important for requests with credentials
    next();
});

require('dotenv').config()
app.use(cors({ origin: "http://localhost:3000" }))
app.use(express.json())

app.use((req, res, next) => {
    console.log("Working...");
    next()
})
app.use('/data', dataRoute)

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Conneted to port ${process.env.PORT}`);
    })
})

