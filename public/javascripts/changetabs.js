var activeTab=".charts";

function showHome() {
	swap(".charts", activeTab);
};

function showSettings() {
	swap(".settings", activeTab);
};	

function showTips() {
	swap(".tips", activeTab);
};

function swap(activate, deactivate) {
	$(deactivate).css("display", "none");
	$(activate).css("display", "inline-block");
	activeTab=activate;
}