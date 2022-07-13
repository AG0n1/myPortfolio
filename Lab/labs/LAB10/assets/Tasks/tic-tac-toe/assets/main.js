let gmz = document.getElementsByClassName('gamezone'),
    again = document.getElementById('button'),
    result1 = document.getElementById('player1'),
    result2 = document.getElementById('player2'),
    ind = document.getElementsByClassName('indicator'),
    i = 0,
    x = 0,
    o = 0,
    step = 0;

function newGame() {
    for (i = 0; i < gmz.length; i++) {
        gmz[i].style = '';
        gmz[i].id = '';
    }
    step = 0;
}

function func() {

    function check() {
        if (step < 5) {
            return
        }

        function endGame() {
            if (step % 2 != 0) {
                x++;
                alert('Победил Х');
                result1.textContent = x;
            } else {
                o++;
                alert('Победил О')
                result2.textContent = o;
            }
        }

        switch (true) {
            // Проверка

            // Horizontal
            case (gmz[0].style.backgroundImage != '' && (gmz[0].style.backgroundImage == gmz[1].style.backgroundImage) && gmz[0].style.backgroundImage == gmz[2].style.backgroundImage):
                endGame();
                break;
            case ((gmz[3].style.backgroundImage != '') && (gmz[3].style.backgroundImage == gmz[4].style.backgroundImage) && gmz[3].style.backgroundImage == gmz[5].style.backgroundImage):
                endGame();
                break;
            case ((gmz[6].style.backgroundImage != '') && (gmz[6].style.backgroundImage == gmz[7].style.backgroundImage) && gmz[6].style.backgroundImage == gmz[8].style.backgroundImage):
                endGame();
                break;

                // Vertical

            case (gmz[0].style.backgroundImage != '' && (gmz[0].style.backgroundImage == gmz[3].style.backgroundImage) && gmz[0].style.backgroundImage == gmz[6].style.backgroundImage):
                endGame();
                break;
            case ((gmz[1].style.backgroundImage != '') && (gmz[1].style.backgroundImage == gmz[4].style.backgroundImage) && gmz[1].style.backgroundImage == gmz[7].style.backgroundImage):
                endGame();
                break;
            case ((gmz[2].style.backgroundImage != '') && (gmz[2].style.backgroundImage == gmz[5].style.backgroundImage) && gmz[2].style.backgroundImage == gmz[8].style.backgroundImage):
                endGame();
                break;

                // Diagonal
            case (gmz[0].style.backgroundImage != '' && (gmz[0].style.backgroundImage == gmz[4].style.backgroundImage) && gmz[0].style.backgroundImage == gmz[8].style.backgroundImage):
                endGame();
                break;
            case ((gmz[2].style.backgroundImage != '') && (gmz[2].style.backgroundImage == gmz[4].style.backgroundImage) && gmz[2].style.backgroundImage == gmz[6].style.backgroundImage):
                endGame();
                break;
            default: 
                if (step == 9) {
                    alert('Ничья');
                    return;
                }
        }
    }

    step++;
    if (step % 2 != 0) {
        if (!this.id) {
            this.style.backgroundImage = "url(assets/img/cross.png)";
            this.id = step;
            check();
        } else {
            step--;
            return
        }
    } else {
        if (!this.id) {
            this.style.backgroundImage = "url(assets/img/round.png)";
            this.id = step;
            check();
        } else {
            step--;
            return
        }
    }
}

for (i = 0; i < gmz.length; i++) {
    gmz[i].addEventListener('click', func);
}

again.addEventListener('click', newGame)
