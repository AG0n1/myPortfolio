let js = document.getElementById("JavaScript"),
    php = document.getElementById("php"),
    as = document.getElementById("assembler"),
    pascal = document.getElementById("pascal"),
    btn = document.getElementsByClassName("about");

function func() {
    let idValue = event.target.id;
    
    switch (true) {
        case (idValue == 1):
            js.style.display = 'block';
            php.style.display = 'none';
            as.style.display = 'none';
            pascal.style.display = 'none';
            break;
        
        case (idValue == 2):
            js.style.display = 'none';
            php.style.display = 'block';
            as.style.display = 'none';
            pascal.style.display = 'none';
            break;
        
        case (idValue == 3):
            js.style.display = 'none';
            php.style.display = 'none';
            as.style.display = 'block';
            pascal.style.display = 'none';
            break;
            
        case (idValue == 4):
            js.style.display = 'none';
            php.style.display = 'none';
            as.style.display = 'none';
            pascal.style.display = 'block';
            break;
    }
}

for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', func);
}