// waste composition
var data = {
	labels: ['Food', 'Plastic', 'Recyclables', 'Metal'],
	series: ['10', '20', '5', '15']
};

// sizing
var options = {
	width: '300px',
	height: '300px',
  chartPadding: 0,
  labelOffset: 40,
  labelDirection: 'neutral'
};

// var responsiveOptions = [
//   ['screen and (min-width: 640px)', {
//     chartPadding: 30,
//     labelOffset: 10,
//     labelDirection: 'explode',
//     labelInterpolationFnc: function(value) {
//       return value;
//     }
//   }],
//   ['screen and (min-width: 1024px)', {
//     labelOffset: 50,
//     chartPadding: 30,
//     labelDirection: 'explode'
//   }]
// ];

new Chartist.Pie('.waste-comp', data, options);



//breakdown of waste reduction
var data = {
	labels: ['Reusable Bags', 'Bulk Buy', 'Recycle', 'Compost'],
	series: ['5', '1', '8', '3']
};

// adjust labels
options.labelOffset = 25;

new Chartist.Pie('.waste-reduction', data, options);

//breakdown of waste destinations
var data = {
  labels: ['Incinerator', 'Landfill', 'Recycling'],
  series: ['10', '8', '3']
};

// adjust labels

new Chartist.Pie('.waste-destinations', data, options);