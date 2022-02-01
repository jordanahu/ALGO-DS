const ArrayQueue = require('./ArrayQueue');
const StackQueue = require("./StackQueue")

module.exports = ()=>{
  //ARRAY QUEUE
//   let studentsArQueue = new ArrayQueue();
//   studentsArQueue.enqueue("Maryam");
//   studentsArQueue.enqueue("Mohammed");
//   studentsArQueue.enqueue("Jammy Jam")
//   let removedItem = studentsArQueue.dequeue();


//   console.log("the removed item is,", removedItem)
//   console.log(studentsArQueue.toArray())
//   console.log(studentsArQueue.size)

//STACK QUEUE
let studentsStQueue = new StackQueue();
  studentsStQueue.enqueue("Maryam");
  studentsStQueue.enqueue("Mohammed");
  studentsStQueue.enqueue("Jammy Jam")
 
  removedItem = studentsStQueue.dequeue();
  

  console.log("the removed item is,", removedItem)
  console.log(studentsStQueue.toArray())
  console.log(studentsStQueue.size)

}