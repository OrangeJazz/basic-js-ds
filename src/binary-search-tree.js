const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.root1 = null;
  }
  root() {
    return this.root1;
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  add(data) {
    let newNode = new Node(data);
    if (this.root1 === null) {
      this.root1 = newNode;
    } else {
      this.insertNode(this.root1, newNode);
    }
  }

  has(data) {
    if (this.find(data)) {
      return true;
    } else {
      return false;
    }
  }

  find(data, node = this.root1) {
    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this.find(node.left, data);
    } else if (data > node.data) {
      return this.find(node.right, data);
    } else {
      return null;
    }
  }

  remove(data) {
    this.root1 = removeNode(this.root1, data);

    function removeNode(node, value) {
      if (!node) return null;
      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.left) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.value = minFromRight.value;
        node.right = removeNode(node.right, minFromRight.value);
        return node;
      }
    }
  }

  min(node = this.root1) {
    if (node.left === null) return node.data;
    else {
      node = node.left;
      return this.min(node.left);
    }
  }

  max(node = this.root1) {
    if (node.right === null) return node.data;
    else {
      node = node.right;
      return this.max(node.right);
    }
  }
}

const tree = new BinarySearchTree();
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(8);
tree.add(4);
tree.add(32);
tree.add(12);
tree.add(14);
console.log(tree);
console.log(tree.find(8));
module.exports = {
  BinarySearchTree,
};
