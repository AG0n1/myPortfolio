let countries = ["Afghanistan",
                "Albania",
                "Bahamas",
                "Bangladesh",
                "Belarus",
                "Canada",
                "China",
                "Cuba",
                "Denmark",
                "Dominicana",
                "Egypt",
                "Ecuador",
                "Germany",
                "Ukrain",
                "USA"],
    input = document.getElementById('inp'),
    list = document.getElementById('list');

function selectWord(event) {
    let targ = event.target;
        input.value = targ.innerHTML;
        list.textContent = ''; 
}

function complite() {
    let val = input.value.toLowerCase();
    if (val) {
        let words = countries.filter(function (item) {
            return item.toLowerCase().indexOf(val) === 0;
        });
        list.innerHTML = output(words);
    } else {
        list.textContent = '';
    }
}

function output(words) {
    let out = "";
    for (var i = 0; i < words.length; i++) {
        out += '<div>' + words[i] + '</div>'
    }
    return out;
}

input.addEventListener('keyup', complite);
list.addEventListener('click', selectWord);
