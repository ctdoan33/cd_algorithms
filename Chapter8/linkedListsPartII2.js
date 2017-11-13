function sumNumerals1(SList1, SList2){
    var sum=new SList;
    var carry=0;
    var runner1=SList1.head;
    var runner2=SList2.head;
    while(runner1&&runner2){
        var digit=runner1.val+runner2.val+carry;
        carry=(digit-digit%10)/10;
        digit=digit%10;
        SList.addBack(digit);
        runner1=runner1.next;
        runner2=runner2.next;
    }
    while(runner1){
        digit=runner1.val+carry;
        carry=(digit-digit%10)/10;
        digit=digit%10;
        SList.addBack(digit);
        runner1=runner1.next;
    }
    while(runner2){
        digit=runner2.val+carry;
        carry=(digit-digit%10)/10;
        digit=digit%10;
        SList.addBack(digit);
        runner2=runner2.next;
    }
    if(carry){
        SList.addBack(carry);
    }
    return sum;
}
function sumNumerals2(SList1, SList2){
    var sum=new SList;
    var runner1=SList1.head;
    var runner2=SList2.head;
    while(runner1.next){
        runner1=runner1.next;
    }
    var term1=runner1;
    while(runner2.next){
        runner2=runner2.next;
    }
    var term2=runner2;
    var digit=term1.val+term2.val;
    var carry=(digit-digit%10)/10;
    digit=digit%10;
    SList.addFront(digit);
    while(term1!=SList1.head&&term2!=SList2.head){
        runner1=SList1.head;
        runner2=SList2.head;
        while(runner1.next!=term1){
            runner1=runner1.next;
        }
        term1=runner1;
        while(runner2.next!=term2){
            runner2=runner2.next;
        }
        term2=runner2;
        digit=term1.val+term2.val+carry;
        carry=(digit-digit%10)/10;
        digit=digit%10;
        SList.addFront(digit);
    }
    while(term1!=SList1.head){
        runner1=SList1.head;
        while(runner1.next!=term1){
            runner1=runner1.next;
        }
        term1=runner1;
        digit=term1.val+carry;
        carry=(digit-digit%10)/10;
        digit=digit%10;
        SList.addFront(digit);
    }
    while(term2!=SList2.head){
        runner2=SList2.head;
        while(runner2.next!=term2){
            runner2=runner2.next;
        }
        term2=runner2;
        digit=term2.val+carry;
        carry=(digit-digit%10)/10;
        digit=digit%10;
        SList.addFront(digit);
    }
    if(carry){
        SList.addFront(carry);
    }
    return sum;
}
function setupLoop(nodenum, loopNum){
    var list=new SList;
    var count=1;
    list.head=new SLNode(1);
    runner=list.head;
    while(count<nodeNum){
        count++;
        node=new SLNode(count);
        if(count==loopNum){
            var loop=node;
        }
        runner.next=node;
        runner=runner.next;
    }
    runner.next=loop;
}
function flattenChildren(SList){
    var p = SList.head;
    while(p){
        if(p.child){
            var c = p.child;
            while(c.next){
                c = c.next;
            }
            c.next = p.next;
            p.next = p.child;
        }
        p=p.next;
    }
}
// Altered flatten children that marks changes, allowing unflatten
function flattenChildrenAltered(SList){ // preserves information using child pointers
    var p = SList.head;
    while(p){
        if(p.child &&
            p.child != p.next && // skips parent with flattened children mark
            p.child != p){ // skips end of child branch mark
            var c = p.child;
            while(c.next){
                c = c.next;
            }
            c.next = p.next;
            p.next = p.child; // marks parent with flattened children
            c.child = c; // marks end of child branch
        }
        p=p.next;
    }
}
function unflattenChildren(SList){
    var runner = SList.head;
    while(runner){
        if(runner.child === runner.next && runner.child){
            unflattenChild(runner);
        }
        runner = runner.next;
    }
}
function unflattenChild(p){
    var c = p;
    while(c.child != c){
        if(c.child === c.next){
            unflattenChild(c);
        }
        c = c.next;
    }
    p.next = c.next;
    c.next = null;
    c.child = null;
}