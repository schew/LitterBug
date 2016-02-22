var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
    res.render('home', { title: 'LitterBug' });
//    res.send('rtesting')
});

module.exports = router;
/**
 * Created by elanastroud on 2/22/16.
 */
