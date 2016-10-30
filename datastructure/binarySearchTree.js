class Node {
	constructor(data, left, right) {
		this.data = data;
		this.left = left;
		this.right = right;
		this.repeat = 1;
	}
}

class binarySearchTree {
	constructor() {
		this.root = null;
		this.insert = insert;
		this.findMin = findMin;
		this.findMax = findMax;
		this.remove = remove;
	}

	insert(data) {
		let node = new Node(data, null, null);
		if(!this.root) {
			return this.root = node;
		}

		let currentNode = this.root;
		let parentNode = null;
		while (true) {
			parentNode = currentNode;
			if (data < currentNode.data) {
				currentNode = currentNode.left;
				if (currentNode === null) {
					parentNode.left = node;
					break;
				}
			}else {
				currentNode = currentNode.right;
				if (currentNode === null) {
					parentNode.right = node;
					break;
				}
			}
		}
	}

	findMin() {
		let node = this.root;
		while (true) {
			if (node.left != null) {
				node = node.left;
			}else {
				return node.value;
			}
		}
	}

	findMax() {
		let node = this.root;
		while (true) {
			if (node.right != null) {
				node = node.right;
			}else {
				return node.data;
			}
		}
	}


}
