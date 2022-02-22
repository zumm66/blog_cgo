const Post = require('../models/post.model')

class SiteController {

    // [GET] /
    home(req, res, next) {
        Post.find({})
            .then(posts => res.render('home', { posts }))
            .catch(next);
    }

    //[GET] /contact
    contact(req, res) {
        res.render('contact');
    }
    
}

module.exports = new SiteController;
