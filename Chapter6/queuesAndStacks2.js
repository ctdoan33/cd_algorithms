function copy(Stack){
    var tempQueue=new Queue();
    var copy=new Stack();
    var size=Stack.size();
    for(var i=0; i<size; i++){
        copy.push(Stack.pop());
    }
    for(i=0; i<size; i++){
        tempqueue.enqueue(copy.pop());
    }
    for(i=0; i<size; i++){
        Stack.push(tempQueue.front());
        copy.push(tempQueue.dequeue());
    }
    return copy;
}
function QueueUsingTwoStacks(){
    var stack1=new Stack();
    var stack2=new Stack();
    this.enqueue=function(val){
        stack1.push(val);
    }
    this.dequeue=function(){
        if(stack2.isEmpty()){
            while(!stack1.isEmpty()){
                stack2.push(stack1.pop());
            }
        }
        return stack2.pop();
    }
    this.top=function(){
        if(stack2.isEmpty()){
            while(!stack1.isEmpty()){
                stack2.push(stack1.pop());
            }
        }
        return stack2.top();
    }
    this.contains=function(val){
        var contains;
        var size=stack1.size();
        while(!stack2.isEmpty()){
            stack1.push(stack2.pop());
        }
        while(!stack1.isEmpty()){
            if(stack1.top==val){
                contains=true;
            }
            stack2.push(stack1.pop());
        }
        for(var i=0; i<size; i++){
            stack1.push(stack2.pop());
        }
        return contains;
    }
    this.empty=function(){
        return stack1.isEmpty()&&stack2.isEmpty();
    }
    this.size=function(){
        return stack1.size()+stack2.size();
    }
}
function isPalindrome(Queue){
    var half = (Queue.size()-1)/2;
    var tempStack=new Stack();
    var pali=true;
    for(var i=0; i<half; i++){
        tempStack.push(Queue.front());
        Queue.enqueue(Queue.dequeue());
    }
    if(size%2){
        Queue.enqueue(Queue.dequeue());
    }
    for(i=0; i<half; i++){
        if(tempStack.pop()!==Queue.front()){
            pali=false;
        }
        Queue.enqueue(Queue.dequeue());
    }
    return pali;
}
// Multiple implementations possible for this
function SLParent(){
    var head=null;
    this.remove=function(){
        var temp=head;
        head=head.next;
        temp.next=null;
        return temp.val;
    }
    this.look=function(){
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
function SLQueue(){
    SLParent.call(this);
    this.tail=null;
    this.enqueue=function(val){
        tail.next=new SLNode(val);
        tail=tail.next;
    }
    this.dequeue=function(){
        SLParent.call(this.remove);
    }
    this.front=function(){
        SLParent.call(this.look)
    }
}
function SLStack(){
    SLParent.call(this);
    this.push=function(val){
        var temp=new SLNode(val);
        temp.next=head;
        head=temp;
    }
    this.pop=function(){
        SLParent.call(this.remove);
    }
    this.top=function(){
        SLParent.call(this.look)
    }
}
function Deque(){
    this.head=null;
    this.tail=null;
    this.pushFront=function(val){
        var temp=new SLNode(val);
        temp.next=head;
        head=temp;
        if(!tail){
            tail=head;
        }
    }
    this.pushBack=function(val){
        tail.next=new SLNode(val);
        tail=tail.next;
        if(!head){
            head=tail;
        }
    }
    this.popFront=function(){
        var temp=head;
        head=head.next;
        temp.next=null;
        if(!head){
            tail=null;
        }
        return temp.val;
    }
    this.popBack=function(val){
        var temp=tail;
        var runner=head;
        while(runner.next&&runner.next!=tail){
            runner=runner.next
        }
        runner.next=null;
        if(temp==head){
            head=null;
        }
        return temp.val;
    }
    this.front=function(){
        return head.val;
    }
    this.back=function(){
        return tail.val;
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
function removeStackMin(Stack){
    var tempQueue=new Queue();
    var min=Stack.top();
    while(!Stack.isEmpty()){
        if(Stack.top()<min){
            min=Stack.top();
        }
        tempQueue.enqueue(Stack.pop());
    }
    while(!tempQueue.isEmpty()){
        if(tempQueue.front()==min){
            tempQueue.dequeue();
        }else{
            Stack.push(tempQueue.dequeue());
        }
    }
    while(!Stack.isEmpty()){
        tempQueue.enqueue(Stack.pop());
    }
    while(!tempQueue.isEmpty()){
        Stack.push(tempQueue.dequeue());
    }
}
function removeNewestMin(Stack){
    var tempQueue=new Queue();
    var min=Stack.top();
    var index=0;
    var count=0;
    while(!Stack.isEmpty()){
        if(Stack.top()<min){
            min=Stack.top();
            index=count;
        }
        tempQueue.enqueue(Stack.pop());
        count++;
    }
    count=0;
    while(!tempQueue.isEmpty()){
        if(count==index){
            tempQueue.dequeue();
        }else{
            Stack.push(tempQueue.dequeue());
        }
    }
    while(!Stack.isEmpty()){
        tempQueue.enqueue(Stack.pop());
    }
    while(!tempQueue.isEmpty()){
        Stack.push(tempQueue.dequeue());
    }
}
function removeOldestMin(Stack){
    var tempQueue=new Queue();
    var min=Stack.top();
    var index=0;
    var count=0;
    while(!Stack.isEmpty()){
        if(Stack.top()<=min){
            min=Stack.top();
            index=count;
        }
        tempQueue.enqueue(Stack.pop());
        count++;
    }
    count=0;
    while(!tempQueue.isEmpty()){
        if(count==index){
            tempQueue.dequeue();
        }else{
            Stack.push(tempQueue.dequeue());
        }
    }
    while(!Stack.isEmpty()){
        tempQueue.enqueue(Stack.pop());
    }
    while(!tempQueue.isEmpty()){
        Stack.push(tempQueue.dequeue());
    }
}