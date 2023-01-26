let left = document.getElementById('left'),
    right = document.getElementById('right'),
    slider = document.getElementById('js-slider');

right.style.opacity = '0.4';

left.addEventListener('click', function() {
    slider.style.backgroundImage = 'url(assets/img/clients/client%202.png)';
    left.style.opacity = '0.4';
    right.style.opacity = '1';
})

right.addEventListener('click', function() {
    slider.style.backgroundImage = 'url(assets/img/clients/client%201.png';
    left.style.opacity = '1';
    right.style.opacity = '0.4';
})