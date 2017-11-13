function pushFront(arr, val){
    for(var i=arr.length-1; i>0; i--){
        arr[i]=arr[i-1];
    }
    arr[0]=val;
    return arr;
}
function popFront(arr){
    var temp=arr[0];
    for(var i=1; i<arr.length; i++){
        arr[i-1]=arr[i];
    }
    arr.pop();
    return temp;
}
function insertAt(arr, index, val){
    for(var i=arr.length; i>index; i--){
        arr[i]=arr[i-1];
    }
    arr[index]=val;
    return arr;
}
function removeAt(arr, index){
    var temp=arr[index];
    for(var i=index; i<arr.length-1; i++){
        arr[i]=arr[i+1];
    }
    arr.pop();
    return temp;
}
function swapPairs(arr){
    var temp;
    for(var i=1; i<arr.length; i+=2){
        temp=arr[i];
        arr[i]=arr[i-1];
        arr[i-1]=temp;
    }
    return arr;
}
function removeDuplicates(arr){
    for(var i=arr.length-1; i>0; i--){
        while(arr[i]==arr[i-1]){
            for(var k=i; k<arr.length-1;k++){
                arr[i]=arr[i+1];
            }
            arr.pop();
        }
    }
}
function removeDuplicatesNoNestedLoops(arr){
    for(var i=arr.length-1; i>0; i--){
        if(arr[i]=arr[i-1]){
            arr.splice(i, 1);
        }
    }
    return arr;
}