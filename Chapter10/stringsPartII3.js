function areStringsLooselyInterleaved(str1, str2, str3){
	for(var i=0, j=0, k=0; k<str3.length; k++){
		if(str1[i]==str3[k]){
			i++;
		}else if(str2[j]==str3[k]){
			j++;
		}else{
			return false;
		}
	}
	if(i==str1.length&&j==str2.length){
		return true;
	}
	return false;
}
function allLooselyInterleavedStrings(str1, str2, i=0, j=0, substr="", arr=[]){
	if(str1.length==i&&str2.length==j){
		arr.push(substr);
	}
	if(str1.length!=i){
		allLooselyInterleavedStrings(str1, str2, i+1, j, substr+str1[i], arr);
	}
	if(str2.length!=j&&str1[i]!=str2[j]){
		allLooselyInterleavedStrings(str1, str2, i, j+1, substr+str2[j], arr);
	}
	return arr;
}
function makeStringPalindromeRemoveOne(str){
	var remove=false;
	var left;
	var right;
	for(var i=0, j=str.length-1; i<j; i++,j--){
		if(str[i]!=str[j]){
			if(remove){
				return left;
			}else{
				remove=true;
				left=i;
				right=j;
				i--;
			}
		}
	}
	if(remove){
		return right;
	}else{
		return -1;
	}
}
function makeStringPalindromeAddOne(str){
	var add=false;
	var left;
	var right;
	for(var i=0, j=str.length-1; i<j; i++,j--){
		if(str[i]!=str[j]){
			if(add){
				return left;
			}else{
				add=true;
				left=str[i];
				right=str[j];
				i--;
			}
		}
	}
	if(add){
		return right;
	}else{
		return "";
	}
}
function stringEncode(str){
	var code=str[0];
	var count=1;
	for(var i=1; i<str.length; i++){
		if(str[i]==str[i-1]){
			count++;
		}else{
			code+=count+str[i];
			count=1;
		}
	}
	code+=count;
	if(code.length>=str.length){
		return str;
	}else{
		return code;
	}
}
function stringDecode(str){
	var newstr="";
	for(var i=0; i<str.length; i+=2){
		var k=Number(str[i+1]);
		for(var j=0; j<k; j++){
			newstr+=str[i];
		}
	}
	return newstr;
}
// Problem was unclear on order of removing leading vs trailing spaces
function shortener(str, num){
	var newstr=""
	if(str.length<num){
		for(var i=0; i<Math.floor((num-str.length)/2); i++){
			newstr+=" ";
		}
		newstr+=str;
		for(i=0; i<Math.ceil((num-str.length)/2); i++){
			newstr+=" ";
		}
		str=newstr;
	}
	while(str.length>num&&str[0]==" "){
		newstr="";
		for(var i=1; i<str.length; i++){
			newstr+=str[i];
		}
		str=newstr;
	}
	while(str.length>num&&str[str.length-1]==" "){
		newstr="";
		for(var i=0; i<str.length-1; i++){
			newstr+=str[i];
		}
		str=newstr;
	}
	if(str.length>num){
		newstr=str[0];
		for(var i=1; i<str.length; i++){
			if(str[i-1]==" "){
				newstr+=str[i].toUpperCase();
			}else{
				newstr+=str[i];
			}
		}
		str=newstr;
	}
	while(str.length>num){
		for(var i=str.length-1; i>=0; i--){
			var extra=false;
			if(str[i]==" "){
				var extra=true;
				break;
			}
		}
		if(extra){
			newstr="";
			for(var j=0; j<str.length; j++){
				if(j!=i){
					newstr+=str[j];
				}
			}
			str=newstr;
		}else{
			break;
		}
	}
	while(str.length>num){
		for(var i=str.length-1; i>=0; i--){
			var extra=false;
			if(!((str[i]>="A"&&str[i]<="Z")||(str[i]>="a"&&str[i]<="z"))){
				var extra=true;
				break;
			}
		}
		if(extra){
			newstr="";
			for(var j=0; j<str.length; j++){
				if(j!=i){
					newstr+=str[j];
				}
			}
			str=newstr;
		}else{
			break;
		}
	}
	while(str.length>num){
		for(var i=str.length-1; i>=0; i--){
			var extra=false;
			if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
				var extra=true;
				break;
			}
		}
		if(extra){
			newstr="";
			for(var j=0; j<str.length; j++){
				if(j!=i){
					newstr+=str[j];
				}
			}
			str=newstr;
		}else{
			break;
		}
	}
	while(str.length>num){
		for(var i=str.length-1; i>=0; i--){
			var extra=false;
			if(str[i]>="a"&&str[i]<="z"){
				var extra=true;
				break;
			}
		}
		if(extra){
			newstr="";
			for(var j=0; j<str.length; j++){
				if(j!=i){
					newstr+=str[j];
				}
			}
			str=newstr;
		}else{
			break;
		}
	}
	while(str.length>num){
		newstr="";
		for(var i=0; i<str.length-1; i++){
			newstr+=str[i];
		}
		str=newstr;
	}
	return str;
}