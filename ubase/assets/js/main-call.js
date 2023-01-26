let background = document.getElementById('js-hide'),
    block = document.getElementById('js-middle-block-call'),
    close = document.getElementById('cross'),
    btn = document.getElementById('button-call');

close.addEventListener('click', function() {
    background.style.display = 'none';
    block.style.display = 'none';
})

btn.addEventListener('click', function() {
    background.style.display = 'flex';
    background.style.position = 'fixed';
    block.style.display = 'flex';
    block.style.position = 'fixed';
})
    