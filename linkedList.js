

class ListNode{
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  getSize() {
    let size = 0;
    let node = this.head;
    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }
  clear() {
    this.head = null
  }
  getLast() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node.data;
  }
  getFirst() {
    return this.head.data;
  }
  get(index) {
    let elem = -1;
    let thisElem = this.head;
    for (let count = 0; count < this.getSize(); count++) {
      if (count == index)
        elem = thisElem.data;
      else
        thisElem = thisElem.next

    }

    return elem;
  }
  addAtHead(value) {
    let headElem = this.head;
    let newElem = new ListNode(value);
    newElem.next = headElem;
    this.head = newElem;
  }
  addAtIndex(index, value) {
    let thisElem = this.head;
    let prevElem = null;
    // if (index == 0) {
    //   this.addAtHead(value);
    //   return;
    // }
    for (let count = 0; count < this.getSize(); count++) {
      if (count == index) {
        prevElem = thisElem;
        thisElem = thisElem.next;
        break;
      }
    }
    let newElem = new ListNode(value);
    prevElem.next = newElem;
    newElem.next = thisElem;
    // newElem.next = newElem;

    console.log('newElem')
    // console.log(newElem)
    console.log(prevElem)
    console.log(newElem)
  }
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
n1.next = n2;
let list = new LinkedList(n1);
// console.log('size: ' + list.getSize());

const n3 = new ListNode(3);
const n4 = new ListNode(4);
n3.next = n4;
// let list2 = new LinkedList(n3);
// list2.clear();
// console.log(list2);

const n5 = new ListNode(5);
const n6 = new ListNode(6);
n5.next = n6;
let list3 = new LinkedList(n5);
// console.log(list3.getLast());
// console.log(list3.getFirst());
// console.log('longitud: ' + list3.getSize());
// console.log(list3.get(2));
list3.addAtHead(7);
// console.log(list3);

list3.addAtIndex(0, 11);
console.log(list3.get(0));
console.log(list3.get(1));
console.log(list3.get(2));
console.log(list3.get(3));
console.log(list3.get(4));
// console.log(list3.getSize());
