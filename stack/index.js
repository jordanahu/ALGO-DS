module.exports = class Stack{
    constructor(){
        this.count = 0;
        this.size = 0;
        this.stack = [];
    }

    push(val){
        this.stack[this.count++] = val;
        this.size++
    }

    pop(){
        let item = this.stack[this.size-1]
        this.stack = this.stack.slice(0,-1);
        this.count--
        this.size--
        return item;
    }

    peek(){
        return this.stack[this.size-1]

    }

    isEmpty(){
        return !this.size

    }

    toArray(){
        return this.stack
    }
}