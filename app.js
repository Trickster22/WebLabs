
var express = require('express'),
bodyParser = require('body-parser'),
app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'))


app.get("/",function (req,res){
    res.render('index.ejs');

    
});

app.listen(5000,function()
{
    console.log('Work');
});