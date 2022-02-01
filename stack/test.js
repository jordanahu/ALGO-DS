module.exports = ()=>{
    let Stack = require("./");
    let studentsStack = new Stack();

    studentsStack.push("Michael");
    studentsStack.push("Jordan");
    studentsStack.push("Edward");

    let popped = studentsStack.pop()
    console.log("popped is, ", popped)
    console.log(studentsStack.toArray())
    console.log(studentsStack.size)
    console.log("Empty is, ",studentsStack.isEmpty())
}