function shuffle(arr){
    var temp;
    var randind;
    for(var i=0; i<arr.length; i++){
        randind=Math.floor(Math.random()*arr.length);
        temp=arr[randind];
        arr[randind]=arr[i];
        arr[i]=temp;
    }
    return arr;
}
function removeRange(arr, start, end){
    for(var i=start; i<=end; i++){
        arr[i]=arr[i+end-start+1];
    }
    for(var j=0; j<end-start+1; j++){
        arr.pop();
    }
    return arr;
}
function intermediateSums(arr){
    var i=0;
    var sum;
    while(i<arr.length){
        sum=0;
        for(var j=i; j<i+10&&j<arr.length; j++){
            sum+=arr[j];
        }
        i=j;
        for(var k=arr.length; k>i; k--){
            arr[k]=arr[k-1];
        }
        arr[i]=sum;
        i++;
    }
    return arr;
}
function doubleTrouble(arr){
    for(var i=arr.lenth-1; i>=0; i--){
        arr[i*2+1]=arr[i];
        arr[i*2]=arr[i];
    }
    return arr;
}
//zip into new array
function zipIt(arr1, arr2){
    var zip=[];
    if(arr1.length>arr2.length){
        for(var i=0; i<arr2.length; i++){
            zip.push(arr1[i]);
            zip.push(arr2[i]);
        }
        for(var j=i; j<arr1.length; j++){
            zip.push(arr1[j]);
        }
    }else{
        for(var i=0; i<arr1.length; i++){
            zip.push(arr1[i]);
            zip.push(arr2[i]);
        }
        for(var j=i; j<arr2.length; j++){
            zip.push(arr2[j]);
        }
    }
    return zip;
}
//zip into first array
function zipItTo1st(arr1, arr2){
    if(arr1.length>arr2.length){
        var mid=arr2.length;
        for(var i=arr1.length-1; i>=mid; i--){ //moves extra values of first array into correct indexes
            arr1[mid+i]=arr1[i];
        }
    }else{
        var mid=arr1.length;
        for(var i=arr2.length-1; i>=mid; i--){ //moves extra values from second array into correct indexes of first array
            arr1[mid+i]=arr2[i];
        }
    }
    for(var j=mid-1; j>0; j--){ //moves zip values of first array into correct indexes
        arr1[j*2]=arr1[j];
    }
    for(var k=mid-1; k>=0; k--){ //moves zip values of second array into correct indexes of first array
        arr1[k*2+1]=arr2[k];
    }
    return arr1;
}