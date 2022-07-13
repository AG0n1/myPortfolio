let kings = ["kingClubs1", "kingClubs2", "kingDiamonds1", "kingDiamonds2", "kingHearts1", "kingHearts2", "kingSpades1", "kingSpades2"];

let aceStack = new Map();
aceStack.set("ace1", new Array());
aceStack.set("ace2", new Array());
aceStack.set("ace3", new Array());
aceStack.set("ace4", new Array());
aceStack.set("ace5", new Array());
aceStack.set("ace6", new Array());
aceStack.set("ace7", new Array());
aceStack.set("ace8", new Array());

let cards = new Map();

cards.set(
    "aceClubs1",
    {
        id : "aceClubs1",
        url : "0.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 0

    });
cards.set(
    "aceClubs2",
    {
        id : "aceClubs2",
        url : "0.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 0
    });



cards.set(
    "twoClubs1",
    {
        id : "twoClubs1",
        url : "1.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 1
    });
cards.set(
    "twoClubs2",
    {
        id : "twoClubs2",
        url : "1.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 1
    });



cards.set(
    "threeClubs1",
    {
        id : "threeClubs1",
        url : "2.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 2
    });
cards.set(
    "threeClubs2",
    {
        id : "threeClubs2",
        url : "2.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 2
    });



cards.set(
    "fourClubs1",
    {
        id : "fourClubs1",
        url : "3.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 3
    });
cards.set(
    "fourClubs2",
    {
        id : "fourClubs2",
        url : "3.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 3
    });



cards.set(
    "fiveClubs1",
    {
        id : "fiveClubs1",
        url : "4.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 4
    });
cards.set(
    "fiveClubs2",
    {
        id : "fiveClubs2",
        url : "4.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 4
    });



cards.set(
    "sixClubs1",
    {
        id : "sixClubs1",
        url : "5.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 5
    });
cards.set(
    "sixClubs2",
    {
        id : "sixClubs2",
        url : "5.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 5
    });



cards.set(
    "sevenClubs1",
    {
        id : "sevenClubs1",
        url : "6.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 6
    });
cards.set(
    "sevenClubs2",
    {
        id : "sevenClubs2",
        url : "6.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 6
    });



cards.set(
    "eightClubs1",
    {
        id : "eightClubs1",
        url : "7.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 7
    });
cards.set(
    "eightClubs2",
    {
        id : "eightClubs2",
        url : "7.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 7
    });



cards.set(
    "nineClubs1",
    {
        id : "nineClubs1",
        url : "8.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 8
    });
cards.set(
    "nineClubs2",
    {
        id : "nineClubs2",
        url : "8.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 8
    });



cards.set(
    "tenClubs1",
    {
        id : "tenClubs1",
        url : "9.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 9
    });
cards.set(
    "tenClubs2",
    {
        id : "tenClubs2",
        url : "9.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 9
    });



cards.set(
    "jackClubs1",
    {
        id : "jackClubs1",
        url : "10.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 10
    });
cards.set(
    "jackClubs2",
    {
        id : "jackClubs2",
        url : "10.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 10
    });



cards.set(
    "queenClubs1",
    {
        id : "queenClubs1",
        url : "11.bmp",
        state : "hide",
        stackNumber : undefined
    });
cards.set(
    "queenClubs2",
    {
        id : "queenClubs2",
        url : "11.bmp",
        state : "hide",
        stackNumber : undefined
    });



cards.set(
    "kingClubs1",
    {
        id : "kingClubs1",
        url : "12.bmp",
        state : "hide",
        stackNumber : undefined
    });
cards.set(
    "kingClubs2",
    {
        id : "kingClubs2",
        url : "12.bmp",
        state : "hide",
        stackNumber : undefined
    });

//////////////////////////////////////////////////////////////////////////////////

cards.set(
    "aceDiamonds1",
    {
        id : "aceDiamonds1",
        url : "13.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 0
    });
cards.set(
    "aceDiamonds2",
    {
        id : "aceDiamonds2",
        url : "13.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 0
    });



cards.set(
    "twoDiamonds1",
    {
        id : "twoDiamonds1",
        url : "14.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 1
    });
cards.set(
    "twoDiamonds2",
    {
        id : "twoDiamonds2",
        url : "14.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 1
    });



cards.set(
    "threeDiamonds1",
    {
        id : "threeDiamonds1",
        url : "15.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 2
    });
cards.set(
    "threeDiamonds2",
    {
        id : "threeDiamonds2",
        url : "15.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 2
    });



cards.set(
    "fourDiamonds1",
    {
        id : "fourDiamonds1",
        url : "16.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 3
    });
cards.set(
    "fourDiamonds2",
    {
        id : "fourDiamonds2",
        url : "16.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 3
    });



cards.set(
    "fiveDiamonds1",
    {
        id : "fiveDiamonds1",
        url : "17.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 4
    });
cards.set(
    "fiveDiamonds2",
    {
        id : "fiveDiamonds2",
        url : "17.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 4
    });



cards.set(
    "sixDiamonds1",
    {
        id : "sixDiamonds1",
        url : "18.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 5
    });
cards.set(
    "sixDiamonds2",
    {
        id : "sixDiamonds2",
        url : "18.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 5
    });



cards.set(
    "sevenDiamonds1",
    {
        id : "sevenDiamonds1",
        url : "19.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 6
    });
cards.set(
    "sevenDiamonds2",
    {
        id : "sevenDiamonds2",
        url : "19.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 6
    });



cards.set(
    "eightDiamonds1",
    {
        id : "eightDiamonds1",
        url : "20.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 7
    });
cards.set(
    "eightDiamonds2",
    {
        id : "eightDiamonds2",
        url : "20.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 7
    });



cards.set(
    "nineDiamonds1",
    {
        id : "nineDiamonds1",
        url : "21.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 8
    });
cards.set(
    "nineDiamonds2",
    {
        id : "nineDiamonds2",
        url : "21.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 8
    });



cards.set(
    "tenDiamonds1",
    {
        id : "tenDiamonds1",
        url : "22.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 9
    });
cards.set(
    "tenDiamonds2",
    {
        id : "tenDiamonds2",
        url : "22.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 9
    });



cards.set(
    "jackDiamonds1",
    {
        id : "jackDiamonds1",
        url : "23.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 10
    });
cards.set(
    "jackDiamonds2",
    {
        id : "jackDiamonds2",
        url : "23.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 10
    });



cards.set(
    "queenDiamonds1",
    {
        id : "queenDiamonds1",
        url : "24.bmp",
        state : "hide",
        stackNumber : undefined
    });
cards.set(
    "queenDiamonds2",
    {
        id : "queenDiamonds2",
        url : "24.bmp",
        state : "hide",
        stackNumber : undefined
    });



cards.set(
    "kingDiamonds1",
    {
        id : "kingDiamonds1",
        url : "25.bmp",
        state : "hide",
        stackNumber : undefined
    });
cards.set(
    "kingDiamonds2",
    {
        id : "kingDiamonds2",
        url : "25.bmp",
        state : "hide",
        stackNumber : undefined
    });

//////////////////////////////////////////////////////////////////////////////////

cards.set(
    "aceHearts1",
    {
        id : "aceHearts1",
        url : "26.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 0
    });
cards.set(
    "aceHearts2",
    {
        id : "aceHearts2",
        url : "26.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 0
    });



cards.set(
    "twoHearts1",
    {
        id : "twoHearts1",
        url : "27.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 1
    });
cards.set(
    "twoHearts2",
    {
        id : "twoHearts2",
        url : "27.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 1
    });



cards.set(
    "threeHearts1",
    {
        id : "threeHearts1",
        url : "28.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 2
    });
cards.set(
    "threeHearts2",
    {
        id : "threeHearts2",
        url : "28.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 2
    });



cards.set(
    "fourHearts1",
    {
        id : "fourHearts1",
        url : "29.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 3
    });
cards.set(
    "fourHearts2",
    {
        id : "fourHearts2",
        url : "29.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 3
    });



cards.set(
    "fiveHearts1",
    {
        id : "fiveHearts1",
        url : "30.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 4
    });
cards.set(
    "fiveHearts2",
    {
        id : "fiveHearts2",
        url : "30.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 4
    });



cards.set(
    "sixHearts1",
    {
        id : "sixHearts1",
        url : "31.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 5
    });
cards.set(
    "sixHearts2",
    {
        id : "sixHearts2",
        url : "31.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 5
    });



cards.set(
    "sevenHearts1",
    {
        id : "sevenHearts1",
        url : "32.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 6
    });
cards.set(
    "sevenHearts2",
    {
        id : "sevenHearts2",
        url : "32.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 6
    });



cards.set(
    "eightHearts1",
    {
        id : "eightHearts1",
        url : "33.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 7
    });
cards.set(
    "eightHearts2",
    {
        id : "eightHearts2",
        url : "33.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 7
    });



cards.set(
    "nineHearts1",
    {
        id : "nineHearts1",
        url : "34.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 8
    });
cards.set(
    "nineHearts2",
    {
        id : "nineHearts2",
        url : "34.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 8
    });



cards.set(
    "tenHearts1",
    {
        id : "tenHearts1",
        url : "35.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 9
    });
cards.set(
    "tenHearts2",
    {
        id : "tenHearts2",
        url : "35.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 9
    });



cards.set(
    "jackHearts1",
    {
        id : "jackHearts1",
        url : "36.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 10
    });
cards.set(
    "jackHearts2",
    {
        id : "jackHearts2",
        url : "36.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 10
    });



cards.set(
    "queenHearts1",
    {
        id : "queenHearts1",
        url : "37.bmp",
        state : "hide",
        stackNumber : undefined
    });
cards.set(
    "queenHearts2",
    {
        id : "queenHearts2",
        url : "37.bmp",
        state : "hide",
        stackNumber : undefined
    });



cards.set(
    "kingHearts1",
    {
        id : "kingHearts1",
        url : "38.bmp",
        state : "hide",
        stackNumber : undefined
    });
cards.set(
    "kingHearts2",
    {
        id : "kingHearts2",
        url : "38.bmp",
        state : "hide",
        stackNumber : undefined
    });

//////////////////////////////////////////////////////////////////////////////////

cards.set(
    "aceSpades1",
    {
        id : "aceSpades1",
        url : "39.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 0
    });
cards.set(
    "aceSpades2",
    {
        id : "aceSpades2",
        url : "39.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 0
    });



cards.set(
    "twoSpades1",
    {
        id : "twoSpades1",
        url : "40.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 1
    });
cards.set(
    "twoSpades2",
    {
        id : "twoSpades2",
        url : "40.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 1
    });



cards.set(
    "threeSpades1",
    {
        id : "threeSpades1",
        url : "41.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 2
    });
cards.set(
    "threeSpades2",
    {
        id : "threeSpades2",
        url : "41.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 2
    });



cards.set(
    "fourSpades1",
    {
        id : "fourSpades1",
        url : "42.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 3
    });
cards.set(
    "fourSpades2",
    {
        id : "fourSpades2",
        url : "42.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 3
    });



cards.set(
    "fiveSpades1",
    {
        id : "fiveSpades1",
        url : "43.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 4
    });
cards.set(
    "fiveSpades2",
    {
        id : "fiveSpades2",
        url : "43.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 4
    });



cards.set(
    "sixSpades1",
    {
        id : "sixSpades1",
        url : "44.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 5
    });
cards.set(
    "sixSpades2",
    {
        id : "sixSpades2",
        url : "44.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 5
    });



cards.set(
    "sevenSpades1",
    {
        id : "sevenSpades1",
        url : "45.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 6
    });
cards.set(
    "sevenSpades2",
    {
        id : "sevenSpades2",
        url : "45.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 6
    });



cards.set(
    "eightSpades1",
    {
        id : "eightSpades1",
        url : "46.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 7
    });
cards.set(
    "eightSpades2",
    {
        id : "eightSpades2",
        url : "46.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 7
    });



cards.set(
    "nineSpades1",
    {
        id : "nineSpades1",
        url : "47.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 8
    });
cards.set(
    "nineSpades2",
    {
        id : "nineSpades2",
        url : "47.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 8
    });



cards.set(
    "tenSpades1",
    {
        id : "tenSpades1",
        url : "48.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 9
    });
cards.set(
    "tenSpades2",
    {
        id : "tenSpades2",
        url : "48.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 9
    });



cards.set(
    "jackSpades1",
    {
        id : "jackSpades1",
        url : "49.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 10
    });
cards.set(
    "jackSpades2",
    {
        id : "jackSpades2",
        url : "49.bmp",
        state : "hide",
        stackNumber : undefined,
        volume : 10
    });



cards.set(
    "queenSpades1",
    {
        id : "queenSpades1",
        url : "50.bmp",
        state : "hide",
        stackNumber : undefined
    });
cards.set(
    "queenSpades2",
    {
        id : "queenSpades2",
        url : "50.bmp",
        state : "hide",
        stackNumber : undefined
    });



cards.set(
    "kingSpades1",
    {
        id : "kingSpades1",
        url : "51.bmp",
        state : "hide",
        stackNumber : undefined
    });
cards.set(
    "kingSpades2",
    {
        id : "kingSpades2",
        url : "51.bmp",
        state : "hide",
        stackNumber : undefined
    });