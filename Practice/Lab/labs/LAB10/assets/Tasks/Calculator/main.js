const arr = ['0','1','2','3','4','5','6','7','8','9','.'],
      action = ['+', '-', '*', '/', '+/-', '%'];

let number1 = '',
    number2 = '',
    sign = '',
    result = '',
    out = document.getElementById('par'),
    ac = document.getElementById('clearAll'),
    btn = document.getElementById('buttons'),
    expression = '',
    i = 0;

function count() {
    if (!event.target.classList.contains('btn')) {
        return;
    } // Если нажата не кнопка
    
    
    ac.addEventListener('click', clearAll);
    function clearAll() {
        number1 = '';
        number2 = '';
        out.innerHTML = '0';
    }
    
    let expression = event.target.textContent;
    for (i = 0; i < arr.length; i++) {
        if (expression == arr[i]) {
            number1 = number1 + arr[i];
            out.innerHTML = number1;
            break;
        } else {
            if (expression == action[i]) {
                sign = action[i];
                if (sign == '+/-') {
                        number1 = -number1;
                        out.textContent = number1;
                        break;
                    
                } // Превращаю в обратное
                number2 = number1;
                number1 = '';
                out.innerHTML = sign;
                break;
            }
        }
    }
    
    function division() {
        result = number2 / number1;
        result = parseInt(result * 1000);
        result = result / 1000;
    }
    
    switch (true) {
        case(sign == '+'): result = parseFloat(number2) + parseFloat(number1);
            break;
        case(sign == '-'): result = number2 - number1;
            break;
        case(sign == '*'): result = number2 * number1;
            break;
        case(sign == '/'): division();
            break;
        case(sign == '%'): result = (number2 * number1) / 100;
            break;
    }
    
    if (expression == '=') {
        out.textContent = result;
        number1 = result;
    }
}
btn.addEventListener('click', count);