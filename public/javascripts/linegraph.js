var data = {
  // x-axis
  labels: ['January', 'February', 'March', 'April',  'May'],
  // , 'June',
        // 'July', 'August', 'September', 'October', 'November', 'December'],
  // y-axis
  series: [
    [78, 66.12, 75.44, 70.11, 83.44]
  ]
};

var options = {
    width: '450px',
    height: '350px'
};

// line chart plotting resident waste habits
//new Chartist.Line('.home-waste-history', data, options);

console.log(user1Data)

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
})

//$.get("/home", function(req, res, next) {
////    console.log(req)
////    console.log(res)
////    console.log(next)
//      var title = req.title
//      var title2 = res.title
//
//    console.log(title)
//    console.log(title2)
//})

// TODO: MONGOOSE STUFF -- FOR GETTING STUFF FROM DB -- FOCUS ON LATER
//var tempData = mongoose.model('TempTrash', {
//   resident0: [59, 38, 29, 10, 30, 38, 27, 23, 23, 24, 22, 23],
//   resident1: [38, 29, 18, 29, 29, 18, 29, 50, 28, 38, 28, 26],
//   district0: [50, 51, 25, 30, 35, 27, 26, 25, 25, 27, 29, 25],
//   baltimore: [59, 48, 30, 38, 25, 26, 28, 27, 26, 25, 30, 24],
//   baltimoreCounty: [60, 49, 39, 29, 29 , 26, 24, 26, 27, 27, 29, 26]
//});

//get info from mongoose
//app.get('/api/tempdata', function(req, res) {
//
//     // use mongoose to get all todos in the database
//     TempTrash.find(function(err, trash) {
//
//         // if there is an error retrieving, send the error. nothing after res.send(err) will execute
//         if (err)
//             res.send(err)
//
//         res.json(trash); // return all todos in JSON format
//     });
//});
