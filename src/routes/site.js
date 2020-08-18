const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/siteController');
const { route } = require('./news.route');

router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router