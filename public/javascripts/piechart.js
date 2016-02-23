// waste composition
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

new Chartist.Pie('.waste-comp', data, options, responsiveOptions);



//breakdown of waste reduction
var data = {
	labels: ['Reusable Bags', 'Buy in bulk', 'Recycle', 'Compost'],
	series: ['5', '1', '8', '3']
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

new Chartist.Pie('.waste-reduction', data, options, responsiveOptions);

//breakdown of waste destinations
var data = {
  labels: ['Incinerator', 'Landfill', 'Recycling Facility'],
  series: ['10', '8', '3']
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

new Chartist.Pie('.waste-destinations', data, options, responsiveOptions);