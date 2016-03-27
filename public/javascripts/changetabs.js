var activeTab=[".charts-home", "#home-tab"];

function showHome() {
	swap([".charts-home", "#home-tab"], activeTab);
};

function showCity() {
	swap([".charts-city", "#city-tab"], activeTab);
};

function showCountry() {
	swap([".charts-country", "#country-tab"], activeTab);
};

function showSettings() {
	swap([".settings", "#settings-tab"], activeTab);
};	

/*function showTips() {
	swap(".tips", activeTab);
};
*/

function swap(activate, deactivate) {
	$(deactivate[0]).css("display", "none");
	$(activate[0]).css("display", "inline-block");
    $(deactivate[1]).css("background", "none");
    $(activate[1]).css("background", "rgb(205, 0, 0)");

    console.log(activate)
    console.log(deactivate)

	activeTab=activate;
}