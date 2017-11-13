function ListNode(value){
    this.val=value;
    this.next=null;
}
function addFront(node, value){
    var newnode=ListNode(value);
    newnode.next=node;
    return newnode;
}
function contains(node, value){
    while(node){
        if(node.val===value){
            return true;
        }else{
            node=node.next;
        }
    }
    return false;
}
function removeFront(node){
    var newhead=node.next;
    node.next=null;
    return newhead;
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
    var str="";
    while(runner){
        str+=runner.val;
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
function back(ListNode){
    var runner=ListNode;
    while(runner.next){
        runner=runner.next;
    }
    return runner.val;
}
function removeBack(ListNode){
    var runner=ListNode;
    while(runner.next.next){
        runner=runner.next;
    }
    runner.next=null;
    return ListNode;
}
function addBack(ListNode, value){
    var runner = ListNode;
    while(runner.next){
        runner = runner.next;
    }
    runner.next = new ListNode(value);
    return ListNode;
}
function minToFront(ListNode){
    var runner=ListNode;
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
function moveMaxToBack(ListNode){
    var runner = ListNode;
    var max = runner;
    var prev = null;
    while(runner.next){
        if(runner.next.val > max.val){
            max = runner.next;
            prev = runner;
        }
        runner = runner.next;
    }
    runner.next = max;
    if(prev){
        prev.next = max.next;
    }else{
        head = max.next;
    }
    max.next = null;
    return head;
}