const ArrayQueue = require('./ArrayQueue');
const StackQueue = require("./StackQueue");
const LinkedListQueue = require("./LinkedListQueue")
const CircularArray = require('./CircularArrays');
const PriorityQueue = require("./PriorityQueue");


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
// let studentsStQueue = new StackQueue();
//   studentsStQueue.enqueue("Maryam");
//   studentsStQueue.enqueue("Mohammed");
//   studentsStQueue.enqueue("Jammy Jam")
 
//   removedItem = studentsStQueue.dequeue();
  

//   console.log("the removed item is,", removedItem)
//   console.log(studentsStQueue.toArray())
//   console.log(studentsStQueue.size)

//LINKED_LIST_QUEUE
// let studentsLlQueue = new LinkedListQueue("Maryam");
//   studentsLlQueue.enqueue("Mohammed");
//   studentsLlQueue.enqueue("Jammy Jam")
 
//   removedItem = studentsLlQueue.dequeue();
  

//   console.log("the removed item is,", removedItem)
//   console.log(studentsLlQueue.toArray())
  // console.log(studentsLlQueue.size)

  //CIRCULAR_ARRAY
  // let arr = new CircularArray(3);
  // arr.push(3)
  // arr.push(4)
  // arr.push(5)
  // arr.push(6)
  // arr.push(7)
  // arr.push(8)
  // arr.push(9)
  // console.log(arr.fixedArr)

  //PRIORITY_QUEUE
  let numbersQueue = new PriorityQueue();
  numbersQueue.enqueue("Michel",2)
  numbersQueue.enqueue("Edward",0)
  numbersQueue.enqueue("Maryam",13)
  numbersQueue.enqueue("Anthony",1)
  numbersQueue.enqueue("Mohammed",12)
  numbersQueue.enqueue("Naimabadi",1)
  numbersQueue.enqueue("Ali",10)
  numbersQueue.enqueue("Jordan",0)
  console.log(numbersQueue.toArray())

}
