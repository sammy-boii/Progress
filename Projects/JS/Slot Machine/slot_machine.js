/*

?  npm init
?  npm i prompt-sync


TODO :  ESSENTIAL PRECAUTIONARY MEASURES TO COMPREHEND PRIOR TO UNDERTAKING THE ASSIMILATION OF THIS ABUNDANCE OF SUPERFLUOUS   CLUTTER:

* when adding elements into an array they get added into different columns of the same row so...  A, B, C 

* matrix = [[1, 2, 3],
*          [4, 5, 6],
*          [7, 8, 9]]

* to access 5 it's matrix[1][1] so when u do matrix[0] it represents the first row matrix[1] = second row.... 

*/

const prompt = require("prompt-sync")();  // importing that prompt-sync module which we installed and assingning it to prompt

const SYMBOLS_COUNT = {  // snake case

    "🏆": 1,
    "💎": 2,
    "🗿": 3,
    "🩻": 3,
    "🍒": 4,
    "💲": 6,
    "🌈": 6
}

// these are number of symbols in each reel / column

const SYMBOLS_VALUES = {  // no need quotes btw

    "🏆": 100,
    "💎": 10,
    "🩻": 5,
    "🗿": 5,
    "🍒": 2,
    "💲": 1,
    "🌈": 0.75
}

// and these are their value or multiplier so diamond being most valuable is the least in amount

const deposit = () => {
    while (true) {
        const depositAmount = parseFloat((prompt("Enter deposit amount 🤑🤑: \t")));
        if (isNaN(depositAmount) || depositAmount <= 0) {
            console.log("Invalid Deposit Amount!!! 😑😑");
        }
        else {
            return depositAmount;
        }
    }
};

// isNaN() checks if it is NaN or use typeof (depositAmount) == 'number' 

const lines = () => {
    while (true) {
        const numberOfLines = parseFloat((prompt("Enter the number of lines to bet on (1-3) 🎰🎰: \t")));
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid  Input!!! 🫤🫤");
        }
        else {
            return numberOfLines;
        }
    }
};

const bet = (balance, numberOfLines) => {
    while (true) {
        const betAmount = parseFloat((prompt("Enter the amount you want to bet per slot 💲💲: \t")));
        if (isNaN(betAmount) || betAmount <= 0 || betAmount * numberOfLines > balance) {
            console.log("Invalid Bet Amount!!! 😩😩");
        }
        else {
            return betAmount;
        }
    }
};

const spin = () => {

    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {

        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }


    // Object.entries returns the keys and values of SYMBOLS_COUNTS and they are stored in symbol and count.
    // and a symbol is retrived and the number of symbols present per reel added to an array.


    const reels = [[], [], []];
    for (let i = 0; i < 3; i++) {                 // this is for reels / columns
        const reelSymbols = [...symbols];

        for (let j = 0; j < 3; j++) {            // this is for rows

            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);

        }
    }
    return reels;

}

/*

so 3 reels is created and symbols for each reels is copied to 'reelSymbols'

i represents each reel and j represents each row so meaning the first column first row will be filled and then first column second column and then first column third row. and if the symbol is already filled out it is removed so a reel cannot have more than 1 💎. after that we move onto a new reel where the symbols are restocked hence the initialization after i.

*/

const transpose = (reels) => {
    const newReels = [];

    for (let i = 0; i < 3; i++) {           // this represents rows
        newReels.push([]);

        for (let j = 0; j < 3; j++) {        // this represents columns
            newReels[i].push(reels[j][i]);
        }
    }
    return newReels;
}

/*

a new array 'newReels' is created and where a new empty array is added inside it each time it moves to a new row.
so [ [] ] ..... [ [], [] ] .....[ [], [], [] ]

in line 113 row-1 column-1 element is added to row -1 column-1 of newReels, row-1 column-2 element is added to row 2 column-1 and row-1 column-3 element is added to row-3 column-1

*/


function display(newReels) {
    console.log("\n💲𝕊𝕃𝕆𝕋 𝕄𝔸ℂℍ𝕀ℕ𝔼💲\n")
    console.log("╔════╦════╦════╗");
    for (let i = 0; i < 3; i++) {
        let row = "║";
        for (let j = 0; j < 3; j++) {
            const emoji = newReels[i][j];
            row += ` ${emoji} │`;
        }
        console.log(row);
        if (i !== 2) {
            console.log("╠════╬════╬════╣");
        }
    }
    console.log("╚════╩════╩════╝");
    console.log("\n🎉🎊 CONGRATS!🎉🎊\n")
}


function getWinnings(newReels, betAmount, numberOfLines) {
    let winnings = 0;
    let jackpot = false;

    for (let i = 0; i < numberOfLines; i++) {
        const symbols = newReels[i];
        let check = true;

        for (let j = 1; j < symbols.length; j++) {
            if (symbols[j] !== symbols[0]) {
                check = false;
                break;
            }
        }

        if (check) {
            const symbol = symbols[0];
            winnings += betAmount * SYMBOLS_VALUES[symbol];
            if (symbol === '🏆') {
                jackpot = true;
            }
        }
    }

    if (jackpot) {
        console.log("\n✨🎉👑  JACKPOT!!! ✨🎉👑\n");
    }

    return winnings;
}


/*

each row is checked. if all the symbols in that row match the first symbol (or any other) then check is true and the winnings is calculated. 

const myObject = {
  key1: 'value1'
};

const keyVariable = 'key1';

a = myObject[keyVariable];
b = myObject.key1;

in this both a and b will be 'value1'. in first instance the key was stored in a variable and since it'll be converted into a string upon doing so it cannot be accessed normally like b using period so [ ] are used. same logic above.

*/


const startGame = () => {

    let balance = deposit();

    while (true) {
        console.log(`\n\nYour Balance:💲${balance}\n\n`);

        const numberOfLines = lines();
        const betAmount = bet(balance, numberOfLines);
        balance -= betAmount * numberOfLines;

        const reels = spin();
        const newReels = transpose(reels);
        display(newReels);

        const winnings = getWinnings(newReels, betAmount, numberOfLines, );
        balance += winnings;

        console.log(`You won: 💲${winnings}`);

        if (balance <= 0) {
            console.log("Get yo money up broke bitch 🤡🤡");
            break;
        }
        const question = prompt("\nPlay again??😇🥺\t");
        console.clear();
        const answer = question.toUpperCase();
        if (answer != 'YES' && answer != 'Y' && answer != 'OK' && answer != 'SURE') break;
    }
}

startGame();
