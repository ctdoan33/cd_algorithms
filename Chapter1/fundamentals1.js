function settingAndSwapping(){
    var myNumber=42;
    var myName="Chris";
    var temp=myName;
    myName=myNumber;
    myNumber=temp;
}
function printAndCount(){
    var count=0;
    for(var i=515; i<4096; i+=5){
        count++;
        console.log(i);
    }
    console.log(count);
}
function printNegative52To1066(){
    for(var i=-52; i<=1066; i++){
        console.log(i);
    }
}
function multiplesOfSix(){
    var i=6;
    while(i<=60000){
        console.log(i);
        i+=6;
    }
}
function dontWorryBeHappy(){
    function beCheerful(){
        console.log("good morning!")
    }
    for(var i=0; i<98; i++){
        beCheerful();
    }
}
function countingTheDojoWay(){
    for(var i=1; i<=100; i++){
        var j=i;
        while(j>=10){
            j-=10;
        }
        if(j==0){
            console.log("Coding Dojo");
        }else{
            while(j>=5){
                j-=5;
            }
            if(j==0){
                console.log("Coding");
            }else{
            	console.log(i);
            }
        }
    }
}
function multiplesOfThreeButNotAll(){
    for(var i=-300; i<=0; i+=3){
        if(i!=-3&&i!=-6){
            console.log(i);
        }
    }
}
function whatDoYouKnow(incoming){
    console.log(incoming);
}
function printIntegersWithWhile(){
    var i=2000;
    while(i<=5280){
        console.log(i);
        i++;
    }
}
function whoaThatSuckersHuge(){
    var sum=0;
    for(var i=-299999; i<=300000; i+=2){
        sum+=i;
    }
    console.log(sum);
}
function youSayItsYourBirthday(num1, num2){
    var birthMonth=3;
    var birthDay=3;
    if((num1==birthMonth&&num2==birthDay)||(num2==birthMonth&&num1==birthDay)){
        console.log("How did you know?");
    }else{
        console.log("Just another day");
    }
}
function countdownByFours(){
    var i=2016;
    while(i>0){
        console.log(i);
        i-=4;
    }
}
function leapYear(year){
    while(year>=400){
        year-=400;
    }
    if(year==0){
        console.log("That is a leap year");
    }else{
        while(year>=100){
            year-=100;
        }
        if(year!=0){
            while(year>=4){
                year-=4;
            }
            if(year==0){
                console.log("That is a leap year");
            }
        }
	}
	console.log("That is not a leap year");
}
function flexibleCountdown(lowNum, highNum, mult){
    for(var i=highNum; i>=lowNum; i-=mult){
        console.log(i);
    }
}
function theFinalCountdown(param1,param2,param3,param4){
	var count=0;
	while(count<param2){
		count+=param1;
	}
    while(count<param3){
        if(count!=param4){
			console.log(count);
		}
		count+=param1;
    }
}