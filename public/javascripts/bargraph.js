// Create a simple bar chart
//var data = {
//  labels: ['Efficient Homes', 'Your Home', 'Your Neighbors'],
//  series: [
//    [54.6, 83.44, 78.32]
//  ]
//};
//
//var options = {
//    width: '450px',
//    height: '350px',
//
//    // horizontalBars: true,
//    // axisY: {
//    //     labelInterpolationFunc: function(value) {
//    //         return value + 'kWh'
//    //     }
//    // }
//};
//
//// In the global name space Chartist we call the Bar function to initialize a bar chart.
//// As a first parameter we pass in a selector where we would like to get our chart created
//// and as a second parameter we pass our data object.
//new Chartist.Bar('.home-neighbor-comparison', data, options);



var data = {
    labels: ['Efficient Homes', 'Your Home', 'Your Neighbors'],
    datasets: [
        {
            label: "",

            // The properties below allow an array to be specified to change the value of the item at the given index
            // String  or array - the bar color
            backgroundColor: ["rgba(161,212,144, 1)", "rgba(242,189,32,1)", "rgba(212,161,144,1)"],

            // String or array - bar stroke color
            borderColor: ["white", "white", "white"],

            // Number or array - bar border width
            borderWidth: 1,

            // String or array - fill color when hovered
            hoverBackgroundColor:  ["rgba(161,212,144, .5)", "rgba(242,189,32,.5)", "rgba(161,212,144, .5)"],

            // String or array - border color when hovered
            hoverBorderColor: "white",

            // The actual data
            data: [2, 6, 4],

            // String - If specified, binds the dataset to a certain y-axis. If not specified, the first y-axis is used.
            yAxisID: "y-axis-0"
        }
    ]
};

var options = {
    legend : {
        display: false
    },
    title : {
        display: true,
        position: "top",
        text: "Your Neighborhood Comparison",
        fontSize: 20
    }, scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true,
                max: Math.max.apply(Math,data.datasets[0].data) + 1
            }
        }]
    }
}

var ctx = document.getElementById("monthlyComparison");
console.log(ctx)
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});

$('#monthlyComparison').width(700)
$('#monthlyComparison').height(300)