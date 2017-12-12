// JavaScript conversion to 32-bit signed integers is in two's complement format (32nd bit is sign, not value)
// numbers with 32nd bit set will not match results of book when logged (bits are still correct)
// those are represented below as negative two's complement so that logging is accurate
// Bitwise AND
0b010101 & 0b0110111 == 0b0010101 == 0x15 == 21
57 & 87 == 0b0111001 & 0b1010111 == 0b0010001 == 0x11 == 17
0b01101001 & 0b00011000 == 0b00001000 == 0x08 == 8
0xBABE & 0xBEEF == 0b1011101010111110 && 0b1011111011101111 == 0b1011101010101110 == 0xBAAE == 47790

// Bitwise OR
0b010101 | 0b0110111 == 0b0110111 == 0x37 == 55
57 | 87 == 0b111001 | 0b1010111 == 0b1111111 == 0x7F == 127
0b01101001 | 0b00011000 == 0b01111001 == 0x79 == 121
0xBABE | 0xBEEF == 0b1011101010111110 | 0b1011111011101111 == 0b1011111011111111 == 0xBEFF == 48895

// Bitwise NOT
// ~x == -(x+1)
~0b010101 == -0b010110 == -0x16 == -22
~0b0110111 == -0b0111000 == -0x38 == -56
~5787 == -5788 == -0b1011010011100 == -0x169C
~0b01101001 == -0b01101010 == -0x6A == -106
~0b00011000 == -0b00011001 == -0x19 == -25
~0xBABE == -0xBABF == -0b1011101010111111 == -47807
~0xBEEF == -0xBEF0 == -0b1011111011110000 == -48880

// Bitwise XOR
0b010101 ^ 0b0110111 == 0b0100010 == 0x22 == 34
57 ^ 87 == 0b0111001 ^ 0b1010111 == 0b1101110 == 0x6E == 110
0b01101001 ^ 0b00011000 == 0b01110001 == 0x71 == 113
0x0BADCACA ^ 0xD00DAD == 0b00001011101011011100101011001010 ^ 0b110100000000110110101101 == 0b00001011011111011100011101100111 == 0x0B7DC767 == 192792423
0xCAFED00D ^ 0xDECAF == 0b11001010111111101101000000001101 ^ 0b11011110110010101111 == -0b00110101000000010010111111110011 ^ 0b11011110110010101111 == -0b00110101000011001100001101011110 == -0x350CC35E == -890028894
123 ^ 124 == 0b1111011 ^ 0b1111100 == 0b0000111 == 0x07 == 7

// Bitwise LSL
0b010101 << 7 == 0b101010000000 == 0xA80 == 2688
57 << 8 == 0b111001 << 8 == 0b11100100000000 == 0x3900 == 14592
0b01101001 << 0b00000111 == 0b01101001 << 7 == 0b011010010000000 == 0x3480 == 13440
0xF00D << 0xA == 0b1111000000001101 << 10 == 0b11110000000011010000000000 == 0x3C03400 == 62927872
0x000BABEE << 0b1 == 0b10111010101111101110 << 1 == 0b101110101011111011100 == 0x1757DC == 1529820
42 << 0xA == 0b101010 << 10 == 0b1010100000000000 == 0xA800 == 43008

// Bitwise LSR
0b0101010101 >>> 7 == 0b010 == 0x2 == 2
157 >>> 3 == 0b10011101 >>> 3 == 0b10011 == 0x13 == 19
0b10110100101010011 >>> 15 == 0b10 == 0x2 == 2
0b00011000 >>> 2 == 0b000110 == 0x06 == 6
0xDEADBEEF >>> 0xA == 0b11011110101011011011111011101111 >>> 10 == 0b1101111010101101101111 == 0x37AB6F == 3648367
0xCAFEBABE >>> 0b11 == 0b11001010111111101011101010111110 >>> 3 == 0b11001010111111101011101010111 == 0x195FD757 == 425711447

function countInBinary(bits, bitcount=0, str="0b"){
	if(bits==bitcount){
		console.log(str);
	}else{
		countInBinary(bits, bitcount+1, str+"0");
		countInBinary(bits, bitcount+1, str+"1");
	}
}
function countSetBits1(num){
	var count=0;
	while(num){
		count+=num&1;
		num>>>=1;
	}
	return count;
}
function countSetBits2(num){
	var count=0;
	while(num){
		num&=num-1;
		count++;
	}
	return count;
}
function reverseBits(num){
	var rev=0;
	for(var i=0; i<32; i++){
		rev<<=1;
		rev|=num&1;
		num>>>=1;
	}
	return rev;
}
function encodeBytesTo32(bytes){
	return bytes[0]<<24|bytes[1]<<16|bytes[2]<<8|bytes[3];
}
function decode32ToBytes(code){
	return [code>>>24, code>>>16&0xFF, code>>>8&0xFF, code&0xFF];
}
function ByteArray(){
	var ints=[];
	this.set=function(index, value){
		var idx=Math.floor(index/4);
		var shift=8*(3-index%4);
		if(ints[idx]){
			ints[idx]&=~(0xFF<<shift);
			ints[idx]|=value<<shift;
		}else{
			ints[idx]=value<<shift;
		}
		return this;
	}
	this.get=function(index){
		var idx=Math.floor(index/4);
		if(ints[idx]){
			return ints[idx]>>>8*(3-index%4)&0xFF;
		}
		return 0;
	}
}
function encodeBitNum(bitval, bitnum, val){
	val&=~(1<<bitnum);
	val|=bitval<<bitnum;
	return val;
}
function decodeBitNum(bitnum, val){
	return val>>>bitnum&1;
}
function BitArray(){
	var ints=[];
	this.set=function(index, val){
		var idx=Math.floor(index/32);
		var shift=31-index%32;
		if(ints[idx]){
			ints[idx]&=~(1<<shift);
			ints[idx]|=val<<shift;
		}else{
			ints[idx]=val<<shift;
		}
		return this;
	}
	this.get=function(index){
		var idx=Math.floor(index/32);
		if(ints[idx]){
			return ints[idx]>>>31-index%32&1;
		}
		return 0;
	}
}
function radixSort2(arr){
	var bit=0;
	while(bit<32){
		var count=[0,0];
		for(var i=0; i<arr.length; i++){
			count[arr[i]>>>bit&1]++;
		}
		count[1]+=count[0];
		var sorted=[];
		for(i=arr.length-1; i>=0; i--){
			var bitval=arr[i]>>>bit&1;
			count[bitval]--;
			sorted[count[bitval]]=arr[i];
		}
		bit++;
		arr=sorted;
	}
	return arr;
}
var RAIN_SENS=false;
var SENS_OVERRIDE=false;
var SYS_TEST=false;
var SYS_DISABLE=false;
function sprinklers(){
	var minute=Math.floor(Date.now()%8.64e+7/60000); // gets minute of day, cycle starts at 0, can offset as needed
	if(SYS_DISABLE){
		return 0;
	}else if(SYS_TEST){
		return 1<<minute%28;
	}else if((!SENS_OVERRIDE&&RAIN_SENS)||minute>=28*20){ // no sprinklers if past daily cycle
		return 0;
	}else{
		return 1<<Math.floor(minute/20);
	}
}
function LED2Numeral(ledByte){
	var ledmap={0b1110111:0, 0b0100100:1, 0b1011101:2, 0b1101101:3, 0b0101110:4, 0b1101011:5, 0b1111011:6, 0b0100101:7, 0b1111111:8, 0b0101111:9};
	return ledmap[ledByte];
}
// note that a readout of "0" does not map to 0 as the book specifies
function Int2LED(value){
	var intmap={0:0b1110111, 1:0b0100100, 2:0b1011101, 3:0b1101101, 4:0b0101110, 5:0b1101011, 6:0b1111011, 7:0b0100101, 8:0b1111111, 9:0b0101111};
	var readout=String(value);
	var bytes=[];
	for(var i=readout.length-1; i>=0; i--){
		bytes.push(intmap[readout[i]]);
	}
	return bytes;
}