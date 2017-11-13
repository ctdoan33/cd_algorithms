// basic 13
function print1To255(){
    for (var i=1; i<=255; i++){
        console.log(i);
    }
}
function printOdds1To255(){
    for (var i=1; i<=255; i+=2){
        console.log(i);
    }
}
function printIntsAndSum0To255(){
    var sum = 0;
    for (var i=0; i<=255; i++){
        sum += i;
        console.log(i, sum);
    }
}
function printArrayVals(arr){
    for (var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
function printMaxOfArray(arr){
    var max = arr[0];
    for (var i=1; i<arr.length; i++){
        if (arr[i]>max){
            max = arr[i];
        }
    }
    console.log(max);
}
function printAverageOfArray(arr){
    var sum = 0;
    for (var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    console.log(sum/arr.length);
}
function returnOddsArray1To255(){
    var oddsarray = [];
    for (var i=0; i<=255; i+=2){
        oddsarray.push(i);
    }
    return oddsarray;
}
function squareArrayVals(arr){
    for (var i=0; i<arr.length; i++){
        arr[i] *= arr[i];
    }
    return arr;
}
function printArrayCountGreaterThanY(arr, y){
    var count = 0;
    for (var i=0; i<arr.length; i++){
        if (arr[i]>y){
            count++;
        }
    }
    console.log(count);
}
function zeroOutArrayNegativeVals(arr){
    for (var i=0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i] = 0;
        }
    }
    return arr;
}
function printMaxMinAverageArrayVals(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for (var i=0; i<arr.length; i++){
        if (arr[i]>max){
            max = arr[i];
        }
        if (arr[i]<min){
            min = arr[i];
        }
        sum += arr[i];
    }
    console.log(max, min, sum/arr.length);
}
function shiftArrayValsLeft(arr){
    for (var i=1; i<arr.length; i++){
        arr[i-1] = arr[i]
    }
    arr[i-1] = 0;
    return arr;
}
function swapStringForArrayNegativeVals(arr){
    for (var i=0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}

function coinChange(num){
    var count = [0,0,0,0,0];
    var denom = [" dollar", " quarter", " dime", " nickel", " penny"];
    var denoms = [" dollars", " quarters", " dimes", " nickels", " pennies"];
    while (num >= 100){
        count[0]++;
        num -= 100;
    }
    while (num >= 25){
        count[1]++;
        num -= 25;
    }
    while (num >= 10){
        count[2]++;
        num -= 10;
    }
    while (num >= 5){
        count[3]++;
        num -= 5;
    }
    count[4] = num;
    for (var i = 0; i < 5; i++){
        if (count[i] > 1){
            console.log(count[i]+denoms[i]);
        } else if (count[i] = 1){
            console.log(1+denom[i])
        }
    }
}
function factorial(num){
    var fact = 1;
    for (var i = 1; i<=num; i++){
        fact *= i;
    }
    return fact;
}
function fizzbuzz(num){
    for (var i = 1; i <= num; i++){
        if (i%15==0){
            console.log(fizzbuzz);
        } else if (i%3==0){
            console.log(fizz);
        } else if (i%5==0){
            console.log(buzz);
        } else {
            console.log(i);
        }
    }
}
function sigma(arr){
    var sum = 0;
    for (var i = 0;i<arr.length;i++){
        if (typeof arr[i] === number){
            sum += arr[i];
        }
    }
    return sum;
}