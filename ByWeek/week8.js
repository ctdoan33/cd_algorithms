function rSigma(num){
    num = num-num%1;
    if(num == 1){
        return 1;
    }
    if(num > 1){
        return rSigma(num-1)+num;
    }else{
        return rSigma(num+1)+num;
    }
}
function rFact(num){
    num = num-num%1;
    if(num <= 0){
        return 1;
    }
    return rFact(num-1)*num;
}
function floodFill(canvas2D, startXY, newColor){
	var oldColor = canvas2D[startXY[1]][startXY[0]];
	canvas2D[startXY[1]][startXY[0]] = newColor;
	if(canvas2D[startXY[1]-1][startXY[0]] === oldColor){
		floodFill(canvas2D, [startXY[0], startXY[1]-1], newColor);
	}
	if(canvas2D[startXY[1]][startXY[0]+1] === oldColor){
		floodFill(canvas2D, [startXY[0]+1, startXY[1]], newColor);
	}
	if(canvas2D[startXY[1]+1][startXY[0]] === oldColor){
		floodFill(canvas2D, [startXY[0], startXY[1]+1], newColor);
	}
	if(canvas2D[startXY[1]][startXY[0]-1] === oldColor){
		floodFill(canvas2D, [startXY[0]-1, startXY[1]], newColor);
	}
}
function rFib(num){
	num = num-num%1;
	if(num <= 0){
		return 1;
	}else if(num === 1){
		return 1;
	}
	return rFib(num-2)+rFib(num-1);
}
function rBinarySearch(arr, val){
	if(!arr.length){
		return false;
	}
	var search = Math.trunc(arr.length/2);
	if(arr[search] === val){
		return true;
	}else if(arr[search] > val){
		return rBinarySearch(arr.slice(0,search), val);
	}else{
		return rBinarySearch(arr.slice(search+1, arr.length), val);
	}
}
function rGCF1(a, b){
	if(a == b){
		return a;
	}else if(a > b){
		return gcf(a-b, b);
	}else if(b > a){
		return gcf(a, b-a);
	}
}
function rGCF2(a, b){
	if(a == b){
		return a;
	}else if(a > b){
		return rGCF2(a%b, b);
	}else if(b > a){
		return rGCF2(a, b%a);
	}
}
function strSubsets(str, substr="", idx=0, arr=[]){
	if(idx == str.length){
		arr.push(substr);
		return arr;
	}
	strSubsets(str, substr, idx+1, arr);
	strSubsets(str, substr+str[idx], idx+1, arr);
	return arr;
}
SList.prototype.rListLength = function(node = this.head){
	if(!node){
		return 0;
	}
	return rListLength(node.next)+1;
}
function gotAnyGrapes(arr){
	if(arr.length == 0){
		return 0;
	}else if(arr.length == 1){
		return arr[0];
	}
	var sum1 = arr[0]+gotAnyGrapes(arr.slice(2));
	var sum2 = gotAnyGrapes(arr.slice(1));
	if(sum1 >= sum2){
		return sum1;
	}else{
		return sum2;
	}
}
function binStrExpand(str, substr="", idx=0, arr=[]){
	if(str.length == idx){
		arr.push(substr);
		return arr;
	}
	if(str[idx] == "?"){
		binStrExpand(str, substr+"0", idx+1, arr);
		binStrExpand(str, substr+"1", idx+1, arr);
	}else{
		binStrExpand(str, substr+str[idx], idx+1, arr);
	}
	return arr;
}
function towersOfHanoi(sPole, tPole, dPole, disks){
	if(disks == 1){
		dPole.push(sPole.pop());
	}else if(disks > 1){
		towersOfHanoi(sPole, dPole, tPole, disks-1);
		dPole.push(sPole.pop());
		towersOfHanoi(tPole, sPole, dPole);
	}
}