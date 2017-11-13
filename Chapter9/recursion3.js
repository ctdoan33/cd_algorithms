function sumOfSquares(num, root=1, sum=0, arr=[]){
	if(sum==num){
		console.log(arr.join(" + "));
	}else if(sum<num&&root*root<=num){
		var newarr=arr.slice();
		newarr.push(root*root);
		sumOfSquares(num, root+1, sum, arr);
		sumOfSquares(num, root+1, sum+root*root, newarr);
	}
}
function allValidNPairsOfParens(num, open=0, close=0, str="", arr=[]){
	if(close==num){
		arr.push(str);
	}
	if(open<num){
		allValidNPairsOfParens(num, open+1, close, str+"(", arr);
	}
	if(open>close){
		allValidNPairsOfParens(num, open, close+1, str+")", arr);
	}
	return arr;
}
function towersOfHanoi(sPole, tPole, dPole, disks=sPole.size()){
	if(disks==1){
		dPole.push(sPole.pop());
	}else if(disks>1){
		towersOfHanoi(sPole, dPole, tPole, disks-1);
		dPole.push(sPole.pop());
		towersOfHanoi(tPole, sPole, dPole);
	}
}
function ipAddresses(str, points=0, substr="", arr=[]){
	if(points==3&&Number(str)<256){
		arr.push(substr+str);
		return arr;
	}
	if(str.length>1){
		ipAddresses(str.slice(1), points+1, substr+str.slice(0,1)+".", arr);
	}
	if(str.length>2){
		ipAddresses(str.slice(2), points+1, substr+str.slice(0,2)+".", arr);
	}
	if(str.length>3&&Number(str.slice(0,3))<256){
		ipAddresses(str.slice(3), points+1, substr+str.slice(0,3)+".", arr);
	}
	return arr;
}
function unevenDigits(num, idx=0){
	var str=String(num);
	if(idx==str.length){
		return num;
	}else if(Number(str[idx])%2===0){
		return unevenDigits(Number(str.slice(0, idx)+str.slice(idx+1)), idx);
	}else{
		return unevenDigits(num, idx+1);
	}
}
function generateAllCoinChange(cents, coin=2, change={"quarters":0, "dimes":0, "nickels":0, "pennies":0}, arr=[]){
	if(coin<0){
		change["pennies"]=cents;
		arr.push(change);
		return arr;
	}
	var newmap=Object.assign({}, change);
	var denom=[[5,"nickels"],[10,"dimes"],[25,"quarters"]];
	while(cents>=0){
		generateAllCoinChange(cents, coin-1, newmap, arr);
		cents-=denom[coin][0];
		var newmap=Object.assign({}, newmap);
		newmap[denom[coin][1]]++;
	}
	return arr;
}
// Assume positions are given as [row, column] from top left, zero-based
// recursion can't be reasonably applied to some problems, some are forced recursion
// Book specifies return true if square is threatened, but solution given is opposite (matches function name)
function isChessMoveSafe(intendedMove, queen){
	var dx=Math.abs(intendedMove[0]-queen[0]);
	var dy=Math.abs(intendedMove[1]-queen[1]);
	if(dx==0||dy==0||dx-dy==0){
		return false;
	}
	return true;
}
function isChessMoveSafeArr(intendedMove, queens, i=0){
	if(queens.length==i){
		return true;
	}
	if(isChessMoveSafe(intendedMove, queens[i])){
		return isChessMoveSafeArr(intendedMove, queens, i+1);
	}
	return false;
}
function allSafeChessSquares(queen, x=0, safe=[]){
	if(x==8){
		return safe;
	}
	for(var y=0; y<8; y++){
		if(isChessMoveSafe([x,y], queen)){
			safe.push([x,y]);
		}
	}
	allSafeChessSquares(queen, x+1, safe);
	return safe;
}
function allSafeChessSquaresArr(queens, i=0, safe=[]){
	if(queens.length==i){
		return safe;
	}
	for(var x=0; x<8; x++){
		for(var y=0; y<8; y++){
			if(isChessMoveSafeArr([x,y], queens)){
				safe.push([x,y]);
			}
		}
	}
	allSafeChessSquaresArr(queens, i+1, safe);
	return safe;
}
// can either return an array of arr solution of queen positions, or a matrix representing the board
function eightQueens(queens=[], arrangements=[]){
	var x=queens.length;
	for(var y=0; y<8; y++){
		if(isChessMoveSafeArr([x,y], queens)){
			var newqueens=queens.slice();
			newqueens.push([x,y]);
			if(x==7){
				arrangements.push(newqueens);
			}else{
				eightQueens(newqueens, arrangements);
			}
		}
	}
	return arrangements;
}
function display8Queens(queens){
	var border="---------------------------------";
	for(var i=0; i<queens.length; i++){
		console.log(border);
		for(var j=0; j<8; j++){
			var row="|";
			for(var k=0; k<8; k++){
				if(queens[i][j][1]==k){
					row+=" Q |";
				}else{
					row+="   |";
				}
			}
			console.log(row);
			console.log(border);
		}
	}
}
function nQueens(n, xSize, ySize, x=0, queens=[], arrangements=[]){
	if(n-queens.length>xSize-x){
		return;
	}
	for(var y=0; y<ySize; y++){
		if(isChessMoveSafeArr([x,y], queens)){
			var newqueens=queens.slice();
			newqueens.push([x,y]);
			if(newqueens.length==n){
				arrangements.push(newqueens);
			}else{
				nQueens(n, xSize, ySize, x+1, newqueens, arrangements);
			}
		}
	}
	nQueens(n, xSize, ySize, x+1, queens, arrangements);
	return arrangements;
}