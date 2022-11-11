module.exports = class{
    constructor(value, next = null, prev = null, child=null){
        this.value = value;
        this.next = next;
        this.prev = prev;
        this.child = child;
    }
}











