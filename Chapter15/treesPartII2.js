BST.prototype.partition=function(value){
	if(!this.root){
		return;
	}
	var tree=new BST();
	tree.root=this.root.partition(value);
	return tree;
}
BTNode.prototype.partition=function(value){
	if(this.val>value&&this.left){
		if(this.left.val>value){
			return this.left.partition(value);
		}else{
			var temp=this.left;
			this.left=temp.partition(value);
			return temp;
		}
	}else if(this.val<=value&&this.right){
		if(this.right.val<=value){
			return this.right.partition(value);
		}else{
			var temp=this.right;
			this.right=temp.partition(value);
			return temp;
		}
	}
	return null;
}
function partitionEvenly(tree, node=tree.root, delta=0){
	if(!node){
		return;
	}
	var lsize=node.left.size()+delta;
	var rsize=node.right.size();
	if(lsize-rsize>1){
		return partitionEvenly(tree, node.left, delta-rsize);
	}else if(rsize-lsize>1){
		return partitionEvenly(tree, node.right, delta+lsize);
	}else{
		return tree.partition(node.val);
	}
}
function reverse(tree, node=tree.root){
	if(!node){
		return;
	}
	var temp=node.left;
	node.left=node.right;
	node.right=temp;
	reverse(tree, node.left);
	reverse(tree, node.right);
	return tree;
}
function kthBiggestNoSize(tree, k, node=tree.root, count=[0]){
	if(!node){
		return;
	}
	var result=kthBiggestNoSize(tree, k, node.right, count);
	if(isNaN(result)){
		count[0]++;
		if(count[0]==k){
			return node.val;
		}
		return kthBiggestNoSize(tree, k, node.left, count);
	}
	return result;
}
function kthBiggestSize(tree, k, node=tree.root){
	if(!node){
		return;
	}
	var right=0;
	if(node.right){
		right=node.right.size();
	}
	if(right==k){
		return node.val;
	}else if(right>k){
		return kthBiggestSize(tree, k, node.right);
	}
	return kthBiggestSize(tree, k-right, node.left);
}
// because of loops, nodes with incorrect parents will be reinserted (rather than find loop and break for each branch)
function bst2Repair(BST2, node=BST2.root){
	var repaired=false;
	if(!node){
		return repaired;
	}
	if(node.left&&(node.left.val>=node.val||node.left.parent!=node)){
		var temp=node.left;
		node.left=null;
		reinsert(BST2, temp);
		repaired=true;
	}
	if(node.right&&node.right.val<node.val||node.right.parent!=node){
		var temp=node.right;
		node.right=null;
		reinsert(BST2, temp);
		repaired=true;
	}
	var left=bst2Repair(BST2, node.left);
	var right=bst2Repair(BST2, node.right);
	return repaired||left||right;
}
function bst2reinsert(BST2, node){
	if(!node){
		return;
	}
	var left=node.left;
	node.left=null;
	var right=node.right;
	node.right=null;
	var runner=BST2.root;
	while(true){
		if(node.val<runner.val){
			if(runner.left){
				runner=runner.left;
			}else{
				runner.left=node;
				node.parent=runner;
				break;
			}
		}else{
			if(runner.right){
				runner=runner.right;
			}else{
				runner.right=node;
				node.parent=runner;
				break;
			}
		}
	}
	bst2reinsert(BST2, left);
	bst2reinsert(BST2, right);
}
function valuesForLayer(BST, layer, queue){
	if(!BST.root){ // base case no nodes
		return [];
	}
	if(!queue){
		queue=new Queue();
		queue.enqueue(BST.root);
	}
	if(!layer){ // base case, at the specified layer
		var result=[];
		while(queue.front()){
			result.push(queue.dequeue().val);
		}
		return result;
	}
	var newqueue=new Queue();
	while(queue.front()){
		var node=queue.dequeue();
		if(node.left){
			newqueue.enqueue(node.left);
		}
		if(node.right){
			newqueue.enqueue(node.right);
		}
	}
	return valuesForLayer(BST, layer-1, newqueue);
}
// in a full tree, there are 2^n nodes at each layer n (with n=0 as root)
// the percentage of nodes that are leaves approaches 50% as there are more levels
// the percentage of 'first-level managers' approaches 25%, and so on for higher levels
function layerArrays(BST, queue, arr=[]){
	if(!BST.root){
		return arr;
	}
	var subarr=[];
	if(!queue){
		queue=new Queue();
		queue.enqueue(BST.root);
		subarr.push(BST.root.val);
		arr.push(subarr);
		layerArrays(BST, queue, arr);
	}else{
		var newqueue=new Queue();
		while(queue.front()){
			var node=queue.dequeue();
			if(node.left){
				newqueue.enqueue(node.left);
				subarr.push(node.left.val);
			}
			if(node.right){
				newqueue.enqueue(node.right);
				subarr.push(node.right.val);
			}
		}
		if(subarr.length){
			arr.push(subarr);
			layerArrays(BST, newqueue, arr);
		}
	}
	return arr;
}