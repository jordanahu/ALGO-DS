const LinkedList = require("../linkedList")




module.exports = class LinkedListQueue{
    constructor(value){
        this.queue = new LinkedList(value)
        this.size = 1
    }

    enqueue(val){
        this.queue.addLast(val);
        this.size++
    }

    dequeue(){
        let first = this.queue.head.value
        this.queue.removeFirst()
        this.size--
        return first;
        
    }

    isEmpty(){
        return !this.size;
    }

    peek(){
        let first = this.queue.head.value
        return first;
    }

    toArray(){
        return this.queue.toArray()
    }
}