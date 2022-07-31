const Node = require("./listNode");

module.exports = class LinkedList{
     
    #size = 0;
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertFirst(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let rest = this.head;
            newNode.next = rest;
            this.head = newNode
        }
        this.#size++
    }

    size() {
        return this.#size
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        return this.tail;
    }

    clear() {
        this.head = null;
        this.#size = 0;
    }

    removeFirst() {
        let rest = this.head.next;
        this.head = rest;
        this.#size--
    }

    removeLast() {
        if(this.#size == 1) return this.removeFirst()
        let current = this.head;
        let index = 0;
        while (index < this.#size) {
            if (index == this.#size - 2) {
                current.next = null;
                this.tail = current;
                break;
            }
            index++;
            current = current.next;
        }

        this.#size--;
    }

    insertLast(value) {
        if (!this.head){
            this.insertFirst(value);
            return;
        } 
        let newNode = new Node(value);
        let current = this.head;
        let index = 0;
        while (index < this.#size) {
            if (index == this.#size - 1) {
                current.next = newNode
                this.tail = newNode
                break;
            }

            index++;
            current = current.next;
        }
        this.#size++;
    }

    getAt(pos) {
        let idx = pos < 0 ? 0 : pos;
        let current = this.head;
        let index = 0;
        while (current) {
            if (index == idx) return current;
            index++;
            current = current.next;

        }

        return null;
    }

    insertAt(value, pos) {

        let newNode = new Node(value);
        if (pos == 0){
            this.insertFirst(value);
            return;
        } 
        if(pos > this.#size - 1){
            this.insertLast(value)
            return;
        } 
        let current = this.head;
        let index = 0;
        let previous;
        while (index < this.#size) {

            if (pos - 1 == index) {
                previous = current;
            }

            if (pos == index) {
                let rest = current;
                newNode.next = rest;
                previous.next = newNode
                break;
            }

            index++;
            current = current.next;
        }

        this.#size++;
    }

    forEach(fn) {
        let current = this.head;
        while (current) {
            fn(current)
            current = current.next;
        }
    }

    *[Symbol.iterator]() {
        let current = this.head;
        while (current) {
            yield current;
            current = current.next;
        }
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.#size = 0
    }
    removeAt(pos) {
        if (!this.head) return;
        if(pos == 0){
            this.removeFirst();
            return;
        } 
        if(pos > this.#size-1) return;
        let idx = 0;
        let current = this.head;
        let previous;
        while (idx < this.#size) {
            if (idx == pos - 1) {
                previous = current
            }

            if (idx == pos) {
                let rest = current?.next;
                previous.next = rest;
                break;
            }

            current = current?.next;
            idx++
        }
        this.#size--
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
       let left = this.head;
       let right = this.head.next;
       this.tail = this.head;
       this.tail.next = null;
       while(right!=null){
        let next = right.next;
        right.next = left;
        left = right;
        right = next;
       }
       this.head = left;
      
    }
}