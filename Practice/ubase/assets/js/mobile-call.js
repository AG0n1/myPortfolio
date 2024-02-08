let mobileHideMenu = document.getElementById('mobile-header-menu'),
    mobileMenu = document.getElementById('menu'),
    mobileCall = document.getElementById('call'),
    mobileHideCall = document.getElementById('mobile-header-call'),
    mobileButtonCall = document.getElementById('mobile-button-nav-menu'),
    isOpen = false;

mobileMenu.addEventListener('click', function() {
    if (isOpen == false) {
        mobileHideMenu.style.display = 'flex';
        isOpen = true
    } else {
        mobileHideMenu.style.display = 'none';
        isOpen = false
    }
})

mobileCall.addEventListener('click', function() {
    mobileHideCall.style.display = 'flex';
    mobileHideCall.style.position = 'fixed';
    background.style.display = 'flex';
    background.style.position = 'fixed';
})

mobileButtonCall.addEventListener('click', function() {
    mobileHideMenu.style.display = 'none';
    mobileHideCall.style.display = 'flex';
    mobileHideCall.style.position = 'fixed';
    background.style.display = 'flex';
    background.style.position = 'fixed';
})

function mobileCross() {
    mobileHideCall.style.display = 'none';
    background.style.display = 'none';
}
