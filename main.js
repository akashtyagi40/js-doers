var Task = require("./utility");
var task1 = new Task([1,2,3]);
var mapResult = task1.map((function(x) {
    return x + 1;
}));
console.log("mapResult : " + mapResult);
//Calling map function
/*JSON.stringify([1,2,3].map(function(x) { return x + 1; }));*/