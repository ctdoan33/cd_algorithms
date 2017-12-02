function medianOfSortedArrays(){
	var pointers=[];
	var n=0;
	for(var i=0; i<arguments.length; i++){
		pointers.push(0);
		n+=arguments[i].length;
	}
	for(i=0; i<n/2-1; i++){
		var minIndex=0;
		for(var j=1; j<arguments.length; j++){
			if(arguments[j][pointers[j]]<arguments[minIndex][pointers[minIndex]]){
				minIndex=j;
			}
		}
		pointers[minIndex]++;
	}
	var minIndex=0;
	for(j=1; j<arguments.length; j++){
		if(arguments[j][pointers[j]]<arguments[minIndex][pointers[minIndex]]){
			minIndex=j;
		}
	}
	var median=arguments[minIndex][pointers[minIndex]];
	if(n%2){
		return median;
	}else{
		pointers[minIndex]+=1;
		var minIndex=0;
		for(j=0; j<arguments.length; j++){
			if(arguments[j][pointers[j]]<arguments[minIndex][pointers[minIndex]]){
				minIndex=j;
			}
		}
		return (median+arguments[minIndex][pointers[minIndex]])/2;
	}
}
function timeToEnglish(minutes){
	var hour=(minutes-minutes%60)/60;
	minutes=minutes%60;
	var time="";
	if(minutes>0){
		if(minutes<=30){
			if(minutes==15){
				time+="quarter";
			}else if(minutes==30){
				time+="half";
			}else{
				time+=minutes;
			}
			time+=" past";
		}else{
			hour++;
			if(minutes==45){
				time+="quarter";
			}else{
				time+=60-minutes;
			}
			time+=" til";
		}
		time+=" ";
	}
	if(hour%12){
		time+=hour%12;
		if((hour-hour%12)/12%2){
			return time+=" pm";
		}else{
			return time+=" am";
		}
	}else{
		if(hour/12%2){
			return time+"noon";
		}else{
			return time+"midnight";
		}
	}
}
function missingValue1(arr){
	var value=-1;
	var missing=true;
	while(missing){
		value++;
		missing=false;
		for(i=0; i<arr.length;i++){
			if(arr[i]===value){
				missing=true;
				break;
			}
		}
	}
	return value;
}
function missingValue2(arr){
	var value=arr[0];
	for(var i=0; i<arr.length; i++){
		if(arr[i]<value){
			value=arr[i];
		}
	}
	var missing=true;
	while(missing){
		value++;
		missing=false;
		for(i=0; i<arr.length;i++){
			if(arr[i]===value){
				missing=true;
				break;
			}
		}
	}
	return value;
}
function rainTerraces(arr){
	var max=0;
	for(var i=0; i<arr.length; i++){
		if(arr[i]>arr[max]){
			max=i;
		}
	}
	var water=0;
	var left=0;
	var right=max;
	while(right){
		for(i=left+1; i<right; i++){
			if(arr[i]>arr[left]){
				left=i;
			}
		}
		for(i=left+1;i<right; i++){
			water+=arr[left]-arr[i];
		}
		right=left;
		left=0;
	}
	left=max;
	right=arr.length-1;
	while(left!=arr.length-1){
		for(i=left+1; i<right; i++){
			if(arr[i]>arr[right]){
				right=i;
			}
		}
		for(i=left+1;i<right; i++){
			water+=arr[right]-arr[i];
		}
		left=right;
		right=arr.length-1;
	}
	return water;
}
function lastDigitAtoB(a, b){
	digit=a%10;
	a=a%10;
	b--;
	while(b){
		a*=digit;
		a=a%10;
		b--;
	}
	return a;
}
function matrixSearch(matrix, arr){
	for(var i=0; i<matrix.length; i++){
		for(var j=0; j<matrix[i].length; j++){
			var match=true;
			for(var k=0; k<arr.length; k++){
				if(!match){
					break;
				}
				for(var l=0; l<arr[k].length; l++){
					if(matrix[i+k][j+l]!==arr[k][l]){
						match=false;
						break;
					}
				}
			}
			if(match){
				return [i, j];
			}
		}
	}
	return [-1, -1];
}
function maxOfSubarraySums(arr){
	var max=0;
	var submax=0;
	for(var i=0; i<arr.length; i++){
		submax+=arr[i];
		if(submax<0){
			submax=0;
		}else if(submax>max){
			max=submax;
		}
	}
	return max;
}