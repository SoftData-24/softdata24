const express=require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

//setting view engine to ejs
app.set("view engine", "ejs");

// Serving static files
app.use('/static/',express.static('public'));

// Home page
app.get('/',(req,res)=>{
    const host = req.get('host');
    res.render('home',{title:'SoftData24',base_link:'http://'+host+'/static'});
});

app.listen(port,(req,res)=>{
    console.log("Server listening on " + port);
});