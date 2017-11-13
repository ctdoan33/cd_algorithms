function dedupe(str){
	var arr=[];
	for(var i=str.length-1; i>=0; i--){
		var unique=true;
		for(var j=0; j<arr.length; j++){
			if(str[i]==arr[j]){
				unique=false;
				break;
			}
		}
		if(unique){
			arr.push(str[i]);
		}
	}
	var newstr="";
	for(i=arr.length-1; i>=0; i--){
		newstr+=arr[i];
	}
	return newstr;
}
function indexOfFirstUniqueLetter(str){
	var arr=[];
	for(var i=0; i<str.length; i++){
		var unique=true;
		for(var j=0; j<arr.length; j++){
			if(str[i]==arr[j][0]){
				unique=false;
				arr[j][1]+=1;
				break;
			}
		}
		if(unique){
			arr.push([str[i],1,i]);
		}
	}
	for(i=0; i<arr.length; i++){
		if(arr[i][1]==1){
			return arr[i][2];
		}
	}
}
function uniqueLetters(str){
	var arr=[];
	for(var i=0; i<str.length; i++){
		if((str[i]>="A"&&str[i]<="Z")||(str[i]>="a"&&str[i]<="z")){
			var unique=true;
			for(var j=0; j<arr.length; j++){
				if(str[i]==arr[j][0]){
					unique=false;
					arr[j][1]+=1;
					break;
				}
			}
			if(unique){
				arr.push([str[i],1]);
			}
		}
	}
	var newstr="";
	for(i=0; i<arr.length; i++){
		if(arr[i][1]==1){
			newstr+=arr[i][0];
		}
	}
	return newstr;
}
// Note that numToString and numToText functions have an issue due to JavaScript imprecision
function numToString(num){
	var arr=[];
	var e=0;
	while(num%1){
		e--;
		num*=10;
	}
	while(num>0){
		switch(num%10){
			case 0:arr.push("0");break;
			case 1:arr.push("1");break;
			case 2:arr.push("2");break;
			case 3:arr.push("3");break;
			case 4:arr.push("4");break;
			case 5:arr.push("5");break;
			case 6:arr.push("6");break;
			case 7:arr.push("7");break;
			case 8:arr.push("8");break;
			case 9:arr.push("9");break;
		}
		num=Math.trunc(num/10);
		e++;
		if(e==0){
			arr.push(".")
		}
	}
	var newstr="";
	for(var i=arr.length-1; i>=0; i--){
		newstr+=arr[i];
	}
	return newstr;
}
function numToText(num){
	var numarr=[];
	numarr.push(num%1);
	num=Math.trunc(num);
	while(num>0){
		numarr.push(num%1000);
		num=Math.trunc(num/1000);
	}
	var wordarr=[];
	if(numarr.length==1){
		wordarr.push("zero");
	}
	for(var i=numarr.length-1; i>0; i--){
		switch(Math.trunc(numarr[i]/100)){
			case 1:wordarr.push("one hundred");break;
			case 2:wordarr.push("two hundred");break;
			case 3:wordarr.push("three hundred");break;
			case 4:wordarr.push("four hundred");break;
			case 5:wordarr.push("five hundred");break;
			case 6:wordarr.push("six hundred");break;
			case 7:wordarr.push("seven hundred");break;
			case 8:wordarr.push("eight hundred");break;
			case 9:wordarr.push("nine hundred");break;
		}
		switch(Math.trunc(numarr[i]%100/10)){
			case 1:
				switch(numarr[i]%10){
					case 0:wordarr.push("ten");break;
					case 1:wordarr.push("eleven");break;
					case 2:wordarr.push("twelve");break;
					case 3:wordarr.push("thirteen");break;
					case 4:wordarr.push("fourteen");break;
					case 5:wordarr.push("fifteen");break;
					case 6:wordarr.push("sixteen");break;
					case 7:wordarr.push("seventeen");break;
					case 8:wordarr.push("eighteen");break;
					case 9:wordarr.push("nineteen");break;
				};
				break;
			case 2:wordarr.push("twenty");break;
			case 3:wordarr.push("thirty");break;
			case 4:wordarr.push("forty");break;
			case 5:wordarr.push("fifty");break;
			case 6:wordarr.push("sixty");break;
			case 7:wordarr.push("seventy");break;
			case 8:wordarr.push("eighty");break;
			case 9:wordarr.push("ninety");break;
		}
		if(Math.trunc(numarr[i]%100/10)!=1){
			switch(numarr[i]%10){
				case 1:wordarr.push("one");break;
				case 2:wordarr.push("two");break;
				case 3:wordarr.push("three");break;
				case 4:wordarr.push("four");break;
				case 5:wordarr.push("five");break;
				case 6:wordarr.push("six");break;
				case 7:wordarr.push("seven");break;
				case 8:wordarr.push("eight");break;
				case 9:wordarr.push("nine");break;
			}
		}
		switch(i){
			case 2:wordarr.push("thousand");break;
			case 3:wordarr.push("million");break;
			case 4:wordarr.push("billion");break;
			case 5:wordarr.push("trillion");break;
			case 6:wordarr.push("quadrillion");break;
			case 7:wordarr.push("quintillion");break;
			case 8:wordarr.push("sextillion");break;
			case 9:wordarr.push("septillion");break;
		}
	}
	if(numarr[0]>0){
		wordarr.push("point");
		while(numarr[0]>0){
			switch(Math.trunc(numarr[i]*10)){
				case 0:wordarr.push("zero");break;
				case 1:wordarr.push("one");break;
				case 2:wordarr.push("two");break;
				case 3:wordarr.push("three");break;
				case 4:wordarr.push("four");break;
				case 5:wordarr.push("five");break;
				case 6:wordarr.push("six");break;
				case 7:wordarr.push("seven");break;
				case 8:wordarr.push("eight");break;
				case 9:wordarr.push("nine");break;
			}
			numarr[0]=numarr[0]*10%1;
		}
	}
	var text=wordarr[0];
	for(i=1; i<wordarr.length; i++){
		text+=" "+wordarr[i];
	}
	return text;
}
function isPermutation(str1, str2){
	if(str1.length!=str2.length){
		return false;
	}
	var hash={};
	for(var i=0; i<str1.length; i++){
		if(hash[str1[i]]){
			hash[str1[i]]++;
		}else{
			hash[str1[i]]=1;
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
	if(str.length==0){
		arr.push(substr);
	}
	var chars={};
	for(var i=0; i<str.length; i++){
		if(!chars[str[i]]){
			chars[str[i]]=1;
			allPermutations(str.slice(0,i)+str.slice(i+1), substr+str[i], arr);
		}
	}
	return arr;
}
function isPangram(str){
	var chars={"a":0,"b":0,"c":0,"d":0,"e":0,"f":0,"g":0,"h":0,"i":0,"j":0,"k":0,"l":0,"m":0,"n":0,"o":0,"p":0,"q":0,"r":0,"s":0,"t":0,"u":0,"v":0,"w":0,"x":0,"y":0,"z":0};
	for(var i=0; i<str.length; i++){
		if(chars[str[i].toLowerCase()]===0){
			chars[str[i].toLowerCase()]++;
		}
	}
	for(i in chars){
		if(!chars[i]){
			return false;
		}
	}
	return true;
}
function isPerfectPangram(str){
	var chars={"a":1,"b":1,"c":1,"d":1,"e":1,"f":1,"g":1,"h":1,"i":1,"j":1,"k":1,"l":1,"m":1,"n":1,"o":1,"p":1,"q":1,"r":1,"s":1,"t":1,"u":1,"v":1,"w":1,"x":1,"y":1,"z":1};
	for(var i=0; i<str.length; i++){
		if((str[i]>="A"&&str[i]<="Z")||(str[i]>="a"&&str[i]<="z")){
			if(chars[str[i].toLowerCase()]){
				chars[str[i].toLowerCase()]--;
			}else{
				return false;
			}
		}
	}
	for(var x in chars){
		if(chars[x]){
			return false;
		}
	}
	return true;
}
function bestSingleBuySell(arr){
	var profit=0;
	var buy=0;
	for(var sell=1; sell<arr.length; sell++){
		var subprofit=arr[sell]-arr[buy];
		if(subprofit<=0){
			buy=sell;
		}else if(subprofit>profit){
			profit=subprofit;
		}
	}
	return profit;
}
function bestSeriesBuySell(arr){
	var profit=0;
	var buy=0;
	var sell=0;
	for(var i=1; i<arr.length; i++){
		if(arr[i]>=arr[i-1]){
			sell=i;
		}else{
			profit+=arr[sell]-arr[buy];
			buy=i;
			sell=i;
		}
	}
	return profit;
}
function bestDoubleBuySell(arr){
	var total=0;
	var profit=0;
	var buy=0;
	for(var sell=1; sell<arr.length; sell++){
		var subprofit=arr[sell]-arr[buy];
		if(subprofit<=0){
			buy=sell;
		}else if(subprofit>profit){
			profit=subprofit;
			var remaining=bestSingleBuySell(arr.slice(sell+1));
			if(profit+remaining>total){
				total=profit+remaining;
			}
		}
	}
	return total;
}
function bestKBuySell(arr, k){
	if(k==0){
		return 0;
	}
	var total=0;
	var profit=0;
	var buy=0;
	for(var sell=1; sell<arr.length; sell++){
		var subprofit=arr[sell]-arr[buy];
		if(subprofit<=0){
			buy=sell;
		}else if(subprofit>profit){
			profit=subprofit;
			var remaining=bestKBuySell(arr.slice(sell+1), k-1);
			if(profit+remaining>total){
				total=profit+remaining;
			}
		}
	}
	return total;
}