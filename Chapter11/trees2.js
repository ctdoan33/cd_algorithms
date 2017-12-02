function BTNode(value){
	if(!(this instanceof BTNode)){
		return new BTNode(value);
	}
	this.val=value;
	this.left=null;
	this.right=null;
	this.nodeBefore=function(node, before){
		if(this.left&&this.val>=node.val){
			return this.left.nodeBefore(node, before);
		}else if(this.right&&this.val<node.val){
			return this.right.nodeBefore(node, this);
		}
		return before;
	}
	this.nodeAfter=function(node, after){
		if(this.left&&this.val>node.val){
			return this.left.nodeAfter(node, this);
		}else if(this.right&&this.val<=node.val){
			return this.right.nodeAfter(node, after);
		}
		return after;
	}
}
function BST(){
	if(!(this instanceof BST)){
		return new BST();
	}
	this.root=null;
	// book requires return false when not found, so must track from parent
	// this removes whike keeping in-order
	this.remove=function(val, node=this.root){ // uses delete method below
		if(!node){ // this IF block finds the node, base if not found
			return false;
		}else if(node.val>val){
			if(node.left&&node.left.val===val){
				node.left=this.delete(node.left); // node found, left pointer reassigned
			}else{
				return this.remove(val, node.left); // continue finding
			}
		}else if(node.val<val){
			if(node.right&&node.right.val===val){
				node.right=this.delete(node.right); // node found, right pointer reassigned
			}else{
				return this.remove(val, node.right); // continue finding
			}
		}else if(node.val===val){ // case in which root node is to be deleted
			this.root=this.delete(node);
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
			return node.right;
		}else{
			var runner=node.right;
			while(runner.left.left){
				runner=runner.left;
			}
			node.val=runner.left.val;
			runner.left=runner.left.right;
			return node;
		}
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
	this.addNoDupes=function(val, node=this.root){
		if(!node){
			this.root=new BTNode(val);
		}else if(val<node.val){
			if(node.left){
				this.add(val, node.left);
			}else{
				node.left=new BTNode(val);
			}
		}else if(val>node.val){
			if(node.right){
				this.add(val, node.right);
			}else{
				node.right=new BTNode(val);
			}
		}else{
			return false;
		}
		return true;
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
		}else if(node==this.root){
			closest=this.root.val;
		}else if(Math.abs(node.val-val)<Math.abs(closest-val)){
			closest=node.val;
		}
		if(node.val>val){
			return this.closestValue(val, node.left, closest);
		}else if(node.val<val){
			return this.closestValue(val, node.right, closest);
		}
	}
}
function bstReverseOrder(tree, node=tree.root){
	if(!node){
		return;
	}
	bstReverseOrder(tree, node.right);
	console.log(node.val);
	bstReverseOrder(tree, node.left);
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