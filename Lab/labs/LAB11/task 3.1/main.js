let banner = document.getElementById('banner'),
    btn = document.getElementById('btn'),
    second = 0;

window.onload = function() {
    window.timerid = window.setInterval(timer, 1000);
    
    function timer() {
        second++;
        if (second == 5) {
            banner.style.display = 'flex';
            banner.style.position = 'fixed';
        } else {
            return;
        }
    }
}

function close() {
    banner.style.display = 'none';
}

btn.addEventListener('click', close);