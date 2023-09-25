const Node = require('./node');
const DoublyLinkedList = require('./doublyLinkedlist');


const myDoublyLinkedList = new DoublyLinkedList() ;

console.log("add nodes--------");
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);
myDoublyLinkedList.push(6);


myDoublyLinkedList.print();

console.log("remove the tail---------");
myDoublyLinkedList.pop();


myDoublyLinkedList.print();

console.log("remove the head---------");
myDoublyLinkedList.shift();

myDoublyLinkedList.print();

console.log("add node as a new head-------");
myDoublyLinkedList.unshift(0);

myDoublyLinkedList.print();

console.log("the value of a node in a specific index 3-------");
console.log(myDoublyLinkedList.get(3));

console.log("modifies the node value at the given index 3 -------");
myDoublyLinkedList.set(3,9);

myDoublyLinkedList.print();

console.log("inserts the value at the given index 4 ---------");
myDoublyLinkedList.insert(4,10);

myDoublyLinkedList.print();

console.log("removes the node at the given index 2 -------");
myDoublyLinkedList.remove(2);

myDoublyLinkedList.print();





