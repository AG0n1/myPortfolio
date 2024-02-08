let hide_test = document.getElementById('js-middle-block-test'),
    cross = document.getElementById('cross-test'),
    btn_test = document.getElementById('js-button-test');

cross.addEventListener('click', function() {
    background.style.display = 'none';
    hide_test.style.display = 'none';
})

btn_test.addEventListener('click', function() {
    background.style.display = 'flex';
    background.style.position = 'fixed';
    hide_test.style.display = 'flex';
    hide_test.style.position = 'fixed';
})
    