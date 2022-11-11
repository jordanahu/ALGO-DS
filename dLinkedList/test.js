const dLinkedList = require("./");

const students = new dLinkedList();

module.exports = ()=>{
    students.addFirst("Jordan");
    students.addFirst("Michael");
    students.addFirst("Solo");
    students.addFirst("Jam");
    students.addFirst("Eddie");
    students.addFirst("Maryam");
    students.addChild("First Child", 2);
    students.addChild("Second Child", 3);
    console.log(students.toArray());

}









