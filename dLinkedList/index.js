const Node = require("./node");

/*

null<-[v1]-><-[v2]-><-[v3]->null\

*/

module.exports = class {
    constructor() {
        this.head = null;
        this.tail = null;
        
    }

    addFirst(value) {
        let node = new Node(value)
        if(!this.head){
            this.head = this.tail = node;
        }else{
            let rest = this.head.next;
            this.head.next = node;
            node.prev = this.head;
            node.next = rest;
            this.tail = node;
        }
    }

    addLast(value) {
        let node = new Node(value);
        if(!this.head){
            this.addFirst(value)
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }

    addAt(pos, value) {

    }

    removeAt(pos, value) {

    }

    toArray() {
        let result = [];
        let current = this.head;
        while(current){

            let {value, next} = current;
            result.push([
              value, next?next.value:"endLast"
            ]);
            current = current.next
        }

        return result

    }

    
}