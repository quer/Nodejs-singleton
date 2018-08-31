var singleton = require('./singleton')
module.exports = function () {
	this.set = function (value) {
		singleton.set(value);
	}
	this.get = function () {
		return singleton.get();
	}
}