// function compareStrings(str1, str2) {
//   let diff = 0;

//   if (str1.length === str2.length) {
//     for (let i = 0; i < str1.length; i++) {
//       if (str1[i] !== str2[i]) {
//         diff++;
//       }
//     }
//     return diff < 2 ? true : false;
//   } else {
//     const longer = str1.length > str2.length ? str1 : str2;
//     let shorter = str1.length > str2.length ? str2 : str1;

//     for (let i = 0; i < longer.length; i++) {
//       if (longer[i] !== shorter[i]) {
//         shorter = shorter.slice(0, i) + longer[i] + shorter.slice(i);
//         diff++;
//       }
//     }
//     for (let i = 0; i < longer.length; i++) {
//       if (longer[i] !== shorter[i]) {
//         diff++;
//       }
//     }

//     return diff < 2 ? true : false;
//   }
// }

//console.log(compareStrings("pales", "pale"));

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add first
  addFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Add at idx
  addAtIdx(data, idx) {
    let currIdx = 0;
    let currItem = this.head;
    while (currIdx < idx - 1) {
      currItem = currItem.next;
      currIdx++;
    }
    currItem.next = new Node(data, currItem.next?.next || null);
    this.size++;
  }

  // Add last
  addLast(data) {
    let currItem = this.head;
    if (!currItem) {
      this.addFirst(data);
    } else {
      while (currItem.next !== null) {
        currItem = currItem.next;
      }
      currItem.next = new Node(data, null);
    }
    this.size++;
  }

  // Remove first
  removeFirst() {
    this.head = this.head.next;
  }

  // Remove at idx, last, print etc
  removeLast() {
    let currItem = this.head;
    while (currItem.next.next !== null) {
      currItem = currItem.next;
    }
    currItem.next = null;
    this.size--;
    return currItem;
  }

  peek() {
    let currItem = this.head;
    while (currItem.next !== null) {
      currItem = currItem.next;
    }
    return currItem;
  }
}

// const ll = new LinkedList();
// ll.addFirst(1);
// console.log(ll);
// ll.addAtIdx(2, 1);
// console.log(ll);
// ll.addLast(3);
// console.log(ll);
// ll.removeFirst();
// console.log(ll);

class Stack {
  constructor() {
    this.items = [];
    this.top = 0;
  }

  // push
  push(data) {
    this.items[this.top] = data;
    this.top++;
    return data;
  }

  // pop
  pop() {
    this.top--;
    return this.items.pop();
  }

  // peek
  peek() {
    return this.items[this.top - 1];
  }

  // isEmpty
  isEmpty() {
    return this.top === 0;
  }
}

const testStack = new Stack();
testStack.push(2);
testStack.push(3);
testStack.push(1);
testStack.push(4);

function sortStack(stack) {
  const tmpStack = new Stack();

  while (!stack.isEmpty()) {
    const tempEl = stack.pop();

    while (!tmpStack.isEmpty() && tmpStack.peek() > tempEl) {
      const el = tmpStack.pop();
      stack.push(el);
    }

    tmpStack.push(tempEl);
  }

  return tmpStack;
}

console.log(sortStack(testStack));

class Graph {
  constructor() {
    this.adjacencies = new Map()
  }

  // Add node
  addNode(val) {
    if(!this.adjacencies.has(val)) {
      this.adjacencies.set(val, [])
    }
  }

  // Add edge
  addEdge(n1, n2) {
    this.adjacencies.get(n1).push(n2)
    this.adjacencies.get(n2).push(n1)
  }

  // Remove node
  removeNode(val) {
    for(let [currVal, edge] of this.adjacencies.entries()) {
      this.adjacencies.set(currVal, edge.filter(edge => edge !== val));
    }
    this.adjacencies.delete(val)
  }

  traverseDfsRec(start) {
    const visited = new Set()
    const dfs = (node) => {
      console.log(node)
      visited.add(node)
      const neighbors = this.adjacencies.get(node)
      for(neighbor of neighbors) {
        if(!visited.has(neighbor)) {
          dfs(neighbor)
        }
      }
    }
    dfs(start)
  }

  traverseDfs(start) {
    const visited = new Set()
    const stack = [start]

    while(stack.length > 0) {
      const curr = stack.pop()
      console.log(curr)
      visited.add(curr)
      const neighbors = this.adjacencies.get(curr)
      for(let neighbor of neighbors) {
        if(!visited.has(neighbor)) {
          stack.push(neighbor)
        }
      }
    }
  }

  traverseBfs(start) {
    const visited = new Set()
    const queue = [start]

    while(queue.length > 0) {
      const curr = queue.shift()
      console.log(curr)
      visited.add(curr)
      const neighbors = this.adjacencies.get(curr)
      for(let neighbor of neighbors) {
        if(!visited.has(neighbor)) {
          queue.push(neighbor)
        }
      }
    }
  }  
}
