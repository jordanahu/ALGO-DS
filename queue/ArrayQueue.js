module.exports = class ArrayQueue{
    constructor(){
        this.queue = [];
        this.size = 0
    }

    enqueue(val){
        this.queue.push(val);
        this.size++
    }

    dequeue(){
        this.size--
        return this.queue.shift();
        
    }

    isEmpty(){
        return !this.queue.length;
    }

    peek(){
        return this.queue[0]
    }

    toArray(){
        return this.queue;
    }
}