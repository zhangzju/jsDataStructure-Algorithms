class Node {
	constructor(value){
		this.value = value;
		this.repeat = 1;
		this.left = null;
		this.right = null;
	}
}
//节点大于左子树任意节点，小于右子树任意节点
export default class bstree {
	constructor(value){
		this.node = new Node(value);//make the root
		this.findMin = findMin;
		this.findMax = findMax;
		this.insert = insert;
		this.contains = contains;
		this.remove = remove;
		this.compare = compare;
	}

	compare(value, storeValue) {
		if (value > storeValue) {
			return 1;
		} else if (value < storeValue) {
			return -1;
		} else {
			return 0;
		}
	}

	findMin(value) {
		switch(compare(value, this.node.value)){
			
		}
	}
}