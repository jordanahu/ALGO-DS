const TreeNode = require("./TreeNode");



module.exports = class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.leftChild) {
          current.leftChild = newNode;
          break;
        }
        current = current.leftChild;
      } else {
        if (!current.rightChild) {
          current.rightChild = newNode;
          break;
        }
        current = current.rightChild;
      }
    }
  }

  find(value) {
    let current = this.root;
    while (true) {
      if (current.value == value) {
        return current;
      }
      if (value < current.value) {
        current = current.leftChild;
      } else {
        current = current.rightChild;
      }
    }
  }

  print() {
    return this.root;
  }

  traverseBF(fn) {
    let children = [this.root];
    while (children.length) {
      let node = children.shift();
      if (node) {
        fn(node);
        console.log(node.value);
        children.push(node.leftChild, node.rightChild);
      }
    }
  }
  
  zigzagTraversal() {
    let res = [];
    let nodes = [this.root];
    let zigzag = false;
    while (nodes.length) {
      let currentLevel = [];
      let len = nodes.length;
      for (let i = 0; i < len; i++) {
        let node = nodes.shift();
        if (node) {
          currentLevel.push(node.value);
          nodes.push(node.leftNode, node.rightNode);
        }
      }
      if (zigzag) {
        currentLevel.reverse();
      }
      zigzag = !zigzag;

      res.push(currentLevel);
    }

    return res;
  }
  //pattern
  levelOrder() {
    let res = [];
    let nodes = [this.root];
    while (nodes.length) {
      let len = nodes.length;
      let currentLevel = [];
      for (let i = 0; i < len; i++) {
        let node = nodes.shift();
        if (node) {
          currentLevel.push(node.value);
          nodes.push(node.leftNode, node.rightNode);
        }
      }
      res.push(currentLevel);
    }

    return res;
  }
  levelOrder() {
    let nodes = [this.root];
    let res = [[]];
    let size = 1;
    while (nodes.length) {
      let node = nodes.shift();
      if (node) {
        res.at(-1).push(node.value);
        nodes.push(node.leftNode, node.rightNode);
        size++;
      }
      if (size == res.at(-1).length * 2) {
        res.push([]);
      }
    }

    return res;
  }

  traverseDF(fn) {
    let children = [this.root];
    while (children.length) {
      let node = children.shift();
      if (node) {
        fn(node);
        console.log(node.value);
        children.unshift(node.leftChild, node.rightChild);
      }
    }
  }
};