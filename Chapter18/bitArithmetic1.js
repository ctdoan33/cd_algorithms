// Decimal to Octal Practice
13 == 0o15
6 == 0o6
25 == 0o31
8 == 0o10
45 == 0o55
10 == 0o12
-9 == -0o11
64 == 0o100
255 == 0o377

// Octal to Decimal Practice
0o610 == 392
0o5 == 5
0o26 == 22
0o47 == 39
0o302 == 194
0o0 == 0
-0o12 == -10
0o76 == 62
0o101 == 65

function dec2OctStr(value){
	if(value>=0){
		var str="0o";
	}else{
		var str="-0o";
		value*=-1;
	}
	var power=0;
	while(value/Math.pow(8, power)>=8){
		power++;
	}
	while(power>=0){
		str+=Math.floor(value/Math.pow(8, power));
		value=value%Math.pow(8, power);
		power--;
	}
	return str;
}
function octStr2Val(str){
	var value=0;
	var power=0;
	var idx=str.length-1;
	while(str[idx]!="o"){
		value+=Number(str[idx])*Math.pow(8, power);
		power++;
		idx--;
	}
	if(str[0]=="-"){
		value*=-1;
	}
	return value;
}
// Decimal to Hexadecimal
13 == 0xD
6 == 0x6
25 == 0x19
8 == 0x8
45 == 0x2D
10 == 0xA
-9 == -0x9
64 == 0x40
255 == 0xFF
238 == 0xEE

// Hexadecimal to Decimal
0xDB == 219
0x5 == 5
0x20C == 524
0x4F == 79
0xB2 == 178
0x0 == 0
-0x12 == -18
0x7E == 126
0x101 == 257

function dec2HexStr(value){
	var hexmap={0:"0", 1:"1", 2:"2", 3:"3", 4:"4", 5:"5", 6:"6", 7:"7", 8:"8", 9:"9", 10:"A", 11:"B", 12:"C", 13:"D", 14:"E", 15:"F"}
	if(value>=0){
		var str="0x";
	}else{
		var str="-0x";
		value*=-1;
	}
	var power=0;
	while(value/Math.pow(16, power)>=16){
		power++;
	}
	while(power>=0){
		str+=hexmap[Math.floor(value/Math.pow(16, power))];
		value=value%Math.pow(16, power);
		power--;
	}
	return str;
}
function hexStr2Val(str){
	var decmap={"0":0, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "A":10, "B":11, "C":12, "D":13, "E":14, "F":15}
	var value=0;
	var power=0;
	var idx=str.length-1;
	while(str[idx]!="x"){
		value+=decmap[str[idx]]*Math.pow(16, power);
		power++;
		idx--;
	}
	if(str[0]=="-"){
		value*=-1;
	}
	return value;
}
// Decimal to Binary
13 == 0b1101
6 == 0b110
25 == 0b11001
8 == 0b1000
45 == 0b101101
10 == 0b1010
-9 == -0b1001
64 == 0b1000000
255 == 0b11111111
128 == 0b10000000
35 == 0b100011
0 == 0b0
198 == 0b11000110

// Binary to Decimal
0b10100101 == 165
0b111 == 7
0b1111000 == 120
0b110110 == 54
0b000 == 0
0b11 == 3
-0b1010 == -10
0b100110 == 38
0b1010101010 == 682
0b111001 == 57
0b100101 == 37

function dec2BinStr(value){
	if(value>=0){
		var str="0b";
	}else{
		var str="-0b";
		value*=-1;
	}
	var power=0;
	while(value/Math.pow(2, power)>=2){
		power++;
	}
	while(power>=0){
		str+=Math.floor(value/Math.pow(2, power));
		value=value%Math.pow(2, power);
		power--;
	}
	return str;
}
function binStr2Val(str){
	var value=0;
	var power=0;
	var idx=str.length-1;
	while(str[idx]!="b"){
		value+=Number(str[idx])*Math.pow(2, power);
		power++;
		idx--;
	}
	if(str[0]=="-"){
		value*=-1;
	}
	return value;
}
function reorderWordFragments(arr, ordered=[]){
	if(arr.length==0){
		return ordered;
	}
	var minfrag=null;
	var minorder=null;
	for(var i=0; i<arr.length; i++){
		var frag="";
		for(var j=0; j<arr[i].length; j++){
			if(arr[i][j]=="?"){
				if(ordered.length){
					frag+=ordered[ordered.length-1][j];	
				}else{
					frag+="A";
				}
			}else{
				if(ordered.length&&arr[i][j]<ordered[ordered.length-1][j]){
					return null;
				}else{
					frag+=arr[i][j];
				}
			}
		}
		if(!minfrag||frag<minfrag){
			var test=ordered.slice();
			test.push(frag);
			var result=reorderWordFragments(arr.slice(0,i).concat(arr.slice(i+1)), test);
			if(result){
				minfrag=frag;
				minorder=result;
			}
		}
	}
	return minorder;
}