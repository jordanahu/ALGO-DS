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
            let rest = this.head.next;
            // newNode.next = rest;
            // this.head = newNode
            this.head.next = newNode;
            this.head.next.next = rest
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
    
        let prev = null;
        let current = this.head;
        while(current){
            let rest = current.next;
            current.next = prev;
            prev = current;
            current = rest;
        }
        this.head = prev
        
        // let left = this.head;
        // let right = this.head.next;
        // this.tail = left;
        // this.tail.next = null;
        // while(right!=null){
        //     let rest = right.next;
        //     right.next = left;
        //     left = right;
        //     right = rest;
            
        // }
        // this.head = left;


    }

    reverseMtoN(m, n){
        console.log({m,n})
        let rightPointer = JSON.parse(JSON.stringify(this.head));
        let middleSidePointer = JSON.parse(JSON.stringify(this.head));
        let middleSide = null;
        let leftSide = JSON.parse(JSON.stringify(this.head));
        let leftPointer = leftSide;
        let rightSide;
        let leftCounter = 1;
        let rightCounter = 1;
        let middleCounter = 1;
        
        while(leftPointer){
            if(m - 1 == 0){
                leftSide = {next:null};
                break;
            }
            if(m-1 == leftCounter){
                leftPointer.next = null;
                break;
            }
            leftCounter++;
            leftPointer = leftPointer.next;
        }
      

        while(rightPointer){
            if(n == rightCounter){
                rightSide = rightPointer.next;
                break;
            }

            rightCounter++;
            rightPointer = rightPointer.next;
        }

        while(middleSidePointer){
            let rest = middleSidePointer.next;
            if(middleCounter >= m && middleCounter <= n){
                middleSidePointer.next = middleSide;
                middleSide = middleSidePointer
                middleSidePointer = rest;
            }
            middleCounter++;
            middleSidePointer = rest;
        }

        // merging leftSide, rightSide and middleSide
        let firstTempPointer = leftSide;
        let secondTempPointer = leftSide;
        while(firstTempPointer.next){
            firstTempPointer = firstTempPointer.next;
        }
        firstTempPointer.next = middleSide;

        while(secondTempPointer.next){
            secondTempPointer = secondTempPointer.next;
        }

        secondTempPointer.next = rightSide;

        let tempPointer = leftSide;

        let res = []
        while(tempPointer){
            tempPointer.value && res.push(tempPointer.value)
            tempPointer = tempPointer.next;
        }
        console.log(res)
    }


}