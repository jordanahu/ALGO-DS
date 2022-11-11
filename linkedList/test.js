
const LinkedList = require("./");

let students = new LinkedList();


module.exports = ()=>{
	students.insertFirst(1)
	students.insertLast(2)
	students.insertLast(3)
	students.insertLast(4)
	students.insertLast(5)
	students.insertLast(6);
	// students.insertLast(7);
	// students.insertLast(8);
	// students.insertLast(9);
	
	console.log(students.toArray())
	students.reverseMtoN(1,2);
	console.log(students.toArray())
}