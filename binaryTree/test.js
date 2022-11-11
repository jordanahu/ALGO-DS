const BinaryTree = require("./BinaryTree");

module.exports = ()=>{
    let numberTree = new BinaryTree();
   numberTree.insert(23);
   numberTree.insert(20);
   numberTree.insert(2);
   numberTree.insert(24);
   numberTree.insert(1);
   numberTree.insert(26);
   numberTree.insert(5);

    // console.log(numberTree.find(10))
    numberTree.traverseBF(node=>node.data+=10)
    console.log("=====")
    numberTree.traverseDF(node => node)
}