const express = require('express');
const bodyParser = require ('body-parser');
const cors = require('cors');
const products = require('../api/routes/product');
const app = express();
const mongoose = require('mongoose');
const db_url = "mongodb+srv://armanCisco_01:KkAL3aORGMp1AhRv@cluster0-mxzii.mongodb.net/test?retryWrites=true&w=majority"

app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


const connection = mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
  console.log('[mongoose] Connected to database .');
}).catch((err) => {console.log(err)});

module.exports = connection


app.use('/api/',products);



module.exports = app;