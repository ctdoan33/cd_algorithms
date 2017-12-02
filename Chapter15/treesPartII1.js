function BTNode(value){
	this.val=value;
	this.left=null;
	this.right=null;
}
function isFull(BST, node=BST.root){
	if(!node){
		return 1;
	}
	var left=isFull(BST, node.left);
	var right=isFull(BST, node.right);
	if(left&&right&&left==right){
		if(node==BST.root){
			return true;
		}else{
			return left+1;
		}
	}
	return false;
}
function isComplete(BST, node=BST.root){
	if(!node){
		return [0,0];
	}
	var left=isComplete(BST, node.left);
	var right=isComplete(BST, node.right);
	if(node==BST.root){
		if(Math.max(left[1], right[1])-Math.min(left[0], right[0])>1){
			return false;
		}
		return true;
	}
	return [Math.min(left[0], right[0]), Math.max(left[1], right[1])];
}
function reinsert(BST, node){
	if(!node){
		return;
	}
	var left=node.left;
	node.left=null;
	var right=node.right;
	node.right=null;
	var runner=BST.root;
	while(true){
		if(node.val<runner.val){
			if(runner.left){
				runner=runner.left;
			}else{
				runner.left=node;
				break;
			}
		}else{
			if(runner.right){
				runner=runner.right;
			}else{
				runner.right=node;
				break;
			}
		}
	}
	reinsert(BST, left);
	reinsert(BST, right);
}
function bstRepair(BST, node=BST.root){
	var repaired=false;
	if(!node){
		return repaired;
	}
	if(node.left&&node.left.val>=node.val){
		var temp=node.left;
		node.left=null;
		reinsert(BST, temp);
		repaired=true;
	}
	if(node.right&&node.right.val<node.val){
		var temp=node.right;
		node.right=null;
		reinsert(BST, temp);
		repaired=true;
	}
	var left=bstRepair(BST, node.left);
	var right=bstRepair(BST, node.right);
	return repaired||left||right;
}
function smallestDifferenceBST(BST){
	var prev=null;
	var min=null;
	minDifference(BST.root);
	return min;
	function minDifference(node){
		if(!node){
			return;
		}
		minDifference(node.left);
		if(prev&&(isNaN(min)||node.val-prev<min)){
			min=node.val-prev;
		}
		prev=node.val;
		minDifference(node.right);
	}
}
function smallestDifferenceSList(list){
	if(!list.head){
		return;
	}
	var min;
	var runner=list.head;
	while(runner.next){
		if(!min||runner.next.val-runner.val<min){
			min=runner.next.val-runner.val;
		}
		runner=runner.next;
	}
	return min;
}
function closestValueBST(BST, val, node=this.root, closest){
	if(!node){
		return closest;
	}else if(node.val===val){
		return val;
	}else if(node==BST.root){
		closest=BST.root.val;
	}else if(Math.abs(node.val-val)<Math.abs(closest-val)){
		closest=node.val;
	}
	if(node.val>val){
		return this.closestValueBST(BST, val, node.left, closest);
	}else if(node.val<val){
		return this.closestValueBST(BST, val, node.right, closest);
	}
}
function closestValueArray(arr, val){
	var i=0;
	while(arr[i]<val){
		i++;
	}
	if(i=arr.length||val-arr[i-1]<arr[i]-val){
		return arr[i-1];
	}else{
		return arr[i];
	}
}
function closestValueSList(slist, val){
	if(!slist.head){
		return;
	}else if(slist.head.val>val){
		return slist.head.val;
	}
	var runner=slist.head;
	while(runner.next&&runner.next.val<val){
		runner=runner.next;
	}
	if(!runner.next||val-runner.val<runner.next.val-val){
		return runner.val;
	}else{
		return runner.next.val;
	}
}
function closestValueDList(dlist, val){
	if(!dlist.head){
		return;
	}else if(dlist.head.val>val){
		return dlist.head.val;
	}
	var runner=dlist.head;
	while(runner.next&&runner.next.val<val){
		runner=runner.next;
	}
	if(!runner.next||val-runner.val<runner.next.val-val){
		return runner.val;
	}else{
		return runner.next.val;
	}
}