function reverse(list){
    if(!list.head||!list.head.next){
        return;
    }
    var prev=list.head;
    var runner=prev.next;
    var temp=runner.next;
    while(temp){
        runner.next=prev;
        prev=runner;
        runner=temp;
        temp=temp.next;
    }
    runner.next=prev;
    list.head.next=null;
    list.head=runner;
}
function kthLastNode(list, k){
    var count=0;
    var runner=list.head;
    while(runner){
        count++;
        runner=runner.next;
	}
	if(k>count){
        return;
    }
    for(runner=list.head; count>k; count--){
        runner=runner.next;
    }
    return runner.val;
}
function isPalindrome1(list){
    var arr=[];
    var runner=list.head;
    while(runner){
        arr.push(runner.val);
    }
    for(var i=0, j=arr.length-1; i<j; i++, j--){
        if(arr[i]!==arr[j]){
            return false;
        }
    }
    return true;
}
function isPalindrome2(list){
    var left=list.head;
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
function shiftRight(list, shiftBy){
    if(!list.head||!list.head.next){
        return;
	}
	var last=list.head;
	var size=1;
	while(last.next){
		size++;
		last=last.next;
	}
	var count=size-shiftBy;
	while(count<0){
		count+=size;
	}
	while(count>=size){
		count-=size;
	}
	runner=list.head;
    while(count>0){
        runner=runner.next;
	}
	var temp=runner.next;
	runner.next=null;
	last.next=list.head;
	list.head=temp;
}
function sumNumerals1(list1, list2){
    var sum=new Slist();
    var carry=0;
    var runner1=list1.head;
    var runner2=list2.head;
    while(runner1&&runner2){
        var digit=runner1.val+runner2.val+carry;
        carry=(digit-digit%10)/10;
        digit=digit%10;
        list.addBack(digit);
        runner1=runner1.next;
        runner2=runner2.next;
    }
    while(runner1){
        var digit=runner1.val+carry;
        carry=(digit-digit%10)/10;
        digit=digit%10;
        list.addBack(digit);
        runner1=runner1.next;
    }
    while(runner2){
        var digit=runner2.val+carry;
        carry=(digit-digit%10)/10;
        digit=digit%10;
        list.addBack(digit);
        runner2=runner2.next;
    }
    if(carry){
        list.addBack(carry);
    }
    return sum;
}
function sumNumerals2(list1, list2){
	var runner=list1.head;
	var num1="";
	while(runner){
		num1+=runner.val;
		runner=runner.next;
	}
	runner=list2.head;
	var num2="";
	while(runner){
		num2+=runner.val;
		runner=runner.next;
	}
	var sum=String(Number(num1)+Number(num2));
	var sumList=new Slist();
	for(var i=0; i<sum.length; i++){
		sumList.addBack(Number(sum[i]));
	}
	return sumList;
}
function setupLoop(nodenum, loopNum){
    var list=new Slist();
    var count=1;
    list.head=new SLNode(1);
    var runner=list.head;
    while(count<nodeNum){
        count++;
		runner.next=new SLNode(count);
		runner=runner.next;
        if(count==loopNum){
            var loop=runner;
        }
    }
    runner.next=loop;
}
function flattenChildren(list){
    var p=list.head;
    while(p){
        if(p.child){
            var c=p.child;
            while(c.next){
                c=c.next;
            }
            c.next=p.next;
            p.next=p.child;
        }
        p=p.next;
    }
}
// Altered flatten children that marks changes, allowing unflatten
// preserves information using child pointers:
function flattenChildrenAltered(list){
    var p=list.head;
    while(p){
        if(p.child){
            var c=p.child;
            while(c.next){
                c=c.next;
            }
            c.next=p.next;
            p.next=p.child;
            p.child=c; // a parent's child pointer will point to last node of its child
        }
        p=p.next;
    }
}
function unflattenChildren(list){
    var runner=list.head;
    while(runner){
        if(runner.child){
            unflattenChild(runner);
        }
        runner=runner.next;
    }
}
function unflattenChild(p){
	var runner=p;
	var child=p.next;
    while(p.child!=runner){
        if(runner.next.child){ // runs unflatten recursively for complex inputs
            unflattenChild(runner.next);
        }
        runner=runner.next;
	}
	p.child=child;
	p.next=runner.next;
    runner.next=null;
}
// it is possible to flatten without nested loops for complex inputs, but not unflatten