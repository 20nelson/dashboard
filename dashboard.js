function readKey(k){

  var keys = NetworkTables.getValue("/dashboard/roboRIO/keys");

  var values = NetworkTables.getValue("/dashboard/roboRIO/values");

  return values[keys.indexOf(k)];

}


function writeKey(k, v){

  var keys = NetworkTables.getValue("/dashboard/driverstation/keys");

  var values = NetworkTables.getValue("/dashboard/driverstation/values");

  if(keys.indexOf(k) != -1){

    values[keys.indexOf(k)] = v;

  } else {

    console.log("key \'"+k+"\' does not exist. Adding...")

    keys.push(k);

    values.push(v);

  }

  NetworkTables.putValue("/dashboard/driverstation/keys", keys);

  NetworkTables.putValue("/dashboard/driverstation/values", values);

}