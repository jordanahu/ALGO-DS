const TreeNode = require("./TreeNode");



module.exports = class BinaryTree{
    constructor(){
        this.root = null;

    }

    insert(value){
        let newNode = new TreeNode(value);
         if (!this.root) {
             this.root = newNode
             return;
         }
        let current = this.root;
        while(true){
            if(value < current.value){
                if(!current.leftChild){
                    current.leftChild = newNode;
                    break;
                }
                current = current.leftChild;
                  
            }else{
                if(!current.rightChild){
                    current.rightChild = newNode;
                    break;
                }
                current = current.rightChild
                
            }
        }

    }

    find(value){
        let current = this.root;
        while(true){
           if(current.value == value){
               return current
           }
           if(value < current.value){
               current = current.leftChild;
           }else{
               current = current.rightChild;
           }
        }

    }

    print(){
        return this.root
    }

    traverseBF(fn){
        let children = [this.root];
        while(children.length){
            let node = children.shift();
            if(node){
                fn(node)
                console.log(node.value);
                children.push(node.leftChild, node.rightChild)
            }
        }
    }


    traverseDF(fn){
        let children = [this.root];
        while(children.length){
            let node = children.shift();
            if(node){
                fn(node)
                console.log(node.value);
                children.unshift(node.leftChild, node.rightChild)
            }
        }
    }
}