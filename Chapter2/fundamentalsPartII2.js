function sweatshirtPricing(num){
    var cost=0;
    if(num>3){
        cost=num*13;
    }else if(num==3){
        cost=48.6;
    }else if(num==2){
        cost=36.4;
    }else{
        cost=20;
    }
    return Math.ceil(cost);
}
function clockHandAnglesRevisited(seconds){
    var week=seconds%604800;
    var hour=week%43200;
    var min=hour%3600;
    var sec=min%60;
    console.log("Week hand: "+Math.trunc(week/1680)+" degs. Hour hand: "+Math.trunc(hour/120)+" degs. Minute hand: "+Math.trunc(min/10)+" degs. Second hand: "+Math.trunc(sec*6)+" degs.");
}
function extractDigit(num, digitNum){
    while(digitNum>0){
        num/=10;
        digitNum--;
    }
    while(digitNum<0){
        num*=10;
        digitNum++;
    }
    return Math.trunc(num%10);
}
function mostSignificantDigit(num){
    if(num<0){
        num*=-1;
    }
    while(num>=10){
        num/=10;
    }
    while(num<1){
        num*=10;
    }
    return Math.trunc(num);
}
//Gaming Fun(damentals)
function rollOne(){
    return Math.trunc(Math.random()*6)+1;
}
function playFives(num){
    var roll;
    for(var i=1; i<=num; i++){
        roll=rollOne();
        console.log(roll);
        if(roll==5){
            console.log("That's good luck!");
        }
    }
}
function playStatistics(){
    var low=6;
    var high=1;
    var roll;
    for(var i=1; i<=8; i++){
        roll=rollOne();
        if(roll<low){
            low=roll;
        }
        if(roll>high){
            high=roll;
        }
    }
    console.log(low, high);
}
function playStatistics2(){
    var low=6;
    var high=1;
    var sum=0;
    var roll;
    for(var i=1; i<=8; i++){
        roll=rollOne();
        if(roll<low){
            low=roll;
        }
        if(roll>high){
            high=roll;
        }
        sum+=roll;
    }
    console.log(low, high, sum);
}
function playStatistics3(num){
    var low=6;
    var high=1;
    var sum=0;
    var roll;
    for(var i=1; i<=num; i++){
        roll=rollOne();
        if(roll<low){
            low=roll;
        }
        if(roll>high){
            high=roll;
        }
        sum+=roll;
    }
    console.log(low, high, sum);
}
function playStatistics4(num){
    var low=6;
    var high=1;
    var sum=0;
    var roll;
    for(var i=1; i<=num; i++){
        roll=rollOne();
        if(roll<low){
            low=roll;
        }
        if(roll>high){
            high=roll;
        }
        sum+=roll;
    }
    console.log(low, high, sum/num);
}
//Statistics Until Doubles
function roll20SidedDie(){
    return Math.trunc(Math.random()*20)+1;
}
function statisticsUntilDoubles(){
    var rolls=0;
    var min=20;
    var max=1;
    var sum=0;
    var roll;
    var last1=0;
    var last2=21;
    while(last1!=last2){
        roll=roll20SidedDie();
        rolls++;
        if(roll<min){
            min=roll;
        }
        if(roll>max){
            max=roll;
        }
        sum+=roll;
        last2=last1;
        last1=roll;
    }
    console.log(rolls, min, max, sum/rolls);
}
//Claire is Where?
var claire=[0,0];
function reset(){
    claire=[0,0];
}
function moveby(xOffset, yOffset){
    claire[0]+=xOffset;
    claire[1]+=yOffset;
}
function xLocation(){
    return claire[0];
}
function yLocation(){
    return claire[1];
}
function distFromHome(){
    return Math.sqrt(claire[0]*claire[0]+claire[1]*claire[1]);
}