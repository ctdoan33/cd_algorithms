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
	this.add=function(val){
		if(!this.root){
			this.root=new BTNode2(val);
			return this;
		}
		var runner=this.root;
		while(true){
			if(val<runner.val){
				if(runner.left){
					runner=runner.left;
				}else{
					runner.left=new BTNode2(val);
					runner.left.parent=runner;
					return this;
				}
			}else{
				if(runner.right){
					runner=runner.right;
				}else{
					runner.right=new BTNode2(val);
					runner.right.parent=runner;
					return this;
				}
			}
		}
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
	this.remove=function(val){
		var runner=this.root;
		while(runner){
			if(runner.val>val){
				runner=runner.left;
			}else if(runner.val<val){
				runner=runner.right;
			}else if(runner.parent.left==runner){
				if(runner.left&&runner.right){
					if(runner.right.left){
						var temp=runner.right.left;
						while(temp.left){
							temp=temp.left;
						}
						temp.parent.left=temp.right;
						temp.right.parent=temp.parent;
						runner.val=temp.val;
					}else{
						runner.right.left=runner.left;
						runner.left.parent=runner.right;
						runner.parent.left=runner.right;
						runner.right.parent=runner.parent;
					}
				}else if(runner.left){
					runner.parent.left=runner.left;
					runner.left.parent=runner.parent;
				}else if(runner.right){
					runner.parent.left=runner.right;
					runner.right.parent=runner.parent;
				}else{
					runner.parent.left=null;
				}
				return this;
			}else if(runner.parent.right==runner){
				if(runner.left&&runner.right){
					if(runner.right.left){
						var temp=runner.right.left;
						while(temp.left){
							temp=temp.left;
						}
						temp.parent.left=temp.right;
						temp.right.parent=temp.parent;
						runner.val=temp.val;
					}else{
						runner.right.left=runner.left;
						runner.left.parent=runner.right;
						runner.parent.right=runner.right;
						runner.right.parent=runner.parent;
					}
				}else if(runner.left){
					runner.parent.right=runner.left;
					runner.left.parent=runner.parent;
				}else if(runner.right){
					runner.parent.right=runner.right;
					runner.right.parent=runner.parent;
				}else{
					runner.parent.right=null;
				}
				return this;
			}
		}
		return false;
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