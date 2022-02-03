

module.exports = class PriorityQueue{
    constructor(){
        this.queue = [];
        this.count = 0;
        this.size = 0;
    }

    enqueue(val, priority){
       //[1,2,6]
        let itemObj = {val, priority};
        if(this.isEmpty()){
            this.queue[this.count] = itemObj
            this.count++;
            this.size++;
            return;
        }

        let added = false;
        let index = this.size - 1;
        while(index >= 0){
            if(itemObj.priority < this.queue[index].priority){
                this.queue[index + 1] = this.queue[index];
                this.queue[index] = itemObj
                added = true;
            }

            index--
        }

        if(!added){
            this.queue[this.count] = itemObj;
        }

        this.count++;
        this.size++;
        
        
    }

    dequeue(){
        
        
    }

    isEmpty(){
        return !this.size;
    }

    peek(){
        return this.queue[0].item
    }

    toArray(){
        // return this.queue.map(({item})=>item)
        return this.queue;
    }
}