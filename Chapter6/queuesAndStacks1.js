function SLNode(value){
    this.val=value;
    this.next=null;
}
function SLQueue(){
    var head=null;
    var tail=null;
    this.enqueue=function(val){
        tail.next=new SLNode(val);
        tail=tail.next;
        if(!head){
            head=tail;
        }
    }
    this.dequeue=function(){
        var temp=head;
        head=head.next;
        temp.next=null;
        if(!head){
            tail=null;
        }
        return temp.val;
    }
    this.front=function(){
        return head.val;
    }
    this.contains=function(val){
        var runner=head;
        while(runner){
            if(runner.val==val){
                return true;
            }
            runner=runner.next;
        }
        return false;
    }
    this.isEmpty=function(){
        if(head){
            return true;
        }
        return false;
    }
    this.size=function(){
        var count=0;
        var runner=head;
        while(runner){
            count++;
            runner=runner.next;
        }
    }
}
function compareQueues(SLQueue1, SLQueue2){
    if(SLQueue1.size()!=SLQueue2.size()){
        return false;
    }
    var equal=true;
    var size=SLQueue1.size();
    for(var i=0; i<size; i++){
        if(SLQueue1.top()!==SLQueue2.top()){
            equal==false;
        }
        SLQueue1.enqueue(SLQueue1.dequeue())
        SLQueue2.enqueue(SLQueue2.dequeue())
    }
    return equal;
}
function removeMinimums(SLQueue){
    var min=SLQueue.front();
    var size=SLQueue.size();
    for(var i=0; i<size; i++){
        if(SLQueue.front()<min){
            min=SLQueue.front();
        }
        SLQueue.enqueue(SLQueue.dequeue())
    }
    for(var j=0; j<size; j++){
        if(SLQueue.front()==min){
            SLQueue.dequeue();
        }else{
            SLQueue.enqueue(SLQueue.dequeue());
        }
    }
}
function removeLastMinimum(){
    var min=SLQueue.front();
    var size=SLQueue.size();
    var index=0;
    for(var i=0; i<size; i++){
        if(SLQueue.front()<=min){
            index=i;
            min=SLQueue.front();
        }
        SLQueue.enqueue(SLQueue.dequeue())
    }
    for(var j=0; j<size; j++){
        if(j==i){
            SLQueue.dequeue();
        }else{
            SLQueue.enqueue(SLQueue.dequeue());
        }
    }
}
function interleaveQueue(SLQueue){
    var size = SLQueue.size();
    if(!size){
        return;
    }
    SLQueue.enqueue(SLQueue.dequeue())
    var tempQueue=new SLQueue();
    for(var i=0; i<size/2-1; i++){
        tempQueue.enqueue(SLQueue.dequeue());
    }
    for(var i=0; i<size/2-1; i++){
        SLQueue.enqueue(tempQueue.dequeue());
        SLQueue.enqueue(SLQueue.dequeue());
    }
}
function ArrStack(){
    var stack=[];
    this.push=function(val){
        stack.push(val);
    }
    this.pop=function(){
        return stack.pop();
    }
    this.top=function(){
        return stack[stack.length-1];
    }
    this.contains=function(val){
        for(var i=0; i<stack.length; i++){
            if(stack[i]==val){
                return true;
            }
        }
        return false;
    }
    this.isEmpty=function(){
        if(stack==[]){
            return true;
        }
        return false;
    }
    this.size=function(){
        return stack.length;
    }
}
function SLStack(){
    var head=null;
    this.push=function(val){
        var temp=new Node(val);
        temp.next=head;
        head=temp;
    }
    this.pop=function(){
        var temp=head;
        head=head.next;
        temp.next=null;
        return temp.val;
    }
    this.top=function(){
        return head.val;
    }
    this.contains=function(val){
        var runner=head;
        while(runner){
            if(runner.val==val){
                return true;
            }
            runner=runner.next;
        }
        return false;
    }
    this.isEmpty=function(){
        if(head){
            return false;
        }
        return true;
    }
    this.size=function(){
        var count=0;
        var runner=head;
        while(runner){
            count++;
            runner=runner.next;
        }
        return count;
    }
}
function compareStacks(Stack1, Stack2){
    var tempStack=new ArrStack();
    var size=Stack1.size();
    if(size!=Stack2.size()){
        return false;
    }
    var equal=true;
    for(var i=0; i<size; i++){
        if(Stack1.top()===Stack2.top()){
            tempStack.push(Stack1.pop());
            Stack2.pop();
        }else{
            var equal=false;
            break;
        }
    }
    for(; i>0; i--){
        Stack1.push(tempStack.top());
        Stack2.push(tempStack.pop());
    }
    return equal;
}