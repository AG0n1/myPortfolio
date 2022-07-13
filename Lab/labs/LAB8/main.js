let i = 0;

//                      Задание 1

// Часть А

function button_1() {
    let input = document.getElementById('input_task_1');
        let sum = 0,
            res = 0,
            arr = input.value.split(',');
        for (i = 0; i < arr.length; i++) {
            sum += Number(arr[i]);
        }
        res = sum / arr.length;
        input.value = res;
        
}

// Часть Б

function button_2() {
    let par = document.getElementsByClassName('p_task_2'),
        btn = document.getElementById('button_task_2'),
        arr = [],
            result = document.getElementById('p_task_2_result');
        for (i = 0; i < par.length; i++) {
            arr[i] = par[i].innerHTML;
        }
        result.innerHTML = arr.sort();
}

//                      Задание 2

// Часть А

function button_3() {
    let par = document.getElementsByClassName('p_task_3'),
        btn = document.getElementById('button_task_3'),
        inp = document.getElementById('input_task_3'),
        number = 0;
    console.log(par.length);
    for (i = 0; i < par.length; i++) {
        par[i].addEventListener('click', func);
    }
    
    function func() {
        number++;
        inp.value = number;
    }
}

// Часть Б
let number = 0;
function button_4() {
    window.setInterval(timer_1, 1000);
}
    
function timer_1() {
   let par = document.getElementById('p_task_4');
       number++;
       if (number % 2 == 0) {
           par.style.color = "red";
       } else {
           par.style.color = "blue";
       }
}

//                      Задание 3

function button_5() {
    let inp = document.getElementsByClassName('input_task_5'),
        par = document.getElementById('p_task_5'),
        arr = [];
    for (i = 0; i < inp.length; i++) {
        inp[i].addEventListener('change', func);
    }
    
    function func() {
        if (this.checked) {
            arr.push(this.value);
            par.innerHTML = arr;
        }
    }
}

//                      Задание 4

function button_6() {
    let par = document.getElementsByClassName('td_task_5'),
        max = '',
        num = 0;
    for (i = 0; i < par.length; i++) {
        if (par[i].innerHTML > max) {
            max = par[i].innerHTML;
            num = i;
        }
    }
    console.log(par.length);
    par[num].style.background = 'red';
}

//                      Задние 5

function button_7() {
    let wdh = document.getElementById('for_width'),
        hgt = document.getElementById('for_height'),
        table = document.getElementById('table_task_5'),
        num1 = wdh.value,
        num2 = hgt.value;
    for (i = 0; i < num1; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < num2; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    table.style.margin = "20px";
}