function DLNode(value){
	this.val=value;
	this.prev=null;
	this.next=null;
}
function DList(){
	this.head=null;
	this.tail=null;
	this.push=function(value){
		if(!this.tail){
			this.tail=new DLNode(value);
			this.head=this.tail;
		}else{
			this.tail.next=new DLNode(value);
			this.tail.next.prev=this.tail;
			this.tail=this.tail.next;
		}
	}
	this.pop=function(){
		if(!this.tail){
			return;
		}
		var temp=this.tail;
		if(this.head==temp){
			this.head=null;
			this.tail=null;
		}else{
			this.tail=temp.prev;
			this.tail.next=null;
		}
		return temp.val;
	}
	this.front=function(){
		if(this.head){
			return this.head.val;
		}
	}
	this.back=function(){
		if(this.tail){
			return this.tail.val;
		}
	}
	this.contains=function(value){
		var runner=this.head;
		while(runner){
			if(runner.val===value){
				return true;
			}
			runner=runner.next;
		}
		return false;
	}
	this.size=function(){
		var count=0;
		var runner=this.head;
		while(runner){
			count++;
			runner=runner.next;
		}
		return count;
	}
}
function push(dlist, value){
	if(!dlist.tail){
		dlist.tail=new DLNode(value);
		dlist.head=dlist.tail;
	}else{
		dlist.tail.next=new DLNode(value);
		dlist.tail.next.prev=dlist.tail;
		dlist.tail=dlist.tail.next;
	}
}
DList.prototype.push=function(value){
	this.tail=this.tail.push(value);
}
DLNode.prototype.push=function(value){
	var runner=this;
	while(runner.next){
		runner=runner.next;
	}
	runner.next=new DLNode(value);
	runner.next.prev=runner;
	return runner.next;
}
function pop(dlist){
	var temp=dlist.tail;
	if(!temp){
		return;
	}
	if(dlist.head==temp){
		dlist.head=null;
		dlist.tail=null;
	}else{
		dlist.tail=temp.prev;
		dlist.tail.next=null;
	}
	return temp.val;
}
DList.prototype.pop=function(value){
	if(!this.tail){
		return;
	}
	var val=this.tail.pop();
	this.tail=this.tail.prev;
	if(!this.tail){
		this.head=null;
	}
	return val;
}
DLNode.prototype.pop=function(){
	var runner=this;
	while(runner.next){
		runner=runner.next;
	}
	runner.prev.next=null;
	return runner.val;
}
function front(dlist){
	if(dlist.head){
		return dlist.head.val;
	}
}
DLNode.prototype.front=function(){
	var runner=this;
	while(runner.prev){
		runner=runner.prev;
	}
	return runner.val;
}
function back(dlist){
	if(dlist.tail){
		return dlist.tail.val;
	}
}
DLNode.prototype.back=function(){
	var runner=this;
	while(runner.next){
		runner=runner.next;
	}
	return runner.val;
}
function contains(dlist, value){
	var runner=dlist.head;
	while(runner){
		if(runner.val===value){
			return true;
		}
		runner=runner.next;
	}
	return false;
}
DLNode.prototype.contains=function(){
	var runner=this;
	while(runner.next){
		if(runner.val===value){
			return true;
		}
		runner=runner.next;
	}
	runner=this;
	while(runner.prev){
		if(runner.val===value){
			return true;
		}
		runner=runner.prev;
	}
	return false;
}
function size(dlist){
	var count=0;
	var runner=dlist.head;
	while(runner){
		count++;
		runner=runner.next;
	}
	return count;
}
DLNode.prototype.size=function(){
	var count=1;
	var runner=this.next;
	while(runner){
		count++;
		runner=runner.next;
	}
	runner=this.prev;
	while(runner){
		count++;
		runner=runner.prev;
	}
	return count;
}