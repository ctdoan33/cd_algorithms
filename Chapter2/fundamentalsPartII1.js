function sigma(num){
    var sum=0;
    for(var i=1; i<=num; i++){
        sum+=i;
    }
    return sum;
}
function factorial(num){
    var prod=1;
    for(var i=2; i<=num; i++){
        prod*=i;
    }
    return prod;
}
function drawLeftStars(num){
    var starart="";
    for(var i=1; i<=num; i++){
        starart+="*";
    }
    console.log(starart);
}
function drawRightStars(num){
    var starart="";
    for(var i=1; i<=75-num; i++){
        starart+=" ";
    }
    for(var j=1; j<=num; j++){
        starart+="*";
    }
    console.log(starart);
}
function drawCenterStars(num){
    var starart="";
    for(var i=1; i<=(75-num)/2; i++){
        starart+=" ";
    }
    for(var j=1; j<=num; j++){
        starart+="*";
    }
    for(var k=1; i<=(76-num)/2; k++){
        starart+=" ";
    }
    console.log(starart);
}
function drawLeftChars(num, char){
    var starart="";
    for(var i=1; i<=num; i++){
        starart+=char;
    }
    console.log(starart);
}
function drawRightChars(num, char){
    var starart="";
    for(var i=1; i<=75-num; i++){
        starart+=" ";
    }
    for(var j=1; j<=num; j++){
        starart+="char";
    }
    console.log(starart);
}
function drawCenterChars(num, char){
    var starart="";
    for(var i=1; i<=(75-num)/2; i++){
        starart+=" ";
    }
    for(var j=1; j<=num; j++){
        starart+="char";
    }
    for(var k=1; i<=(76-num)/2; k++){
        starart+=" ";
    }
    console.log(starart);
}
function threesFives(){
    var sum=0;
    for(var i=100; i<=4000000; i++){
        if(i%15!=0&&(i%5==0||i%3)){
            sum+=i;
        }
    }
    console.log(sum);
}
function betterthreesFives(start, end){
    var sum=0;
    for(var i=start; i<=end; i++){
        if(i%15!=0&&(i%5==0||i%3)){
            sum+=i;
        }
    }
    console.log(sum);
}
function generateCoinChange(cents){
    console.log(cents+" cents can be represented by:");
    console.log("dollars: "+((cents-cents%100)/100));
    cents=cents%100;
    console.log("half-dollars: "+((cents-cents%50)/50));
    cents=cents%50;
    console.log("quarters: "+((cents-cents%25)/25));
    cents=cents%25;
    console.log("dimes: "+((cents-cents%10)/10));
    cents=cents%10;
    console.log("nickels: "+((cents-cents%5)/5));
    console.log("pennies: "+cents%5);
}
function messyMath(num){
    var sum=0;
    for(var count=0; count<=num; count++){
        if(count*3==num){
            return -1;
        }else if(count%3==0){
            continue;
        }else if(count%7==0){
            sum+=count*2;
        }else{
            sum+=count;
        }
    }
    return sum;
}
function twelveBarBlues(){
    for(var i=1; i<=12; i++){
        console.log(i);
        console.log("chick");
        console.log("boom");
        console.log("chick");
    }
}
function fibonacci(index){
    var fib=[0,1];
    while(fib.length<index){
        fib[fib.length]=fib[fib.length-1]+fib[fib.length-2];
    }
    return fib[index];
}
function sumToOne(num){
    var sum;
    while(num>9){
        sum=0;
        while(num>0){
            sum+=num%10;
            num=(num-num%10)/10;
        }
        num=sum;
    }
    return num;
}
function clockHandAngles(seconds){
    var week=seconds%604800;
    var hour=week%43200;
    var min=hour%3600;
    var sec=min%60;
    console.log("Week hand: "+week/1680+" degs. Hour hand: "+hour/120+" degs. Minute hand: "+min/10+" degs. Second hand: "+sec*6+" degs.");
}
function isPrime(num){
    var prime=true;
    for(var i=2; i<num; i++){
        if(num%i==0){
            prime=false;
        }
    }
    return prime;
}