let jsonresp = '{"fname":"Rohit","lname":"katkar"}';

let jsobj = JSON.parse(jsonresp);
console.log(jsobj);

let jsdata = JSON.stringify(jsobj);
console.log(jsdata);