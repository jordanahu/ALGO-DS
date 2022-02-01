const listNode = require("./listNode");

module.exports = class LinkedList{
    constructor(value){
        let node = new listNode(value)
        this.head = node;
        this.tail = node;
        this.size = 1;
    }

    addFirst(value){
        let node = new listNode(value)
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    addLast(value){
        let node = new listNode(value)
        this.tail.next = node;
        this.tail = node;
        this.size++;
    }

    addAt(pos, value){
        let node = new listNode(value);
        let index = 0;
        let current = this.head;
        while(current!=null){
            if(pos-1 == index){
                let rest = current.next;
                current.next = node;
                node.next = rest;
            }
            index++
            current = current.next;
        }
        this.size++

    }

    removeFirst(){
        let rest = this.head.next;
        this.head.next = null;
        this.head = rest;
        this.size--
    }

    removeLast(){
        let current = this.head
        while(current!=null){
            if(current.next.next == null){
                current.next = null
            }
            current = current.next;
        }
        this.size--
    }

    removeAt(pos){
        let index = 0;
        let current = this.head;
        while(current!=null){
            if(pos-1 == index){
                let rest = current.next.next;
                current.next = rest;
                current.next.next = null;
            }
            index++
            current = current.next;
        }
        this.size--

    }

    toArray(){
        let listArray = [];
        let current = this.head;
        while(current!=null){
            listArray.push(current.value)
            current = current.next;
        }
        return listArray;
    }

    toString(){
        return this.head;
    }

    reverse(){
        //using the two-pointer technique;
       let first = this.head;
       let second = first.next;
       while(second!=null){
           let rest = second.next;
           second.next = first;
           first = second;
           second = rest;
       }
       this.tail = this.head
       this.tail.next = null;
       this.head = first;
    }

}