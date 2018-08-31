var test1 = require('./test1');
var test2 = require('./test2');
var test3 = require('./test3');
var testList = [test1, test2, test3];
var list = [
	new test1(), 
	new test1(), 
	new test2(), 
	new test2(), 
	new test3(),
	new test3()
];
for (var i = 0; i < 1000; i++) {
	var index = Math.floor((Math.random() * list.length) + 0);
	list[index].set(Math.random() * 10);
	for (var j = 0; j < list.length; j++) {
		console.log(list[j].get());
	}
	if(Math.random() > 0.9){
		list.push(new testList[Math.floor((Math.random() * testList.length))]());
	}
}