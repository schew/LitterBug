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
    width: '500px',
    height: '250px'
};

// line chart plotting resident waste habits
new Chartist.Line('.home-waste-history', data, options);