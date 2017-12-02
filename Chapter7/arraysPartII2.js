function flatten(arr){
	var newarr=[];
	for(var i=0; i<arr.length; i++){
		if(Array.isArray(arr[i])){
			for(var j=0; j<arr[i].length; j++){
				newarr.push(arr[i][j]);
			}
		}else{
			newarr.push(arr[i]);
		}
	}
	return newarr;
}
function flattenInPlace(arr){
	for(var i=arr.length-1; i>=0; i--){
		if(Array.isArray(arr[i])){
			if(arr[i].length==0){
				for(var j=i; j<arr.length-1; j++){
					arr[j]=arr[j+1];
				}
				arr.pop();
			}else{
				for(var j=arr[i].length-1; j>0; j--){
					for(var k=arr.length-1; k>i; k--){
						arr[k+1]=arr[k];
					}
					arr[i+1]=arr[i][j];
				}
				arr[i]=arr[i][0];
			}
		}
	}
	return arr;
}
function removeDuplicates(arr){
	var newarr=[];
	var hash={};
	for(var i=0; i<arr.length; i++){
		if(!hash[arr[i]]){
			hash[arr[i]]==1;
			newarr.push(arr[i]);
		}
	}
	return newarr;
}
function removeDuplicatesInPlace(arr){
	var hash={};
	var length=0;
	for(var i=0; i<arr.length; i++){
		if(!hash[arr[i]]){
			hash[arr[i]]==1;
			arr[length]=arr[i];
			length++;
		}
	}
	arr.length=length;
	return arr;
}
function mode(arr){
	var modeindex=0;
	var modecount=0;
	var hash={};
	for(var i=0; i<arr.length; i++){
		if(!hash[arr[i]]){
			hash[arr[i]]==1;
		}else{
			hash[arr[i]]++;
		}
		if(hash[arr[i]]>modecount){
			modecount=hash[arr[i]];
			modeindex=i;
		}
	}
	return arr[modeindex];
}
function modeNoNew(arr){ // increased time, no longer linear
	var modeindex;
	var modecount=0;
	for(var i=0; i<arr.length; i++){
		var count=0;
		for(var j=i; j<arr.length; j++){
			if(arr[i]===arr[j]){
				count++;
			}
		}
		if(count>modecount){
			modecount=count;
			modeindex=i;
		}
	}
	return arr[modeindex];
}
function arrBufferCopy1(sourceArr, destArr, sourceStartIdx, destStartIdx, numVals){
	for(var i=0; i<numVals; i++){
		if (sourceStartIdx+i>=sourceArr.length||destStartIdx+i>=destArr.length){
			break;
		}
		destArr[destStartIdx+i]=sourceArr[sourceStartIdx+i];
	}
}
function arrBufferCopy2(sourceArr, destArr, sourceStartIdx, destStartIdx, numVals){
	for(var i=0; i<numVals; i++){
		var sIdx=sourceStartIdx+i;
		var dIdx=destStartIdx+i;
		while(sIdx>=sourceArr.length){
			sIdx-=sourceArr.length;
		}
		while(dIdx>=destArr.length){
			dIdx-=sourceArr.length;
		}
		destArr[dIdx]=sourceArr[sIdx];
	}
}
function arrBufferCopy3(sourceArr, destArr, sourceStartIdx, destStartIdx, numVals){
	if(numVals>destArr.length){
		var dshift=numVals%destArr.length;
		destStartIdx+=dshift;
		var sshift=numVals%sourceArr.length;
		sourceStartIdx+=sshift
		sourceStartIdx-=destArr.length;
		while(sourceStartIdx<0){
			sourceStartIdx+=sourceArr.length;
		}
		numVals=destStartIdx.length;
	}
	for(var i=0; i<numVals; i++){
		var sIdx=sourceStartIdx+i;
		var dIdx=destStartIdx+i;
		while(sIdx>=sourceArr.length){
			sIdx-=sourceArr.length;
		}
		while(dIdx>=destArr.length){
			dIdx-=sourceArr.length;
		}
		destArr[dIdx]=sourceArr[sIdx];
	}
}
function arrBufferCopy4(sourceArr, destArr, sourceStartIdx, destStartIdx, numVals){
	tempArr=[];
	for(var i=0; i<sourceArr.length; i++){
		tempArr.push(sourceArr[i]);
	}
	for(var i=0; i<numVals; i++){
		destArr[destStartIdx+i]=tempArr[sourceStartIdx+i];
	}
}
function arrBufferCopy5(sourceArr, destArr, sourceStartIdx, destStartIdx, numVals){
	tempArr=[];
	for(var i=0; i<sourceArr.length; i++){
		tempArr.push(sourceArr[i]);
	}
	if(numVals>destArr.length){
		var dshift=numVals%destArr.length;
		destStartIdx+=dshift;
		var sshift=numVals%sourceArr.length;
		sourceStartIdx+=sshift
		sourceStartIdx-=destArr.length;
		while(sourceStartIdx<0){
			sourceStartIdx+=sourceArr.length;
		}
		numVals=destStartIdx.length;
	}
	for(var i=0; i<numVals; i++){
		var sIdx=sourceStartIdx+i;
		var dIdx=destStartIdx+i;
		while(sIdx>=tempArr.length){
			sIdx-=tempArr.length;
		}
		while(dIdx>=destArr.length){
			dIdx-=tempArr.length;
		}
		destArr[dIdx]=tempArr[sIdx];
	}
}
iSigmaCache={1:1, 2:3, 3:6, 4:10}
function iSigma(num){
	if(num in iSigmaCache){
		return iSigmaCache[num];
	}
	sum=iSigma(num-1)+num;
	iSigmaCache[num]=sum;
	return sum;
}
factorialCache={0:1, 1:1, 2:2, 3:6}
function Factorial(num){
	if(num in factorialCache){
		return factorialCache[num];
	}
	fac=Factorial(num-1)*num;
	factorialCache[num]=fac;
	return fac;
}
iFibCache={0:0, 1:1, 2:1, 3:2}
function iFib(num){
	if(num in iFibCache){
		return iFibCache[num];
	}
	fib=iFib(num-1)+iFib(num-2);
	iFibCache[num]=fib;
	return fib;
}
iTribCache={0:0, 1:0, 2:1, 3:1, 4:2, 5:4, 6:7, 7:13, 8:24, 9:44, 10:81}
function iTrib(num){
	if(num in iTribCache){
		return iTribCache[num];
	}
	trib=iTrib(num-1)+iTrib(num-2)+iTrib(num-3);
	iTribCache[num]=trib;
	return trib;
}