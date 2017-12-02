function countdown(num){
	var arr=[];
	for(var i=num; i>=0; i--){
		arr.push(i);
	}
	return arr; // array should be num+1 long
}
function printAndReturn(arr){
	console.log(arr[0]);
	return arr[1];
}
function firstPlusLength(arr){
	return arr[0]+arr.length; // a string is concatenated, a boolean is summated based on its value (1 for true, 0 for false)
}
function valuesGreaterThanSecond(){
	var arr=[1,3,5,7,9,13];
	var count=0;
	for(var i=0; i<arr.length;i++){
		if(arr[i]>arr[1]){
			console.log(arr[i]);
			count++;
		}
	}
	return count;
}
function valuesGreaterThanSecondGeneralized(arr){
	var count=0;
	for(var i=0; i<arr.length;i++){
		if(arr[i]>arr[1]){ // if array is only one element long, still works since this evaluates to false
			console.log(arr[i]);
			count++;
		}
	}
	return count; // array one element long will return 0
}
function thisLengthThatValue(num1, num2){
	var arr=[];
	for(var i=1; i<=num1; i++){
		arr.push(num2);
	}
	if(num1==num2){
		console.log("Jinx!");
	}
	return arr;
}
function fitTheFirstValue(arr){
	if(arr[0]>arr.length){
		console.log("Too big!");
	}else if(arr[0]<arr.length){
		console.log("Too small!");
	}else{
		console.log("Just right!");
	}
}
function fahrenheitToCelcius(fDegrees){
	return (fDegrees-32)*5/9;
}
function celciusToFahrenheit(cDegrees){
	return 9/5*cDegrees+32;
}
//optional: Fahrenheit and Celcius should equate at -40
function equateFAndC(){
	var equate=200;
	while(9/5*equate+32!=equate){
		equate--;
	}
	return equate;
}