/**
 * Created by elanastroud on 2/12/16.
 */

// var data = [
//     { label: 'Layer 1', values: [ {x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2} ] },
//     { label: 'Layer 2', values: [ {x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 4} ] }
// ];
// //
// //var areaChartInstance = $('#area').epoch({
// //    type: 'area',
// //    data: data,
// //    axes: ['left', 'right', 'bottom']
// //});


//comparison to neighbors
// var neighborComparison = [
//     // First bar series
//     {
//         label: 'Series 1',
//         values: [
//             { x: 'Efficient Homes', y: 30 },
//             { x: 'Your Home', y: 50 },
//             { x: 'Your Neighbors', y: 40 }]
    //},

    // Second series
    // {
    //     label: 'Series 2',
    //         values: [
    //     { x: 'A', y: 20 },
    //     { x: 'B', y: 39 },
    //     { x: 'C', y: 8 }]
// }];

// $('#barChart').epoch({
//     type: 'bar',
//     data: neighborComparison
// });

// Create a simple bar chart
var data = {
  labels: ['Efficient Homes', 'Your Home', 'Your Neighbors'],
  series: [
    [20, 50, 40]
  ]
};

var options = {
    width: '800px',
    height: '300px',
    // horizontalBars: true,
    // axisY: {
    //     labelInterpolationFunc: function(value) {
    //         return value + 'kWh'
    //     }
    // }
};

// In the global name space Chartist we call the Bar function to initialize a bar chart. 
// As a first parameter we pass in a selector where we would like to get our chart created 
// and as a second parameter we pass our data object.
new Chartist.Bar('.neighborhood-comparison', data, options);




