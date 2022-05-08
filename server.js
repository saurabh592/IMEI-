require('dotenv').config();
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.set("view engine","ejs");
app.set("layout","layouts/layout");
app.use(ejsLayouts)

app.use(bodyParser.urlencoded({extended:true}));

app.use(require("./routes/home"));





app.listen(process.env.PORT || 3000 ,()=>{
    console.log("server started");
})
