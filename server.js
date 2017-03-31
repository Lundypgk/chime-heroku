/**
 * Module dependencies.
 */
let express = require('express'),
    //routes = require('./routes'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    db;

let viewDirectory = path.join(__dirname, 'views');
let app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(viewDirectory, { index: false, extensions: ['html'] }));


if (app.get('env') == 'development') {
    app.locals.pretty = true;
}

let MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://shengliang:chime@ds145009.mlab.com:45009/chime', (err, database) => {
    if (err) return console.log(err)
    db = database
    app.listen(process.env.PORT || 3000, () => {
        console.log('listening on 3000')
    })
})

app.get('/', function(req, res) {
    // res.redirect('home.html');
    res.sendFile(viewDirectory + '/home.html');
});

app.get('/login', function(req, res) {
    // res.redirect('login.html')
    res.sendFile(viewDirectory + '/login.html');
});

app.post('/chimerSignUp', (req, res) => {
    db.collection('chimeUser').save(req.body, (err, result) => {
        if (err) return console.log(err);

        console.log('saved to database');
        res.redirect('/signup.html');
    })
});

app.post('/brandSignUp', (req, res) => {
    db.collection('brand').save(req.body, (err, result) => {
        if (err) return console.log(err);

        console.log('saved to database');
        res.redirect('/signup.html');
    })
});

//Catch all other routes
app.get('/*', function(req, res) {
    res.redirect('home.html');
});



// http.createServer(app).listen(app.get('port'), function() {
//     console.log("Express server listening on port " + app.get('port'));
// });