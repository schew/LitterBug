var data = {
  // x-axis
  labels: ['January', 'February', 'March', 'April',  'May'],
  // , 'June',
        // 'July', 'August', 'September', 'October', 'November', 'December'],
  // y-axis
  series: [
    [59, 38, 29, 10, 30, 38, 27, 23, 23, 24, 22, 23]
  ]
};

var options = {
    width: '800px',
    height: '350px'
};

// line chart plotting resident waste habits
new Chartist.Line('.line-graph', data, options);