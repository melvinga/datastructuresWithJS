const BinarySearchTree = require('./BinarySearchTree');

var BST = new BinarySearchTree();

var root;
console.log(JSON.stringify(BST.getRootNode(),null,2));

BST.insert(15);
BST.insert(19);
BST.insert(14);
BST.insert(12);
BST.insert(13);
BST.insert(17);
BST.insert(18);
BST.insert(16);
// console.log(JSON.stringify(BST.getRootNode(),null,2));

// console.log('Remove Node with value 18. Output below:');
// BST.removeNode(BST.getRootNode(), 18);
// console.log(JSON.stringify(BST.getRootNode(),null,2));

// console.log('Insert Node with value 22. Output below:');

// console.log('Remove Node with value 16. Output below:');
// BST.removeNode(BST.getRootNode(), 16);
// console.log(JSON.stringify(BST.getRootNode(),null,2));

// console.log('Remove Node with value 15. Output below:');
// BST.removeNode(BST.getRootNode(), 15);
// console.log(JSON.stringify(BST.getRootNode(),null,2));

// console.log('Pre Order Traversal below:');
// BST.preOrder(BST.getRootNode());
// console.log(JSON.stringify(BST.getRootNode(),null,2));

console.log('In Order Traversal below:');
BST.inOrder(BST.getRootNode());
// console.log(JSON.stringify(BST.getRootNode(),null,2));

// console.log('Post Order Traversal below:');
// BST.postOrder(BST.getRootNode());
// console.log(JSON.stringify(BST.getRootNode(),null,2));

// console.log('Level Order Traversal below:');
// BST.levelOrder(BST.getRootNode());
// console.log(JSON.stringify(BST.getRootNode(),null,2));

// console.log('Reverse Level Order Traversal below:');
// BST.reverseLevelOrder(BST.getRootNode());
// console.log(JSON.stringify(BST.getRootNode(),null,2));

// console.log('Min value below:');
// console.log((BST.findMinNode(BST.getRootNode())).data);
// console.log(JSON.stringify(BST.getRootNode(),null,2));

// console.log('Max value below:');
// console.log((BST.findMaxNode(BST.getRootNode())).data);
console.log(JSON.stringify(BST.getRootNode(),null,2));

console.log('Height of tree below:');
console.log((BST.height(BST.getRootNode())));
// console.log(JSON.stringify(BST.getRootNode(),null,2));