// waste composition
var data = {
	labels: ['Food', 'Plastic', 'Recyclables', 'Metal'],
	series: ['10', '20', '5', '15']
};

// sizing
var options = {
	width: '300px',
	height: '300px',
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    chartPadding: 0,
    labelOffset: 10,
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    labelOffset: 10,
    chartPadding: 0
  }]
];

new Chartist.Pie('.waste-comp', data, options, responsiveOptions);



//breakdown of waste reduction
var data = {
	labels: ['Reusable Bags', 'Bulk Buy', 'Recycle', 'Compost'],
	series: ['5', '1', '8', '3']
};

// sizing
var options = {
	width: '300px',
	height: '300px',
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    chartPadding: 0,
    labelOffset: 10,
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    chartPadding: 0,
    labelOffset: 10
  }]
];

new Chartist.Pie('.waste-reduction', data, options, responsiveOptions);

//breakdown of waste destinations
var data = {
  labels: ['Incinerator', 'Landfill', 'Recycling'],
  series: ['10', '8', '3']
};

// sizing
var options = {
  width: '300px',
  height: '300px',
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    chartPadding: 0,
    labelOffset: 10,
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    chartPadding: 0,
    labelOffset: 10
  }]
];

new Chartist.Pie('.waste-destinations', data, options, responsiveOptions);