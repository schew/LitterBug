app.controller('MainController', ['$scope', function($scope) {
	$scope.reduce = function(weight) {
		// Error check -- can't have negative weight
		if (weight < 0) {
			weight = 0;
		} else if (typeof weight == 'undefined') {
			// TODO: HARDCODED NUMBERS
			weight = 56;
		}

		return 56 - weight;
	}

	$scope.savings = function(newWeight) {
		if (typeof newWeight == 'undefined') {
			newWeight = 0;
		}
		var savings = newWeight * 0.45
		return savings.toFixed(2);
	}
}]);