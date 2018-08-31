let number = 0
module.exports = {
	set: function (value) {
		number += value;
	},
	get: function () {
		return number;
	}
}