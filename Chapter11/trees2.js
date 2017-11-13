function BTNode(value){
	if(!(this instanceof BTNode)){
		return new BTNode(value);
	}
	this.val=value;
	this.left=null;
	this.right=null;
	this.nodeBefore=function(node, runner=this, before){
		if(!runner){
			return before;
		}else if(runner.val>=node.val){
			return this.nodeBefore(node, runner.left, before);
		}else if(runner.val<node.val){
			return this.nodeBefore(node, runner.right, node);
		}
	}
	this.nodeAfter=function(node, runner=this, after){
		if(!runner){
			return after;
		}else if(runner.val>node.val){
			return this.nodeAfter(node, runner.left, node);
		}else if(runner.val<=node.val){
			return this.nodeAfter(node, runner.right, after);
		}
	}
}
function BST(){
	if(!(this instanceof BST)){
		return new BST();
	}
	this.root=null;
	// implementations of remove typically use helpers and recursion making it shorter and cleaner, but book requires return false
	this.remove=function(val){
		var runner=this.root;
		if(runner.val===val){
			if(runner.left&&runner.right){
				if(runner.right.left){
					runner=runner.right;
					while(runner.left.left){
						runner=runner.left;
					}
					this.root.val=runner.left.val;
					runner.left=runner.left.right;
				}else{
					runner.right.left=runner.left;
					this.root=runner.right;
				}
			}else if(runner.left){
				this.root=runner.left;
			}else if(runner.right){
				this.root=runner.right;
			}else{
				this.root=null;
			}
			return this;
		}
		while(runner){
			if(runner.left&&runner.left.val===val){
				var temp=runner.left;
				if(temp.left&&temp.right){
					if(temp.right.left){
						temp=temp.right;
						while(temp.left){
							temp=temp.left;
						}
						runner.left.val=temp.left.val;
						temp.left=temp.left.right;
					}else{
						runner.left=temp.right;
					}
				}else if(temp.left){
					runner.left=temp.left;
				}else if(temp.right){
					runner.left=temp.right;
				}else{
					runner.left=null;
				}
				return this;
			}else if(runner.right&&runner.right.val===val){
				var temp=runner.right;
				if(temp.left&&temp.right){
					if(temp.right.left){
						temp=temp.right;
						while(temp.left){
							temp=temp.left;
						}
						runner.right.val=temp.left.val;
						temp.left=temp.left.right;
					}else{
						runner.left=temp.right;
					}
				}else if(temp.left){
					runner.right=temp.left;
				}else if(temp.right){
					runner.right=temp.right;
				}else{
					runner.right=null;
				}
				return this;
			}else if(runner.val>val){
				prev=runner;
				runner=runner.left;
			}else{
				prev=runner;
				runner=runner.right;
			}
		}
		return false;
	}
	this.removeAll=function(){
		this.root=null;
	}
	this.isValid=function(node=this.root, left, right){
		if(!node){
			return true;
		}else if(node.val<left || node.val>=right){
			return false;
		}else{
			return this.isValid(node.left, left, node.val)&&this.valid(node.right, node.val, right);
		}
	}
	this.addNoDupes=function(val){
		if(!this.root){
			this.root=new BTNode(val);
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
					runner.left=new BTNode(val);
					return true;
				}
			}else{
				if(runner.right){
					runner=runner.right;
				}else{
					runner.right=new BTNode(val);
					return true;
				}
			}
		}
	}
	this.valBefore=function(val, node=this.root, before){
		if(!node){
			return before;
		}else if(node.val>=val){
			return this.valBefore(val, node.left, before);
		}else if(node.val<val){
			return this.valBefore(val, node.right, node.val);
		}
	}
	this.valAfter=function(val, node=this.root, after){
		if(!node){
			return after;
		}else if(node.val>val){
			return this.valAfter(val, node.left, node.val);
		}else if(node.val<=val){
			return this.valAfter(val, node.right, after);
		}
	}
	this.closestValue=function(val, node=this.root, closest){
		if(!node){
			return closest;
		}else if(node.val===val){
			return val;
		}
		if(Math.abs(node.val-val)<Math.abs(closest-val)){
			closest=node.val;
		}
		if(node.val>val){
			return this.closestValue(val, node.left, closest);
		}else if(node.val<val){
			return this.closestValue(val, node.right, closest);
		}
	}
}
function bstReverseOrder(BST, node=BST.root){
	if(!node){
		return;
	}
	bstReverseOrder(BST, node.right);
	console.log(node.val);
	bstReverseOrder(BST, node.left);
}
function treePathContainsSum(tree, sum, node=tree.root, memo=0){
	if(!node||sum<memo+node.val){
		return false;
	}else if((!node.left||!node.right)&&sum===memo+node.val){
		return true;
	}else{
		memo+=node.val;
		return treePathContainsSum(tree, sum, node.left, memo)||treePathContainsSum(tree, sum, node.right, memo);
	}
}
function treePathsContainsSum(tree, sum, node=tree.root, memo=0, path=[], arr=[]){
	if(!node||sum<memo+node.val){
		return;
	}
	path.push(node.val);
	memo+=node.val;
	if((!node.left||!node.right)&&sum===memo){
		arr.push(path);
	}
	treePathsContainsSum2(tree, sum, node.left, memo, path, arr);
	treePathsContainsSum2(tree, sum, node.right, memo, path.slice(), arr);
	return arr;
}