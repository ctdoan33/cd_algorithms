function weekdayName(weekdayNum){
	switch(weekdayNum){
		case 1: console.log("Sunday"); break;
		case 2: console.log("Monday"); break;
		case 3: console.log("Tuesday"); break;
		case 4: console.log("Wednesday"); break;
		case 5: console.log("Thursday"); break;
		case 6: console.log("Friday"); break;
		case 7: console.log("Saturday");
	}
}
function weekdayName2(dayNum){
	var weekdayNum=dayNum%7;
	switch(weekdayNum){
		case 1: console.log("Sunday"); break;
		case 2: console.log("Monday"); break;
		case 3: console.log("Tuesday"); break;
		case 4: console.log("Wednesday"); break;
		case 5: console.log("Thursday"); break;
		case 6: console.log("Friday"); break;
		case 0: console.log("Saturday");
	}
	return weekdayNum;
}
function someDays(){
	var day;
	for(var i=1; i<=17; i++){
		day=weekdayName2(Math.trunc(Math.random()*365+1));
		if(day>=2){
			console.log("Work hard!");
		}else{
			console.log("Enjoy your day off!");
		}
	}
}
function monthName(monthNum){
	var months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return arr[monthNum-1];
}
function monthToDays(monthNum){
	switch(monthNum){
		case 1: return 31;
		case 2: return 28;
		case 3: return 31;
		case 4: return 30;
		case 5: return 31;
		case 6: return 30;
		case 7: return 31;
		case 8: return 31;
		case 9: return 30;
		case 10: return 31;
		case 11: return 30;
		case 12: return 31;
	}
}
function dayToMonth(dayNum){
	if(dayNum<32){
		return "January";
	}else if(dayNum<60){
		return "February";
	}else if(dayNum<91){
		return "March";
	}else if(dayNum<121){
		return "April";
	}else if(dayNum<152){
		return "May";
	}else if(dayNum<182){
		return "June";
	}else if(dayNum<213){
		return "July";
	}else if(dayNum<244){
		return "August";
	}else if(dayNum<274){
		return "September";
	}else if(dayNum<305){
		return "October";
	}else if(dayNum<335){
		return "November";
	}else{
		return "December";
	}
}
function fullDate(dayNum){
	var yeardate="";
	var weekdayNum=dayNum%7;
	switch(weekdayNum){
		case 1: yeardate+="Sunday, "; break;
		case 2: yeardate+="Monday, "; break;
		case 3: yeardate+="Tuesday, "; break;
		case 4: yeardate+="Wednesday, "; break;
		case 5: yeardate+="Thursday, "; break;
		case 6: yeardate+="Friday, "; break;
		case 0: yeardate+="Saturday, ";
	}
	if(dayNum<32){
		yeardate+="January "+dayNum;
	}else if(dayNum<60){
		dayNum-=31;
		yeardate+="February "+dayNum;
	}else if(dayNum<91){
		dayNum-=59;
		yeardate+="March "+dayNum;
	}else if(dayNum<121){
		dayNum-=90;
		yeardate+="April "+dayNum;
	}else if(dayNum<152){
		dayNum-=120;
		yeardate+="May "+dayNum;
	}else if(dayNum<182){
		dayNum-=151;
		yeardate+="June "+dayNum;
	}else if(dayNum<213){
		dayNum-=181;
		yeardate+="July "+dayNum;
	}else if(dayNum<244){
		dayNum-=212;
		yeardate+="August "+dayNum;
	}else if(dayNum<274){
		dayNum-=243;
		yeardate+="September "+dayNum;
	}else if(dayNum<305){
		dayNum-=273;
		yeardate+="October "+dayNum;
	}else if(dayNum<335){
		dayNum-=304;
		yeardate+="November "+dayNum;
	}else{
		dayNum-=334
		yeardate+="December "+dayNum;
	}
	return yeardate+", 2017";
}
function fullDate2(dayNum){
	var yeardate="";
	var weekdayNum=dayNum%7;
	switch(weekdayNum){
		case 1: yeardate+="Sunday, "; break;
		case 2: yeardate+="Monday, "; break;
		case 3: yeardate+="Tuesday, "; break;
		case 4: yeardate+="Wednesday, "; break;
		case 5: yeardate+="Thursday, "; break;
		case 6: yeardate+="Friday, "; break;
		case 0: yeardate+="Saturday, ";
	}
	var year=2017;
	var leap=false;
	while(!leap&&dayNum>365||(leap&&dayNum>366)){
		if(leap){
			dayNum-=366;
		}else{
			dayNum-=365;
		}
		year++;
		if(year%4==0){
			leap=true;
		}else{
			leap=false;
		}
	}
	if(dayNum<32){
		yeardate+="January "+dayNum;
	}else if(!leap&&dayNum<60||(leap&&dayNum<61)){
		dayNum-=31;
		yeardate+="February "+dayNum;
	}else{
		if(leap){
		dayNum-=1;
		}
		if(dayNum<91){
			dayNum-=59;
			yeardate+="March "+dayNum;
		}else if(dayNum<121){
			dayNum-=90;
			yeardate+="April "+dayNum;
		}else if(dayNum<152){
			dayNum-=120;
			yeardate+="May "+dayNum;
		}else if(dayNum<182){
			dayNum-=151;
			yeardate+="June "+dayNum;
		}else if(dayNum<213){
			dayNum-=181;
			yeardate+="July "+dayNum;
		}else if(dayNum<244){
			dayNum-=212;
			yeardate+="August "+dayNum;
		}else if(dayNum<274){
			dayNum-=243;
			yeardate+="September "+dayNum;
		}else if(dayNum<305){
			dayNum-=273;
			yeardate+="October "+dayNum;
		}else if(dayNum<335){
			dayNum-=304;
			yeardate+="November "+dayNum;
		}else{
			dayNum-=334
			yeardate+="December "+dayNum;
		}
	}
	return yeardate+", "+year;
}
function fullDate3(dayNum){
	var yeardate="";
	var weekdayNum=dayNum%7;
	switch(weekdayNum){
		case 1: yeardate+="Sunday, "; break;
		case 2: yeardate+="Monday, "; break;
		case 3: yeardate+="Tuesday, "; break;
		case 4: yeardate+="Wednesday, "; break;
		case 5: yeardate+="Thursday, "; break;
		case 6: yeardate+="Friday, "; break;
		case 0: yeardate+="Saturday, ";
	}
	var year=2017;
	var leap=false;
	while(!leap&&dayNum>365||(leap&&dayNum>366)){
		if(leap){
			dayNum-=366;
		}else{
			dayNum-=365;
		}
		year++;
		if(year%4==0&&year%100!=0||year%400==0){
			leap=true;
		}else{
			leap=false;
		}
	}
	if(dayNum<32){
		yeardate+="January "+dayNum;
	}else if(!leap&&dayNum<60||(leap&&dayNum<61)){
		dayNum-=31;
		yeardate+="February "+dayNum;
	}else{
		if(leap){
		dayNum-=1;
		}
		if(dayNum<91){
			dayNum-=59;
			yeardate+="March "+dayNum;
		}else if(dayNum<121){
			dayNum-=90;
			yeardate+="April "+dayNum;
		}else if(dayNum<152){
			dayNum-=120;
			yeardate+="May "+dayNum;
		}else if(dayNum<182){
			dayNum-=151;
			yeardate+="June "+dayNum;
		}else if(dayNum<213){
			dayNum-=181;
			yeardate+="July "+dayNum;
		}else if(dayNum<244){
			dayNum-=212;
			yeardate+="August "+dayNum;
		}else if(dayNum<274){
			dayNum-=243;
			yeardate+="September "+dayNum;
		}else if(dayNum<305){
			dayNum-=273;
			yeardate+="October "+dayNum;
		}else if(dayNum<335){
			dayNum-=304;
			yeardate+="November "+dayNum;
		}else{
			dayNum-=334
			yeardate+="December "+dayNum;
		}
	}
	return yeardate+", "+year;
}