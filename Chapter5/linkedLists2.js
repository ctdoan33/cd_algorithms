function ListNode(value){
    this.val=value;
    this.next=null;
}
function prependVal(node, val, before){
    var newnode=new ListNode(val);
    if(node.val===before){
        newnode.next=node;
        return newnode;
    }
    var runner=node;
    while(runner.next){
        if(runner.next.val===before){
            newnode.next=runner.next;
            runner.next=newnode;
            return node;
        }
        runner=runner.next;
    }
    runner.next=newnode;
    return node;
}
function appendVal(list, val, after){
    var newnode=new ListNode(val);
    var runner=list;
    while(runner.next){
        if(runner.val===after){
            newnode.next=runner.next;
            runner.next=newnode;
            return list;
        }
        runner=runner.next;
    }
    runner.next=newnode;
    return list;
}
function SList(){
    var SList=new ListNode(prompt("Please enter a value for the first node"));
    var runner=SList;
    while(runner.val){
        runner.next=new ListNode(prompt("Please enter a value for the next node"));
        runner=runner.next;
    }
    return SList;
}
function removeVal(ListNode, val){
    var runner=ListNode;
    while(runner.val=val){
        ListNode=runner.next;
        runner=ListNode;
	}
	if(!runner){
		return ListNode;
	}
    while(runner.next){
        if(runner.next.val=val){
            runner.next=runner.next.next;
        }else{
            runner=runner.next;
        }
    }
    return ListNode;
} // if no val found, no nodes are removed
function splitOnValue(list, num){
    var runner=list;
    while(runner.next){
        if(runner.next.val=num){
            var split=runner.next;
            runner.next=null;
            return split;
        }
        runner=runner.next;
    }
}
function removeNegatives(node){
    while(node&&node.val<0){
        node=node.next;
	}
	if(!node){
		return node;
	}
	var runner=node;
    while(runner.next){
        if(runner.next.val<0){
            runner.next=runner.next.next;
        }else{
            runner=runner.next;
        }
    }
    return node;
}
function concat(list1, list2){
    var runner=list1;
    while(runner.next){
        runner=runner.next;
    }
    runner.next=list2;
    return list1;
}
function partition(ListNode, value){
    var runner=ListNode;
    // find last node, will be node before right side of partition
    while(runner.next){
        runner=runner.next;
    }
	var last=runner;
	// move head nodes with greater value to the end
	while(ListNode.val>value&&ListNode!=last){
		var temp=ListNode;
		ListNode=ListNode.next;
		temp.next=last.next;
		last.next=temp;
	}
	// if all greater values and last, stop
	if(ListNode==last){
		return ListNode;
	}
	// run through rest of list, moving nodes to front or back as needed
	var runner=ListNode;
	while(runner.next&&runner.next!=last){
		if(runner.next.val<value){
			var temp=runner.next;
			runner.next=temp.next;
			temp.next=ListNode;
			ListNode=temp;
		}else if(runner.next.val>value){
			var temp=runner.next;
			runner.next=temp.next;
			temp.next=last.next;
			last.next=temp;
		}else{
			runner=runner.next;
		}
	}
	// move last node if needed
	if(last.val<value){
		runner.next=last.next;
		last.next=ListNode;
		ListNode=last;
	}
	return ListNode;
}
