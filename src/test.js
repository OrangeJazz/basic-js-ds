const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

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

  add(data) {
    function insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) node.left = newNode;
        else insertNode(node.left, newNode);
      } else {
        if (node.right === null) node.right = newNode;
        else insertNode(node.right, newNode);
      }
    }
    let newNode = new Node(data);
    if (this.root1 === null) {
      this.root1 = newNode;
    } else {
      insertNode(this.root1, newNode);
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
    if (node == null) {
      return null;
    }
    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this.find(data, node.left);
    } else if (data > node.data) {
      return this.find(data, node.right);
    } else {
      return null;
    }
  }

  remove(data) {
    this.root1 = removeNode(this.root1, data);

    function removeNode(node, data) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          node = null;
          return node;
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
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min(node = this.root1) {
    // if (node) return null;
    if (node.left === null) return node.data;
    else {
      node = node.left;
      return this.min(node.left);
    }
  }

  max(node = this.root1) {
    // if (!node) return null;
    if (node.right === null) return node.data;
    else {
      node = node.right;
      return this.max(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree,
};

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);
tree.add(31);
tree.add(1);
tree.remove(6);
tree.remove(2);
console.log(tree.max());
