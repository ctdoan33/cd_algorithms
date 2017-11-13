function BTNode(value){
	this.val = value;
	this.left = null;
	this.right = null;
}
function BST(){
	this.root = null;
	this.add = function(val){
		if(!this.root){
			this.root = new BTNode(val);
			return
		}
		var runner = this.root;
		while(true){
			if(val<runner.val){
				if(runner.left){
					runner = runner.left;
				}else{
					runner.left = new BTNode(val);
					return;
				}
			}else{
				if(runner.right){
					runner = runner.right;
				}else{
					runner.right = new BTNode(val);
					return;
				}
			}
		}
	}
	this.contains = function(val){
		var runner = this.root;
		while(runner){
			if(val === runner.val){
				return true;
			}else if(val < runner.val){
				runner = runner.left;
			}else{
				runner = runner.right;
			}
		}
		return false;
	}
	this.min = function(){
		if(!this.root){
			return null;
		}
		var runner = this.root;
		while(runner.left){
			runner = runner.left;
		}
		return runner.val;
	}
	this.max = function(){
		if(!this.root){
			return null;
		}
		var runner = this.root;
		while(runner.right){
			runner = runner.right;
		}
		return runner.val;
	}
	this.size = function(node = this.root){
		if(!node){
			return 0;
		}
		return this.size(node.left)+this.size(node.right)+1;
	}
}
BTNode.prototype.height = function(){
	if(this.left && this.right){
		return Math.max(this.left.height(), this.right.height())+1;
	}else if(this.left){
		return this.left.height()+1;
	}else if(this.right){
		return this.right.height()+1;
	}
	return 1;
}
BTNode.prototype.isBalanced = function(){
	if(this.left && this.right){
		if(Math.abs(this.left.height()-this.right.height()) > 1){
			return false;
		}
		return this.left.isBalanced() && this.right.isBalanced();
	}else if(this.left && this.left.height() > 1){
		return false;
	}else if(this.right && this.right.height() > 1){
		return false;
	}
	return true;
}
function arrayToBST(leftarr, rightarr, tree = new BST()){
	if(leftarr && leftarr != []){
		var idx = Math.trunc(leftarr.length/2);
		tree.add(leftarr[idx]);
		arrayToBST(leftarr.slice(0,idx), leftarr.slice(idx+1, leftarr.length), tree);
	}
	if(rightarr && rightarr != []){
		var idx = Math.trunc(rightarr.length/2);
		tree.add(rightarr[idx]);
		arrayToBST(rightarr.slice(0,idx), rightarr.slice(idx+1, rightarr.length), tree);
	}
}
SList.prototype.pushBack = function(value){
	if(!this.head){
		this.head = new SLNode(value);
	}else{
		var runner = this.head;
		while(runner.next){
			runner = runner.next;
		}
		runner.next = new SLNode(value);
	}
}
BST.prototype.bst2List = function(node = this.root, list = new SList()){
	if(node){
		if(node.left){
			this.bst2List(node.left, list);
		}
		list.pushBack(node.val);
		if(node.right){
			this.bst2List(node.right, list);
		}
	}
	return list;
}
BST.prototype.isValid = function(node = this.root, left, right){
	if(!node){
		return true;
	}else if(node.val < left || node.val >= right){
		return false;
	}else{
		return this.isValid(node.left, left, node.val) && this.valid(node.right, node.val, right);
	}
}
BTNode.prototype.nodeBefore = function(node, runner = this, before){
	if(!runner){
		return before;
	}else if(runner.val >= node.val){
		return this.nodeBefore(node, runner.left, before);
	}else if(runner.val < node.val){
		return this.nodeBefore(node, runner.right, node);
	}
}
BTNode.prototype.nodeAfter = function(node, runner = this, after){
	if(!runner){
		return after;
	}else if(runner.val > node.val){
		return this.nodeAfter(node, runner.left, node);
	}else if(runner.val <= node.val){
		return this.nodeAfter(node, runner.right, after);
	}
}
BST.prototype.closestValue = function(val, node=this.root, closest){
	if(!node){
		return closest;
	}else if(node.val === val){
		return val;
	}
	if(Math.abs(node.val-val) < Math.abs(closest-val)){
		closest = node.val;
	}
	if(node.val > val){
		return this.closestValue(val, node.left, closest);
	}else if(node.val < val){
		return this.closestValue(val, node.right, closest);
	}
}
BTNode.prototype.pathContainsSum = function(sum){
	if(this.left && this.right){
		return this.left.pathContainsSum(sum-this.val) || this.right.pathContainsSum(sum-this.val);
	}else if(this.val === sum){
		return true;
	}else if(this.left){
		return this.left.pathContainsSum(sum-this.val);
	}else{
		return this.right.pathContainsSum(sum-this.val);
	}
	return false;
}