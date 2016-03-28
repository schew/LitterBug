$(document).ready(function() {
    $('#map').usmap({
        mouseover: function(event, data) {
//            $('#hover-div').text('You clicked ' + data.name + "!")
              $('#hover-state').text(stateDict[data.name][0]);
            $('#hover-pop').text(stateDict[data.name][1] + " tons of waste produced in 2016");

            console.log(data.name)
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
    "AL": ["Alabama", "342,322"],
    "AK": ["Alaska", "1,342,322"],
    "AS": ["American Samoa", "54,432"],
    "AZ": ["Arizona","102,998"],
    "AR": ["Arkansas","345,655,323"],
    "CA": ["California","332,765"],
    "CO": ["Colorado","243,873"],
    "CT": ["Connecticut","34,322"],
    "DE": ["Delaware","543,672"],
    "DC": ["District Of Columbia", "776,332"],
    "FM": ["Federated States Of Micronesia","223,334"],
    "FL": ["Florida","112,442,322"],
    "GA": ["Georgia","753,453"],
    "GU": ["Guam","234,765"],
    "HI": ["Hawaii","564,323"],
    "ID": ["Idaho","454,444,665"],
    "IL": ["Illinois","980,34e"],
    "IN": ["Indiana","543,676"],
    "IA": ["Iowa","322,665"],
    "KS": ["Kansas","554,234"],
    "KY": ["Kentucky","234,765"],
    "LA": ["Louisiana","987,565"],
    "ME": ["Maine","346,865"],
    "MH": ["Marshall Islands","436,123"],
    "MD": ["Maryland","543,235"],
    "MA": ["Massachusetts","154,543"],
    "MI": ["Michigan","643,678"],
    "MN": ["Minnesota","456,789"],
    "MS": ["Mississippi","989,454"],
    "MO": ["Missouri","432,456"],
    "MT": ["Montana","123,543"],
    "NE": ["Nebraska","234,543"],
    "NV": ["Nevada","764,948"],
    "NH": ["New Hampshire","453,654"],
    "NJ": ["New Jersey","123,234"],
    "NM": ["New Mexico","754,234"],
    "NY": ["New York","754,234"],
    "NC": ["North Carolina","654,234"],
    "ND": ["North Dakota","254,123"],
    "MP": ["Northern Mariana Islands","456,987"],
    "OH": ["Ohio","454,098"],
    "OK": ["Oklahoma","223,098"],
    "OR": ["Oregon","3,454,345"],
    "PW": ["Palau","6,453,098"],
    "PA": ["Pennsylvania","234,235,543"],
    "PR": ["Puerto Rico","656,354"],
    "RI": ["Rhode Island","143,353"],
    "SC": ["South Carolina","154,234"],
    "SD": ["South Dakota","983,434"],
    "TN": ["Tennessee","154,543"],
    "TX": ["Texas","443,343"],
    "UT": ["Utah","333,111"],
    "VT": ["Vermont","232,333"],
    "VI": ["Virgin Islands","599,889"],
    "VA": ["Virginia","13,444,365"],
    "WA": ["Washington","495,676"],
    "WV": ["West Virginia","665,444"],
    "WI": ["Wisconsin","890,454"],
    "WY": ["Wyoming","333,445"]
};
