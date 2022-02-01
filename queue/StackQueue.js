let Stack = require("../stack")


module.exports = class StackQueue{
    constructor(){
        this.stack = new Stack();
        this.size = 0;
    }

    enqueue(val){
        this.stack.push(val);
        this.size++
    }

    dequeue(){
        let temp = []
        let item;
        while(!this.stack.isEmpty()){
            item = this.stack.pop();
            temp.push(item)
        }
       
        temp = temp.slice(0,-1).reverse()
        temp.forEach(el=>this.stack.push(el))

        this.size--;
        return item;
    }

    isEmpty(){
        return this.stack.isEmpty()
    }

    peek(){
        let item;
        let tempStack = this.stack
        while(!tempStack.isEmpty()){
            item = tempStack.pop();
            
        }
        return item;
    }

    toArray(){
        return this.stack.toArray()
    }
}