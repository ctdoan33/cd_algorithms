function combineLists(list1, list2){
	if(list1.head.val>list2.head.val){
		var temp=list2.head;
		list2.head=list2.head.next;
		temp.next=list1.head;
		list1.head=temp;
	}
	var runner1=list1.head;
	var runner2=list2.head;
	while(runner2){
		var temp=runner2;
		runner2=runner2.next;
		while(runner1.next&&runner1.next.val<temp.val){
			runner1=runner1.next;
		}
		temp.next=runner1.next;
		runner1.next=temp;
	}
	return list1;
}
function mergeSortList(list){
	if(!list.head||!list.head.next){
		return list;
	}
	var runner1=list.head;
	var runner2=list.head;
	while(runner2&&runner2.next){
		runner1=runner1.next;
		runner2=runner2.next.next;
	}
	var templist=new SList();
	templist.head=runner1.next;
	runner1.next=null;
	return combineLists(mergeSortList(list), mergeSortList(templist));
}
function partition1(arr){
	var idx=0;
	for(var i=1; i<arr.length; i++){
		if(arr[i]<arr[idx]){
			var temp=arr[i];
			for(var j=i; j>idx; j--){
				arr[j]=arr[j-1];
			}
			arr[idx]=temp;
			idx++;
		}
	}
	return idx;
}
function partitionArray(arr, start=0, end=arr.length){
	var mid=Math.trunc((start+end)/2);
	if((arr[start]<=arr[mid]&&arr[mid]<=arr[end])||(arr[start]>=arr[mid]&&arr[mid]>=arr[end])){
		var idx=mid;
	}else if((arr[mid]<=arr[start]&&arr[start]<=arr[end])||(arr[mid]>=arr[start]&&arr[start]>=arr[end])){
		var idx=start;
	}else{
		var idx=end;
	}
	for(var i=idx-1; i>=start; i--){
		if(arr[i]>arr[idx]){
			var temp=arr[i];
			for(var j=i; j<idx; j++){
				arr[j]=arr[j+1];
			}
			arr[idx]=temp;
			idx--;
		}
	}
	for(var i=idx+1; i<end; i++){
		if(arr[i]<arr[idx]){
			var temp=arr[i];
			for(var j=i; j>idx; j--){
				arr[j]=arr[j-1];
			}
			arr[idx]=temp;
			idx++;
		}
	}
	return idx;
}
function partition2(list){
	if(!list.head){
		return;
	}
	var pivot=list.head;
	list.head=null;
	var tail=null;
	var runner=pivot;
	while(runner.next){
		if(runner.next.val<pivot.val){
			var temp=runner.next;
			runner.next=temp.next;
			if(list.head){
				tail.next=temp;
				tail=temp;
			}else{
				list.head=temp;
				tail=temp;
			}
		}else{
			runner=runner.next;
		}
	}
	if(list.head){
		tail.next=pivot;
	}else{
		list.head=pivot;
	}
}
function quickSortArray(arr, start=0, end=arr.length){
	if(end-start<=1){
		return;
	}
	var idx = partitionArray(arr, start, end);
	quickSortArray(arr, start, idx);
	quickSortArray(arr, idx+1, end);
}
function combineArrays(arr1, arr2){
	var idx=0;
	for(var i=0; i<arr2.length; i++){
		while(arr2[i]>=arr1[idx]){
			idx++;
		}
		for(var j=arr1.length; j>idx; j--){
			arr1[j]=arr1[j-1];
		}
		arr1[idx]=arr2[i];
		idx++;
	}
	return arr1;
}
function mergeSortArray(arr){
	if(arr.length<=1){
		return arr;
	}
	var temparr=arr.splice(Math.ceil(arr.length/2), Math.trunc(arr.length/2));
	return combineArrays(mergeSortArray(arr), mergeSortArray(temparr));
}
function partition3(arr){
	var idx=0;
	var greater=1;
	for(var i=1; i<arr.length; i++){
		if(arr[i]<arr[idx]){
			var temp=arr[i];
			for(var j=i; j>idx; j--){
				arr[j]=arr[j-1];
			}
			arr[idx]=temp;
			idx++;
		}else if(arr[i]===arr[idx]){
			var temp=arr[i];
			for(var j=i; j>idx+1; j--){
				arr[j]=arr[j-1];
			}
			arr[idx+1]=temp;
			greater++;
		}
	}
	return [idx, idx+greater];
}
function partitionArrayPivots(arr, start=0, end=arr.length){
	var mid=Math.trunc((start+end)/2);
	if((arr[start]<=arr[mid]&&arr[mid]<=arr[end])||(arr[start]>=arr[mid]&&arr[mid]>=arr[end])){
		var idx=mid;
	}else if((arr[mid]<=arr[start]&&arr[start]<=arr[end])||(arr[mid]>=arr[start]&&arr[start]>=arr[end])){
		var idx=start;
	}else{
		var idx=end;
	}
	for(var i=idx-1; i>=0; i--){
		if(arr[i]>=arr[idx]){
			var temp=arr[i];
			for(var j=i; j<idx; j++){
				arr[j]=arr[j+1];
			}
			arr[idx]=temp;
			idx--;
		}
	}
	var greater=1;
	for(var i=idx+1; i<arr.length; i++){
		if(arr[i]<arr[idx]){
			var temp=arr[i];
			for(var j=i; j>idx; j--){
				arr[j]=arr[j-1];
			}
			arr[idx]=temp;
			idx++;
		}else if(arr[i]===arr[idx]){
			var temp=arr[i];
			for(var j=i; j>idx+1; j--){
				arr[j]=arr[j-1];
			}
			arr[idx+1]=temp;
			greater++;
		}
	}
	return [idx, idx+greater];
}