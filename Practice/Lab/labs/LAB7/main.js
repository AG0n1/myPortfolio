function button_1() {
    let a = 40,
        b = 9;
    alert(a % b);
}
// ---------------------------
function button_2() {
    let a = prompt("Введите первое число"),
        b = prompt("Введите второе число");
    if (a % b == 0) {
        alert("Делится " + a / b);
    } else {
        alert("Не делится " + a % b);
    }
}
// ---------------------------
function button_3() {
    let st = Math.pow(4, 17);
    alert(st);
}
// ---------------------------
function button_4() {
    alert(Math.sqrt(245));
}
// ---------------------------
function button_5() {
    let arr = [4,5,5,19,13,0,10],
        result = 0;
    for (var i = 0; i < arr.length; i++) {
        result = result + Math.pow(arr[i], 3);
    }
    alert(Math.sqrt(result));
}
// ---------------------------
function button_6() {
    let number = Math.sqrt(444);
    alert(Math.round(number));
    alert(number.toFixed(1));
    alert(number.toFixed(2));
    alert(number.toFixed(3));
}
// ---------------------------
function button_7() {
    let number = Math.sqrt(1887),
        obj = {
            floor: Math.floor(number),
            ceil: Math.ceil(number),
        };
    console.log(obj);
}
// ---------------------------
function button_8() {
    let min = Math.min(4,-2,5,19, -130,0,10),
        max = Math.max(4,-2,5,19, -130,0,10);
    alert("Минимальное значение: " + min + "\n" + "Максимальное значение: " + max);
}
// ---------------------------
function button_9() {
    let number = Math.floor(Math.random()*(400-1)+1);
    alert(number);
}
// ---------------------------
function button_10() {
    let min = prompt("Введите минимальное значение:"),
        max = prompt("Введите максимальное значение:"),
        arr = [];
    for (var i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random()*(max-min) + min);
    }
    alert(arr);
}
// ---------------------------
function button_11() {
    let a = prompt("Введите первое число"),
        b = prompt("Введите второе число");
    alert(Math.abs(a - b));
}
// ---------------------------
function button_12() {
    let a = prompt("Введите первое число"),
        b = prompt("Введите второе число"),
        c = Math.abs(a - b);
    alert(c);
}
// ---------------------------
let practice = document.getElementById('practice'),
    elem = document.getElementById('elem'),
    text = document.getElementById('text'),
    text_1 = document.getElementById('text_1'),
    secondText = document.getElementById('secondText'),
    secondText_2 = document.getElementById('secondText_2'),
    text_2 = document.getElementById('text_2'),
    neibor = document.getElementById('neibor'),
    neibor_down = document.getElementById('neibor_down'),
    neibor_down_2 = document.getElementById('neibor_down_2'),
    text_3 = document.getElementById('text_3'),
    secondText_3 = document.getElementById('secondText_3'),
    parent = document.getElementById('parent'),
    child = document.getElementById('child'),
    elem_ol = document.getElementById('elem_ol'),
    elem_ol_2 = document.getElementById('elem_ol_2'),
    elem_ol_3 = document.getElementsByTagName('li'),
    test = document.querySelector('.test'),
    btn = document.getElementById('button_button'),
    cloneplace = document.getElementById('cloneplace'),
    btn_1 = document.getElementById('btn');
    i = 0;
// ---------------------------
function delete_1() {
    practice.delete;
}
// ---------------------------
function button_13() {
    text.innerHTML = "Задание 1";
    secondText.innerHTML = "Задание 2";
    elem.firstElementChild.style.color = 'red';
}
// ---------------------------
function button_14() {
    text.innerHTML = "Задание 2";
    secondText.innerHTML = "Задание 2";
    elem.firstElementChild.style.color = 'black';
    elem.lastElementChild.style.color = 'red';
}
// ---------------------------
function button_15() {
    text.innerHTML = "Задание 3";
    secondText.innerHTML = "Задание 3";
    elem.lastElementChild.style.color = 'black';
    for (i = 0; i < elem.children.length; i++) {
        elem.children[i].innerHTML += '!';
    }
}
// ---------------------------
function button_16() {
    text.innerHTML = "Задание 4";
    secondText.innerHTML = "Задание 4";
    text_1.innerHTML = "Потомок соседа сверху 1";
    secondText_1.innerHTML = "Потомок соседа сверху 2";
    elem.previousElementSibling.innerHTML += '!';
    for (i = 0; i < neibor.children.length; i++) {
        neibor.children[i].innerHTML += '!';
    }
}
// ---------------------------
function button_17() {
    text.innerHTML = "Задание 5";
    secondText.innerHTML = "Задание 5";
    neibor.innerHTML = "";
    text_2.innerHTML = "Потомок соседа снизу 1";
    secondText_2.innerHTML = "Потомок соседа снизу 2";
    elem.nextElementSibling.innerHTML += "!";
    for (i = 0; i < neibor_down.children.length; i++) {
        neibor_down.children[i].innerHTML += '!';
    }
}
// ---------------------------
function button_18() {
    text.innerHTML = "Задание 6";
    secondText.innerHTML = "Задание 6";
    text_2.innerHTML = "Потомок соседа снизу 1";
    secondText_2.innerHTML = "Потомок соседа снизу 2";
    text_3.innerHTML = "Потомок следующего соседа снизу 1";
    secondText_3.innerHTML = "Потомок следующего соседа снизу 2";
    elem.nextElementSibling.nextElementSibling += '!';
    for (i = 0; i < neibor_down_2.children.length; i++) {
        neibor_down_2.children[i].innerHTML += '!';
    }
}
// ---------------------------
function button_19() {
    
    text.innerHTML = "Задание 7";
    elem.parentNode.style.background = 'red';
}
// ---------------------------
function button_20() {
    text.innerHTML = "Задание 8";
    text.parentNode.parentNode.style.background = 'red';
}
// ---------------------------
function button_21() {
    parent.removeChild(child);
}
// ---------------------------
function button_22() {
    elem_ol.removeChild(elem_ol.lastElementChild);
}
// ---------------------------
function button_23() {
    elem_ol_2.addEventListener('click', del);
    function del() {
        this.parentElement.removeChild(this);
    }
}
// ---------------------------
function button_24() {
    for (i = 0; i < elem_ol_3.length; i++) {
        elem_ol_3[i].addEventListener('click', del);
    }
    function del() {
        this.parentElement.removeChild(this);
    }
}
// ---------------------------
function button_25() {
    let clone = test.cloneNode(true);
    cloneplace.parentElement.appendChild(clone);
}
// ---------------------------
    main = document.getElementById('main');
    btn_1.addEventListener('click', last);
    function last() {   
        main.remove();
    }