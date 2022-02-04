const BinaryTree = require("./BinaryTree");

module.exports = ()=>{
    let numberTree = new BinaryTree(8);
    numberTree.insert(3)
    numberTree.insert(10)
    numberTree.insert(1)
    numberTree.insert(6)
    numberTree.insert(14)

    console.log(numberTree.find(10))
    
}