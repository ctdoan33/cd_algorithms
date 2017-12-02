function countingSort(arr, power=0){
	var count = [0,0,0,0,0,0,0,0,0,0];
	for(var i=0; i<arr.length; i++){
		count[Math.floor(arr[i]%Math.pow(10,power+1) / Math.pow(10,power))]++;
	}
	for(var j=0; j<9; j++){
		count[j+1] += count[j];
	}
	var newarr=[];
	for(i=arr.length; i>=0; i--){
		var digit = Math.floor(arr[i]%Math.pow(10,power+1) / Math.pow(10,power));
		count[digit]--;
		newarr[count[digit]] = arr[i];
	}
	return newarr;
}
function radixSort(arr, digits){
	var power = 0;
	while(power < digits){
		arr = countingSort(arr, power);
		power++;
	}
	return arr;
}
function mergeSorted(arr1, arr2){
	var i = 0;
	var j = 0;
	var arr = [];
	while(i < arr1.length){
		if(arr1[i] > arr2[j]){
			arr.push(arr2[j]);
			j++;
		}else{
			arr.push(arr1[i]);
			i++;
		}
	}
	while(j < arr2.length){
		arr.push(arr2[j]);
	}
	return arr;
}
function unionSorted(arr1, arr2){
	var i = 0;
	var j = 0;
	var arr = [];
	while(i < arr1.length){
		if(arr1[i] < arr2[j]){
			arr.push(arr1[i]);
			i++;
		}else if(arr1[i] > arr2[j]){
			arr.push(arr2[j]);
			j++;
		}else{
			arr.push(arr1[i]);
			i++;
			j++;
		}
	}
	while(j < arr2.length){
		arr.push(arr2[j]);
		j++;
	}
	return arr;
}
function intersectSorted(arr1, arr2){
	var i = 0;
	var j = 0;
	var arr = [];
	while(i<arr1.length && j<arr2.length){
		if(arr1[i] < arr2[j]){
			i++;
		}else if(arr1[i] > arr2[j]){
			j++;
		}else{
			arr.push(arr1[i]);
			i++;
			j++;
		}
	}
	return arr;
}
function intersectSortedDedupe(arr1, arr2){
	var i = 0;
	var j = 0;
	var arr = [];
	while(i<arr1.length && j<arr2.length){
		if(arr1[i] < arr2[j]){
			i++;
		}else if(arr1[i] > arr2[j]){
			j++;
		}else{
			if(arr1[i] != arr[arr.length-1]){
				arr.push(arr1[i]);
			}
			i++;
			j++;
		}
	}
	return arr;
}
function PriQNode(value, priority){
	this.val = value;
	this.pri = priority;
	this.next = null;
}
function PriQueue(){
	this.head = null;
	this.enqueue = function(value, priority){
		var temp = new PriQNode(value, priority);
		if(!this.head || this.head.pri<priority){
			temp.next = this.head;
			this.head = temp;
		}else{
			var runner = this.head;
			while(runner.next && runner.next.pri >= priority){
				runner=runner.next;
			}
			temp.next = runner.next;
			runner.next = temp;
		}
	}
	this.dequeue = function(){
		if(!this.head){
			return null
		}
		var temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		return temp.val;
	}
	this.contains = function(value){
		var runner = this.head;
		while(runner){
			if(runner.val = value){
				return true;
			}
			runner = runner.next;
		}
		return false;
	}
}
function QueueFromTwoStacks(){
	var stack1 = new Stack();
	var stack2 = new Stack();
	this.enqueue = function(val){
		stack1.push(val);
	}
	this.dequeue = function(){
		if(stack2.isEmpty()){
			while(!stack1.isEmpty()){
				stack2.push(stack1.pop());
			}
		}
		return stack2.pop();
	}
}
function PriorityQueueFromTwoStacks(){
	var stack1 = new Stack();
	var stack2 = new Stack();
	this.enqueue = function(val, pri){
		while(stack1.top()[1] < pri){
			stack2.push(stack1.pop());
		}
		stack1.push([val, pri]);
		while(!stack2.isEmpty()){
			stack1.push(stack2.pop());
		}
	}
	this.dequeue = function(){
		while(!stack1.isEmpty()){
			stack2.push(stack1.pop());
		}
		var temp = stack2.pop();
		while(!stack2.isEmpty()){
			stack1.push(stack2.pop());
		}
		return temp;
	}
}