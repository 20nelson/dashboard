var ks = [];
var vs = [];
function readKey(k){
  var keys = ks//NetworkTables.getValue("/dashboard/roboRIO/keys");
  var values = vs//NetworkTables.getValue("/dashboard/roboRIO/values");
  return values[keys.indexOf(k)];
}

function writeKey(k, v){
  var keys = ks//NetworkTables.getValue("/dashboard/driverStation/keys");
  var values = vs//NetworkTables.getValue("/dashboard/driverStation/values");
  if(keys.indexOf(k) != -1){
    values[keys.indexOf(k)] = v;
  } else {
    console.log("key \'"+k+"\' does not exist. Adding...")
    keys.push(k);
    values.push(v);
  }
  vs = values//NetworkTables.putValue("/dashboard/driverStation/keys", keys);
  ks = keys//NetworkTables.putValue("/dashboard/driverStation/values", values);
}