"use strict";
let express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    bcrypt = require('bcrypt'),
    db;

let viewDirectory = path.join(__dirname, 'views');
let app = express();

//Variable
const saltRounds = 10;

//Import Models
let chimerModel = require('./models/chimer-signup');

// app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(viewDirectory, {
    index: false,
    extensions: ['html']
}));


if (app.get('env') == 'development') {
    app.locals.pretty = true;
}

let MongoClient = require('mongodb').MongoClient;


// Production
// database: 'mongodb://shengliang:chime@ds145009.mlab.com:45009/chime'

// Development
//   database: 'mongodb://shengliang:chime@ds129038.mlab.com:29038/chimedev',
MongoClient.connect('mongodb://shengliang:chime@ds129038.mlab.com:29038/chimedev', (err, database) => {
    if (err) return console.log(err)
    db = database
    app.listen(process.env.PORT || 3000, () => {
        console.log('listening on 3000')
    })
})

app.get('/', function (req, res) {
    // res.redirect('home.html');
    res.redirect('/index');
});

app.get('/login', function (req, res) {
    // res.redirect('login.html')
    res.sendFile(viewDirectory + '/login.html');
});

app.post('/chimerSignUp', (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        // Store hash in your password DB. 
        console.log(hash);
        let chimer = new chimerModel(req.body.firstName,
            req.body.lastName,
            req.body.email,
            req.body.gender,
            req.body.birthday,
            req.body.mobileNo,
            req.body.username,
            hash
        )
        db.collection('chimeUser').save(chimer, (err, result) => {
            if (err) return console.log(err);
            // res.status(200);
            res.end();
            // res.redirect('/index-chimer');
        })
    });

});

app.post('/brandSignUp', (req, res) => {
    db.collection('brand').save(req.body, (err, result) => {
        if (err) return console.log(err);

        console.log('saved to database');
        res.redirect('/signup.html');
    })
});

//Catch all other routes
app.get('/*', function (req, res) {
    res.redirect('/');
});



// http.createServer(app).listen(app.get('port'), function() {
//     console.log("Express server listening on port " + app.get('port'));
// });