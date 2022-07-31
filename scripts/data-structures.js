//////////////////////////////////////////////////////////////////////////////////
///////// Class Syntax - use for implementing / defining data structures /////////
//////////////////////////////////////////////////////////////////////////////////

// // Create class
// class Student  {
//   constructor(firstName, lastName, year) {
//     // 'this' referes to the instance object
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.grade = year;
//     this.tardies = 0;
//     this.scores = [];
//   }
//   //Instance Method - acts on the individual instance of the data structure
//   fullname() {
//     return `Your full name is ${this.firstName} ${this.lastName}`;
//   }
//   markLate() {
//     this.tardies += 1;
//     if (this.tardies >= 3) return "You are expelled!";
//     return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`;
//   }
//   addScore(score) {
//     this.scores.push(score);
//     return this.scores;
//   }
//   calculateAverage() {
//     let sum = this.scores.reduce((a,b) => a + b);
//     return sum/this.scores.length;
//   }
//   //Class Method - uses static keyword in front of method definition to define a method or functionality that is pertitnent to Classes, but not necessarily to individual instances. Cannot be called through a class instance. Utility function.
//   static enrollStudents(...students) {
//     // maybe send email to all the students
//   }
// }
// // Instantiate class
// let firstStudent = new Student("John", "Doe", 2);
// let secondStudent = new Student("Jane", "Doe", 3);
// // Calling Instance Methods
// firstStudent.addScore(91)
// firstStudent.addScore(95)
// console.log(firstStudent.scores);
// console.log(firstStudent.calculateAverage());
// // Calling Class Methods
// Student.enrollStudents()




//////////////////////////////////////////////////////////////////////////////////
///////////////////////// Singly Linked List /////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Push Method - adds node to the end
   // function accepts a value
  push(val) {
    // create a new node using the value passed to the function
    let newNode = new Node(val);
    // if there is no head property on the list, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      // otherwise set the next property on the current tail to be the new node and set the tail property on the list to be the new node.
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // increment the length by one
    this.length += 1;
    // return the linked list
    return this;
  }
  // Pop Method - removes node from the end
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // Shift Method - removes node from beginning
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  // Unshift Method - adds node to beginning
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // Get Method - returns value at a certain position
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // Set Method - updates a value at a certain position
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  // Insert Method
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  // Remove Method
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  // Reverse Method - reverses in place (does not make a copy)
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList;

list.push('hello');
list.push('nice to see you');
console.log(list.push('bye'));


// var first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you');
// console.log(first);