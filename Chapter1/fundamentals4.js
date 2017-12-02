function onlyKeepTheLastFew(arr, X){
	for(var i=0; i<X; i++){
		arr[i]=arr[arr.length-X+i];
	}
	arr.length=X;
	return arr;
}
function mathHelp(M, B){
	return -B/M;
}
function whatHappensToday(){
	var rand=Math.random();
	if(rand<.1){
		console.log("volcano");
	}else if(rand<.25){
		console.log("tsunami");
	}else if(rand<.45){
		console.log("earthquake");
	}else if(rand<.70){
		console.log("blizzard");
	}else{
		console.log("meteor");
	}
}
function whatReallyHappensToday(){
	if(Math.random()<.1){
		console.log("volcano");
	}
	if(Math.random()<.15){
		console.log("tsunami");
	}
	if(Math.random()<.20){
		console.log("earthquake");
	}
	if(Math.random()<.25){
		console.log("blizzard");
	}
	if(Math.random()<.30){
		console.log("meteor");
	}
}
function soaringIQ(){
	var iq=101;
	for(var i=1; i<=98; i++){
		iq+=i*0.01;
	}
	console.log(iq);
}
function letterGrade(score){
	var grade;
	if(score>=90){
		grade="A";
	}else if(score>=80){
		grade="B";
	}else if(score>=70){
		grade="C";
	}else if(score>=60){
		grade="D";
	}else{
		grade="F";
	}
	console.log("Score: "+score+". Grade: "+grade);
}
function moreAccurateGrades(score){
	var grade;
	if(score>=90){
		grade="A";
	}else if(score>=80){
		grade="B";
	}else if(score>=70){
		grade="C";
	}else if(score>=60){
		grade="D";
	}else{
		grade="F";
	}
	if(score<93&&score>59){
		var mod=score;
		while(mod>=10){
			mod-=10;
		}
		if(mod<2){
			grade+="-";
		}else if(topbot>=8){
			grade+="+";
		}
	}
	console.log("Score: "+score+". Grade: "+grade);
}