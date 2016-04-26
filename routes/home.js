var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost:27017');


/* GET home page. */
router.get('/home', function(req, res, next) {
//    var user1Data = loadData()
    res.render('home', { title: 'Footprint', data: loadData()});
});

function loadData() {

    var Schema = mongoose.Schema;

    var MonthlyData = new Schema({
        userid: String,
        weightData: []
    });

// the schema is useless so far
// we need to create a model using it
    var MonthlyData = mongoose.model('MonthlyData', MonthlyData);

// make this available to our users in our Node applications
    module.exports = MonthlyData;

    var user1Data = new MonthlyData({
        name: 'user1',
        weightData: [24]
    });

    user1Data.save(function(err) {
        if (err) throw err;
        console.log('Data saved successfully!');
    });
    return user1Data
}

module.exports = router;
/**
 * Created by elanastroud on 2/22/16.
 */


