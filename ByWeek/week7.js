function reverse(list){
	if(!list.head || !list.head.next){
		return;
	}
	var prev = list.head;
	var runner = prev.next;
	var temp = runner.next;
	while(temp){
		runner.next = prev;
		prev = runner;
		runner = temp;
		temp = temp.next;
	}
	runner.next = prev;
	list.head = null;
	header = runner;
}
function kthLastNode(list, k){
	var count = 0;
	var runner = list.head;
	while(runner){
		count++;
		runner = runner.next;
	}
	for(runner=list.head; count>k; count--){
		runner = runner.next;
	}
	return runner.val;
}
function flattenChildren(list){
	var p = list.head;
	while(p){
		if(p.child){
			var c = p.child;
			while(c.next){
				c = c.next;
			}
			c.next = p.next;
			p.next = p.child;
		}
		p=p.next;
	}
}
function flattenChildrenAltered(list){
	var p = list.head;
	while(p){
		if(p.child){
			var c = p.child;
			while(c.next){
				c = c.next;
			}
			c.next = p.next;
			p.next = p.child;
			p.child = c; // a parent's child pointer will point to last node of its child
		}
		p = p.next;
	}
}
function unflattenChildren(list){
	var runner = list.head;
	while(runner){
		if(runner.child){
			unflattenChild(runner);
		}
		runner = runner.next;
	}
}
function unflattenChild(p){
	var runner = p;
	var child = p.next;
	while(p.child != runner){
		if(runner.next.child){ // runs unflatten recursively for complex inputs
			unflattenChild(runner.next);
		}
		runner = runner.next;
	}
	p.child = child;
	p.next = runner.next;
	runner.next = null;
}
function hasLoop(list){
	var slow = list.head;
	var fast = list.head;
	while(fast && fast.next){
		slow = slow.next;
		fast = fast.next.next;
		if(slow == fast){
			return true;
		}
	}
	return false;
}
function breakLoop(list){
	var slow = list.head;
	var fast = list.head;
	var broken = false; // will return whether a loop has been broken
	while(fast && fast.next){
		slow = slow.next;
		fast = fast.next.next;
		if(slow == fast){
			broken=true;
			break;
		}
	}
	if(!fast || !fast.next){ // no loop
		return broken;
	}
	slow = list.head;
	if(slow == fast){ // loop involves head node
		while(fast.next != slow){ // find node before head to break
			fast = fast.next;
		}
		fast.next = null;
		return broken;
	}
	while(slow.next != fast.next){ // find nodes before loop
		slow = slow.next;
		fast = fast.next;
	}
	fast.next = null; // break loop
	return broken;
}
function DLNode(value){
	this.val = value;
	this.prev = null;
	this.next = null;
}
function DList(){
	this.head = null;
	this.tail = null;
	this.push = function(value){
		if(!this.tail){
			this.tail = new DLNode(value);
			this.head = this.tail;
		}else{
			this.tail.next = new DLNode(value);
			this.tail.next.prev = this.tail;
			this.tail = this.tail.next;
		}
	}
	this.pop = function(){
		if(!this.tail){
			return;
		}
		var temp = this.tail;
		if(this.head == temp){
			this.head = null;
			this.tail = null;
		}else{
			this.tail = temp.prev;
			this.tail.next = null;
		}
		return temp.val;
	}
	this.front = function(){
		if(this.head){
			return this.head.val;
		}
	}
	this.back = function(){
		if(this.tail){
			return this.tail.val;
		}
	}
	this.contains = function(value){
		var runner = this.head;
		while(runner){
			if(runner.val === value){
				return true;
			}
			runner = runner.next;
		}
		return false;
	}
	this.size = function(){
		var count = 0;
		var runner = this.head;
		while(runner){
			count++;
			runner = runner.next;
		}
		return count;
	}
}
SList.prototype.kthToLastValue = function(k){
	var count = 0;
	var runner = this.head;
	while(runner){
		runner = runner.next;
		count++;
	}
	if(k > count){
		return;
	}
	for(runner = this.head; count>k; count--){
		runner = runner.next;
	}
	return runner.val;
}
DList.prototype.kthToLastValue = function(k){
	var runner = this.tail;
	while(runner){
		if(k == 1){
			return runner.val;
		}
		runner = runner.prev;
		k--;
	}
	return;
}
DList.prototype.palindrome = function(){
	var runner1 = this.head;
	var runner2 = this.tail;
	while(runner1 != runner2 && runner1 != runner2.next){
		if(runner1.val !== runner2.val){
			return false;
		}
		runner1 = runner1.next;
		runner2 = runner2.prev;
	}
	return true;
}
DList.prototype.isValid = function(){
	var runner = this.head;
	if(runner && runner.prev){
		return false;
	}
	while(runner.next){
		if(runner.next.prev != runner){
			return false;
			runner = runner.next;
		}
	}
	if(runner != this.tail){
		return false;
	}
	return true;
}