function bubbleSort(arr){
	for(var i=0; i<arr.length-1; i++){
		for(var j=0; j<arr.length-1-i; j++){
			if(arr[j] > arr[j+1]){
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
}
function selectionSort(arr){
	for(var i=0; i<arr.length-1; i++){
		var min = i;
		for(var j=i+1; j<arr.length; j++){
			if(arr[j] < arr[min]){
				min = j;
			}
		}
		var temp = arr[min];
		arr[min] = arr[i];
		arr[i] = temp;
	}
}
function insertionSort(arr){
	for(var i=1; i<arr.length; i++){
		var temp = arr[i];
		var j = i;
		while(temp < arr[j-1]){
			arr[j] = arr[j-1];
			j--;
		}
		arr[j] = temp;
	}
}
function quickSortArray(arr, start=0, end=arr.length-1){
	if(end-start<=1){
		return;
	}
	var left = start+1;
	var right = end;
	while(left<right){
		while(arr[left]<=arr[start]){
			left++;
		}
		while(arr[right]>arr[start]){
			right--;
		}
		if(left<right){
			var temp = arr[left];
			arr[left] = arr[right];
			arr[right] = temp;
		}
	}
	var temp = arr[start];
	arr[start] = arr[right];
	arr[right] = temp;
	quickSortArray(arr, start, right-1);
	quickSortArray(arr, left, end);
}
function combineArrays(arr1, arr2){
	var idx = 0;
	for(var i=0; i<arr2.length; i++){
		while(arr2[i] >= arr1[idx]){
			idx++;
		}
		for(var j=arr1.length; j>idx; j--){
			arr1[j] = arr1[j-1];
		}
		arr1[idx] = arr2[i];
		idx++;
	}
	return arr1;
}
function mergeSortArray(arr){
	if(arr.length <= 1){
		return arr;
	}
	var temparr = arr.splice(Math.ceil(arr.length/2), Math.trunc(arr.length/2));
	return combineArrays(mergeSortArray(arr), mergeSortArray(temparr));
}
function insertionSortList(list){
	if(!list.head){
		return;
	}
	var runner = list.head.next;
	list.head.next = null;
	while(runner1){
		var temp = runner1;
		runner1 = runner1.next;
		if(temp.val < list.head.val){
			temp.next = list.head;
			list.head = temp;
		}else{
			var runner2 = list.head;
			while(runner2.next && temp.val >= runner2.next.val){
				runner2 = runner2.next;
			}
			temp.next = runner2.next;
			runner2.next = temp;
		}
	}
}
function combineLists(list1, list2){
	var runner2 = list2.head;
	if(list1.head.val > list2.head.val){
		var temp = runner2;
		runner2 = runner2.next;
		temp.next = list1.head;
		list1.head = temp;
	}
	var runner1 = list1.head;
	while(runner2){
		var temp = runner2;
		runner2 = runner2.next;
		while(runner1.next && runner1.next.val < temp.val){
			runner1 = runner1.next;
		}
		temp.next = runner1.next;
		runner1.next = temp;
	}
	return list1;
}
function mergeSortList(list){
	if(!list.head.next){
		return list;
	}
	var runner1 = list.head;
	var runner2 = list.head;
	while(runner2 && runner2.next){
		runner1 = runner1.next;
		runner2 = runner2.next.next;
	}
	var templist = new SList();
	templist.head = runner1.next;
	runner1.next = null;
	return combineLists(mergeSortList(list), mergeSortList(templist));
}