function coinChangeWithObject(num){
	var change={};
	change.dollars=Math.floor(num/100);
	num=num%100;
	change.quarters=Math.floor(num/25);
	num=num%25;
	change.dimes=Math.floor(num/10);
	num=num%10;
	change.nickels=Math.floor(num/5);
	change.pennies=num%5;
	return change;
}
function maxMinAverageWithObject(arr){
	var obj={"max":arr[0],"min":arr[0],"average":arr[0]};
	for(var i=1; i<arr.length; i++){
		if(arr[i]>obj.max){
			obj.max=arr[i];
		}
		if(arr[i]<obj.min){
			obj.min=arr[i];
		}
		obj.average+=arr[i];
	}
	obj.average/=arr.length;
	return obj;
}
function zipArraysIntoMap(arr1, arr2){
	var map={};
	for(var i=0; i<arr1.length; i++){
		map[arr1[i]]=arr2[i];
	}
	return map;
}
function invertHash(assocArr){
	var hash={};
	for(x in assocArr){
		hash[assocArr[x]]=x;
	}
	return hash;
}
function numberOfValues(assocArr){
	var number=0;
	for(x in assocArr){
		number++;
	}
	return number;
}
function concat(){
	var str="";
	for(x in arguments){
		str+=arguments[x];
	}
	return str;
}
function slice(str, start, end=str.length){
	var newstr="";
	if(start<0){
		start=str.length+start;
	}
	if(end<0){
		end=str.length+end;
	}
	for(var i=start; i<end; i++){
		newstr+=str[i];
	}
	return newstr;
}
function trim(str){
	var newstr="";
	var index=0;
	var end=str.length-1;
	while(str[index]==" "){
		index++;
	}
	while(str[end]==" "){
		end--;
	}
	for(var i=index; i<=end; i++){
		newstr+=str[i];
	}
	return newstr;
}
String.prototype.split=function(separator, limit=Infinity){
	var arr=[];
	var element="";
	if(separator===""){
		for(var i=0; i<this.length; i++){
			if(arr.length>=limit){
				return arr;
			}else{
				arr.push(this[i]);
			}
		}
		return arr;
	}else{
		for(var j=0; j<this.length; j++){
			if(arr.length>=limit){
				return arr;
			}
			if(this[j]===separator){
				arr.push(element);
				element="";
			}else{
				element+=this[j];
			}
		}
		arr.push(element);
		return arr;
	}
}
String.prototype.search=function(val){
	for(var i=0; i<this.length; i++){
		var match=true;
		for(var j=0; j<val.length; j++){
			if(this[i+j]!=val[j]){
				match=false;
				break;
			}
		}
		if(match){
			return i;
		}
	}
	return -1;
}