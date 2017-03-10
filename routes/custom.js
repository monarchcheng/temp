/**
 *
 * @author: <a href="mailto:monarchcheng1993@gmail.com">wangcheng</a>
 * @date: 2017-03-10
 */
var express = require('express');
var router = express.Router();

/* GET custom page. */
router.get('/', function(req, res, next) {
    res.render('custom', { title: 'custom',btn:'Celtics'});
});

module.exports = router;
