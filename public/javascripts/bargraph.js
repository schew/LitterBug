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
            data: [12, 17, 25],

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

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});

$('#monthlyComparison').width(650)
$('#monthlyComparison').height(300)
$('#comparisonContainer').css('float', 'left')

//$('#challengeNeighbor').css('float', 'left')
$('#challengeNeighbor').css('margin-left', '40px')
//$('#challengeNeighbor').css('background', 'blue')
//$('#challengeNeighbor').css('width', '100px')
//$('#challengeNeighbor').css('height', '100px')

//$('#challengeNeighbor').css('background', 'darkgray')
$('#challengeNeighbor').css('width', '260px')
$('#challengeNeighbor').css('height', '400')
$('#challengeNeighbor').css('margin-top', '35px')
$('#challengeNeighbor').css('float', 'left')



var that = this

$( "#monthDropdownSelect" )
    .change(function () {
        var e = document.getElementById("monthDropdownSelect");
        var select = e.options[e.selectedIndex].value;
        console.log(select)


        var monthData = [
            [12, 17, 25],
            [11, 20, 17],
            [14, 16, 15],
            [13, 12, 22]
        ]

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
                    data: monthData[select],

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

        var options = {
            legend : {
                display: false
            }
        }

        var myBarChart = new Chart(that.ctx, {
            type: 'bar',
            data: data,
            options: options
        });


        $('#monthlyComparison').width(650)
        $('#monthlyComparison').height(300)
        $('#comparisonContainer').css('float', 'left')

//$('#challengeNeighbor').css('float', 'left')
        $('#challengeNeighbor').css('margin-left', '40px')
//$('#challengeNeighbor').css('background', 'blue')
//$('#challengeNeighbor').css('width', '100px')
//$('#challengeNeighbor').css('height', '100px')

//$('#challengeNeighbor').css('background', 'darkgray')
        $('#challengeNeighbor').css('width', '260px')
        $('#challengeNeighbor').css('height', '400')
        $('#challengeNeighbor').css('margin-top', '35px')
        $('#challengeNeighbor').css('float', 'left')
    })

$('.challenger').click( function() {
    var username = $('.css-input').val();
    console.log(username)

    var list = document.getElementById("challengeNeighbor");
    list.removeChild(list.childNodes[1])
    $('#hasChallenges').css('margin-left', '0')
    $("#hasChallenges h3").html("Your Waste versus " + username);

    var data = {
        labels: [
            "estroud1",
            username,
        ],
        datasets: [
            {
                data: [300, 50],
                backgroundColor: [
                    "#FFCE56",
                    "#36A2EB"
                ],
                hoverBackgroundColor: [
                    "#FFCE56",
                    "#36A2EB"
                ],
                pointLabelFontColor: "white",
            }]
    };

    var options = {
        defaultFontColor: "red"
    }

    var ctx = document.getElementById("donut");


    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });

    $("#donut").width(250)
    return false;
} );