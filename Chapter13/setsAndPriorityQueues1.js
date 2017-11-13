function interleave(arr1, arr2){
	var i=0;
	var j=0;
	var arr=[];
	while(i<arr1.length&&j<arr2.length){
		arr.push(arr1[i], arr2[j]);
	}
	while(i<arr1.length){
		arr.push(arr1[i]);
	}
	while(j<arr2.length){
		arr.push(arr2[j]);
	}
	return arr;
}
function mergeSorted(arr1, arr2){
	var i=0;
	var j=0;
	var arr=[];
	while(i<arr1.length){
		if(arr1[i]>arr2[j]){
			arr.push(arr2[j]);
			j++;
		}else{
			arr.push(arr1[i]);
			i++;
		}
	}
	while(j<arr2.length){
		arr.push(arr2[j]);
	}
	return arr;
}
function minimalThreeArrayRange(arr1, arr2, arr3){
	var i=0;
	var j=0;
	var k=0;
	var min=Math.min(arr1[i], arr2[j], arr3[k]);
	var max=Math.max(arr1[i], arr2[j], arr3[k]);
	var range={"min":min, "max":max};
	while(i<arr1.length&&j<arr2.length&&k<arr3.length){
		min=Math.min(arr1[i], arr2[j], arr3[k]);
		max=Math.max(arr1[i], arr2[j], arr3[k]);
		if(range["max"]-range["min"]>max-min){
			range["min"]=min;
			range["max"]=max;
		}
		if(arr1[i]==min){
			i++;
		}else if(arr2[j]==min){
			j++;
		}else if(arr3[k]==min){
			k++;
		}
	}
	return range;
}
function intersectSorted(arr1, arr2){
	var i=0;
	var j=0;
	var arr=[];
	while(i<arr1.length&&j<arr2.length){
		if(arr1[i]<arr2[j]){
			i++;
		}else if(arr1[i]>arr2[j]){
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
	var i=0;
	var j=0;
	var arr=[];
	while(i<arr1.length&&j<arr2.length){
		if(arr1[i]<arr2[j]){
			i++;
		}else if(arr1[i]>arr2[j]){
			j++;
		}else{
			if(arr1[i]!=arr[arr.length-1]){
				arr.push(arr1[i]);
			}
			i++;
			j++;
		}
	}
	return arr;
}
function unionSorted(arr1, arr2){
	var i=0;
	var j=0;
	var arr=[];
	while(i<arr1.length){
		if(arr1[i]<arr2[j]){
			arr.push(arr1[i]);
			i++;
		}else if(arr1[i]>arr2[j]){
			arr.push(arr2[j]);
			j++;
		}else{
			arr.push(arr1[i]);
			i++;
			j++;
		}
	}
	while(j<arr2.length){
		arr.push(arr2[j]);
		j++;
	}
	return arr;
}
function unionSortedDedupe(arr1, arr2){
	var i=0;
	var j=0;
	var arr=[];
	while(i<arr1.length){
		if(arr1[i]==arr[arr.length-1]){
			i++;
		}else if(arr2[j]==arr[arr.length-1]){
			j++;
		}else if(arr1[i]<arr2[j]){
			arr.push(arr1[i]);
			i++;
		}else if(arr1[i]>arr2[j]){
			arr.push(arr2[j]);
			j++;
		}else{
			arr.push(arr1[i]);
			i++;
			j++;
		}
	}
	while(j<arr2.length){
		if(arr2[j]!=arr[arr.length-1]){
			arr.push(arr2[j]);
		}
		j++;
	}
	return arr;
}
function intersectUnsortedInPlace(arr1, arr2){
	for(var i=arr1.length-1; i>=0; i--){
		var match=false;
		for(var j=arr2.length-1; j>=0; j--){
			if(arr1[i]==arr2[j]){
				match=true;
				arr2.splice(j, 1);
				break;
			}
		}
		if(!match){
			arr1.splice(i, 1);
		}
	}
	return arr1;
}
function intersectUnsorted(arr1, arr2){
	var map={};
	var arr=[];
	for(var i=0; i<arr1.length; i++){
		if(map[arr1[i]]){
			map[arr1[i]]++;
		}else{
			map[arr1[i]]=1;
		}
	}
	for(var j=0; j<arr2.length; j++){
		if(map[arr2[j]]){
			map[arr2[j]]--;
			arr.push(arr2[j]);
		}
	}
	return arr;
}
function unionUnsorted(arr1, arr2){
	var map={};
	var arr=[];
	for(var i=0; i<arr1.length; i++){
		if(map[arr1[i]]){
			map[arr1[i]]++;
		}else{
			map[arr1[i]]=1;
		}
		arr.push(arr1[i]);
	}
	for(var j=0; j<arr2.length; j++){
		if(map[arr2[j]]){
			map[arr2[j]]--;
		}else{
			arr.push(arr2[j]);
		}
	}
	return arr;
}
function unionUnsortedInPlace(arr1, arr2){
	for(var i=0; i<arr1.length; i++){
		for(var j=arr2.length-1; j>=0; j--){
			if(arr1[i]==arr2[j]){
				arr2.splice(j, 1);
				break;
			}
		}
	}
	arr1.push.apply(arr1, arr2);
	return arr1;
}
function unionUnsortedDedupe(arr1, arr2){
	var map={};
	var arr=[];
	for(var i=0; i<arr1.length; i++){
		if(!map[arr1[i]]){
			map[arr1[i]]=1;
			arr.push(arr1[i]);
		}
	}
	for(var j=0; j<arr2.length; j++){
		if(!map[arr2[j]]){
			map[arr2[j]]=1;
			arr.push(arr2[j]);
		}
	}
	return arr;
}
function subsetSorted(arr1, arr2){
	var i=0;
	var j=0;
	while(i<arr1.length&&j<arr2.length){
		if(arr1[i]<arr2[i]){
			i++;
		}else if(arr1[i]>arr2[i]){
			return false;
		}else{
			i++;
			j++;
		}
	}
	if(j==arr2.length){
		return true;
	}else{
		return false;
	}
}
function subsetUnsorted(arr1, arr2){
	var map={};
	for(var i=0; i<arr1.length; i++){
		if(map[arr1[i]]){
			map[arr1[i]]++;
		}else{
			map[arr1[i]]=1;
		}
	}
	for(var j=0; j<arr2.length; j++){
		if(map[arr2[j]]){
			map[arr2[j]]--;
		}else{
			return false;
		}
	}
	return true;
}
function subsetUnsortedInPlace(arr1, arr2){
	for(var j=0; j<arr2.length; j++){
		var match=false;
		for(var i=arr1.length-1; i>=0; i--){
			if(arr1[i]==arr2[j]){
				match=true;
				arr1.splice(i, 1);
				break;
			}
		}
		if(!match){
			return false;
		}
	}
	return true;
}
// square root using brute force, no Math methods or operators besides *
// still requires implied + or -
// if / allowed, there are better implementations
function myVeryOwnSquareRoot1(num){
	var guess=0;
	while(guess*guess<num){
		guess++;
	}
	return guess;
}
function myVeryOwnSquareRoot2(num, guess=0.01){
	var guess=0;
	while(guess*guess<num){
		guess+=0.01;
	}
	return guess;
}