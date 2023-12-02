const express = require('express');
const cors = require('cors');
const app = express();
port = process.env.PORT || 9000;
const users = require('./routes/userRoute')
//---------------import des fichiers de configuratons-----------------
require ("dotenv").config({path: "./config/.env"});
require("./config/db");
//---------------import des routes---------------------------------


app.use(cors());
app.use(express.json())

app.use('/api',users)

app.listen(port, ()=>{
    console.log(`Server Running : ${port}`);
});