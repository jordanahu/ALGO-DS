const Node = require("./node");


module.exports = class {
    constructor(){
        this.root = new Node(null);
    }

    insert(word){
        let current = this.root;
        for(let char of word){
            let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            if(!current.children[index]){
                current.children[index] = new Node(char);
            }
            current = current.children[index]
        }
        current.isEnd = true;
    }

    printWordChars(word){
        let current = this.root;
        let wordIdx = 0;
        while(!current.isEnd){
            let index = word[wordIdx].charCodeAt(0) - 'a'.charCodeAt(0)
            current = current.children[index];
            wordIdx++
            console.log(current.value)
        }
    }
}