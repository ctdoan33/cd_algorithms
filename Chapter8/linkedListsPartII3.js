function hasLoop(SList){
    var slow=SList.head;
    var fast=SList.head;
    while(fast&&fast.next){
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast){
            return true;
        }
    }
    return false;
}
Slist.prototype.hasLoop=function(){
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
function loopStart(SList){
    var slow=SList.head;
    var fast=SList.head;
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
function breakLoop(SList){
    var slow=SList.head;
    var fast=SList.head;
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
    slow=SList.head;
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
function numberOfNodes(SList){
    var count=0;
    var slow=SList.head;
    var fast=SList.head;
    while(fast&&fast.next){
        slow=slow.next;
        fast=fast.next.next;
        count+=2;
        if(slow==fast){
            break;
        }
    }
    if(!fast){
        return count;
    }else if(!fast.next){
        return count+1;
    }
    slow=SList.head;
    if(slow==fast){
        return count/2;
    }
    count=1;
    while(slow!=fast){
        slow=slow.next;
        fast=fast.next;
        count++;
    }
    while(fast.next!=fast){
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
        count+=2;
        if(slow==fast){
            break;
        }
    }
    if(!fast){
        return count;
    }else if(!fast.next){
        return count+1;
    }
    slow=this.head;
    if(slow==fast){
        return count/2;
    }
    count=1;
    while(slow!=fast){
        slow=slow.next;
        fast=fast.next;
        count++;
    }
    while(fast.next!=fast){
        fast=fast.next;
        count++;
    }
    return count;
}
function swapPairs(SList){
    if(SList.head&&SList.head.next){
        var runner=SList.head;
        SList.head=runner.next;
        runner.next=SList.head.next;
        SList.head.next=runner;
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