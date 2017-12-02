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
		for(var i=0; i<cap; i++){
			if(arr[i]===undefined){
				return false;
			}
		}
		return true;
	}
	this.size=function(){
		var count=0;
		for(var i=0; i<cap; i++){
			if(arr[i]!==undefined){
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
			tail++;
			if(tail==cap){
				tail=0;
			}
		}
		arr[tail]=val;
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
		for(var i=capacity-1; i>=head; i--){
			arr[i+newSize-capacity]=arr[i];
			arr[i]=undefined;
		}
		if(head<=tail){
			tail+=newSize-capacity;
		}
		head+=newSize-capacity;
		capacity=newSize;
	}
}
function reorderAbsoluteQueue(queue){
	var size=queue.size();
	var tempStack=new Stack();
	var count=0;
	for(var i=0; i<size; i++){
		if(queue.front()<0){
			tempStack.push(queue.dequeue());
			count++;
		}else{
			queue.enqueue(queue.dequeue());
		}
	}
	for(i=0; i<size; i++){
		if(i<count){
			queue.enqueue(tempStack.pop());
		}else{
			queue.enqueue(queue.dequeue());
		}
	}
}
function partition(stack){
	var tempQueue=new Queue();
	var size=stack.size();
	for(var i=0; i<size; i++){
		tempQueue.enqueue(stack.pop());
	}
	for(i=0; i<size; i++){
		if(tempQueue.front()<=0){
			tempQueue.enqueue(tempQueue.dequeue());
		}else{
			stack.push(tempQueue.dequeue());
		}
	}
	while(!tempQueue.isEmpty()){
		stack.push(tempQueue.dequeue());
	}
}
function isSorted(stack){
	var tempStack=new Stack();
	var sorted=true;
	tempStack.push(stack.pop());
	while(!stack.isEmpty()){
		if(tempStack.top()>stack.top()){
			sorted=false;
		}
		tempStack.push(stack.pop());
	}
	while(!tempStack.isEmpty()){
		stack.push(tempStack.pop());
	}
	return sorted;
}
function switchPairs(stack){
	var tempQueue=new Queue;
	var size=stack.size();
	for(var i=0; i<size; i++){
		tempQueue.enqueue(stack.pop());
	}
	for(i=0; i<size; i++){
		stack.push(tempQueue.dequeue());
	}
	for(i=0; i<size; i++){
		tempQueue.enqueue(stack.pop());
	}
	for(i=0; i<(size-1)/2; i++){
		var temp=tempQueue.dequeue();
		stack.push(tempQueue.dequeue());
		stack.push(temp);
	}
	if(size%2){
		stack.push(tempQueue.dequeue());
	}
}
function mirror(stack){
	var tempQueue=new Queue;
	var size=stack.size();
	for(var i=0; i<size; i++){
		tempQueue.enqueue(stack.pop());
	}
	for(i=0; i<size; i++){
		stack.push(tempQueue.front());
		tempQueue.enqueue(tempQueue.dequeue());
	}
	for(i=0; i<size; i++){
		tempQueue.enqueue(stack.pop());
	}
	for(i=0; i<size*2; i++){
		stack.push(tempQueue.dequeue());
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