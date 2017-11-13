function pushFront(arr, val){
    for (var i=arr.length-1; i>0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = val;
    return arr;
}
function popFront(arr){
    var temp = arr[0];
    for (var i=1; i<arr.length; i++){
        arr[i-1] = arr[i];
    }
    arr.pop();
    return temp;
}
function insertAt(arr, index, val){
    for (var i=arr.length; i>index; i--){
        arr[i] = arr[i-1];
    }
    arr[index] = val;
    return arr;
}
function removeAt(arr, index){
    var temp = arr[index];
    for (var i=index; i<arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    return temp;
}
function swapPairs(arr){
    var temp;
    for (var i=1; i<arr.length; i+=2){
        temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
    }
    return arr;
}
function removeDuplicates(arr){
    for (var i=arr.length-1; i>0; i--){
        while (arr[i] == arr[i-1]){
            for (var k=i; k<arr.length-1;k++){
                arr[i] = arr[i+1];
            }
            arr.pop();
        }
    }
}
function removeDuplicatesNoNestedLoops(arr){
    var newarr = [];
    for (var i=0; i<arr.length; i++){
        if (arr[i] != arr[i-1]){
            newarr.push(arr[i]);
        }
    }
    arr = newarr;
    return arr;
}
function minToFront(arr){
    var minindex = 0;
    for (var i=1; i<arr.length; i++){
        if (arr[i]<arr[minindex]){
            minindex = i;
        }
    }
    min = arr[minindex];
    for (var j=minindex; j>0; j--){
        arr[j] = arr[j-1];
    }
    arr[0] = min;
    return arr;
}
function reverseArr(arr){
    var temp;
    for (var i=0; i<arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
//basic rotate
function rotateArr(arr, shiftBy){
    var wrap;
    for (var i=0; i<shiftBy; i++){
        for (var j=arr.length-1; j>0; j--){
            arr[j] = arr[j-1];
        }
    }
    return arr;
}
//rotate, but accept negative values to shift to the left
function rotateArrPAndN(arr, shiftBy){
    var wrap;
    if (shiftBy>0){
        for (var i=0; i<shiftBy; i++){
            wrap = arr[arr.length-1];
            for (var j=arr.length-1; j>0; j--){
                arr[j] = arr[j-1];
            }
            arr[0] = wrap;
        }
    } else{
        for (var i=shiftBy; i<0; i++){
            wrap = arr[0];
            for (var j=0; j<arr.length-1; j++){
                arr[j] = arr[j+1];
            }
            arr[arr.length-1] = wrap;
        }
    }
    return arr;
}
function secondLargest(arr){
    if (arr.length<2){
        return null;
    }
    var maxindex = 0;
    if (arr[0]>arr[1]){
        var max2 = arr[1];
    } else {
        var max2 = arr[0];
    }
    for (var i=1; i<arr.length; i++){
        if (arr[i]>arr[maxindex]){
            maxindex = i;
        }
    }
    for (var j=0; j<arr.length; j++){
        if (j == maxindex){
            continue;
        }
        if (arr[j]>max2){
            max2 = arr[j];
        }
    }
    return max2;
}
function nthLargest(arr, n){
    if (arr.length<n){ //check for array length
        return null;
    }
    var min = arr[0];
    var max = arr[0];
    for (var i=1; i<arr.length; i++){ //find max and min
        if (arr[i]>max){
            max = arr[i];
        }
        if (arr[i]<min){
            min = arr[i];
        }
    }
    for (var j=1; j<n;j++){ //amount of times needed to find max
        var dup = 0;
        for (var l=0; l<arr.length; l++){ //correction  for duplicate values
            if (arr[l] == max){
                dup++;
            }
        }
        j += dup-1;
        var newmax = min;
        for (var k=0; k<arr.length; k++){ //find next max
            if (arr[k]>newmax && arr[k]<max){
                newmax = arr[k];
            }
        }
        max = newmax;
    }
    return max;
}
function shuffle(arr){
    var temp;
    var randind;
    for (var i=0; i<arr.length; i++){
        randind = Math.floor(Math.random()*arr.length);
        temp = arr[randind];
        arr[randind] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
function coinChangeWithObject(num){
    var change = {};
    change.dollars = Math.floor(num/100);
    num = num%100;
    change.quarters = Math.floor(num/25);
    num = num%25;
    change.dimes = Math.floor(num/10);
    num = num%10;
    change.nickels = Math.floor(num/5);
    change.pennies = num%5;
    return change;
}
//zip into new array
function zipIt(arr1, arr2){
    var zip = [];
    if (arr1.length >= arr2.length){
        for (var i=0; i<arr2.length; i++){
            zip.push(arr1[i]);
            zip.push(arr2[i]);
        }
        for (var j=i; j<arr1.length; j++){
            zip.push(arr1[j]);
        }
    } else {
        for (var i=0; i<arr1.length; i++){
            zip.push(arr1[i]);
            zip.push(arr2[i]);
        }
        for (var j=i; j<arr2.length; j++){
            zip.push(arr2[j]);
        }
    }
    return zip;
}
//zip into first array
function zipItTo1st(arr1, arr2){
    if (arr1.length >= arr2.length){
        var mid = arr2.length;
        for (var i=arr1.length-1; i>=mid; i--){ //moves extra values of first array into correct indexes
            arr1[mid+i] = arr1[i];
        }
    } else {
        var mid = arr1.length;
        for (var i=arr2.length-1; i>=mid; i--){ //moves extra values from second array into correct indexes of first array
            arr1[mid+i] = arr2[i];
        }
    }
    for (var j=mid-1; j>0; j--){ //moves zip values of first array into correct indexes
        arr1[j*2] = arr1[j];
    }
    for (var k=mid-1; k>=0; k--){ //moves zip values of second array into correct indexes of first array
        arr1[k*2+1] = arr2[k];
    }
    return arr1;
}