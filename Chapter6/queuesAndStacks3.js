function CirQueue(cap){
    var head=0;
    var tail=0;
    var capacity=cap;
    var arr=[];
    this.front=function(){
        return arr[head];
    }
    this.isEmpty=function(){
        return arr[head]===undefined;
    }
    this.isFull=function(){
        for(var i=0; i<arr.length; i++){
            if(arr[i]===undefined){
                return false;
            }
        }
        return true;
    }
    this.size=function(){
        var count=0;
        for(var i=0; i<arr.length; i++){
            if(arr[i]!=undefined){
                count++;
            }
        }
        return count;
    }
    this.enqueue=function(val){
        if(this.isFull()){
            return false;
        }
        if(arr[tail]!=undefined){
            if(tail==cap-1){
                tail=0;
            }else{
                tail++;
            }
        }
        arr[tail]==val;
    }
    this.dequeue=function(){
        if(this.isEmpty()){
            return false;
        }
        var temp=arr[head];
        arr[head]=undefined;
        if(head==cap-1&&arr[0]!=undefined){
            head=0;
        }else if(arr[head+1]!=undefined){
            head++;
        }
        return temp;
    }
    this.contains=function(val){
        for(var i=0; i<arr.length; i++){
            if(arr[i]===val){
                return true;
            }
        }
    }
    this.grow=function(newSize){
        arr.length=newSize;
        for(var i=1; i<cap-tail; i++){
            arr[newSize-i]=arr[cap-i];
            arr[cap-i]=undefined;
        }
        if(head>tail){
            head+newsize-cap;
        }
    }
}
function reorderAbsoluteQueue(Queue){
    var size=Queue.size();
    var tempStack=new Stack();
    var count=0;
    for(var i=0; i<size; i++){
        if(Queue.front()<0){
            tempStack.push(Queue.dequeue());
            count++;
        }else{
            Queue.enqueue(Queue.dequeue());
        }
    }
    for(i=0; i<size; i++){
        if(i<count){
            Queue.enqueue(tempStack.pop());
        }else{
            Queue.enqueue(Queue.dequeue());
        }
    }
}
function partition(Stack){
    var tempQueue=new Queue();
    var size=Stack.size();
    for(var i=0; i<size; i++){
        tempQueue.enqueue(Stack.pop());
    }
    for(i=0; i<size; i++){
        if(tempQueue.front()>0){
            tempQueue.enqueue(tempQueue.dequeue());
        }else{
            Stack.push(tempQueue.dequeue());
        }
    }
    while(!tempQueue.isEmpty()){
        Stack.push(tempQueue.dequeue());
    }
}
function isSorted(Stack){
    var tempStack=new Stack();
    var sorted=true;
    tempStack.push(Stack.pop());
    while(!Stack.isEmpty()){
        if(tempStack.top()>Stack.top()){
            sorted=false;
        }
        tempStack.push(Stack.pop());
    }
    while(!tempStack.isEmpty()){
        Stack.push(tempStack.pop());
    }
    return sorted;
}
function switchPairs(Stack){
    var tempQueue=new Queue;
    var size=Stack.size();
    for(var i=0; i<size; i++){
        tempQueue.enqueue(Stack.pop());
    }
    for(i=0; i<size; i++){
        Stack.push(tempQueue.dequeue());
    }
    for(i=0; i<size; i++){
        tempQueue.enqueue(Stack.pop());
    }
    var temp;
    for(i=0; i<(size-1)/2; i++){
        temp=tempQueue.dequeue();
        Stack.push(tempQueue.dequeue());
        Stack.push(temp);
    }
    if(size%2){
        Stack.push(tempQueue.dequeue());
    }
}
function mirror(Stack){
    var tempQueue=new Queue;
    var size=Stack.size();
    for(var i=0; i<size; i++){
        tempQueue.enqueue(Stack.pop());
    }
    for(i=0; i<size; i++){
        Stack.push(tempQueue.front());
        tempQueue.enqueue(tempQueue.dequeue());
    }
    for(i=0; i<size; i++){
        tempQueue.enqueue(Stack.pop());
    }
    for(i=0; i<size*2; i++){
        Stack.push(tempQueue.dequeue());
    }
}
function weakFinger(finger, times){
    var count=0;
    var point=1;
    var forward=true;
    while(times||point!=finger){
        if(point==finger){
            times--;
        }
        if(point==1){
            forward=true;
        }
        if(point==5){
            forward=false;
        }
        if(forward){
            point++;
        }else{
            point--;
        }
        count++;
    }
    return count;
}