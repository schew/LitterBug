var activeTab=[".charts-home", "#home-tab"];
$(activeTab[1]).css("background-color", "rgb(205, 0, 0)");

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