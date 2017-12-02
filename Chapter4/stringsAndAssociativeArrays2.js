function parensValid(str){
	count=0;
	for(var i=0; i<str.length; i++){
		if(str[i]=="("){
			count++;
		}else if(str[i]==")"){
			count--;
		}
		if(count<0){
			return false;
		}
	}
	return count==0;
}
function bracesValid(str){
	var stack=[];
	for(var i=0; i<str.length; i++){
		if(str[i]=="("||str[i]=="{"||str[i]=="["){
			stack.push(str[i]);
		}else if(str[i]==")"&&stack.pop()!="("){
			return false;
		}else if(str[i]=="}"&&stack.pop()!="{"){
			return false;
		}else if(str[i]=="]"&&stack.pop()!="["){
			return false;
		}
	}
	return stack==[];
}
function isStrictPalindrome(str){
	for(var i=0; i<str.length/2; i++){
		if(str[i]!=str[str.length-1-i]){
			return false;
		}
	}
	return true;
}
function isPalindrome(str){
	for(var i=0, j=str.length-1; i<j; i++, j--){
		while(str[i].toLowerCase()<"a"||str[i].toLowerCase()>"z"){
			i++;
		}
		while(str[j].toLowerCase()<"a"||str[j].toLowerCase()>"z"){
			j--;
		}
		if(str[i].toLowerCase()!=str[j].toLowerCase()){
			return false;
		}
	}
	return true;
}
function longestStrictPalindrome(str){
	var newstr="";
	for(var i=str.length-1; i>0; i--){
		for(var j=0; j<str.length-i; j++){
			var pali=true;
			for(var k=0; k<i/2; k++){
				if(str[j+k]!=str[j+i-k]){
					pali=false;
					break;
				}
			}
			if(pali){
				for(var l=j; l<=j+i; l++){
					newstr+=str[l];
				}
				return newstr;
			}
		}
	}
}
function longestPalindrome(str){
	var s=str.toLowerCase()
	var newstr="";
	for(var i=0; i<s.length; i++){
		if(s[i]>="a"&&s[i]<="z"){
			newstr+=s[i];
		}
	}
	return longestStrictPalindrome(newstr);
}
function isWordAlphabetical(str){
	for(var i=0; i<str.length-1; i++){
		if(str[i]>str[i+1]){
			return false;
		}
	}
	return true;
}
function dGetsJiggy(str){
	var newstr="";
	newstr+=str[1].toUpperCase();
	for(var i=2; i<str.length; i++){
		newstr+=str[i];
	}
	return newstr+" to the "+str[0];
}
function commonSuffix(arr){
	for(var i=1; i<=arr[0].length; i++){
		var mismatch=false;
		for(var j=1; j<arr.length; j++){
			if(arr[0][arr[0].length-i]!=arr[j][arr[j].length-i]){
				mismatch=true;
				break;
			}
		}
		if(mismatch){
			break;
		}
	}
	var suffix="";
	for(var k=arr[0].length-i+1; k<arr[0].length; k++){
		suffix+=arr[0][k];
	}
	return suffix;
}
function bookIndex(arr){
	var index=arr[0].toString();
	for(var i=1; i<arr.length; i++){
		if(arr[i]!=arr[i-1]+1){
			index+=", "+arr[i];
		}else if(arr[i]!=arr[i+1]-1){
			index+="-"+arr[i];
		}
	}
	return index;
}
function dropTheMike(str){
	for(var i=0; i<str.length-3; i++){
		if(str[i]=="M"&&str[i+1]=="i"&&str[i+2]=="k"&&str[i+3]=="e"){
			return "stunned silence";
		}
	}
	var newstr="";
	var index=0;
	var end=str.length-1;
	while(str[index]==" "){
		index++;
	}
	while(str[end]==" "){
		end--;
	}
	newstr+=str[index].toUpperCase();
	for(var j=index+1; j<=end; j++){
		if(str[j-1]==" "){
			newstr+=str[j].toUpperCase();
		}else{
			newstr+=str[j];
		}
	}
	return newstr;
}