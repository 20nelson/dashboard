var updatingValues = ["pdp_voltage"];
var updatingDefaults = [];

var robotConn = false;

window.onload = function(){
  for(var i = 0; i < updatingValues.length; i++){
    updatingDefaults.push(document.getElementById(updatingValues[i]).innerHTML);
  }
  console.log(updatingDefaults);
  
   NetworkTables.addGlobalListener(function(key, value, isNew){
      updateValues();
    }, true);
  
NetworkTables.addWsConnectionListener(function(connected){
  
  
  
	if(connected){
		document.getElementById('socketConnection').className = 'fa fa-lg fa-check';
	} else {
		document.getElementById('socketConnection').className = 'fa fa-lg fa-times';
	}
  
}, true);
  
NetworkTables.addRobotConnectionListener(function(connected){
  robotConn = connected;
  checkConnection();
  
	if(connected){
		document.getElementById('robotConnection').className = 'fa fa-lg fa-check';
	} else {
		document.getElementById('robotConnection').className = 'fa fa-lg fa-times';
		document.getElementById('fmsConnection').className = 'fa fa-lg fa-times';
		// reset all values
	}
}, true);
  
}

function updateValues(){
   for(var i = 0; i < updatingValues.length; i++){
       document.getElementById(updatingValues[i]).innerHTML = readKey(updatingValues[i]);
     }
}

function checkConnection(){
  if(robotConn == false){
      for(var i = 0; i < updatingValues.length; i++){
        document.getElementById(updatingValues[i]).innerHTML = updatingDefaults[i];
      }
  }
}
