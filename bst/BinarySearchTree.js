const BstNode = require('./BstNode');

class BinarySearchTree { // Binary Search Tree class
  constructor() {
    this.root = null; // root of a binary search tree
  }

  // functions to be implemented
  // insert(data)
  // remove(data)

  // helper method which creates a new node to be inserted and calls insertNode
  insert(data) {
    var newNode = new BstNode(data); // creating a node and initializing with data

    // root is null then node will be added to the tree and made root
    if(this.root === null) {
      this.root = newNode;
    } else {
      // find the correct position in the tree and add the node
      this.insertNode(this.root, newNode);
    }
  }

  // Method to insert a node in a tree.
  // It moves over the tree to find the location to insert a node with a given data
  insertNode(node, newNode) {
    // if the data is less than the node, data move left of the tree
    if(newNode.data < node.data) {
      // if left is null, insert node here
      if(node.left === null) {
        node.left = newNode;
      } else {
        // if left is not null, recur until null is found
        this.insertNode(node.left, newNode);
      }
    } else { // if data is more than node data, move right of the tree
      // if right is null, insert node here
      if(node.right === null) {
        node.right = newNode;
      } else {
        // if right is not null, recur untill null is found
        this.insertNode(node.right, newNode);
      }
    }
  }

  // helper method that calls the removeNode with a given data
  remove(data) {
    // root is re-initialized with root of a modified tree
    this.root = this.removeNode(this.root, data);
  }

  // Method to remove node with a given data
  // It recurrs over the tree to find the data and removes it
  removeNode(node, key) {
    // if the root is null, then tree is empty
    if(node === null) {
      return null;
    }

    // if data to be deleted is less than node data, then move to left of subtree
    if(key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if(key > node.data) { // if data to be deleted is greater than node data, then move to right subtree
      node.right = this.removeNode(node.right, key);
      return node;
    } else { // if data is similar to node data, delete this node
      // deleting node with no children
      if((node.left === null) && (node.right === null)) {
        node = null;
        return null;
      }
      
      // deleting node with one children
      else if(node.left === null) {
        node = node.right;
        return node;
      } else if(node.right === null) {
        node = node.left;
        return node;
      }
      
      // deleting node with two children
      // minimum node of the right subtree is stored in aux
      else {
        var aux = this.findMinNode(node.right);
        node.data = aux.data;
        node.right = this.removeNode(node.right, aux.data);
        return node;
      }
    }
  }

  // Helper functions
  // findMinNode()
  // getRootNode()
  // inOrder(node)
  // preOrder(node)
  // postOrder(node)
  // levelOrder(node)
  // search(node, data)

  // finds the minimum node in tree. Searching starts from given node.
  findMinNode(node) {
    // if left of a node is null, then it must be minimum node
    if(node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  // returns root of the tree
  getRootNode() {
    return this.root;
  }

  preOrder(node) {
    if(node !== null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  
  inOrder(node) {
    if(node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  postOrder(node) {
    if(node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }

  levelOrder(node) { // Logic and Java code: https://www.youtube.com/watch?v=9PHkM0Jri_4
    if(node !== null) {
      const q = [];
      q.push(node);
      while(q.length > 0) {
        node = q.shift();
        console.log(node.data);
        if(node.left !== null) {
          q.push(node.left);
        }
        if(node.right !== null) {
          q.push(node.right);
        }
      }
    }
  }

  reverseLevelOrder(node) { // Logic and Java code: https://www.youtube.com/watch?v=D2bIbWGgvzI
    if(node !== null) {
      const stack = [];
      const q = [];
      q.push(node);
      while(q.length > 0) {
        node = q.shift();
        if(node.right !== null) {
          q.push(node.right);
        }
        if(node.left !== null) {
          q.push(node.left);
        }
        stack.push(node);
      }
      while(stack.length > 0) {
        node = stack.pop();
        console.log(node.data);
      }
    }
  }

  levelOrderUsingTwoQs(node) { // Logic and Java code: https://www.youtube.com/watch?v=7uG0gLDbhsI
    
  }

  levelOrderUsingDelimiterInOneQ(node) { // Logic and Java code: https://youtu.be/7uG0gLDbhsI?t=233
    
  }

  levelOrderUsingTwoCountersAndOneQ(node) { // Logic and Java code: https://youtu.be/7uG0gLDbhsI?t=417
    
  }

  reverseLevelOrderUsingTwoQs(node) {

  }

  reverseLevelOrderUsingDelimiterInOneQ(node) {

  }

  reverseLevelOrderUsingTwoCountersAndOneQ(node) {

  }

  reverseLevelReverseOrder(node) {
    
  }

  // search for a node with given data
  search(node, key) {
    // if tree is empty, return null
    if(node === null) {
      return null;
    }

    // if data is less than node data, move left
    else if(key < node.data) {
      return this.search(node.left, key);
    }

    // if data is greater than node data, move right
    else if(key > node.data) {
      return this.search(node.right, key);
    }

    // if data is equal to node data, return node
    else {
      return node;
    }
  }
}

module.exports = BinarySearchTree;