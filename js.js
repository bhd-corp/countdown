document.getElementById('i').onclick = function() {
// seconds //;
let j = document.getElementById('dis');
j.style.display = 'none';
let load = document.getElementById('load');
load.style.display = 'block';
let k = document.getElementById('n');
setTimeout( function(){
load.style.display = 'none';
k.style.display = 'block';
let dis = document.getElementById('dis');
dis.style.display = 'none';
let sec = 60;
let h1s = document.getElementById('sec');
setInterval( function(){
	sec-=1;
	h1s.innerHTML = sec;
	if (sec <= 9) {
		h1s.innerHTML = '0'+sec;
		if (sec <= 0) {
			sec = 60;
			h1s.innerHTML = sec;
		}
	}
}, 1000);
// minuts //
let min = Math.random() * 60;
min = Math.floor(min);
let mins = document.getElementById('min');
mins.innerHTML = min;
if (min <= 10) {
	mins.innerHTML = '0' + min;
	}
setInterval( function(){
	min-=1;
	mins.innerHTML = min;
	if (min <= 10) {
	mins.innerHTML = '0' + min;
	}
	else if (min <= 0) {
			min = 60;
			mins.innerHTML = min;
			hrs-=1;
		}

}, 60000);

//day//
let day = Math.random() * 365;
day = Math.floor(day);
let days = document.getElementById('day');
days.innerHTML = day;
if (day > 100) {
	days.style.left = '210px';
}
else if (day <= 10) {
	days.innerHTML = '0' + day;
	}

// hrs///
let hrs = Math.random() * 90;
let hrss = document.getElementById('hrs');
hrs = Math.floor(hrs);
hrss.innerHTML = hrs;
if (hrs <= 10) {
	hrss.innerHTML = '0' + hrs;
}
// yrs //
let yrs = Math.random(0) * 80;
let yrss = document.getElementById('yrs');
yrs = Math.floor(yrs);
yrss.innerHTML = yrs;
if (yrs <= 10) {
	yrss.innerHTML = '0' + yrs;
}
else if (yrs == 0) {
	yrss.innerHTML = '00';
	yrss.style.color = 'red';
}
}, 5000);
}