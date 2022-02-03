

module.exports = class PriorityQueue{
    constructor(){
        this.queue = [];
        this.count = 0;
        this.size = 0;
    }

    enqueue(val){
       //[1,2,6]
        if(this.isEmpty()){
            this.queue[this.count++] = val;
            this.size++
            return;
        }
        let added = false;
        for(let index=this.size; index>=0; index--){
            if(val < this.queue[index]){
                this.queue[index+1] = this.queue[index]
                this.queue[index] = val;
                added = true;
            }
        }

        if(!added){
            this.queue[this.count]= val
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
        return this.queue[0]
    }

    toArray(){
        return this.queue
    }
}