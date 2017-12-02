function removeBlanks(str){
	return str.split(" ").join("");
}
function getDigits(str){
	var newstr="";
	for(var i=0; i<str.length; i++){
		if(Number(str[i])==str[i]){
			newstr+=str[i];
		}
	}
	return Number(newstr);
}
function acronyms(str){
	var newstr="";
	var arr=str.split(" ");
	for(var i=0; i<arr.length; i++){
		if(arr[i][0]!=undefined){
			newstr+=arr[i][0];
		}
	}
	return newstr.toUpperCase();
}
function countNonSpaces(str){
	var count=0;
	for(var i=0; i<str.length; i++){
		if(str[i]!=" "){
			count++;
		}
	}
	return count;
}
function removeShorterStrings(arr, length){
	for(var i=arr.length; i>=0; i--){
		if(arr[i].length<length){
			for(var j=i; j<arr.length-1; j++){
				arr[j]=arr[j+1];
			}
			arr.pop();
		}
	}
	return arr;
}
function reverseString(str){
	var newstr="";
	for(var i=str.length-1; i>=0; i--){
		newstr+=str[i];
	}
	return newstr;
}
function removeEvenLengthStrings(arr){
	var index=0;
	for(var i=0; i<arr.length; i++){
		if(arr[i].length%2==1){
			arr[index]=arr[i];
			index++;
		}
	}
	arr.length=index;
	return arr;
}
// Roman Numeral results in book are incorrect, functions below implement correct numerals
function integerToRomanNumerals(int){
	var bp=[[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
	var roman="";
	for(var i=0; i<bp.length; i++){
		while(int>=bp[i][0]){
			roman+=bp[i][1];
			int-=bp[i][0];
		}
	}
	return roman;
}
function romanNumeralstoInteger(str){
	var int=0;
	for(var i=0; i<str.length; i++){
		if(str[i]=="M"){
			int+=1000;
		}else if(str[i]=="C"){
			if(str[i+1]=="M"){
				int+=900;
				i++;
			}else if(str[i+1]=="D"){
				int+=400;
				i++;
			}else{
				int+=100;
			}
		}else if(str[i]=="D"){
			int+=500;
		}else if(str[i]=="X"){
			if(str[i+1]=="C"){
				int+=90;
				i++;
			}else if(str[i+1]=="L"){
				int+=40;
				i++;
			}else{
				int+=10;
			}
		}else if(str[i]=="L"){
			int+=50;
		}else if(str[i]=="I"){
			if(str[i+1]=="X"){
				int+=9;
				i++;
			}else if(str[i+1]=="V"){
				int+=4;
				i++;
			}else{
				int+=1;
			}
		}else if(str[i]=="V"){
			int+=5;
		}
	}
	return int;
}