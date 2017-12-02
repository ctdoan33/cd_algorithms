function SLNode(value){
	this.val = value;
	this.next = null;
}
function SLQueue(){
	this.head = null;
	this.tail = null;
	this.enqueue = function(val){
		if(!this.head){
			this.head = new SLNode(val);
			this.tail = this.head;
		}else{
			this.tail.next = new SLNode(val);
			this.tail = this.tail.next;
		}
		return this;
	}
	this.dequeue = function(){
		if(!this.head){
			return;
		}
		var temp = this.head;
		this.head = this.head.next;
		if(!this.head){
			this.tail = null;
		}
		return temp.val;
	}
	this.front = function(){
		if(!this.head){
			return;
		}
		return this.head.val;
	}
	this.contains = function(val){
		var runner = this.head;
		while(runner){
			if(runner.val === val){
				return true;
			}
		}
		return false;
	}
}
function ArrStack(){
	this.stack = [];
	this.push = function(val){
		this.stack.push(val);
	}
	this.pop = function(){
		return this.stack.pop();
	}
	this.top = function(){
		return this.stack[this.stack.length-1];
	}
	this.contains = function(val){
		for(var i=0; i<this.stack.length; i++){
			if(this.stack[i] === val){
				return true;
			}
		}
		return false;
	}
}
function copyWithStack(Stack){
	var tempStack = new Stack();
	var copy = new Stack();
	while(!Stack.isEmpty()){
		tempStack.push(Stack.pop());
	}
	while(!tempStack.isEmpty()){
		Stack.push(tempStack.top());
		copy.push(tempStack.pop());
	}
	return copy;
}
function copyWithQueue(Stack){
	var tempQueue = new Queue();
	var copy = new Stack();
	while(!Stack.isEmpty()){
		copy.push(Stack.pop());
	}
	while(!copy.isEmpty()){
		tempqueue.enqueue(copy.pop());
	}
	while(!tempQueue.isEmpty()){
		Stack.push(tempQueue.front());
		copy.push(tempQueue.dequeue());
	}
	return copy;
}
function isPalindrome(Queue){
	var size = Queue.size();
	var half = (size-1)/2;
	var tempStack = new Stack();
	var pali = true;
	for(var i=0; i<half; i++){
		tempStack.push(Queue.front());
		Queue.enqueue(Queue.dequeue());
	}
	if(size%2){
		Queue.enqueue(Queue.dequeue());
	}
	for(i=0; i<half; i++){
		if(tempStack.pop() !== Queue.front()){
			pali=false;
		}
		Queue.enqueue(Queue.dequeue());
	}
	return pali;
}
function isPalindromeNoSize(Queue){
	var tempStack = new Stack();
	var size = 0;
	while(Queue.front() !== undefined){
		tempStack.push(Queue.dequeue());
		size++;
	}
	for(var i=0; i<size; i++){
		Queue.enqueue(tempStack.pop());
	}
	for(i=0; i<size; i++){
		tempStack.push(Queue.front());
		Queue.enqueue(Queue.dequeue());
	}
	var pali=true;
	for(i=0; i<size; i++){
		if(Queue.dequeue() !== tempStack.top()){
			pali=false;
		}
		Queue.enqueue(tempStack.pop());
	}
	return pali;
}