function rListLength(node){
	if(!node){
		return 0;
	}
	return rListLength(node.next)+1;
}
function gotAnyGrapes(arr){
	if(arr.length==0){
		return 0;
	}else if(arr.length==1){
		return arr[0];
	}
	return Math.max(arr[0]+gotAnyGrapes(arr.slice(2)), gotAnyGrapes(arr.slice(1)));
}
function collatz(num){
	if(num%2){
		return 3*num+1;
	}else{
		return num/2;
	}
}
function collatzapalooza(num){
	var iterations=0;
	while(num!=1){
		iterations++;
		num = collatz(num);
	}
	return iterations;
}
function telephoneWords(num, substr="", idx=0, arr=[]){
	var str=String(num);
	if(str.length==idx){
		arr.push(substr);
		return arr;
	}
	var map={0:"o",1:"i",2:"abc",3:"def",4:"ghi",5:"jkl",6:"mno",7:"pqrs",8:"tuv",9:"wxyz"};
	for(var i=0; i<map[str[idx]].length; i++){
		telephoneWords(num, substr+map[str[idx]][i], idx+1, arr);
	}
	return arr;
}
function risingSquare(num, subnum=1, rising=true){
	if(subnum<1){
		return;
	}else if(subnum>num){
		rising=false;
		subnum--;
	}
	console.log(subnum*subnum);
	if(rising&&subnum==num){
		risingSquare(num, subnum-1, false);
	}else if(rising){
		risingSquare(num, subnum+2, true);
	}else{
		risingSquare(num, subnum-2, false);
	}
}
function binStrExpand(str, substr="", idx=0, arr=[]){
	if(str.length==idx){
		arr.push(substr);
		return arr;
	}
	if(str[idx]=="?"){
		binStrExpand(str, substr+"0", idx+1, arr);
		binStrExpand(str, substr+"1", idx+1, arr);
	}else{
		binStrExpand(str, substr+str[idx], idx+1, arr);
	}
	return arr;
}
function stringAnagrams(str, substr="", arr=[]){
	if(str.length==0){
		arr.push(substr);
	}
	for(var i=0; i<str.length; i++){
		stringAnagrams(str.slice(0,i)+str.slice(i+1), substr+str[i], arr);
	}
	return arr;
}
function climbingStairs1(stairs, subarr=[], arr=[]){
	if(stairs==0){
		arr.push(subarr);
	}else if(stairs==1){
		subarr.push(1);
		arr.push(subarr);
	}else{
		var newarr=subarr.slice();
		subarr.push(1);
		newarr.push(2);
		climbingStairs1(stairs-1, subarr, arr);
		climbingStairs1(stairs-2, newarr, arr);
	}
	return arr;
}
function climbingStairs2(stairs, left=true, subarr=[], arr=[]){
	if(!left&&stairs<=2){
		subarr.push(stairs);
		arr.push(subarr);
	}else if(left&&stairs==2||!left&&stairs==3){
		subarr.push(1);
		climbingStairs2(stairs-1, !left, subarr, arr);
	}else{
		var newarr=subarr.slice();
		subarr.push(1);
		newarr.push(2);
		climbingStairs2(stairs-1, !left, subarr, arr);
		climbingStairs2(stairs-2, !left, newarr, arr);
	}
	return arr;
}
// Note that an even number of stairs is required for equal steps
function climbingStairs3(stairs, left=true, delta=0, subarr=[], arr=[]){
	if((left&&delta==-stairs)||(!left&&delta==stairs)){
		subarr.push(stairs);
		arr.push(subarr);
	}else if(left&&delta*3+2>=stairs){
		subarr.push(1);
		climbingStairs3(stairs-1, !left, delta+1, subarr, arr);
	}else if(!left&&delta*3-2<=-stairs){
		subarr.push(1);
		climbingStairs3(stairs-1, !left, delta-1, subarr, arr);
	}else if(left&&(delta+2)*3-2<=-stairs){
		subarr.push(2);
		climbingStairs3(stairs-2, !left, delta+2, subarr, arr);
	}else if(!left&&(delta-2)*3+2>=stairs){
		subarr.push(2);
		climbingStairs3(stairs-2, !left, delta-2, subarr, arr);
	}else{
		var newarr=subarr.slice();
		subarr.push(1);
		newarr.push(2);
		if(left){
			climbingStairs3(stairs-1, !left, delta+1, subarr, arr);
			climbingStairs3(stairs-2, !left, delta+2, newarr, arr);
		}else{
			climbingStairs3(stairs-1, !left, delta-1, subarr, arr);
			climbingStairs3(stairs-2, !left, delta-2, newarr, arr);
		}
	}
	return arr;
}