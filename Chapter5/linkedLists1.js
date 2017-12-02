function ListNode(value){
	this.val=value;
	this.next=null;
}
// these are standalone functions that accept a ListNode pointer as head
// this is because the book does not utilize an SLL object for this chapter
// to see SLL object/class implementation, see week4
// it is assumed the pointer points to an actual node for most functions
function addFront(node, value){
	var newnode=new ListNode(value);
	newnode.next=node;
	return newnode;
}
function contains(node, val){
	while(node){
		if(node.val===val){
			return true;
		}else{
			node=node.next;
		}
	}
	return false;
}
function removeFront(node){
	return node.next;
}
function front(node){
	return node.val;
}
function length(node){
	var runner=node;
	var count=0;
	while(runner){
		runner=runner.next;
		count++;
	}
	return count;
}
function display(node){
	var runner=node;
	var str=String(node.val);
	runner=runner.next;
	while(runner){
		str+=" "+runner.val;
		runner=runner.next;
	}
	return str;
}
function max(node){
	var runner=node;
	var max=runner.val;
	while(runner.next){
		runner=runner.next;
		if(runner.val>max){
			max=runner.val;
		}
	}
	return max;
}
function min(node){
	var runner=node;
	var min=runner.val;
	while(runner.next){
		runner=runner.next;
		if(runner.val<min){
			min=runner.val;
		}
	}
	return min;
}
function average(node){
	var runner=node;
	var sum=0;
	var count=0;
	while(runner){
		sum+=runner.val;
		count++;
		runner=runner.next;
	}
	return sum/count;
}
function back(node){
	var runner=node;
	while(runner.next){
		runner=runner.next;
	}
	return runner.val;
}
function removeBack(node){
	var runner=node;
	while(runner.next.next){
		runner=runner.next;
	}
	runner.next=null;
	return node;
}
function addBack(node, value){
	var runner=node;
	while(runner.next){
		runner=runner.next;
	}
	runner.next=new ListNode(value);
	return node;
}
function minToFront(node){
	var runner=node;
	var min=runner;
	var prev=null;
	while(runner.next){
		if(runner.next.val<min.val){
			min=runner.next;
			prev=runner;
		}
		runner=runner.next;
	}
	if(prev){
		prev.next=min.next;
		min.next=node;
	}
	return min;
}
function moveMaxToBack(node){
	var runner=node;
	var max=runner;
	var prev=null;
	while(runner.next){
		if(runner.next.val>max.val){
			max=runner.next;
			prev=runner;
		}
		runner=runner.next;
	}
	runner.next=max;
	if(prev){
		prev.next=max.next;
	}else{
		node=max.next;
	}
	max.next=null;
	return node;
}