function biggieSize(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            arr[i]="big";
        }
    }
    return arr;
}
function previousLengths(arr){
    for(var i=arr.length-1; i>0; i--){
        arr[i]=arr[i-1].length;
    }
    return arr;
}
function printLowReturnHigh(arr){
    var low=arr[0];
    var high=arr[0];
    for(var i=1; i<arr.length; i++){
        if(arr[i]<low){
            low=arr[i];
        }
        if(arr[i]>high){
            high=arr[i];
        }
    }
    console.log(low);
    return high;
}
function addSevenToMost(arr){
    var newarr=[];
    for(var i=1; i<arr.length; i++){
        newarr.push(arr[i]+7);
    }
    return newarr;
}
function printOneReturnAnother(arr){
    console.log(arr[arr.length-2]);
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            var j=-arr[i];
        }else{
            var j=arr[i];
        }
        while(j>=2){
            j-=2;
        }
        if(j==1){
            return arr[i];
        }
    }
}
function reverse(arr){
    for(var i=0, j=arr.length-1; i<j; i++, j--){
        var temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr;
}
function double(arr){
    var newarr=[];
    for(var i=0; i<arr.length; i++){
        newarr.push(arr[i]*2);
    }
    return newarr;
}
function outlookNegative(arr){
    var newarr=[];
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            newarr.push(arr[i]*-1);
        }else{
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
function countPositives(arr){
    var count=0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            count++;
        }
    }
    arr[arr.length-1]=count;
    return arr;
}
function alwaysHungry(arr){
    var fed=false;
    for(var i=0; i<arr.length; i++){
        if(arr[i]=="food"){
            fed=true;
            console.log("yummy");
        }
    }
    if(!fed){
        console.log("I'm hungry");
    }
}
function evensAndOdds(arr){
    var j;
    var k;
    var l;
    for(var i=0; i<arr.length; i++){
        l=k;
        k=j;
        if(arr[i]<0){
            j=-arr[i];
        }else{
            j=arr[i];
        }
        while(j>=2){
            j-=2;
        }
        if(j==1&&k==1&&l==1){
            console.log("That's odd!");
        }else if(j==0&&k==0&&l==0){
        console.log("Even more so!");
        }
    }
}
function swapTowardsTheCenter(arr){
    for(var i=0, j=arr.length-1; i<j; i+=2, j-=2){
        var temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr;
}
function incrementTheSeconds(arr){
    for(var i=1; i<arr.length; i+=2){
        arr[i]=arr[i]+1;
    }
    for(var j=0; j<arr.length; j++){
        console.log(arr[j]);
    }
    return arr;
}
function scaleTheArray(arr, num){
    for(var i=0; i<arr.length; i++){
        arr[i]*=num;
    }
    return arr;
}