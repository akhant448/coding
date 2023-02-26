// Add Front

// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

// Examples:

// SLL1 = new SLL()
// SLL1.addFront(18) => Node { data: 18, next: null }
// SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

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

    addFront(value) {
        var newNode = new SLLnode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
}

var SLL1 = new SLL(); // this will be an empty list

SLL1.addFront(10)
console.log(SLL1)