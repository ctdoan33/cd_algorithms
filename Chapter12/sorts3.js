// Smarter Sorting Solution:
// A quicksort would be best, as with IQs you know the best pivot point is 100 (or close to it)
// having the sorting running asynchronously could further speed up the sort
function quickSort3(arr, start=0, end=arr.length){
	if(end-start<=1){
		return;
	}
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
	quickSort3(arr, start, idx);
	quickSort3(arr, idx+greater, end);
}
// Master Invoice List Solution:
// since all invoices are sorted already, a modified mergesort would be best
// there is no need to split up the arrays, only combine them
// it's best to combine the smallest lists each time
// ignoring list sizes and given an array of invoices (also arrays):
function masterInvoiceList(arr){
	if(arr.length==1){
		return arr;
	}
	var master=[];
	for(var i=0; i<arr.length; i+=2){
		if(arr[i+1]){
			combineArrays(arr[i], arr[i+1]);
			master.push(arr[i]);
		}else{
			master.push(arr[i]);
		}
	}
	return masterInvoiceList(master);
}
// Urban Dictionary Daily Add Solution:
// adding into an already sorted list is best done with an insertion sort
function pancakeSort(arr, end=arr.length-1, flips=0){
	if(end==0){
		return [arr, flips];
	}
	var max=end;
	for(var i=end-1; i>=0; i--){
		if(arr[i]>arr[max]){
			max=i;
		}
	}
	if(max!=end){
		var newarr=[];
		if(max!=0){
			flips++;
			for(i=max; i>=0; i--){
				newarr.push(arr[i]);
			}
			for(i=max+1; i<arr.length; i++){
				newarr.push(arr[i]);
			}
		}
		flips++;
		for(i=end; i>=0; i--){
			newarr.push(arr[i]);
		}
		for(i=end+1; i<arr.length; i++){
			newarr.push(arr[i]);
		}
		arr=newarr;
	}
	return pancakeSort(arr, end-1, flips);
}
function countingSort(arr, power=0){
	var count=[0,0,0,0,0,0,0,0,0,0];
	for(var i=0; i<arr.length; i++){
		count[Math.floor(arr[i]%Math.pow(10,power+1)/Math.pow(10,power))]++;
	}
	for(var j=0; j<9; j++){
		count[j+1]+=count[j];
	}
	var newarr=[];
	for(i=arr.length; i>=0; i--){
		var digit=Math.floor(arr[i]%Math.pow(10,power+1)/Math.pow(10,power));
		count[digit]--;
		newarr[count[digit]]=arr[i];
	}
	return newarr;
}
function radixSort(arr, digits){
	var power=0;
	while(power<digits){
		arr=countingSort(arr, power);
		power++;
	}
	return arr;
}
function beltSort(arr){
	var rank={"none":0,"yellow":1,"red":2,"black":3,"double-black":4,"triple-black":5,"triple-black plus blue":6};
	for(var i=1; i<arr.length; i++){
		var temp=arr[i];
		var j=i;
		while(rank[temp.belt]<rank[arr[j-1].belt]){
			arr[j]=arr[j-1];
			j--;
		}
		arr[j]=temp;
	}
}
function wiggleSort(arr){
	if(arr.length<=2){
		return;
	}
	for(var i=1; i<arr.length; i++){
		var temp=arr[i];
		var j=i;
		while(temp<arr[j-1]){
			arr[j]=arr[j-1];
			j--;
		}
		arr[j]=temp;
	}
	if(arr.length%2 && arr[0]==arr[Math.trunc(arr.length/2)]){
		for(var i=1, j=Math.ceil(arr.length/2); i<arr.length; i+=2, j++){
			var temp=arr[j];
			for(var k=j; k>i; k--){
				arr[k]=arr[k-1];
			}
			arr[i]=temp;
		}
	}else{
		for(var i=0, j=Math.trunc(arr.length/2); i<arr.length; i+=2, j++){
			var temp=arr[j];
			for(var k=j; k>i; k--){
				arr[k]=arr[k-1];
			}
			arr[i]=temp;
		}
	}
}
function partitionAtIndex(arr, start, end, idx){
	var pivot=arr[idx];
	arr[idx]=arr[end];
	arr[end]=pivot;
	var left=start;
	var right=end-1;
	while(left<right){
		while(arr[left]<pivot){
			left++;
		}
		while(arr[right]>=pivot){
			right--;
		}
		if(left<right){
			var temp = arr[left];
			arr[left] = arr[right];
			arr[right] = temp;
		}
	}
	arr[end] = arr[left];
	arr[left] = pivot;
	return left;
}
function medianOfFiveOrLess(arr, start, end){
	for(var i=start+1; i<=end; i++){
		var temp=arr[i];
		var j=i;
		while(j>start&&temp<arr[j-1]){
			arr[j]=arr[j-1];
			j--;
		}
		arr[j]=temp;
	}
	return start+Math.trunc((end-start)/2);
}
function medianOfMedians(arr, left, right){
	if(right-left<5){
		return medianOfFiveOrLess(arr, left, right);
	}
	for(var i=left, j=left; i<=right; i+=5, j++){
		var k = i+4;
		if(k>right){
			k=right;
		}
		var median=medianOfFiveOrLess(arr, i, k);
		var temp=arr[median];
		arr[median]=arr[j];
		arr[j]=temp;
	}
	return medianToMiddle(arr, left, j-1);
}
function medianToMiddle(arr, left=0, right=arr.length-1){
	if(left==right){
		return left;
	}
	var pivot=partitionAtIndex(arr, left, right, medianOfMedians(arr, left, right));
	if(Math.trunc(arr.length/2)==pivot){
		return pivot;
	}else if(Math.trunc(arr.length/2)<pivot){
		return medianToMiddle(arr, left, pivot-1);
	}else{
		return medianToMiddle(arr, pivot+1, right);
	}
}
function medianOfUnsortedArray(arr){
	return arr[medianToMiddle(arr)];
}