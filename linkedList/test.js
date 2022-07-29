module.exports = ()=>{

const LinkedList = require("./");

let students = new LinkedList();

students.insertFirst("Jordan")
students.insertFirst("Anthony")
students.insertFirst("Jam")
students.insertLast("Michael")
students.insertAt(2, "Maryam")
students.removeLast()
students.removeAt(2)



console.log(students.toArray())
students.forEach(student=>student.value+=" Ahu")
console.log(students.size())
students.reverse()
console.log(students.toArray())
}
