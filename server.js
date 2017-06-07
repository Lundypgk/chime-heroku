"use strict";
let express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    bcrypt = require('bcrypt'),
    config = require('./config/config'),
    collection = require('./config/constant'),
    db;

let viewDirectory = path.join(__dirname, 'views');
let app = express();

//Variable
const saltRounds = 10; // for hashing of password

//Import Models
let chimerModel = require('./models/chimer-signup');
let brandModel = require('./models/brand-signup');

// app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(viewDirectory, {
    index: false,
    extensions: ['html']
}));

let MongoClient = require('mongodb').MongoClient;
MongoClient.connect(config.database, (err, database) => {
    if (err) return console.log(err);
    db = database;
    app.listen(process.env.PORT || 3000, () => {
        console.log('listening on 3000')
    })
})

//Index page
app.get('/', function (req, res) {
    res.redirect('/index');
});

// //Chimer homepage
// app.get('/index-chimer', function (req, res) {
//     res.redirect('/index-chimer');
// });

// //Chimer signup page
// app.get('/signup-chimer', function (req, res) {
//     res.redirect('/signup-chimer');
// });

// //Brand homepage
// app.get('/index-brand', function (req, res) {
//     res.redirect('/index-brand');
// });

// //Brand signup page
// app.get('/signup-brand', function (req, res) {
//     res.redirect('/signup-brand');
// });

//Checking of unique email for chimer
app.post('/checkUniqueEmailChimer', (req, res) => {
    db.collection(collection.chimerCollection).find({
        email: req.body.email
    }).toArray().then(function (results) {
        if (results.length > 0) {
            res.json({
                success: false
            })
        } else {
            res.json({
                success: true
            })
        }
    });
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
            hash
        )
        db.collection(collection.chimerCollection).save(chimer, (err, result) => {
            if (err) return console.log(err);
            // res.status(200);
            console.log("success");
            res.end();
            // res.redirect('/index-chimer');
        })
    });

});

//Checking of unique email for brand
app.post('/checkUniqueEmailBrand', (req, res) => {
    db.collection(collection.brandCollection).find({
        email: req.body.email
    }).toArray().then(function (results) {
        if (results.length > 0) {
            res.json({
                success: false
            })
        } else {
            res.json({
                success: true
            })
        }
    });
});

app.post('/brandSignUp', (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        // Store hash in your password DB. 
        let brand = new brandModel(req.body.brandName,
            req.body.industry,
            req.body.contactNo,
            req.body.address,
            req.body.postal,
            req.body.unitNo,
            req.body.instagram,
            req.body.facebook,
            req.body.email,
            hash
        )
        db.collection(collection.brandCollection).save(brand, (err, result) => {
            if (err) return console.log(err);
            res.end();
        })
    });
});

//Catch all other routes
app.get('/*', function (req, res) {
    res.redirect('/');
});