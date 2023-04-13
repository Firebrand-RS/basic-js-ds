const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.rootNode;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootNode = addWithin(data, this.rootNode);

    function addWithin(data, node) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(data, node.left);
      } else {
        node.right = addWithin(data, node.right);
      }
      return node;
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return !!this.find(data);
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return findWithIn(data, this.rootNode);

    function findWithIn(data, node) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return findWithIn(data, node.left);
      } else {
        return findWithIn(data, node.right);
      }
    }
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
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

        let head = node.right;
        while (head.left) {
          head = head.left;
        }

        node.data = head.data;
        node.right = removeNode(node.right, head.data);
        return node;
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.rootNode) {
      return null;
    }
    let head = this.rootNode;
    while(head.left) {
      head = head.left;
    }
    return head.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!this.rootNode) {
      return null;
    }
    let head = this.rootNode;
    while(head.right) {
      head = head.right;
    }
    return head.data;
  }
}

module.exports = {
  BinarySearchTree
};