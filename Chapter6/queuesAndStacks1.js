function SLNode(value){
    this.val=value;
    this.next=null;
}
function SLQueue(){
    var head=null;
    var tail=null;
    this.enqueue=function(val){
		if(!head){
			head = new SLNode(val);
			tail = head;
		}else{
			tail.next = new SLNode(val);
			tail = tail.next;
		}
		return this;
    }
    this.dequeue=function(){
		if(!head){
			return;
		}
        var temp=head;
        head=head.next;
        if(!head){
            tail=null;
        }
        return temp.val;
    }
    this.front=function(){
		if(!head){
			return;
		}
        return head.val;
    }
    this.contains=function(val){
        var runner=head;
        while(runner){
            if(runner.val===val){
                return true;
            }
            runner=runner.next;
        }
        return false;
    }
    this.isEmpty=function(){
        return !head;
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
function compareQueues(SLQueue1, SLQueue2){
    var size=SLQueue1.size();
    if(size!=SLQueue2.size()){
        return false;
    }
    var equal=true;
    for(var i=0; i<size; i++){
        if(SLQueue1.top()!==SLQueue2.top()){
            equal==false;
        }
        SLQueue1.enqueue(SLQueue1.dequeue());
        SLQueue2.enqueue(SLQueue2.dequeue());
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
        SLQueue.enqueue(SLQueue.dequeue());
    }
    for(var j=0; j<size; j++){
        if(j==index){
            SLQueue.dequeue();
        }else{
            SLQueue.enqueue(SLQueue.dequeue());
        }
    }
}
function interleaveQueue(SLQueue){
    var size=SLQueue.size();
    var tempQueue=new SLQueue();
    for(var i=0; i<size/2; i++){
        tempQueue.enqueue(SLQueue.dequeue());
	}
	var alternate=true;
    for(var i=0; i<size; i++){
		if(alternate){
			SLQueue.enqueue(tempQueue.dequeue());
		}else{
			SLQueue.enqueue(SLQueue.dequeue());
		}
		alternate=!alternate;
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
            if(stack[i]===val){
                return true;
            }
        }
        return false;
    }
    this.isEmpty=function(){
        return !stack.length;
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
		if(!head){
			return;
		}
        var temp=head;
        head=head.next;
        return temp.val;
    }
    this.top=function(){
        return head.val;
    }
    this.contains=function(val){
        var runner=head;
        while(runner){
            if(runner.val===val){
                return true;
            }
            runner=runner.next;
        }
        return false;
    }
    this.isEmpty=function(){
        return !head;
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