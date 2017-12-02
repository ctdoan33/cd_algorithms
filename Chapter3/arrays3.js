function removeNegatives(arr){
	for(var i=arr.length-1; i>=0; i++){
		if(arr[i]<0){
			for(var j=i; j<arr.length-1; j++){
				arr[j]=arr[j+1];
			}
			arr.pop();
		}
	}
	return arr;
}
function removeNegativesNoNestedLoops(arr){
	for(var i=0, j=0; j<arr.length; j++){
		if(arr[j]>=0){
			arr[i]=arr[j];
			i++;
		}
	}
	arr.length=i;
	return arr;
}
function secondToLast(arr){
	if(arr.length<2){
		return null;
	}
	return arr[arr.length-2];
}
function secondLargest(arr){
	if(arr.length<2){
		return null;
	}
	var maxindex = 0;
	if(arr[0]>arr[1]){
		var max2=arr[1];
	}else{
		var max2=arr[0];
	}
	for(var i=1; i<arr.length; i++){
		if(arr[i]>arr[maxindex]){
			maxindex=i;
		}
	}
	for(var j=0; j<arr.length; j++){
		if(j!=maxindex&&arr[j]>max2){
			max2=arr[j];
		}
	}
	return max2;
}
function nthToLast(arr, n){
	if(arr.length<n){
		return null;
	}
	return arr[arr.length-n];
}
function nthLargest(arr, n){
	if(arr.length<n){
		return null;
	}
	for(var i=0; i<arr.length; i++){
		var greater=0;
		var dup=0;
		for(var j=0; j<arr.length; j++){
			if(arr[i]<arr[j]){
				greater++;
			}else if(arr[i]==arr[j]){
				dup++;
			}
		}
		if(greater<n&&greater+dup>=n){
			return arr[i];
		}
	}
}
function isCreditCardValid(digitArr){
	var temp=digitArr.pop();
	for(var i=digitArr.length-1; i>=0; i-=2){
		digitArr[i]*=2;
	}
	var sum=0;
	for(var i=0; i<digitArr.length; i++){
		sum+=digitArr[i];
	}
	sum+=temp;
	if(sum%10==0){
		return true;
	}else{
		return false;
	}
}