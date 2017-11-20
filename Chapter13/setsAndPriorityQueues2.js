// Priority queue implemented with min value as higherst priority
// allows sequencer to work as a PriQueue instance
function PriQNode(value, priority){
	this.val=value;
	this.pri=priority;
	this.next=null;
}
function PriQueue(){
	var head=null;
	var tail=null;
	this.enqueue=function(value, priority){
		var temp=new PriQNode(value, priority);
		if(!head){
			head=temp;
			tail=temp;
		}else if(head.pri<priority){
			temp.next=head;
			head=temp;
		}else{
			var runner=head;
			while(runner.next&&runner.next.pri>=priority){
				runner=runner.next;
			}
			if(!runner.next){
				tail=temp;
			}
			temp.next=runner.next;
			runner.next=temp;
		}
	}
	this.dequeue=function(){
		if(!head){
			return null;
		}
		var temp=head;
		head=head.next;
		temp.next=null;
		if(!head){
			tail=null;
		}
		return temp;
	}
	this.front=function(){
		return head;
	}
}
var sequencer=new PriQueue();
function sequenceMessage(message){
	sequencer.enqueue(message[1], message[0]);
}
function playMessages(){
	while(true){
		var next=sequencer.front();
		if(next&&next.pri<=Date.now()){
			console.log(sequencer.dequeue().val);
		}else{
			break;
		}
	}
}
function MinHeap(){
	var heap=[undefined];
	this.isEmpty=function(){
		return heap.length==1;
	}
	this.size=function(){
		return heap.length-1;
	}
	this.top=function(){
		return heap[1];
	}
	this.contains=function(val){
		for(var i=1; i<heap.length; i++){
			if(heap[i]===val){
				return true;
			}
		}
		return false;
	}
	this.insert=function(val){
		var i=heap.length;
		var j=Math.trunc(i/2);
		while(heap[j]<val){
			heap[i]=heap[j];
			i=j;
			j=Math.trunc(i/2);
		}
		heap[i]=val;
	}
	this.extract=function(){
		if(heap.length==1){
			return null;
		}else if(heap.length==2){
			return heap.pop();
		}
		var min=heap[1];
		var last=heap.pop();
		var idx=1;
		while(last>heap[idx*2]||last>heap[idx*2+1]){
			if(heap[idx*2]>heap[idx*2+1]){
				heap[idx]=heap[idx*2+1];
				idx=idx*2+1;
			}else{
				heap[idx]=heap[idx*2];
				idx=idx*2;
			}
		}
		heap[idx]=last;
		return min;
	}
	this.heapify=function(idx){
		if(idx>=heap.length/2){
			return;
		}
		if(heap[idx]>heap[idx*2]&&heap[idx*2]<heap[idx*2+1]){
			var temp=heap[idx];
			heap[idx]=heap[idx*2];
			heap[idx*2]=temp;
			this.heapify(idx*2);
		}
		if(heap[idx]>heap[idx*2+1]){
			var temp=heap[idx];
			heap[idx]=heap[idx*2]+1;
			heap[idx*2]=temp;
			this.heapify(idx*2+1);
		}
	}
	this.heapifyArray=function(arr){
		var temp=arr[0];
		arr[0]=undefined;
		arr.push(temp);
		heap=arr;
		for(var i=Math.trunc((heap.length-1)/2); i>0; i--){
			this.heapify(i);
		}
	}
}
function heapSort(arr){
	var heap=new MinHeap();
	heap.heapifyArray(arr);
	var sorted=[];
	while(!heap.isEmpty){
		sorted.push(heap.extract());
	}
}
// in place algorithm is best with a MaxHeap. redefine heapify for max
// also need to accept have only part of array as heap, define a size of heap
function maxHeapify(arr, idx, size=arr.length-1){
	if(idx*2>size){
		return;
	}
	if(idx*2+1<=size&&arr[idx]<arr[idx*2+1]){
		var temp=arr[idx];
		arr[idx]=arr[idx*2]+1;
		arr[idx*2]=temp;
		maxHeapify(arr, idx*2+1, size);
	}
	if(arr[idx]<arr[idx*2]){
		var temp=arr[idx];
		arr[idx]=arr[idx*2];
		arr[idx*2]=temp;
		maxHeapify(arr, idx*2, size);
	}
}
function heapSortInPlace(arr){
	var temp=arr[0];
	arr[0]=undefined;
	arr.push(temp);
	for(var i=Math.trunc((arr.length-1)/2); i>0; i--){
		maxHeapify(arr, i);
	}
	for(var i=arr.length-1; i>1; i--){
		var temp=arr[1];
		arr[1]=arr[i];
		arr[i]=temp;
		maxHeapify(arr, 1, i-1);
	}
}
// build MedianHeap with MinHeap and MaxHeap
// add method to add a value top method to get median
function MedianHeap(){
	var greater=new MinHeap;
	var lesser=new MaxHeap;
	this.add=function(val){
		if(val>this.median()){
			greater.insert(val);
			if(greater.size()-lesser.size()>1){
				lesser.insert(greater.extract());
			}
		}else{
			lesser.insert(val);
			if(lesser.size()-greater.size()>1){
				greater.insert(lesser.extract());
			}
		}
	}
	this.top=function(){
		if(greater.size()>lesser.size()){
			return greater.top();
		}else if(lesser.size()>greater.size()>1){
			return lesser.top();
		}else{
			return (greater.top()+lesser.top())/2;
		}
	}
}
function QueueFromTwoStacks(){
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
}
function PriorityQueueFromTwoStacks(){
    var stack1=new Stack();
    var stack2=new Stack();
    this.enqueue=function(val, pri){
        while(stack1.top()[1]<pri){
			stack2.push(stack1.pop());
		}
		stack1.push([val, pri]);
		while(!stack2.isEmpty()){
			stack1.push(stack2.pop());
		}
    }
    this.dequeue=function(){
		while(!stack1.isEmpty()){
			stack2.push(stack1.pop());
		}
		var temp=stack2.pop();
		while(!stack2.isEmpty()){
			stack1.push(stack2.pop());
		}
		return temp;
    }
}
// Possible error as ArrStack already built
ArrayNoDupe.prototype.push=function(val){
	for(var i=0; i<this.length; i++){
		if(this[i]===val){
			return false;
		}
	}
	this[i]=val;
	return i+1;
}
SlistNoDupe.prototype.add=function(val){
	if(!this.head||this.head.val===val){
		return false;
	}
	var runner=this.head;
	while(runner.next){
		if(runner.next.val===val){
			return false;
		}
		runner=runner.next;
	}
	runner.next=new SLNode(val);
	return true;
}
PriQueueNoDupe.prototype.add=function(value, priority){
	if(!this.head){
		this.head=new PriQNode(value, priority);
		this.tail=this.head;
		return true;
	}
	if(this.head.pri<priority){
		var runner=this.head;
		while(runner){
			if(runner.val===val){
				return false;
			}
			runner=runner.next;
		}
		var temp=new PriQNode(value, priority);
		temp.next=this.head;
		this.head=temp;
	}else{
		var runner=this.head;
		while(runner.next&&runner.next.pri>=priority){
			if(runner.next.val===val){
				return false;
			}
			runner=runner.next;
		}
		var runner2=runner;
		while(runner2.next){
			if(runner2.next.val===val){
				return false;
			}
		}
		var temp=new PriQNode(value, priority);
		if(!runner.next){
			this.tail=temp;
		}
		temp.next=runner.next;
		runner.next=temp;
	}
}