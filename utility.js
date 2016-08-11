
var Task = function() {
	this.results = [];
	this.completed = false;
}
//Defining own map method
Task.prototype.map = function(projectionFunction) {
 
    this.forEach(function(itemInArray) {
        this.results.push(projectionFunction(itemInArray));
    });
    return this.results;
};
module.exports = Task;
