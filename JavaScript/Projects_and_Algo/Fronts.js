class SLLnode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

// Add Front

// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

// Examples:

// SLL1 = new SLL()
// SLL1.addFront(18) => Node { data: 18, next: null }
// SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }
    addFront(value) {
        var newNode = new SLLnode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
// Remove Front

// Write a method to remove the head node and return the new list head node. If the list is empty, return null.


// Examples:

// SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.removeFront() => Node { data: 18, next: null }

    removeFront() {
        if (this.head == null) {
            return this.head;
        }
        var removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head;
    }

// Front

// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.


// Examples:

// SLL1.front() => 18
// SLL1.removeFront() => null
// SLL1.front() => null

    front() {
        if (this.head == null) {
            return null;
        } else {
            return this.head.value;
        }
    }
}

var SLL1 = new SLL(); // this will be an empty list
console.log(SLL1.front());
SLL1.addFront(10)
SLL1.addFront(5)
SLL1.addFront(73)

// console.log(SLL1);

SLL1.removeFront();




// console.log(SLL1);



