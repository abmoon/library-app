var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('views', './src/views');



app.set('view engine', 'ejs');


app.get('/', function (req, res){
    res.render('index', {
        title: 'Hello from render', 
        nav: [{
                Link:'/Books', 
                Text:'Books'
        }, {
                Link: '/Authors', 
                Text: 'Authors'}]  
        });
});


app.get('/books', function (req, res) {
    res.send('Hello Books!');
});


app.listen(5000, function (err) {
    console.log('running server on port ' + port);
});