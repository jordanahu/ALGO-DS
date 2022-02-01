#!/usr/bin/env node

const LinkedList = require("./linkedList");

let students = new LinkedList("Edward");

students.addFirst("Jordan")
students.addFirst("Anthony")
students.addFirst("Jam")
students.addLast("Michael")
students.addAt(2, "Maryam")
students.removeLast()
students.removeAt(2)



console.log(students.toArray())
// console.log(students.size)
students.reverse()
console.log(students.toArray())

