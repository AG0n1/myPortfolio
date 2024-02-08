function addZero(num){
	if (num <=9) { 
        return '0'+num;
    } else { return num; }
}


function button_1() {
    let a = 40,
        i = 0,
        arr_1 = [];
    for (i = 0; i <= a; i++) {
        arr_1.push(i);
    }
    alert(arr_1.join("\n"));
}
// -----------------------------------
function button_2() {
    let a = 170,
        i = 0,
        arr_1 = []
    for (i = 4; i <= a; i++) {
        arr_1.push(i);
    }
    alert(arr_1.join("\n"));
}
// -----------------------------------
function button_3() {
   let a = 40,
       i = 0,
       arr_1 = [];
   for (i = 0; i <= a; i++) {
       if (i % 2 == 0) {
           arr_1.push(i);  
       }
   }
   alert(arr_1.join("\n"));
   }
// -----------------------------------
function button_4() {
   let a = 170,
       i = 0,
       result = 0;
   for (i = 4; i <= a; i++) {
       result = result + i;
   }
   alert(result);
   }
 // -----------------------------------
 function button_5() {
     let arr_1 = [1,2,3,4,5],
         i = 0;
     for (i = 0; i < arr_1.length; i++) {
          alert(arr_1[i]);
     }
 }
 // -----------------------------------
 function button_6() {
     let arr_1 = [1,2,3,4,5],
         i = 0,
         result = 0;
     for (i = 0; i < arr_1.length; i++) {
          result = result + arr_1[i];
     }
     alert(result);
 }
 // -----------------------------------
 function button_7() {
     let obj = {
         green: 'Зеленый',
         red: 'Красный',
         blue: 'Голубой',
     },
         i = 0;
     for (i in obj) {
         alert(obj[i]);
     }
 }
 // -----------------------------------
 function button_8() {
     let obj = {
         Kolya: 200,
         Petya: 300,
         Vasya: 400,
     },
         i = 0;
     for (i in obj) {
         alert(i + " salary is " + obj[i] + "$");
     }
 }
 // -----------------------------------
 function button_9() {
     let arr = [10, 20, 30, 50, 235, 3000],
        arr_1 = [];
    for (let i = 0; i < arr.length; i++) {
        let num = String(arr[i]);
        let char = num[0];
        if (char == 1 || char == 2 || char == 5) {
            arr_1.push(arr[i]);
        }
    }
    alert(arr_1);
}
// -----------------------------------
function button_10() {
    let date = new Date(),
        arrOfDate = [],
        arrOfTime = [],
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        seconds = date.getSeconds();
    if (day < 10) {
        day = String(day);
        day = "0" + day;
    }
    if (month < 10) {
        month = String(month);
        month = "0" + month;
    }
    if (year < 10) {
        year = String(year);
        year = "0" + year;
    } 
    arrOfDate.push(day, month, year);
    arrOfTime.push(hour, minute, seconds);
    alert(arrOfDate.join("\n") + "\n" + arrOfTime.join(":") + " " + arrOfDate.join("."));    
}
// -----------------------------------
function button_11() {
    let date = new Date(),
        day = date.getDay(),
        days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    while (day > 7) {
        day = day - 7;
    }
    let past = new Date(2015, 0, 7),
        pastDay = past.getDay();
    function showDay(i) {
        let daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
     return daysOfWeek[i];
    }
    alert(day + "\n" + days[day] + "\n" + "7го янвваря 2015 года был(а) " + showDay(pastDay));
}
// -----------------------------------
function button_12() {
    let date = new Date(),
        minutes = Math.floor(date.getTime() / (60000));
    alert(minutes);
}
// -----------------------------------
function button_13() {
    let time = Date.parse('1988-03-01T00:00:00'),
        date = new Date(),
        now = date.getTime(),
        result = now - time;
        result = Math.floor(result / 1000 * 60 * 60);
    alert(result);
}
// -----------------------------------
function button_14() {
    let date = new Date(),
    now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0),
    result = Math.floor((date.getTime() - now.getTime()) / 1000);
    alert(result);
}
// -----------------------------------
function button_15() {
    let now = new Date(),
        endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23 , 59, 59),
        result = Math.floor((endOfDay.getTime() - now.getTime() )/ 1000);
    alert(result);
}
// -----------------------------------
function button_16() {
    window.setInterval(timer_1, 1000);
}
function timer_1() {
    let firstTimer = document.getElementById('Timer_11');
    Timer_11.innerHTML = parseInt(Timer_11.innerHTML) + 1;
}
// -----------------------------------
function start() {
	window.timerId = window.setInterval(timer_2, 1000);
}
function stop() {
	window.clearInterval(window.timerId);
}
function timer_2() {
	let secondTimer = document.getElementById('test');
	secondTimer.innerHTML = parseInt(test.innerHTML)+1;
}
// -----------------------------------
function button_18() {
	window.timerId = window.setInterval(Timer_3, 1000);
}

function Timer_3(){
	let timer_3 = document.getElementById('timer_3'),
	    date = new Date();
	timer_3.innerHTML = addZero(date.getHours())+':'+addZero(date.getMinutes())+':'+addZero(date.getSeconds());
}

// -----------------------------------
function button_19(){
	window.timerId = window.setInterval(timer, 1000);
}
function stop(){
	window.clearInterval(window.timerId);
}
function timer(){
	let test = document.getElementById('timer_4'),
        last = parseInt(test.innerHTML) - 1;
	test.innerHTML = last;
	if (last == 0) {
		stop();
	}
}
// -----------------------------------
function button_20() {
    window.timerId = window.setInterval(timer_4, 1000);
}
function timer_4() {
    let nowDate = new Date(),
        test = document.getElementById('timer_5'),
        endDay = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 23, 59, 59),
        timeRemain = endDay - nowDate,
        hours = Math.floor((timeRemain) / (1000 * 60 * 60)),
        minutes = Math.floor((timeRemain - (hours * 1000 * 60 * 60))/ (1000 * 60)),
        seconds = Math.floor((timeRemain  - (hours * 1000 * 60 * 60) - (minutes * 1000 * 60))/ 1000);
    test.innerHTML = (addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds));
}
// -----------------------------------
function input() {
    let bday = document.getElementById('bday_input').value,
        now = new Date(),
        newDate = new Date(),
        days = Math.trunc((Date.parse(bday) - newDate.getTime())/ (1000 * 60 * 60 * 24)) * -1,
        day = 0,
        i = 0;
    while (days > 365) {
        days = days - day;
        i++;
        if (i == 3) {
            day++;
            i = 0;
        }
    }
    alert(day);
}
