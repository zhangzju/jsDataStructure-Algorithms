class Node {
	constructor(value){
		this.value = value;
		this.repeat = 1;
		this.left = null;
		this.right = null;
	}
}

export default class bstree {
	constructor(value){
		this.root = new Node(value);
		this.findMin = findMin;
		this.findMax = findMax;
		this.insert = insert;
		this.contains = contains;
		this.remove = remove;
	}
}