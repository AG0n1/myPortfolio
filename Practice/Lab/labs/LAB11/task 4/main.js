let today = new Date(),
    daysInMounth = 0,
    days = document.getElementsByClassName('day'),
    next = document.getElementById('next'),
    year = document.getElementById('year'),
    month = document.getElementById('mounth'),
    nowYear = today.getFullYear(),
    nowMonth = today.getMonth(),
    previous = document.getElementById('previous'),
    arrMonth = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ],
    i = 0,
    j = 1;

function thisMounth() {

    today = new Date();

    for (i = 0; i < days.length; i++) {
        days[i].textContent = '';
    }

    /* Заполняю первую строку */

    year.textContent = nowYear;
    month.textContent = arrMonth[nowMonth];

    /* Присваиваю значение переменным */

    todayNumb = today.getDate();
    today = today.getDate();

    /* Нахожу количество дней в месяце */

    daysInMounth = 32 - new Date(2022, 5, 32).getDate();

    /* Закрашиваю сегодняшнее число */

    days[today + 1].style.background = '#708a0a';
    days[today + 1].style.color = '#c2ed15';

    /* Заполняю ячейки после сегодня */

    for (i = today; i < days.length; i++) {
        days[i].textContent = i - 1;
        if (i > daysInMounth) {
            break;
        }
    }

    /* Заполняю ячейки до сегодня */

    for (i = todayNumb; i > 0; i--) {
        days[i].textContent = i - 1;
        if (days[i].textContent == '0') {
            days[i].textContent = '';
        }
    }

    for (i = 0; i < days.length; i++) {
        if (days[i].textContent == '') {
            days[i].style.boxShadow = 'none';
        }
    }
}

thisMounth();

next.addEventListener('click', function () {
    j = 1;
    for (i = 0; i < days.length; i++) {
        days[i].textContent = '';
        days[i].style.background = '#c2ed15';
        days[i].style.color = 'black';
        days[i].style.boxShadow = 'none';
    }

    if (nowMonth < 11) {
        nowMonth++;
    } else {
        nowMonth = 0;
        nowYear++;
    }

    if (nowMonth == 5) {
        if (nowYear == '2022') {
            thisMounth();
            for (i = 0; i < days.length; i++) {
                if (days[i].textContent != '') {
                    days[i].style.boxShadow = 'inset 0px 0px 10px #708a0a';
                } else {
                    days[i].style.boxShadow = 'none'
                }
            }
            return;
        }
    }

    let nextMonth = new Date(nowYear, nowMonth),
        nextMonthDays = 31 - new Date(nowYear, nowMonth, 32).getDate(),
        nextDay = nextMonth.getDay(nowYear, nowMonth, 1);

    nextMonth = nextMonth.getMonth();

    /* Если вс */

    if (nextDay == 0) {
        nextDay = 7;
    }

    for (i = nextDay - 1; i < days.length; i++) {
        days[i].textContent = j;
        if (j > nextMonthDays) {
            break;
        }
        j++;
    }

    month.textContent = arrMonth[nowMonth];
    year.textContent = nowYear;

    for (i = 0; i < days.length; i++) {
        if (days[i].textContent != '') {
            days[i].style.boxShadow = 'inset 0px 0px 10px #708a0a';
        } else {
            days[i].style.boxShadow = 'none'
        }
    }
});

previous.addEventListener('click', function () {
    j = 1;
    for (i = 0; i < days.length; i++) {
        days[i].textContent = '';
        days[i].style.background = '#c2ed15';
        days[i].style.color = 'black';
        days[i].style.boxShadow = 'none';
    }

    if (nowMonth > 0) {
        nowMonth--;
    } else {
        nowMonth = 11;
        nowYear--;
    }

    /* Если сегодняшний месяц */

    if (nowMonth == 5) {
        if (nowYear == '2022') {
            thisMounth();
            for (i = 0; i < days.length; i++) {
                if (days[i].textContent != '') {
                    days[i].style.boxShadow = 'inset 0px 0px 10px #708a0a';
                } else {
                    days[i].style.boxShadow = 'none'
                }
            }
            return;
        }
    }

    let previousMonth = new Date(nowYear, nowMonth),
        previousMonthDays = 31 - new Date(nowYear, nowMonth, 32).getDate(),
        previousDay = previousMonth.getDay(nowYear, nowMonth, 1);

    previousMonth = previousMonth.getMonth();

    /* Если вс */

    if (previousDay == 0) {
        previousDay = 7;
    }

    /* Заполняю дни */

    for (i = previousDay - 1; i < days.length; i++) {
        days[i].textContent = j;
        if (j > previousMonthDays) {
            break;
        }
        j++;
    }

    month.textContent = arrMonth[nowMonth];
    year.textContent = nowYear;

    /* Убираю незаполненные ячейки */

    for (i = 0; i < days.length; i++) {
        if (days[i].textContent != '') {
            days[i].style.boxShadow = 'inset 0px 0px 10px #708a0a';
        } else {
            days[i].style.boxShadow = 'none'
        }
    }
});
