;(function () {
	'use strict';
	
	function printNumbersInterval() {
	var i = 1;
	console.log(i);
		var timerId = setInterval(function () {
			console.log(i);
			if (i == 20) clearInterval(timerId);
			i++;
		}, 100)
}


printNumbersInterval()

})();