function ListNode(value){
	this.val=value;
	this.next=null;
}
function secondToLastValue(ListNode){
	if(!ListNode.next){
		return null;
	}
	var runner=ListNode;
	while(runner.next.next){
		runner=runner.next;
	}
	return runner.val;
}
function ListNode(value){
	this.val=value;
	this.next=null;
	this.removeSelf=function(){
		this.val=this.next.val;
		this.next=this.next.next;
	}
}
function copy(ListNode){
	var head=new ListNode(ListNode.val)
	var last=head;
	var runner=ListNode.next;
	while(runner){
		last.next=new ListNode(runner.val);
		last=last.next;
		runner=runner.next;
	}
	return head;
}
function filter(headNode, lowVal, highVal){
	while(headNode.val<lowVal||headNode.val>highVal){
		headNode=headNode.next;
		if(!headNode){
			return null;
		}
	}
	var runner=headNode;
	while(runner.next){
		if(runner.next.val<lowVal||runner.next.val>highVal){
			runner.next=runner.next.next;
		}else{
			runner=runner.next;
		}
	}
	return headNode;
}
function SLNode(value){
	this.val=value;
	this.next=null;
}
function secondLargestValue(headNode){
	var max=headNode.val;
	var max2=null;
	var runner=headNode.next;
	while(runner){
		if(runner.val>=max){
			max2=max;
			max=runner.val;
		}
		runner=runner.next;
	}
	return max2;
}
function zipSLists(slist1, slist2){
	var runner=slist1;
	while(runner2){
		var temp=runner.next;
		runner.next=slist2;
		slist2=temp;
		runner=runner1.next;
	}
	return slist1;
}
function dedupeSList(slist){
	var runner=slist;
	var buffer={};
	buffer[runner.val]=1;
	while(runner.next){
		if(buffer[runner.next.val]){
			runner.next=runner.next.next;
		}else{
			buffer[runner.next.val]=1;
			runner=runner.next;
		}
	}
	return slist;
}
// without buffer, will take longer but use less memory
// takes much longer with a longer slist
function dedupeSListWithoutBuffer(slist){
	var runner1=slist;
	while(runner1){
		var runner2=runner1;
		while(runner2.next){
			if(runner2.next.val===runner1.val){
				runner2.next=runner2.next.next;
			}else{
				runner2=runner2.next;
			}
		}
		runner1=runner1.next;
	}
	return slist;
}
