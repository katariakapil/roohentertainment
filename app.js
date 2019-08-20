const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine',hbs);

app.use(express.static(__dirname +'/'));

//middelware
app.use((req,res,next) => {
    //call application
    var now = new Date().toString();
    console.log(`request time ${now} ${req.method} ${req.url}`) ;
    next();

});

app.get('/', (req,res) => {


    res.render('home.hbs', {
        year : new Date().getFullYear(),
        aboutData : "This is data passed to template"
    });
});


//get port from heroku
const port = process.env.PORT || 3000;

app.listen(port);
