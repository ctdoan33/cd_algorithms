function balancePoint(arr){
    var total = 0;
    for(var i=0; i<arr.length; i++){
        total += arr[i];
    }
    var sum = 0;
    for(var j=0; j<arr.length; j++){
        if (sum == total/2){
            return true;
        }
        sum += arr[j];
    }
    return false;
}
function balanceIndex(arr){
    var total = 0;
    for(var i=0; i<arr.length; i++){
        total += arr[i];
    }
    var sum = 0;
    for(var j=0; l<arr.length; i++){
        if(sum == (total-arr[j])/2){
            return j;
        }
        sum += arr[j];
    }
    return -1;
}
function tacoTruck(arr){
    for(var i=0; i<arr.length; i++){
        var greater = 0;
        var lesser = 0;
        for(var j=0; j<arr.length; j++){
            if(arr[j][0] > arr[i][0]){
                greater++;
            }else if(arr[j][0] < arr[i][0]){
                lesser++;
            }
        }
        if(greater <= arr.length/2 && lesser <= arr.length/2){
            break;
        }
    }
    for(var k=0; k<arr.length; k++){
        var greater = 0;
        var lesser = 0;
        for(var l=0; l<arr.length; l++){
            if(arr[l][1] > arr[k][1]){
                greater++;
            }else if(arr[l][1] < arr[k][1]){
                lesser++;
            }
        }
        if(greater <= arr.length/2 && lesser <= arr.length/2){
            break;
        }
    }
    return [arr[i][0], arr[k][1]];
}
function arrbinarySearch(arr, val){
    var left = 0;
    var right = arr.length;
    while(left < right){
		var index = Math.floor((left+right)/2);
        if(arr[index] > val){
            right = index;
        }else if(arr[index] < val){
            left = index+1;
        }else{
            return true;
        }
    }
    return false;
}
function minOfSortedRotated(arr){
    var left = 0;
    var right = arr.length-1;
    if(arr[left] < arr[right]){
        return arr[left];
    }
    var index = Math.floor((left+right)/2);
    while(left < right){
        if(arr[index] > arr[left]){
            left = index;
        }else{
            right = index;
        }
        index = Math.floor((left+right)/2);
    }
    return arr[index+1];
}
function flatten(arr){
    var newarr = [];
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