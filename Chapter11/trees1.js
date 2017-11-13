function BTNode(value){
	this.val=value;
	this.left=null;
	this.right=null;
}
function BST(){
	this.root=null;
	this.add=function(val){
		if(!this.root){
			this.root=new BTNode(val);
			return this;
		}
		var runner=this.root;
		while(true){
			if(val<runner.val){
				if(runner.left){
					runner=runner.left;
				}else{
					runner.left=new BTNode(val);
					return this;
				}
			}else{
				if(runner.right){
					runner=runner.right;
				}else{
					runner.right=new BTNode(val);
					return this;
				}
			}
		}
	}
	this.contains=function(val){
		var runner=this.root;
		while(runner){
			if(val===runner.val){
				return true;
			}else if(val<runner.val){
				runner=runner.left;
			}else{
				runner=runner.right;
			}
		}
		return false;
	}
	this.min=function(){
		if(!this.root){
			return null;
		}
		var runner=this.root;
		while(runner.left){
			runner=runner.left;
		}
		return runner.val;
	}
	this.max=function(){
		if(!this.root){
			return null;
		}
		var runner=this.root;
		while(runner.right){
			runner=runner.right;
		}
		return runner.val;
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
function closestCommonAncestor(tree, val1, val2){
	if(val1>val2){
		var temp=val1;
		val1=val2;
		val2=temp;
	}
	var runner=tree.root;
	while(true){
		if(runner.val>val2){
			runner=runner.left;
		}else if(runner.val<val1){
			runner=runner.next;
		}else{
			return runner.val;
		}
	}
}
function bstPreOrder(BST, node=BST.root){
	if(!node){
		return;
	}
	console.log(node.val);
	bstPreOrder(BST, node.left);
	bstPreOrder(BST, node.right);
}
function bstPostOrder(BST, node=BST.root){
	if(!node){
		return;
	}
	bstPostOrder(BST, node.left);
	bstPostOrder(BST, node.right);
	console.log(node.val);
}
function bst2Arr(BST, order="in", arr=[], node=BST.root){
	if(!node){
		return;
	}
	if(order=="pre"){
		arr.push(node.val);
	}
	bst2Arr(BST, order, arr, node.left);
	if(order=="in"){
		arr.push(node.val);
	}
	bst2Arr(BST, order, arr, node.right);
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
function bst2List(BST, order="in", list=new SList(), node=BST.root){
	if(!node){
		return;
	}
	if(order=="pre"){
		list.pushBack(node.val);
	}
	bst2List(BST, order, list, node.left);
	if(order=="in"){
		list.pushBack(node.val);
	}
	bst2List(BST, order, list, node.right);
	if(order=="post"){
		list.pushBack(node.val);
	}
	return list;
}
function bstPreOrderNoRecursion(BST){
	if(!BST.root){
		return;
	}
	var nodes=[BST.root];
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