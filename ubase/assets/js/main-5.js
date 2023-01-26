let svg = document.getElementsByClassName('main-5-ico'),
    list = document.getElementsByClassName('js-list'),
    hide = document.getElementsByClassName('js-ul-hide'),
    arrow = document.getElementsByClassName('js-arrow'),
    isOpened = document.getElementsByClassName('main-5-ul-li-showed'),
    i = 0;

for (i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function () {
        let idValue = this.id;
        
        for (let j = 0; j < list.length; j++) {
            if (j != idValue) {
                // Return the default styles to the elements of the remaining blocks
                
                list[j].style.background = 'white';
                list[j].style.color = '#003F50';
                svg[j].style.fill = "#003F50";
                hide[j].style.display = 'none';
                arrow[j].style.fill = '#003F50';
                arrow[j].style.rotate = '0deg';
                isOpened[j].id = ''
                
            } else {
                // Changing the styles of the current block
                if (isOpened[j].id == 'open') {
                    list[j].style.background = 'white';
                    list[j].style.color = '#003F50';
                    svg[j].style.fill = "#003F50";
                    hide[j].style.display = 'none';
                    arrow[j].style.fill = '#003F50';
                    arrow[j].style.rotate = '0deg'
                    isOpened[j].id = ''
                    return
                }
                this.style.background = '#003F50',
                this.style.color = 'white',
                svg[j].style.fill = 'white',
                hide[j].style.display = 'block',
                arrow[j].style.rotate = '180deg'
                arrow[j].style.fill = '#fff'
                isOpened[j].id = 'open'
            }
        }
    })
}