require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const multer = require('multer');
const path = require('path');
const port = process.env.PORT || 9899;
const route = require('./routes');
const db = require('./config/db/db.config');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


// connect db
db.connect();

// template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'resources/views'));

// route init
route(app);



app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`)
});
