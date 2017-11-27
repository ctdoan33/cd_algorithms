function prependValue(dList, nVal, eVal){
    var runner=dList.head;
    if(runner.val===eVal){
        runner.prev=new DLNode(nVal);
        runner.prev.next=runner;
		dList.head=runner.prev;
		runner=runner.next;
    }
    while(runner){
        if(runner.val===eVal){
            runner.prev.next=new DLNode(nVal);
            runner.prev.next.prev=runner.prev;
            runner.prev=runner.prev.next;
            runner.prev.next=runner;
        }
        runner=runner.next;
    }
}
function appendValue(sList, nval, eVal){
	var runner=sList.tail;
	if(runner.val===eVal){
        runner.next=new DLNode(nVal);
        runner.next.prev=runner;
		dList.tail=runner.next;
		runner=runner.prev;
    }
    while(runner){
        if(runner.val===eVal){
            runner.next.prev=new DLNode(nVal);
            runner.next.prev.next=runner.next;
            runner.next=runner.next.prev;
            runner.next.prev=runner;
        }
        runner=runner.prev;
    }

}
function kthToLastValue(dList, k){
    var count=0;
    var runner=dList.tail;
    while(runner){
        if(k==1){
            return runner.val;
        }
        runner=runner.prev;
        k--;
	}
	return;
}
function deleteMiddleNode(node){
    node.prev.next=node.next;
    node.next.prev=node.prev;
}
function isValid(dList){
    var runner=dList.head;
    if(runner&&runner.prev){
        return false;
    }
    while(runner.next){
        if(runner.next.prev!=runner){
            return false;
            runner=runner.next;
        }
    }
    if(runner!=dList.tail){
        return false;
    }
    return true;
}
function partition(dList, val){
	if(!dList.head){ // no nodes
		return;
	}
	var runner=dList.head;
	var last=dlist.tail; // mark last node to partition
    while(runner.val<val&&runner!=last){
        runner=runner.next;
	}
	if(runner==last){ // only last node greater than or equal to val
		return;
	}
    while(runner!=last){ // partition all except for last node
        if(runner.val<val){
            var temp=runner.next;
            runner.prev.next=temp;
            temp.prev=runner.prev;
            runner.next=dList.head;
			dList.head.prev=runner;
            runner.prev=null;
            dList.head=runner;
            runner=temp;
        }else if(runner.val>val){
			var temp=runner.next;
            runner.prev.next=temp;
			temp.prev=runner.prev;
			dList.tail.next=runner;
			runner.prev=dList.tail;
			runner.next=null;
			dList.tail=runner;
			runner=temp;
		}else{
            runner=runner.next;
        }
    }
    if(last.val<val){ // partition last node
        if(last==dList.tail){
			dList.tail=last.prev;
			dList.tail.next=null;
		}else{
            last.prev.next=last.next;
            last.next.prev=last.prev;
		}
		last.next=dList.head;
		dList.head.prev=last;
		last.prev=null;
		dList.head=last;
    }
}
function palindrome(dList){
    var runner1=dList.head;
    var runner2=dList.tail;
    while(runner1!=runner2&&runner1!=runner2.next){
        if(runner1.val!==runner2.val){
            return false;
        }
        runner1=runner1.next;
        runner2=runner2.prev;
    }
    return true;
}
function reverse(dList){
    var runner=dList.head;
    var temp;
    while(runner){
        temp=runner.prev;
        runner.prev=runner.next;
        runner.next=temp;
        runner=runner.next;
    }
    if(temp){
		dList.head=temp.prev;
	}
}
function loopStart(dList){
    var slow=dList.head;
    var fast=dList.head;
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
    slow=dList.head;
    while(slow!=fast){
        slow=slow.next;
        fast=fast.next;
    }
    return slow;
}
function breakLoop(sList){
    var slow=sList.head;
    var fast=sList.head;
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
    slow=sList.head;
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
function repair(dList){
    var slow=dList.head;
    var fast=dList.head;
    while(fast&&fast.next){ // find loop
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast){
            break;
        }
    }
    if(fast&&fast.next){ // break loop
        slow=dList.head;
        if(slow==fast){
            while(fast.next!=slow){
                fast=fast.next;
            }
            fast.next=null;
        }else{
            while(slow.next!=fast.next){
                slow=slow.next;
                fast=fast.next;
            }
            fast.next=null;
        }
    }
    var runner=dList.head; // repair all pointers
    if(!runner){
        dList.tail=null;
        return;
    }
    if(runner.prev){
        runner.prev=null;
    }
    while(runner.next){
        runner.next.prev=runner;
        runner=runner.next;
    }
    dList.tail=runner;
}