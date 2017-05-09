window.onload = function(){
NetworkTables.addWsConnectionListener(function(connected){
	if(connected){
		document.getElementById('socketConnection').className = 'fa fa-lg fa-check';
	} else {
		document.getElementById('socketConnection').className = 'fa fa-lg fa-times';
	}
}, true);
NetworkTables.addRobotConnectionListener(function(connected){
	if(connected){
		document.getElementById('robotConnection').className = 'fa fa-lg fa-check';
	} else {
		document.getElementById('robotConnection').className = 'fa fa-lg fa-times';
		document.getElementById('fmsConnection').className = 'fa fa-lg fa-times';
		// reset all values
	}
}, true);
}