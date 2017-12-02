function minToFront(arr){
	var minidx=0;
	for(var i=1; i<arr.length; i++){
		if(arr[i]<arr[minidx]){
			minidx=i;
		}
	}
	min=arr[minidx];
	for (var j=minidx; j>0; j--){
		arr[j]=arr[j-1];
	}
	arr[0]=min;
	return arr;
}
function reverseArr(arr){
	for(var i=0, j=arr.length-1; i<j; i++, j--){
		var temp=arr[i];
		arr[i]=arr[j];
		arr[j]=temp;
	}
	return arr;
}
// basic rotate
function rotateArr(arr, shiftBy){
	for(var i=0; i<shiftBy; i++){
		var temp=arr[arr.length-1];
		for(var j=arr.length-1; j>0; j--){
			arr[j]=arr[j-1];
		}
		arr[0]=temp;
	}
	return arr;
}
// rotate, but accept negative values to shift to the left
function rotateArrPAndN(arr, shiftBy){
	if(shiftBy>0){
		for(var i=0; i<shiftBy; i++){
			var temp=arr[arr.length-1];
			for(var j=arr.length-1; j>0; j--){
				arr[j]=arr[j-1];
			}
			arr[0]=temp;
		}
	}else{
		for(var i=shiftBy; i<0; i++){
			var temp=arr[0];
			for(var j=0; j<arr.length-1; j++){
				arr[j]=arr[j+1];
			}
			arr[arr.length-1]=temp;
		}
	}
	return arr;
}
function filterRange(arr, min, max){
	for(var i=arr.length-1; i>=0; i--){
		if(arr[i]<=min||arr[i]>=max){
			for(var j=i; j<arr.length-1; i++){
				arr[j]=arr[j+1];
			}
			arr.pop();
		}
	}
	return arr;
}
function arrConcat(arr1, arr2){
	var newarr=[];
	for(var i=0; i<arr1.length; i++){
		newarr.push(arr1[i]);
	}
	for(var j=0; j<arr2.length; j++){
		newarr.push(arr2[j]);
	}
}
function skylineHeights(arr){
	var newarr=[];
	var min=0;
	for(var i=0; i<arr.length; i++){
		if(arr[i]>min){
			newarr.push(arr[i]);
			min=arr[i];
		}
	}
	return newarr;
}