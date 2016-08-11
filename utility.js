
var Task = function() {
	this.res = new Array();
	this.value = arguments[0];
	this.completed = false;
}
//Defining own map method
Task.prototype.map = function(projectionFunction) {
 
    this.value.forEach(function(itemInArray) {
        this.res.push(projectionFunction(itemInArray));
    }, this);
    return this.res;
};
module.exports = Task;
