const LinkedList = require("../linkedList")

module.exports = class HashTable{
    constructor(size){
        this.table = Array(size)
        this.size = size;

    }

    hash(key){
        let code = 17;
        for(let char of key.toString()){
            code*=char.charCodeAt()
        }
        return code % this.size;
    }

    createNode(item){
        return new LinkedList(item)
    }

    put(key, item){

        let hashKey = this.hash(key);
        let hashValue = this.createNode(item)

        for(let key in this.table){
            if(key == hashKey){
                this.table[hashKey] = hashValue;
                return;
            }
        }


        if(this.table[hashKey]){
            this.table[hashKey].addLast(hashValue);
            return;
        }
        this.table[hashKey] = hashValue

    }

    get(key){
        let hashKey = this.hash(key);
        return this.table[hashKey]
    }

    remove(key){
        let hashKey = this.hash(key);
        delete this.table[hashKey]
    }

    print(){
        return this.table
    }
}