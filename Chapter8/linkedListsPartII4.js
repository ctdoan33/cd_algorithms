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
function push(DList, value){
    if(!DList.tail){
        DList.tail = new DLNode(value);
        DList.head = DList.tail;
    }else{
        DList.tail.next = new DLNode(value);
        DList.tail.next.prev = DList.tail;
        DList.tail = DList.tail.next;
    }
}
function pop(DList){
    var temp = DList.tail;
    if(!temp){
        return;
    }
    if(DList.head == temp){
        DList.head = null;
        DList.tail = null;
    }else{
        DList.tail = temp.prev;
        DList.tail.next = null;
        temp.prev = null;
    }
    return temp.val;
}
function front(DList){
    if(DList.head){
        return DList.head.val;
    }
}
function back(DList){
    if(DList.tail){
        return DList.tail.val;
    }
}
function contains(DList, value){
    var runner = DList.head;
    while(runner){
        if(runner.val === value){
            return true;
        }
        runner = runner.next;
    }
    return false;
}
function size(DList){
    var count = 0;
    var runner = DList.head;
    while(runner){
        count++;
        runner = runner.next;
    }
    return count;
}