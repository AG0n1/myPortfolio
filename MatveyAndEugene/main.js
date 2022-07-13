let bg,
    bgg,
    selected,
    selectedId;

let kingsStack = new Map();
let cardPlace;
let cardsCancel;
let dragCheck = true;
let innerId;
let deleteId, deleteSelectedId, deleteSelected;
let check;
let wrongPlace = true;

let dragEvent = (id) => {
    wrongPlace = true;
    cardPlace = document.getElementById(id);
    setTimeout(() => {
        selected = kingsStack.get(id).pop();
        cardsCancel = id;
        selectedId = id;
        if (kingsStack.get(id).length >= 1) {
            bgg = cardPlace;
            bg = cardPlace.style.backgroundImage;
            cardPlace.style.backgroundImage = "url(assets/Bmp/" + cards.get(kingsStack.get(id).at(-1)).url + ")";
        }
        return bg;
    }, 0)
}

let dropEvent = (id) => {
    check = false;
    document.getElementById(id)?.classList?.remove('hovered');

    if (id.includes("king")) {
        check = kings.includes(cards.get(kingsStack.get(id).at(-1)).id);

        if (check || compareRule(cards.get(kingsStack.get(id).at(-1)).volume, cards.get(selected).volume)) {
            kingsStack.get(id).push(selected);
            setDelete(id);
        }
        else {
            returnBackToKingStack();
        }
    }
    else if (id.includes("ace")) {
        if (compareRule(cards.get(selected).volume, cards.get(aceStack.get(id).at(-1)).volume)) {
            aceStack.get(id).push(selected);
            setDelete(id);
        }
        else {
            returnBackToKingStack();
        }
    }

    setCardBackGround(innerId);
    wrongPlace = false;
    winCheck();
}

let setDelete = id => {
    deleteId = id;
    deleteSelectedId = selectedId;
    deleteSelected = selected;
    innerId = id;
}

let returnBackToKingStack = () => {
    kingsStack.get(selectedId).push(selected);
    innerId = selectedId;
}

let cancel = () => {
    if (dragCheck === true) {
        let from;
        let to;
        let previous;

        if (deleteId.includes("king")) {
            kingsStack.get(deleteId).pop();
            kingsStack.get(deleteSelectedId).push(deleteSelected);
            previous = kingsStack.get(deleteId).at(-1);
        }
        else if (deleteId.includes("ace")) {
            aceStack.get(deleteId).pop();
            kingsStack.get(deleteSelectedId).push(deleteSelected);
            previous = aceStack.get(deleteId).at(-1);
        }

        from = document.getElementById(deleteSelectedId);
        to = document.getElementById(deleteId);

        from.style.backgroundImage = to.style.backgroundImage;
        to.style.backgroundImage = "url(assets/Bmp/" + cards.get(previous).url + ")";

        from.classList.remove('hovered');
        to.classList.remove('hovered');
        dragCheck = false;
    }
}

let setCardBackGround = id => {
    let cardPlace = document.getElementById(id);
    cardPlace.style.backgroundImage = bg;
    cardPlace.classList.remove('hovered');
}

let dragOver = () => {
    event.preventDefault();
    let cardPlace = document.getElementById(event.target.id);
    cardPlace.style.opacity = '1';
}

let dragEnter = (id) => {
    document.getElementById(id).classList.add('hovered');
}

let dragLeave = (id) => {
    document.getElementById(id).classList.remove('hovered');
}

let dragEnd = (id) => {
    if (wrongPlace) {
        kingsStack.get(selectedId).push(selected);
        setCardBackGround(selectedId);
    }
}

let dragPrevent = id => {
    if (kings.includes(cards.get(kingsStack.get(id).at(-1)).id)) {
        document.getElementById(id).setAttribute('draggable', false);
    }
    else {
        document.getElementById(id).setAttribute('draggable', true);
    }
}

let compareRule = (val1, val2) => (val1 - val2) === 1;

let setCard = (cardPlaceId, cardId) => {
    let cardPlace = document.getElementById(cardPlaceId);
    cardPlace.style.backgroundImage = "url(assets/Bmp/" + cards.get(cardId).url + ")";
}

function newGame() {
    let sortedCards = new Map([...cards.entries()].sort(() => Math.random() - 0.5));
    let king = kings[Math.floor((Math.random() * 8))];

    sortedCards.delete(king);

    let kingCount = 0;
    let aceCount = 1;
    let queenCount = 1;
    setCard("king0", king);
    kingsStack.set("king0", new Array(king));

    sortedCards.forEach(item => {
        if (item.id.includes("king")) {
            kingCount ++;
            setCard("king" + kingCount, item.id);
            kingsStack.set("king" + kingCount, new Array(item.id));
        }
        else if (item.id.includes("ace")) {
            aceStack.get("ace" + aceCount).push(item.id);
            setCard("ace" + aceCount, item.id);
            aceCount ++;
        }
        else if (item.id.includes("queen")) {
            setCard("queen" + queenCount, item.id);
            queenCount ++;
        }
        else {
            kingsStack.get("king" + kingCount).push(item.id);
            setCard("king" + kingCount, item.id);
        }

    });

    dragCheck = true;
}

let winCheck = () => {
    let winResult = true;
    kingsStack.forEach((value, key) => {
        if (!(kingsStack.get(key).at(-1)).includes("king")) {
            winResult = false;
        }
    });

    if (winResult) {
        setCardBackGround(selectedId);
        alert("Game over!!! You are winner!!!");
    }

    let kingCard = document.getElementsByClassName('king_kard');

    for (let kingCount = 0; kingCount < 8; kingCount++) {
        kingCard[kingCount].style.backgroundImage = kingsStack.get("king" + kingCount).url;
    }
}

let exit = () => {
    let card = document.getElementsByClassName('kard')
    for (let count = 0; count < card.length; count++) {
        card[count].style.backgroundImage = 'none';
    }
}