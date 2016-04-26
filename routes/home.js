var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost:27017');


var sampleData = [2, 4, 5, 7, 9, 10, 14, 17, 20, 25, 26, 28];
sampleData = sampleData.reverse()

/* GET home page. */
router.get('/home', function(req, res, next) {
//    var user1Data = loadData()
    var Schema = mongoose.Schema;

    var MonthlyDataSchema = new Schema({
        userid: String,
        weightData: []
    });

    var MonthlyData;

    if (mongoose.models.MonthlyData) {
        MonthlyData = mongoose.model('MonthlyData');
    } else {
        MonthlyData = mongoose.model('MonthlyData', MonthlyDataSchema);
    }

    MonthlyData.findOne({ userid: 'user1' }, function(err, data) {
        if (err) return console.error(err);
//        user1Data = data
        if (data == null) {
            var user1Data = new MonthlyData({
                userid: 'user1',
                weightData: []
            });

            user1Data.save(function(err) {
                if (err) throw err;
                console.log('Data saved successfully!');
                res.render('home', { title: 'Footprint', data: user1Data});
            });
        } else {
            data.weightData.push(sampleData[data.weightData.length])
            if (data.weightData.length >= 13) {
                data.weightData = []
            }
            data.save(function(err) {
                if (err) throw err;
                console.log('Data saved successfully!');
                res.render('home', { title: 'Footprint', data: data});
            });
//            res.render('home', { title: 'Footprint', data: data});
        }
//        console.log(data)
//        res.render('home', { title: 'Footprint', data: user1Data});

    });


//    res.render('home', { title: 'Footprint', data: user1Data});
});

function loadData() {

//      var MonthlyData = require('MonthlyData')
    var Schema = mongoose.Schema;

    var MonthlyDataSchema = new Schema({
        userid: String,
        weightData: []
    });
//
//// the schema is useless so far
//// we need to create a model using it
//    var MonthlyData = mongoose.model('MonthlyData', MonthlyData);
//
//// make this available to our users in our Node applications
//    module.exports = MonthlyData;
    var MonthlyData

    if (mongoose.models.MonthlyData) {
        MonthlyData = mongoose.model('MonthlyData');
    } else {
        MonthlyData = mongoose.model('MonthlyData', MonthlyDataSchema);
    }

//    var user1Data = new MonthlyData({
//        userid: 'user1',
//        weightData: []
//    });
    var user1Data;
    MonthlyData.findOne({ userid: 'user1' }, function(err, data) {
        if (err) return console.error(err);
        user1Data = data
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

