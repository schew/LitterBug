// /* Pie charts consist of solid slices where you can use this selector to override the default style. */
// .ct-series-a .ct-slice-pie {
//   /* fill of the pie slieces */
//   fill: hsl(120, 40%, 60%);
//   /* give your pie slices some outline or separate them visually by using the background color here */
//   stroke: white;
//   /* outline width */
//   stroke-width: 4px;
// }

var data = {
	labels: ['Food', 'Plastic', 'Potential Recyclables', 'Metal'],
	series: ['10', '20', '5', '15']
};

var options = {
	width: '600px',
	height: '600px',
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    chartPadding: 30,
    labelOffset: 100,
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    labelOffset: 100,
    chartPadding: 50
  }]
];

new Chartist.Pie('.pie-chart', data, options, responsiveOptions);