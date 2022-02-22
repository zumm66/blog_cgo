const postRouter = require('./post.route');
const meRouter = require('./me.route');
const siteRouter = require('./site.route');

function route(app) {
    app.use('/post', postRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
    
    app.get('/login', (req, res) => {
        res.render('login');
    });
    
    app.get('/register', (req, res) => {
        res.render('register');
    });
}

module.exports = route;
