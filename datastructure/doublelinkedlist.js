class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class dList{
  constructor(){
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
  }

  find(value){
    var current = this.head;
    while (current.value != value) {
      current = current.next;
    }
    return current;
  }

  insert(value, next){
    var newNode = new Node(value);
    var current = this.find(next);
    newNode.prev = current;
    newNode.next = current.next;
    current.next = newNode;
    return newNode;
  }

  remove(value){
    var current = this.find(value);
    current.next.prev = current.prev;
    current.prev.next = current.next;
    return 0;
  }
}
