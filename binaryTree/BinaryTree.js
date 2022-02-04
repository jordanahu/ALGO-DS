const TreeNode = require("./TreeNode");



module.exports = class BinaryTree{
    constructor(value){
        this.root = new TreeNode(value);

    }

    insert(value){
        let newNode = new TreeNode(value);
        let current = this.root;
        while(current!=null){
            if(newNode.value < current.value){
                if(current.leftChild==null){
                    current.leftChild = newNode;
                    break;
                }
                current = current.leftChild;
                  
            }else{
               
                if(current.rightChild==null){
                    current.rightChild = newNode;
                    break;
                }
                current = current.rightChild
                
            }
        }

    }

    find(value){
        let current = this.root;
        while(current){
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
}