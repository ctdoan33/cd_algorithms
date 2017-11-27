function stringToWordArray(str){
	var arr = [];
	var substr = "";
	for(var i=0; i<str.length; i++){
		if(str[i] == " "){
			arr.push(substring);
			substr = "";
		}else{
			substr += str[i];
		}
	}
	arr.push(substring);
	return arr;
}
function longestWord(str){
	var word = "";
	var substr = "";
	for(var i=0; i<str.length; i++){
		if(str[i] == " "){
			if(substr.length > word.length){
				word = substr;
			}
			substr = "";
		}else{
			substr += str[i];
		}
	}
	return word;
}
function rotate(str, num){
	num = num%str.length;
	newst = "";
	for(var i=0; i<str.length; i++){
		var idx = num+i;
		if(idx >= str.length){
			idx -= length;
		}
		newstr += str[idx];
	}
	return newstr;
}
function isRotation(str1, str2){
	if(str1.length != str2.length){
		return false;
	}
	var length = str1.length;
	for(var i=0; i<length; i++){
		var rotation = true;
		for(var j=0; j<length; j++){
			var idx = i+j;
			if(idx >= length){
				idx -= length;
			}
			if(str1[j] != str2[idx]){
				rotation = false;
				break;
			}
		}
		if(rotation){
			return true;
		}
	}
	return false;
}
function optimalSequence(arr, sequence=[]){
	if(arr.length == 0){
		return sequence;
	}
	var opstr = null;
	var optimal = null;
	for(var i=0; i<arr.length; i++){
		var str = "";
		var ordered = true;
		for(var j=0; j<arr[i].length; j++){
			if(arr[i][j] == "?"){
				if(sequence.length){
					str += sequence[sequence.length-1][j];	
				}else{
					str += "A";
				}
			}else{
				if(sequence.length && arr[i][j] < sequence[sequence.length-1][j]){
					return null;
				}else{
					str += arr[i][j];
				}
			}
		}
		if(!opstr || str < opstr){
			var test = sequence.slice();
			test.push(str);
			var result = optimalSequence(arr.slice(0,i).concat(arr.slice(i+1)), test);
			if(result){
				opstr = str;
				optimal = result;
			}
		}
	}
	return optimal;
}
function isPermutation(str1, str2){
	if(str1.length != str2.length){
		return false;
	}
	var hash = {};
	for(var i=0; i<str1.length; i++){
		if(hash[str1[i]]){
			hash[str1[i]]++;
		}else{
			hash[str1[i]] = 1;
		}
	}
	for(i=0; i<str2.length; i++){
		if(hash[str2[i]]){
			hash[str2[i]]--;
		}else{
			return false;
		}
	}
	return true;
}
function allPermutations(str, substr="", arr=[]){
	if(str.length == 0){
		arr.push(substr);
	}
	var chars = {};
	for(var i=0; i<str.length; i++){
		if(!chars[str[i]]){
			chars[str[i]] = 1;
			allPermutations(str.slice(0,i)+str.slice(i+1), substr+str[i], arr);
		}
	}
	return arr;
}