function reverse(Slist){
    if(!SList.head||!SList.head.next){
        return;
    }
    var prev=SList.head;
    var runner=prev.next;
    var temp=runner.next;
    while(temp){
        runner.next=prev;
        prev=runner;
        runner=temp;
        temp=temp.next;
    }
    runner.next=prev;
    SList.head.next=null;
    SList.head=runner;
}
function kthLastNode(SList, k){
    var count=0;
    var runner=SList.head;
    while(runner){
        count++;
        runner=runner.next;
    }
    for(runner=SList.head; count>k; count--){
        runner=runner.next;
    }
    return runner.val;
}
function isPalindrome1(SList){
    var arr=[];
    var runner=SList.head;
    while(runner){
        arr.push(runner.val);
    }
    for(var i=0; i<arr.length/2; i++){
        if(arr[i]!==arr[arr.length-i-1]){
            return false;
        }
    }
    return true;
}
function isPalindrome2(SList){
    var left=SList.head;
    var runner=left;
    while(runner.next){
        runner=runner.next;
    }
    var right=runner;
    while(left!=right&&left!=right.next){
        if(left.val!==right.val){
            return false;
        }
        left=left.next;
        runner=left;
        while(runner.next!=right){
            runner=runner.next;
        }
        right=runner;
    }
    return true;
}
function shiftRight1(SList, shiftBy){
    if(!Slist.head||!Slist.head.next){
        return;
    }
    while(shiftBy){
        runner=SList.head;
        while(runner.next.next){
            runner=runner.next;
        }
        runner.next.next=SList.head;
        SList.head=runner.next;
        runner.next=null;
        shiftBy--;
    }
}
function shiftBy(SList, shiftBy){
    if(!Slist.head||!Slist.head.next){
        return;
    }
    if(shiftBy>0){
        while(shiftBy){
            runner=SList.head;
            while(runner.next.next){
                runner=runner.next;
            }
            runner.next.next=SList.head;
            SList.head=runner.next;
            runner.next=null;
            shiftBy--;
        }
    }
    else{
        while(shiftBy){
            runner=SList.head;
            while(runner.next){
                runner=runner.next;
            }
            runner.next=SList.head;
            SList.head=SList.head.next;
            runner.next.next=null;
            shiftBy++;
        }
    }
}