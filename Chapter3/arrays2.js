function minToFront(arr){
    var minindex=0;
    for(var i=1; i<arr.length; i++){
        if(arr[i]<arr[minindex]){
            minindex=i;
        }
    }
    min=arr[minindex];
    for (var j=minindex; j>0; j--){
        arr[j]=arr[j-1];
    }
    arr[0]=min;
    return arr;
}
function reverseArr(arr){
    var temp;
    for(var i=0; i<arr.length/2; i++){
        temp=arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr;
}
//basic rotate
function rotateArr(arr, shiftBy){
    var wrap;
    for(var i=0; i<shiftBy; i++){
        for(var j=arr.length-1; j>0; j--){
            arr[j]=arr[j-1];
        }
    }
    return arr;
}
//rotate, but accept negative values to shift to the left
function rotateArrPAndN(arr, shiftBy){
    var wrap;
    if(shiftBy>0){
        for(var i=0; i<shiftBy; i++){
            wrap=arr[arr.length-1];
            for(var j=arr.length-1; j>0; j--){
                arr[j]=arr[j-1];
            }
            arr[0]=wrap;
        }
    }else{
        for(var i=shiftBy; i<0; i++){
            wrap=arr[0];
            for(var j=0; j<arr.length-1; j++){
                arr[j]=arr[j+1];
            }
            arr[arr.length-1]=wrap;
        }
    }
    return arr;
}
function filterRange(arr, min, max){
    for(var i=arr.length-1; i>=0; i++){
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
    var newarr=arr1;
    for(var i=0; i<arr2.length; i++){
        newarr.push(arr2[i]);
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