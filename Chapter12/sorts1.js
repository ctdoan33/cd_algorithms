function bubbleSortArray(arr){
	for(var i=0; i<arr.length-1; i++){
		for(var j=0; j<arr.length-1-i; j++){
			if(arr[j]>arr[j+1]){
				var temp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;
			}
		}
	}
}
function bubbleSortList(list){
	var runner=list.head;
	var count=-1;
	while(runner){
		count++;
		runner=runner.next;
	}
	while(count){
		if(list.head.val>list.head.next.val){
			var temp=list.head.next;
			list.head.next=temp.next;
			temp.next=list.head;
			list.head=temp;
		}
		runner=list.head;
		for(var i=1; i<count; i++){
			if(runner.next.val>runner.next.next.val){
				var temp=runner.next.next;
				runner.next.next=temp.next;
				temp.next=runner.next;
				runner.next=temp;
			}
			runner=runner.next;
		}
		count--;
	}
}
function selectionSortArray(arr){
	for(var i=0; i<arr.length-1; i++){
		var min=i;
		for(var j=i+1; j<arr.length; j++){
			if(arr[j]<arr[min]){
				min=j;
			}
		}
		var temp=arr[min];
		arr[min]=arr[i];
		arr[i]=temp;
	}
}
function selectionSortList(list){
	if(!list.head){
		return;
	}
	var runner1=list.head;
	var min=runner1;
	var prev=runner1;
	while(runner1.next){
		if(runner1.next.val<min.val){
			min=runner1.next;
			prev=runner1;
		}
		runner1=runner1.next;
	}
	if(min!=prev){
		prev.next=min.next;
		min.next=list.head;
		list.head=min;
	}
	runner1=list.head;
	while(runner1.next){
		runner2=runner1.next;
		min=runner2;
		prev=runner2;
		while(runner2.next){
			if(runner2.next.val<min.val){
				min=runner2.next;
				prev=runner2;
			}
			runner2=runner2.next;
		}
		if(min!=prev){
			prev.next=min.next;
			min.next=runner1.next;
			runner1.next=min;
		}
		runner1=runner1.next;
	}
}
function multikeySort(arr){
	for(var i=0; i<arr.length-1; i++){
		var min=i;
		for(var j=i+1; j<arr.length; j++){
			if(arr[j].lastName<arr[min].lastName||(arr[j].lastName==arr[min].lastName&&arr[j].firstName<arr[min].firstName)){
				min=j;
			}
		}
		var temp=arr[min];
		arr[min]=arr[i];
		arr[i]=temp;
	}
}
function insertionSortArray(arr){
	for(var i=1; i<arr.length; i++){
		var temp=arr[i];
		var j=i;
		while(temp<arr[j-1]){
			arr[j]=arr[j-1];
			j--;
		}
		arr[j]=temp;
	}
}
function insertionSortList(list){
	if(!list.head){
		return;
	}
	var runner1=list.head.next;
	list.head.next=null;
	while(runner1){
		var temp=runner1;
		runner1=runner1.next;
		if(temp.val<list.head.val){
			temp.next=list.head;
			list.head=temp;
		}else{
			var runner2=list.head;
			while(runner2.next&&temp.val>=runner2.next.val){
				runner2=runner2.next;
			}
			temp.next=runner2.next;
			runner2.next=temp;
		}
	}
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
}
function combineLists(list1, list2){
	if(!list1.head||!list2.head){
		return;
	}
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
}