var activeTab=".charts-home";

function showHome() {
	swap(".charts-home", activeTab);
};

function showCity() {
	swap(".charts-city", activeTab);
};

function showCountry() {
	swap(".charts-country", activeTab);
};

function showSettings() {
	swap(".settings", activeTab);
};	

/*function showTips() {
	swap(".tips", activeTab);
};
*/

function swap(activate, deactivate) {
	$(deactivate).css("display", "none");
	$(activate).css("display", "inline-block");
	activeTab=activate;
}