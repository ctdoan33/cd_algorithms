function removeBlanks(str){
	var newstr = "";
	for(var i=0; i<str.length; i++){
		if(str[i] != " "){
			newstr += str[i];
		}
	}
	return newstr;
}
function getDigits(str){
	var newstr = "";
	for(var i=0; i<str.length; i++){
		if(Number(str[i]) == str[i]){
			newstr += str[i];
		}
	}
	return Number(newstr);
}
function acronyms(str){
	var newstr = "";
	var i = 0;
	while(str[i] == " "){
		i++;
	}
	newstr += str[i];
	i++;
	for(i; i<str.length; i++){
		if(str[i-1] == " " && str[i] != " "){
			newstr += str[i]
		}
	}
	return newstr.toUpperCase();
}
function reverseString(str){
	var newstr="";
	for(var i=str.length-1; i>=0; i--){
		newstr += str[i];
	}
	return newstr;
}
function removeEvenLengthStrings(arr){
	var index = 0;
	for(var i=0; i<arr.length; i++){
		if(arr[i].length%2 == 1){
			arr[index] = arr[i];
			index++;
		}
	}
	arr.length = index;
	return arr;
}
function parensValid(str){
	count = 0;
	for(var i=0; i<str.length; i++){
		if(str[i] == "("){
			count++;
		}else if(str[i] == ")"){
			count--;
		}
		if(count < 0){
			return false;
		}
	}
	return count == 0;
}
function bracesValid(str){
	var stack = [];
	for(var i=0; i<str.length; i++){
		if(str[i] == "(" || str[i] == "{" || str[i] == "["){
			stack.push(str[i]);
		}else if(str[i] == ")" && stack.pop() != "("){
				return false;
		}else if(str[i] == "}" && stack.pop() != "{"){
				return false;
		}else if(str[i] == "]" && stack.pop() != "["){
				return false;
		}
	}
	return stack == [];
}
function isPalindrome(str){
	for(var i=0, j=str.length-1; i<j; i++, j--){
		if(str[i] != str[j]){
			return false;
		}
	}
	return true;
}
function isPalindromeSpaces(str){
	for(var i=0, j=str.length-1; i<j; i++, j--){
		while(str[i] == " "){
			i++;
		}
		while(str[j] == " "){
			j--;
		}
		if(str[i] != str[j]){
			return false;
		}
	}
	return true;
}