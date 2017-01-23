
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

export default class sList{
  constructor(){
    this.head = new Node("head");
    this.find = find;
    this.findPrev = fidnPrev;
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

  findPrev(value){
    var current = this.head;
    var next = current.next;
    if (next.value == value) {
      return current;
    }else {
      current = next;
    }
    return {};
  }

  insert(value, next){
    var newNode = new Node(value);
    var current = this.find(next);
    newNode.next = current.next;
    current.next = newNode;
  }

  remove(value){
    var current = this.find(value);
    var prev = this.findPrev(value);
    prev.next = current.next;
    return 0;
  }
}
