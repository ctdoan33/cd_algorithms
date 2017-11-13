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
		var temp=new PriQNode(value, priority)
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
		var i=1;
		while(last>heap[i*2]||last>heap[i*2+1]){
			if(heap[i*2]>heap[i*2+1]){
				heap[i]=heap[i*2+1];
				i=i*2+1;
			}else{
				heap[i]=heap[i*2];
				i=i*2;
			}
		}
		heap[i]=last;
		return min;
	}
}