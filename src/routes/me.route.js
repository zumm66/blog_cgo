const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');


router.get('/posts', meController.posts);
// router.get('/', meController.me);

module.exports = router;
