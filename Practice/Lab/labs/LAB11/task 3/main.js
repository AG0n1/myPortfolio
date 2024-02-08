let pixels = 1000,
    indicator = 0,
    banner = document.getElementById('banner'),
    body = document.body,
    btn = document.getElementById('btn');

function func() {
    if (pageYOffset > pixels - 100 && pageYOffset < pixels + 100) {
        banner.style.display = 'flex';
        banner.style.position = 'fixed';
    }
}

function close() {
    banner.style.display = 'none';
}

window.addEventListener('scroll', func);

btn.addEventListener('click', close);