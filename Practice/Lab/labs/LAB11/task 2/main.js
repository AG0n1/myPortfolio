let arrNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
    gmz = document.getElementsByClassName('gamezone'),
    table = document.getElementById('table'),
    time = document.getElementById('timer'),
    timeVar = document.getElementById('inp'),
    step = 0,
    timeCount = 0,
    i = 0;

function fillingIn() {
    time.textContent = timeVar.value;
    arrNumber.sort(function() {
        return Math.random() - 0.5;
    });
    
    for (i = 0; i < gmz.length; i++) {
        gmz[i].textContent = arrNumber[i];
    }
}

function main() {
    if (timeVar.value == '') {
        return;
    }
    timeCount += 1;
    if (timeCount > 1) {
        stop();
    }
    
    time.textContent = timeVar.value;
    window.timerId = window.setInterval(timer, 1000);
    function stop() {
        alert("Вы проиграли!");
            for (i = 0; i < gmz.length; i++) {
                gmz[i].textContent = '';
                gmz[i].style.boxShadow = 'none';
            }
            step = 0;
        time.textContent = '';
        window.clearInterval(window.timerId);
    }
    
    function timer() {
        let last = parseInt(time.innerHTML) - 1;
        time.innerHTML = last;
        if (last == 0) {
            stop();
        }
    }
    
    fillingIn();
}

timeVar.addEventListener('blur', main);

table.addEventListener('click', function() {
    if (time.textContent != 0) {
        step++;
        let value = event.target.textContent,
            idValue = event.target.id;
        if (parseInt(value) == step) {
            gmz[parseInt(idValue) - 1].style.boxShadow = 'inset 0px 0px 40px #40ff46';
        } else {
            alert("Вы проиграли!");
            for (i = 0; i < gmz.length; i++) {
                gmz[i].style.boxShadow = 'none';
            }
            
            step = 0;
            fillingIn();
        }
        if (step == 16) {
            alert ("Поздравляю, Вы победили!");
            for (i = 0; i < gmz.length; i++) {
                gmz[i].style.boxShadow = 'none';
            }
            step = 0;
            fillingIn();
        }  
    } else {
        return
    }
        
    });