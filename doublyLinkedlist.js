const Node = require("./node");

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  pop() {
    if (!this.tail) {
      console.log("no Nodes to REMOVE");
      return;
    }

    const nodeToDElete = this.tail;

    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
      return;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    nodeToDElete.next = null;
    nodeToDElete.prev = null;
  }

  shift() {
    if (!this.head) {
      console.log("no nodes to SHIFT");
      return;
    }
    const nodeToShift = this.head;

    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
      return;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    nodeToShift.next = null;
    nodeToShift.prev = null;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.head.prev = null;
  }

  get(index) {
    if (index < 0) {
      return undefined;
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    if (currentNode) {
      return currentNode.value;
    } else {
      return undefined;
    }
  }

  set(index, val) {
    if (index < 0) {
      return undefined;
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    if (currentNode) {
      currentNode.value = val;
    } else {
      return undefined;
    }
  }

  insert(index, val) {
    const newNode = new Node(val);

    if (index < 0) {
      return false;
    }

    if (index == 0) {
      if (!this.head) {
        this.head = null;
        this.tail = null;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      return true;
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    if (currentNode) {
      newNode.next = currentNode;
      newNode.prev = currentNode.prev;
      currentNode.prev.next = newNode;
      currentNode.prev = newNode;
      return true;
    } else {
      return false;
    }
  }

  remove(index) {
    if (index < 0 || !this.head) {
      return null;
    }

    let removedNode = null;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index; i++) {
        if (!currentNode) {
          return null;
        }
        currentNode = currentNode.next;
      }
      if (currentNode) {
        removedNode = currentNode;
        currentNode.prev.next = currentNode.next;
        if (currentNode === this.tail) {
          this.tail = currentNode.prev;
        } else {
          currentNode.next.prev = currentNode.prev;
        }
      }
    }

    if (removedNode) {
      removedNode.prev = null;
      removedNode.next = null;
      return removedNode;
    } else {
      return null;
    }
  }
  
  print() {
    let currentNode = this.head;
    while (currentNode != null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

module.exports = doublyLinkedList;
