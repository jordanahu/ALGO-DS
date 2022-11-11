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

    addChild(value, pos){
        let count = 1;
        let current = this.head;
        while(current){
            if(count == pos){
                current.child = new Node(value);
                current.child.next = new Node("next child node");
                current.child.next.prev = current.child;
                current.child.next.child = new Node("nested child")
            }
            count++;
            current = current.next;
        }
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

    merge(){
        let current = this.head;
        while(current){

            if(current.child){
                let last = current.child;
                while(last){
                    last = last.next;
                }
                
                if(last?.next){
                    last.next = current.next;
                    last.next.prev = last;
                }
                current.next = current.child;
                current.next.prev = current;

                
                current.child = null;

            }else{

                current = current.next;
            }

        }
    }

    getChildren(){
        let res = [];
        let current = this.head;
        while(current){
            current.child && res.push(current.child.value)
            current = current.next;
        }
        return res;
    }
}