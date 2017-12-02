function BTNode(value){
	this.val=value;
	this.left=null;
	this.right=null;
}
function BST(){
	this.root=null;
	this.add=function(val, node=this.root){
		if(!node){
			this.root=new BTNode(val);
		}else if(val<node.val){
			if(node.left){
				this.add(val, node.left);
			}else{
				node.left=new BTNode(val);
			}
		}else{
			if(node.right){
				this.add(val, node.right);
			}else{
				node.right=new BTNode(val);
			}
		}
		return this;
	}
	this.contains=function(val, node=this.root){
		if(!node){
			return false;
		}else if(val===node.val){
			return true;
		}else if(val<node.val){
			return this.contains(val, node.left);
		}else{
			return this.contains(val, node.right);
		}
	}
	this.min=function(node=this.root){
		if(!node){
			return null;
		}else if(!node.left){
			return node.val;
		}
		return this.min(node.left);
	}
	this.max=function(node=this.root){
		if(!node){
			return null;
		}else if(!node.right){
			return node.val;
		}
		return this.min(node.right);
	}
	this.size=function(node=this.root){
		if(!node){
			return 0;
		}
		return this.size(node.left)+this.size(node.right)+1;
	}
	this.isEmpty=function(){
		if(this.root){
			return false;
		}
		return true;
	}
	this.height=function(node=this.root){
		if(!node){
			return 0;
		}
		return Math.max(this.height(node.left), this.height(node.right))+1;
	}
	this.isBalanced=function(node=this.root){
		if(!node){
			return true;
		}else if(Math.abs(this.height(node.left)-this.height(node.right))>1){
			return false;
		}else{
			return this.isBalanced(node.left)&&this.isBalanced(node.right);
		}
	}
	this.minHeight=function(node=this.root){
		if(!node){
			return 0;
		}else{
			return Math.min(this.minheight(node.left), this.minheight(node.right))+1;
		}
	}
}
function arrayToBST(leftarr, rightarr, tree=new BST()){
	if(leftarr && leftarr!=[]){
		var idx=Math.trunc(leftarr.length/2);
		tree.add(leftarr[idx]);
		arrayToBST(leftarr.slice(0,idx), leftarr.slice(idx+1, leftarr.length), tree);
	}
	if(rightarr && rightarr!=[]){
		var idx=Math.trunc(rightarr.length/2);
		tree.add(rightarr[idx]);
		arrayToBST(rightarr.slice(0,idx), rightarr.slice(idx+1, rightarr.length), tree);
	}
}
function closestCommonAncestor(tree, val1, val2, node=tree.root){
	if(val1>val2){
		var temp=val1;
		val1=val2;
		val2=temp;
	}
	if(runner.val>val2){
		return closestCommonAncestor(tree, val1, val2, node.left);
	}else if(runner.val<val1){
		return closestCommonAncestor(tree, val1, val2, node.right);
	}else{
		return runner.val;
	}
}
function bstPreOrder(tree, node=tree.root){
	if(!node){
		return;
	}
	console.log(node.val);
	bstPreOrder(tree, node.left);
	bstPreOrder(tree, node.right);
}
function bstPostOrder(tree, node=tree.root){
	if(!node){
		return;
	}
	bstPostOrder(tree, node.left);
	bstPostOrder(tree, node.right);
	console.log(node.val);
}
function bst2Arr(tree, order="in", arr=[], node=tree.root){
	if(!node){
		return;
	}
	if(order=="pre"){
		arr.push(node.val);
	}
	bst2Arr(tree, order, arr, node.left);
	if(order=="in"){
		arr.push(node.val);
	}
	bst2Arr(tree, order, arr, node.right);
	if(order=="post"){
		arr.push(node.val);
	}
	return arr;
}
function SLNode(value){
	this.val=value;
	this.next=null;
}
function SList(){
	this.head=null;
	this.pushBack=function(value){
		if(!this.head){
			this.head=new SLNode(value);
		}else{
			var runner=this.head;
			while(runner.next){
				runner=runner.next;
			}
			runner.next=new SLNode(value);
		}
	}
}
function bst2List(tree, order="in", list=new SList(), node=tree.root){
	if(!node){
		return;
	}
	if(order=="pre"){
		list.pushBack(node.val);
	}
	bst2List(tree, order, list, node.left);
	if(order=="in"){
		list.pushBack(node.val);
	}
	bst2List(tree, order, list, node.right);
	if(order=="post"){
		list.pushBack(node.val);
	}
	return list;
}
function bstPreOrderNoRecursion(tree){
	if(!tree.root){
		return;
	}
	var nodes=[tree.root];
	while(nodes.length>0){
		var node=nodes.pop();
		console.log(node.val);
		if(node.right){
			nodes.push(node.right);
		}
		if(node.left){
			nodes.push(node.left);
		}
	}
}