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
    width: '450px',
    height: '350px'
};

// line chart plotting resident waste habits
//new Chartist.Line('.home-waste-history', data, options);

monthDict = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
}

var labels = []
var data = []

for (var x = 0; x < user1Data.weightData.length; x++) {
    labels.push(monthDict[x])
    data.push(user1Data.weightData[x])
}

var ctx = document.getElementById("monthlyWaste");
var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Waste By Month',
            data: data,
            backgroundColor: "rgba(242,189,32,0.6)",
            pointRadius: 20,
            pointBorderWidth: 7,
            pointBorderColor: "rgba(194,0,0,1)"
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        title: {
            display: true,
            position: "top",
            text: "Waste Output by Month",
            fontSize: 20
        },
        legend: {
            display: false
        }
    }
})

chart = $('#wasteContainer')
chart.css('margin', '30px')

$('body').css('background', 'rgba(242,189,32,0.6)')

$('#wasteContainer').css('float', 'left')
//$('#tipDiv').css('background', 'darkgray')
//$('#tipDiv').css('width', '300px')
//$('#tipDiv').css('height', '400')
//$('#tipDiv').css('margin-top', '100px')
//$('#tipDiv').css('float', 'left')




