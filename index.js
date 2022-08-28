// Meu código
// config inicial
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()




// forma de ler JSON
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//Rotas da API

const personRoutes = require('./routes/personRoutes');

app.use('/person', personRoutes)

//mongodb+srv://felipe:1@apicluster.izsqhav.mongodb.net/?retryWrites=true&w=majority

// entregar uma porta
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)


mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster-api.kudp2fh.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("Conectamos ao MongoDB!");
        app.listen(3100);
    })
    .catch((err) => console.log(err))
