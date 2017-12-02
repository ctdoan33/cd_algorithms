function BTNode2(value){
	this.val=value;
	this.left=null;
	this.right=null;
	this.parent=null;
	this.isValid=function(){
		if(this.left&&this.right){
			if(this.left.parent==this&&this.right.parent==this){
				return this.left.isValid()&&this.right.isValid();
			}
		}else if(this.left){
			if(this.left.parent==this){
				return this.left.isValid();
			}
		}else if(this.right){
			if(this.right.parent==this){
				return this.right.isValid();
			}
		}else{
			return true;
		}
		return false;
	}
}
function BST2(){
	this.root=null;
	this.add=function(val, node=this.root){
		if(!this.root){
			this.root=new BTNode2(val);
			return this;
		}else if(val<node.val){
			if(node.left){
				this.add(val, node.left);
			}else{
				node.left=new BTNode2(val);
				node.left.parent=node;
			}
		}else{
			if(node.right){
				this.add(val, node.right);
			}else{
				node.right=new BTNode2(val);
				node.right.parent=node;
			}
		}
		return this;
	}
	this.isValid=function(){
		if(!this.root){
			return true;
		}else if(this.root.parent){
			return false;
		}else{
			return this.root.isValid();
		}
	}
	this.remove=function(val, node=this.root){ // uses delete method below
		if(!node){
			return false;
		}else if(node.val>val){
			if(node.left&&node.left.val===val){
				node.left=this.delete(node.left);
				if(node.left){
					node.left.parent=node;
				}
			}else{
				return this.remove(val, node.left);
			}
		}else if(node.val<val){
			if(node.right&&node.right.val===val){
				node.right=this.delete(node.right);
				if(node.right){
					node.right.parent=node;
				}
			}else{
				return this.remove(val, node.right);
			}
		}else{
			this.root=this.delete(node);
			this.root.parent=null;
		}
		return true;
	}
	this.delete=function(node){
		if(!node.left){
			return node.right;
		}else if(!node.right){
			return node.left;
		}else if(!node.right.left){
			node.right.left=node.left;
			node.right.left.parent=node.right;
			return node.right;
		}else{
			var runner=node.right;
			while(runner.left.left){
				runner=runner.left;
			}
			node.val=runner.left.val;
			runner.left=runner.left.right;
			runner.left.parent=runner.left;
			return node;
		}
	}
	this.addNoDupes=function(val){
		if(!this.root){
			this.root=new BTNode2(val);
			return true;
		}
		var runner=this.root;
		while(true){
			if(runner.val===val){
				return false;
			}else if(val<runner.val){
				if(runner.left){
					runner=runner.left;
				}else{
					runner.left=new BTNode2(val);
					runner.left.parent=runner;
					return true;
				}
			}else{
				if(runner.right){
					runner=runner.right;
				}else{
					runner.right=new BTNode2(val);
					runner.right.parent=runner;
					return true;
				}
			}
		}
	}
}
function sumOfBSTRootLeafNumbers(tree, node=tree.root, rlnum="", sum=[0]){
	if(!node){
		return 0;
	}
	rlnum+=node.val;
	if(node.left||node.right){
		sumOfBSTRootLeafNumbers(tree, node.left, rlnum, sum);
		sumOfBSTRootLeafNumbers(tree, node.right, rlnum, sum);
	}else{
		sum[0]+=Number(rlnum);
	}
	return sum[0];
}
function leftSideBinaryTree(tree, node=tree.root, idx=0, arr=[]){
	if(!node){
		return arr;
	}else if(node.val<arr[idx]||isNaN(arr[idx])){
		arr[idx]=node.val;
	}
	leftSideBinaryTree(tree, node.left, idx+1, arr);
	leftSideBinaryTree(tree, node.right, idx+1, arr);
	return arr;
}