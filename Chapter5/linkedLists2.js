function ListNode(value){
    this.val=value;
    this.next=null;
}
function prependVal(ListNode, val, before){
    var newnode=new ListNode(val);
    if(ListNode.val==before){
        newnode.next=ListNode;
        return newnode;
    }
    var runner=ListNode;
    while(runner.next){
        if(runner.next.val==before){
            newnode.next=runner.next;
            runner.next=newnode;
            return ListNode;
        }
        runner=runner.next;
    }
    runner.next=newnode;
    return ListNode;
}
function appendVal(list, val, after){
    var newnode=new ListNode(val);
    var runner=list;
    while(runner.next){
        if(runner.val==after){
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
    var temp;
    while(runner.val=val){
        ListNode=runner.next;
        runner.next=null;
        runner=ListNode;
    }
    while(runner.next){
        if(runner.next.val=val){
            temp=runner.next;
            runner.next=temp.next;
            temp.next=null;
        }else{
            runner=runner.next;
        }
    }
    return ListNode;
}
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
function removeNegatives(ListNode){
    var runner = ListNode;
    while(runner.val < 0){
        ListNode = runner.next;
        runner.next = null;
        runner = ListNode;
        if(!runner){
            return null;
        }
    }
    while(runner.next){
        if(runner.next.val < 0){
            negnode = runner.next;
            runner.next = negnode.next;
            negnode.next = null;
        }else{
            runner = runner.next;
        }
    }
    return ListNode;
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
    // find last node
    while(runner.next){
        runner=runner.next;
    }
    var last=runner;
    // if head node have value, move to end
    var temp;
    while(ListNode.val=value){
        temp=ListNode
        last.next=temp;
        ListNode=temp.next;
        temp.next=null;
        last=temp;
    }
    // move nodes with value to end
    runner=ListNode;
    while(runner.next){
        if(runner.next.val=value){
            temp=runner.next
            last.next=temp;
            runner.next=temp.next;
            temp.next=null;
            last=temp;
        }else{
            runner-runner.next;
        }
    }
    // if no nodes with value, stop
    if(!temp){
        return null;
    }
    // move nodes with greater value from head
    while(ListNode.val>value){
        temp=ListNode
        last.next=temp;
        ListNode=temp.next;
        temp.next=null;
        last=temp;
    }
    // if no values less than value, stop
    if(ListNode.val==value){
        return ListNode;
    }
    // move all nodes with greater value to end
    runner=ListNode;
    while(runner.next.val!==value){
        if(runner.next.val>value){
            last.next=runner.next;
            runner.next=runner.next.next;
            last=last.next
            last.next=null;
        }else{
            runner=runner.next
        }
    }
}
