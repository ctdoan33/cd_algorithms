function prependValue(DList, nVal, eVal){
    var runner=DList.head;
    if(runner.val===eVal){
        runner.prev=new DLNode(nVal);
        runner.prev.next=runner;
        DList.head=runner.prev;
    }
    while(runner.next){
        if(runner.next.val===eVal){
            runner.next.prev=new DLNode(nVal);
            runner.next.prev.next=runner.next;
            runner.next.prev.prev=runner;
            runner.next=runner.next.prev;
            runner=runner.next;
        }
        runner=runner.next;
    }
}
function appendValue(DList, nval, eVal){
    var runner=DList.head;
    while(runner.next){
        if(runner.val===eVal){
            runner.next.prev=new DLNode(nVal);
            runner.next.prev.next=runner.next;
            runner.next.prev.prev=runner;
            runner.next=runner.next.prev;
            runner=runner.next;
        }
        runner=runner.next;
    }
    if(DList.tail.val===eVal){
        DList.tail.next=new DLNode(nVal);
        DList.tail.next.prev=DList.tail;
        DList.tail=DList.tail.next;
    }
}
function kthToLastValue(DList, k){
    var count=0;
    var runner=DList.head;
    while(runner){
        runner=runner.next;
        count++;
    }
    if(k>count){
        return;
    }
    for(runner=DList.head; count>k; count--){
        runner=runner.next;
    }
    return runner.val;
}
function deleteMiddleNode(node){
    node.prev.next=node.next;
    node.next.prev=node.prev;
    node.prev=null;
    node.next=null;
}
function isValid(DList){
    var runner=DList.head;
    if(runner&&runner.prev){
        return false;
    }
    while(runner.next){
        if(runner.next.prev!=runner){
            return false;
            runner=runner.next;
        }
    }
    if(runner!=DList.tail){
        return false;
    }
    return true;
}
function partition(DList, val){
    var runner=DList.head;
    while(runner.val<val){
        runner=runner.next;
    }
    while(runner&&runner.next){
        if(runner.val<val){
            temp=runner.next;
            runner.prev.next=temp;
            temp.prev=runner.prev;
            runner.next=DList.head;
            runner.prev=null;
            DList.head.prev=runner;
            DList.head=runner;
            runner=temp;
        }else{
            runner=runner.next;
        }
    }
    if(runner.val<val){
        DList.tail=runner.prev;
        DList.tail.next=null;
        runner.prev=null;
        DList.head.prev=runner;
        DList.head=runner;
    }
    runner=DList.tail;
    while(runner.val>val){
        runner=runner.prev;
    }
    while(runner&&runner.prev){
        if(runner.val>val){
            temp=runner.prev;
            runner.next.prev=temp;
            temp.next=runner.next;
            runner.prev=DList.tail;
            runner.next=null;
            DList.tail.next=runner;
            DList.tail=runner;
            runner=temp;
        }else{
            runner=runner.prev;
        }
    }
    if(runner.val>val){
        DList.head=runner.next;
        DList.head.prev=null;
        runner.next=null;
        DList.tail.next=runner;
        DList.tail=runner;
    }
}
function palindrome(DList){
    var runner1=DList.head;
    var runner2=DList.tail;
    while(runner1!=runner2&&runner1!=runner2.next){
        if(runner1.val!==runner2.val){
            return false;
        }
        runner1=runner1.next;
        runner2=runner2.prev;
    }
    return true;
}
function reverse(DList){
    if(DList.head==DList.tail){
        return;
    }
    var prev=DList.head;
    var runner=DList.next;
    var temp=runner.next;
    while(temp){
        runner.next=prev;
        runner.prev=temp;
        prev=runner;
        runner=temp;
        temp=runner.next;
    }
    DList.head.prev=DList.head.next;
    DList.head.next=null;
    DList.tail=DList.head;
    DList.head=runner;
    runner.next=prev;
    runner.prev=null;
}
function loopStart(DList){
    var slow=DList.head;
    var fast=DList.head;
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
    slow=SList.head;
    while(slow!=fast){
        slow=slow.next;
        fast=fast.next;
    }
    return slow;
}
function breakLoop(DList){
    var slow=DList.head;
    var fast=DList.head;
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
    slow=DList.head;
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
function repair(DList){
    var slow=DList.head;
    var fast=DList.head;
    while(fast&&fast.next){
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast){
            break;
        }
    }
    if(fast||fast.next){
        slow=DList.head;
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
    var runner=DList.head;
    if(!runner){
        DList.tail=null;
        return;
    }
    if(runner.prev){
        runner.prev=null;
    }
    while(runner.next){
        runner.next.prev=runner;
        runner=runner.next;
    }
    DList.tail=runner;
}