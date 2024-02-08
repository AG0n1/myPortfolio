let radio = document.getElementsByClassName('radio');

for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener('click', function() {
        alert(i);
    })
}