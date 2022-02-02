
module.exports = class CircularArray{
    constructor(arrSize){
        this.arrSize = arrSize;
        this.fixedArr = Array(this.arrSize).fill(0);
        this.count = 0;
    }
/*
 a =["one","two","three"]
i = 3;
l = 3
if i >= 3,i>=0 
 a[3] = 
 i % l
 3 % 3 = 0;
 4 % 3 = 1
 5 % 3 = 2

*/
    push(val){
        if(this.count >= this.arrSize){
            this.count = this.count % this.arrSize
        } 

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