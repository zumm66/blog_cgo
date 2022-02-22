const Post = require('../models/post.model');

class MeController {

    //[GET] /me/posts
    posts(req, res, next) {
        Post.find({})
            .then(posts => res.render('me/posts', { posts }))
            .catch(next);
    }

}

module.exports = new MeController;
