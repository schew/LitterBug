// Create a simple bar chart
var data = {
  labels: ['Efficient Homes', 'Your Home', 'Your Neighbors'],
  series: [
    [54.6, 83.44, 78.32]
  ]
};

var options = {
    width: '625px',
    height: '350px',

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
new Chartist.Bar('.home-neighbor-comparison', data, options);




