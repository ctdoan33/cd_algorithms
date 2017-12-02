function hasLoop(list){
	var slow=list.head;
	var fast=list.head;
	while(fast&&fast.next){
		slow=slow.next;
		fast=fast.next.next;
		if(slow==fast){
			return true;
		}
	}
	return false;
}
SList.prototype.hasLoop=function(){
	var slow=this.head;
	var fast=this.head;
	while(fast&&fast.next){
		slow=slow.next;
		fast=fast.next.next;
		if(slow==fast){
			return true;
		}
	}
	return false;
}
SLNode.prototype.hasLoop=function(){
	var slow=this;
	var fast=this;
	while(fast&&fast.next){
		slow=slow.next;
		fast=fast.next.next;
		if(slow==fast){
			return true;
		}
	}
	return false;
}
function loopStart(list){
	var slow=list.head;
	var fast=list.head;
	while(fast&&fast.next){
		slow=slow.next;
		fast=fast.next.next;
		if(slow==fast){
			break;
		}
	}
	if(!fast||!fast.next){
		return null;
	}
	slow=list.head;
	while(slow!=fast){
		slow=slow.next;
		fast=fast.next;
	}
	return slow;
}
SList.prototype.loopStart=function(){
	var slow=this.head;
	var fast=this.head;
	while(fast&&fast.next){
		slow=slow.next;
		fast=fast.next.next;
		if(slow==fast){
			break;
		}
	}
	if(!fast||!fast.next){
		return null;
	}
	slow=this.head;
	while(slow!=fast){
		slow=slow.next;
		fast=fast.next;
	}
	return slow;
}
SLNode.prototype.loopStart=function(){
	var slow=this;
	var fast=this;
	while(fast&&fast.next){
		slow=slow.next;
		fast=fast.next.next;
		if(slow==fast){
			break;
		}
	}
	if(!fast||!fast.next){
		return null;
	}
	slow=this.head;
	while(slow!=fast){
		slow=slow.next;
		fast=fast.next;
	}
	return slow;
}
function breakLoop(list){
	var slow=list.head;
	var fast=list.head;
	while(fast&&fast.next){
		slow=slow.next;
		fast=fast.next.next;
		if(slow==fast){
			break;
		}
	}
	if(!fast||!fast.next){
		return;
	}
	slow=list.head;
	if(slow==fast){
		while(fast.next!=slow){
			fast=fast.next;
		}
		fast.next=null;
		return;
	}
	while(slow.next!=fast.next){
		slow=slow.next;
		fast=fast.next;
	}
	fast.next=null;
}
SList.prototype.breakLoop=function(){
	var slow=this.head;
	var fast=this.head;
	while(fast&&fast.next){
		slow=slow.next;
		fast=fast.next.next;
		if(slow==fast){
			break;
		}
	}
	if(!fast||!fast.next){
		return;
	}
	slow=this.head;
	if(slow==fast){
		while(fast.next!=slow){
			fast=fast.next;
		}
		fast.next=null;
		return;
	}
	while(slow.next!=fast.next){
		slow=slow.next;
		fast=fast.next;
	}
	fast.next=null;
}
SLNode.prototype.breakLoop=function(){
	var slow=this;
	var fast=this;
	while(fast&&fast.next){
		slow=slow.next;
		fast=fast.next.next;
		if(slow==fast){
			break;
		}
	}
	if(!fast||!fast.next){
		return;
	}
	slow=this.head;
	if(slow==fast){
		while(fast.next!=slow){
			fast=fast.next;
		}
		fast.next=null;
		return;
	}
	while(slow.next!=fast.next){
		slow=slow.next;
		fast=fast.next;
	}
	fast.next=null;
}
function numberOfNodes(list){
	var count=0;
	var slow=list.head;
	var fast=list.head;
	while(fast&&fast.next){
		slow=slow.next;
		fast=fast.next.next;
		count++;
		if(slow==fast){
			break;
		}
	}
	if(!fast){
		return count*2;
	}else if(!fast.next){
		return count*2+1;
	}
	slow=list.head;
	if(slow==fast){
		return count;
	}
	count=1;
	while(slow!=fast){
		slow=slow.next;
		fast=fast.next;
		count++;
	}
	while(fast.next!=slow){
		fast=fast.next;
		count++;
	}
	return count;
}
SList.prototype.numberOfNodes=function(){
	var count=0;
	var slow=this.head;
	var fast=this.head;
	while(fast&&fast.next){
		slow=slow.next;
		fast=fast.next.next;
		count++;
		if(slow==fast){
			break;
		}
	}
	if(!fast){
		return count*2;
	}else if(!fast.next){
		return count*2+1;
	}
	slow=list.head;
	if(slow==fast){
		return count;
	}
	count=1;
	while(slow!=fast){
		slow=slow.next;
		fast=fast.next;
		count++;
	}
	while(fast.next!=slow){
		fast=fast.next;
		count++;
	}
	return count;
}
SLNode.prototype.numberOfNodes=function(){
	var count=0;
	var slow=this;
	var fast=this;
	while(fast&&fast.next){
		slow=slow.next;
		fast=fast.next.next;
		count++;
		if(slow==fast){
			break;
		}
	}
	if(!fast){
		return count*2;
	}else if(!fast.next){
		return count*2+1;
	}
	slow=this;
	if(slow==fast){
		return count;
	}
	count=1;
	while(slow!=fast){
		slow=slow.next;
		fast=fast.next;
		count++;
	}
	while(fast.next!=slow){
		fast=fast.next;
		count++;
	}
	return count;
}
function swapPairs(list){
	if(list.head&&list.head.next){
		var runner=list.head;
		list.head=runner.next;
		runner.next=list.head.next;
		list.head.next=runner;
	}else{
		return;
	}
	while(runner.next&&runner.next.next){
		var temp=runner.next;
		runner.next=temp.next;
		temp.next=runner.next.next;
		runner.next.next=temp;
		runner=runner.next.next;
	}
}
SList.prototype.swapPairs=function(){
	if(this.head&&this.head.next){
		var runner=this.head;
		this.head=runner.next;
		runner.next=this.head.next;
		this.head.next=runner;
	}else{
		return;
	}
	while(runner.next&&runner.next.next){
		var temp=runner.next;
		runner.next=temp.next;
		temp.next=runner.next.next;
		runner.next.next=temp;
		runner=runner.next.next;
	}
}
SList.prototype.swapPairs=function(){
	this.head=this.head.swapPairs();
}
SLNode.prototype.swapPairs=function(){
	if(this.next){
		var head=this.next;
		this.next=head.next;
		head.next=this;
	}else{
		return this;
	}
	var runner=this;
	while(runner.next&&runner.next.next){
		var temp=runner.next;
		runner.next=temp.next;
		temp.next=runner.next.next;
		runner.next.next=temp;
		runner=runner.next.next;
	}
	return head;
}