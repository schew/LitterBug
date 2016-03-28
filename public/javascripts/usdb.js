$(document).ready(function() {
    $('#map').usmap({
        mouseover: function(event, data) {
            //$('#hover-div').text('You clicked ' + data.name + "!")
//            $.ajax({
//                type: "POST",
//                url: 'usdbstate.php',
//                dataType: 'json',
//                data: {functionname: 'hover', arguments: [stateDict[data.name]]},
//
//                success: function (obj) {
//                    if( !('error' in obj) ) {
//                        $('#hover-state').text(obj.result.Name);
//                        $('#hover-pop').text("Population: " + numberWithCommas(obj.result.Population));
//                        $('#hover-income').text("Median Income: " + numberWithCommas(obj.result.MedianIncome));
//                        $('#hover-age').text("Median Age: " + obj.result.MedianAge);
//                        $('#hover-poverty').text("Num in Poverty: " + numberWithCommas(obj.result.NumPoverty));
//                        $('#hover-unemployed').text("Num Unemployed: " + numberWithCommas(obj.result.NumUnemployed));
//                    }
//                    else {
//                        console.log(obj.error);
//                        console.log("err")
//                    }
//                }, error: function (err) {
//                    console.log(err.responseText)
//                    console.log("error not success")
//                }
//            });


        },

        click: function(event, data) {
            $.ajax({
                type: "POST",
                url: 'usdbstate.php',
                dataType: 'json',
                data: {functionname: 'click', arguments: [stateDict[data.name]]},

                success: function (obj) {
                    if( !('error' in obj) ) {
                        $('table').css("visibility", "visible")
                        $('#click-state').text(obj.result.Query1);
                        $('#r1').text("Population: " + numberWithCommas(obj.result.Query2))
                        $('#r2').text("Percent White: " + obj.result.Query3 + "%")
                        $('#r3').text("Percent Black: " + obj.result.Query4 + "%")
                        $('#r4').text("Percent Hispanic: " + obj.result.Query5 + "%")
                        $('#r5').text("Percent Asian: " + obj.result.Query6 + "%")
                        $('#r6').text("Percent Other: " + obj.result.Query7 + "%")
                        $('#r7').text("Percent in Poverty: " + obj.result.Query8 + "%")
                        $('#r8').text("Percent W/ Degree: " + obj.result.Query9 + "%")
                        $('#r9').text("Percent Unemployed: " + obj.result.Query10 + "%")
                        $('#r10').text("Num Counties: " + numberWithCommas(obj.result.Query11))
                        $('#r11').text("Capital City: " + obj.result.Query12)
                        $('#r12').text("Capital City Pop.: " + numberWithCommas(obj.result.Query13))
                        $('#r13').text("Governor: " + obj.result.Query14)
                        $('#r14').text("Total State Revenue: " + numberWithCommas(obj.result.Query15))
                        $('#r15').text("Total State Expenditure: " + numberWithCommas(obj.result.Query16))


                        for (i = 0; i < 15; i++) {
                            $('#' + i.toString()).text("testint")
                        }
                    }
                    else {
                        console.log(obj.error);
                        console.log("err")
                    }
                }, error: function (err) {
                    console.log(err.responseText)
                    console.log("error not success")
                }
            });
//$('#clicked-div').text('You clicked ' + data.name + "!")
        }
    });
});

function submitQuery() {
    var queryString = "";

    queryString += "SELECT ";

    var select = $('#query-selector option:selected').val()

    var from = $('#from-selector option:selected').val()

    if (select != "Name") {
        select = "Name" + ", " + select
    } else {
        select = select + ", " + "''"
    }
    queryString += select
    queryString += " FROM "
    queryString += from

    queryString += " WHERE "

    var where = $('#where-selector option:selected').val()

    if (where.indexOf("Percent") > -1) {
        if (where == "PercentDegrees") {
            where = "((NumBachelors + NumMasters + NumProfessional + NumDoctorate) / Population) * 100"
        }
        else if (where == "PercentPoverty") {
            where = "(NumPoverty / Population) * 100"
        }
        else if (where == "PercentMinorities") {
            where = "((NumBlack + NumHispanic) / Population) * 100"
        }
    }
    queryString += where

    queryString += " "

    var math = $('#math-selector option:selected').val()
    queryString += math

    queryString += " "

    var num = $('#num-input').val()
    queryString += num

    queryString += ";"
    $.ajax({
        type: "POST",
        url: 'usdbstate.php',
        dataType: 'json',
        data: {functionname: 'custom', arguments: [queryString]},

        success: function (obj) {
            if( !('error' in obj) ) {
                var answerString = "";
                $('#query-answer').text(obj.result.Answer);
                for(i = 0; i < obj.result.length; i++) {
                    //answerString += "( ";
                    console.log(obj.result[i])
                    console.log("Keys: " + Object.keys(obj.result[i]).length)
                    for(c = 0; c < 1; c++) {
                        answerString += obj.result[i][0]
                        if (obj.result[i][1] != '') {
                            answerString += ": " + numberWithCommas(obj.result[i][1])
                        } else {
                            answerString += ""
                        }
                    }
                    //answerString += "), "
                    answerString += ", "
                }
                console.log(answerString)
                $('#query-answer').text(answerString)
            }
            else {
                console.log(obj.error);
                console.log("err")
            }
        }, error: function (err) {
            console.log(err)
            console.log("error not success")
            $('#query-answer').text("Sample size too big. Please try a query with smaller bounds.")
        }
    });


}

function numberWithCommas(x) {
    if(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

var stateDict = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
};
