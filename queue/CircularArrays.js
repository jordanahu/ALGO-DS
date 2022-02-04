
module.exports = class CircularArray{
    constructor(arrSize){
        this.arrSize = arrSize;
        this.fixedArr = Array(this.arrSize).fill(0);
        this.count = 0;
    }

    push(val){
        this.count = this.count % this.arrSize
        this.fixedArr[this.count++] = val;
    }

    isEmpty(){
        return !this.count;
    }

    peek(){
      return this.arrSize[0]
    }

    toArray(){
        return this.fixedArr
    }
}