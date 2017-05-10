var updatingValues = ["pdp_voltage"];
var updatingDefaults = [];

var socketConn = false;

window.onload = function(){
  for(var i = 0; i < updatingValues.length; i++){
    updatingDefaults.push(document.getElementById(updatingValues[i]).innerHTML);
    NetworkTables.addKeyListener("dashboard/roboRIO/"+updatingValues[i], function(key, value, isNew){
      document.getElementById(key).innerHTML = value;
    }, true);
  }
  console.log(updatingDefaults);
  
NetworkTables.addWsConnectionListener(function(connected){
  
  socketConn = connected;
  checkConnection();
  
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


function checkConnection(){
  if(socketConn == false){
      for(var i = 0; i < updatingValues.length; i++){
        document.getElementById(updatingValues[i]).innerHTML = updatingDefaults[i];
      }
  }
}
