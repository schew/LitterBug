var activeTab=[".charts-home", "#home-tab"];
$(activeTab[1]).css("background-color", "rgb(205, 0, 0)");

//(function(){
//    var customSelects = document.querySelectorAll(".custom-dropdown__select");
//    for(var i=0; i<customSelects.length; i++){
//        if (customSelects[i].hasAttribute("disabled")){
//            customSelects[i].parentNode.className += " custom-dropdown--disabled";
//        }
//    }
//})()

$( "#custom-dropdown" ).change(function() {
    var a = document.getElementById("custom-dropdown");
    console.log(a.selectedIndex)

    if(a.selectedIndex == 0) {
        var data = {
            labels: ['Efficient Homes', 'Your Home', 'Your Neighbors'],
            series: [
                [54.6, 83.44, 78.32]
            ]
        };

        var options = {
            width: '450px',
            height: '350px',

            // horizontalBars: true,
            // axisY: {
            //     labelInterpolationFunc: function(value) {
            //         return value + 'kWh'
            //     }
            // }
        };


    } else if (a.selectedIndex == 1) {
        var data = {
            labels: ['Efficient Homes', 'Your Home', 'Your Neighbors'],
            series: [
                [45.6, 93.44, 68.32]
            ]
        };

        var options = {
            width: '450px',
            height: '350px',

            // horizontalBars: true,
            // axisY: {
            //     labelInterpolationFunc: function(value) {
            //         return value + 'kWh'
            //     }
            // }
        };

    }

    else if (a.selectedIndex == 2) {
        var data = {
            labels: ['Efficient Homes', 'Your Home', 'Your Neighbors'],
            series: [
                [45.6, 93.44, 68.32]
            ]
        };

        var options = {
            width: '450px',
            height: '350px',

            // horizontalBars: true,
            // axisY: {
            //     labelInterpolationFunc: function(value) {
            //         return value + 'kWh'
            //     }
            // }
        };

    }

    else if (a.selectedIndex == 4) {
        var data = {
            labels: ['Efficient Homes', 'Your Home', 'Your Neighbors'],
            series: [
                [45.6, 93.44, 68.32]
            ]
        };

        var options = {
            width: '450px',
            height: '350px',

            // horizontalBars: true,
            // axisY: {
            //     labelInterpolationFunc: function(value) {
            //         return value + 'kWh'
            //     }
            // }
        };

    }

    new Chartist.Bar('.home-neighbor-comparison', data, options);


});

//var a = document.getElementById("custom-dropdown");
//console.log(a.selectedIndex)
//alert(a.options[a.selectedIndex].value);

function showHome() {
	swap([".charts-home", "#home-tab"], activeTab);

};

function showCity() {
	swap([".charts-city", "#city-tab"], activeTab);
};

function showCountry() {
	swap([".charts-country", "#country-tab"], activeTab);
};

function showBilling() {
    swap([".billing", "#billing-tab"], activeTab);
};

function showSettings() {
	swap([".settings", "#settings-tab"], activeTab);
};	

/*function showTips() {
	swap([".tips", activeTab);
};
*/

function swap(activate, deactivate) {
    $(deactivate[0]).css("display", "none");
    $(activate[0]).css("display", "inline-block");
    $(activate[1]).css("background-color", "rgba(205, 0, 0, 1)");
    $(deactivate[1]).css("background-color", "rgba(0, 0, 0, 0)");

    activeTab=activate;
}