function reverse(Slist){
    if(!SList.head || !SList.head.next){
        return;
    }
    var prev = SList.head;
    var runner = prev.next;
    var temp = runner.next;
    while(temp){
        runner.next = prev;
        prev = runner;
        runner = temp;
        temp = temp.next;
    }
    runner.next = prev;
    SList.head = null;
    header = runner;
}
function kthLastNode(SList, k){
    var count = 0;
    var runner = SList.head;
    while(runner){
        count++;
        runner = runner.next;
    }
    for(runner=SList.head; count>k; count--){
        runner = runner.next;
    }
    return runner.val;
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
            p.child = null;
        }
        p=p.next;
    }
}
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
function hasLoop(SList){
    var slow = SList.head;
    var fast = SList.head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            return true;
        }
    }
    return false;
}
function breakLoop(SList){
    var slow = SList.head;
    var fast = SList.head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            break;
        }
    }
    if(!fast || !fast.next){
        return;
    }
    slow = SList.head;
    if(slow == fast){
        while(fast.next != slow){
            fast = fast.next;
        }
        fast.next = null;
        return;
    }
    while(slow.next != fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    fast.next = null;
}
function DLNode(value){
    this.val = value;
    this.prev = null;
    this.next = null;
}
function DList(){
    this.head = null;
    this.tail = null;
    this.push = function(value){
        if(!this.tail){
            this.tail = new DLNode(value);
            this.head = this.tail;
        }else{
            this.tail.next = new DLNode(value);
            this.tail.next.prev = this.tail;
            this.tail = this.tail.next;
        }
    }
    this.pop = function(){
        var temp = this.tail;
        if(!temp){
            return;
        }
        if(this.head == temp){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        return temp.val;
    }
    this.front = function(){
        if(this.head){
            return this.head.val;
        }
    }
    this.back = function(){
        if(this.tail){
            return this.tail.val;
        }
    }
    this.contains = function(value){
        var runner = this.head;
        while(runner){
            if(runner.val === value){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    this.size = function(){
        var count = 0;
        var runner = this.head;
        while(runner){
            count++;
            runner = runner.next;
        }
        return count;
    }
}
SList.prototype.kthToLastValue = function(k){
    var count = 0;
    var runner = this.head;
    while(runner){
        runner = runner.next;
        count++;
    }
    if(k > count){
        return;
    }
    for(runner = this.head; count>k; count--){
        runner = runner.next;
    }
    return runner.val;
}
DList.prototype.kthToLastValue = function(k){
    var runner = this.tail;
    while(runner){
        if(k == 1){
            return runner.val;
        }
        runner = runner.prev;
        k--;
    }
}
DList.prototype.palindrome = function(){
    var runner1 = this.head;
    var runner2 = this.tail;
    while(runner1 != runner2 && runner1 != runner2.next){
        if(runner1.val !== runner2.val){
            return false;
        }
        runner1 = runner1.next;
        runner2 = runner2.prev;
    }
    return true;
}
DList.prototype.isValid = function(){
    var runner = this.head;
    if(runner && runner.prev){
        return false;
    }
    while(runner.next){
        if(runner.next.prev != runner){
            return false;
            runner = runner.next;
        }
    }
    if(runner != this.tail){
        return false;
    }
    return true;
}