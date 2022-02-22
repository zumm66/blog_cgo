const Post = require('../models/post.model');

class PostController {
    //[GET] /post/:slug
    show(req, res, next) {
        Post.findOne({ slug: req.params.slug})
            .then(post => {
                res.render('posts/show', { post });
            })
            .catch(next);
    };

    //[GET] /post/create
    create(req, res, next) {
        res.render('posts/create')
    }
    

    //[POST] /post/store
    store(req, res, next) {
        const formData = req.body;
        const post = new Post(formData);
        post.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            });
    }

    //[GET] /post/:id/edit
    edit(req, res, next) {
        Post.findById(req.params.id)
            .then(post => res.render('posts/edit', { post }))
            .catch(next);
    };

    //[PUT] /post/:id
    update(req,res,next) {
        Post.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/posts'))
            .catch(next);
    };

    //[DELETE] /post/:id
    delete(req,res,next) {
        Post.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    };

}

module.exports = new PostController;
