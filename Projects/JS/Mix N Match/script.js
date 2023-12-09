// This is an extensive OOP code so some parts may be deem to be redundent

class AudioController {
    constructor() {
        this.bgMusic = new Audio('Assets/Audio/creepy.mp3');
        this.flipSound = new Audio('Assets/Audio/flip.wav');
        this.matchSound = new Audio('Assets/Audio/match.wav');
        this.victorySound = new Audio('Assets/Audio/victory.wav');
        this.gameOverSound = new Audio('Assets/Audio/gameOver.wav');
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }

    // new instance called 'audiocontroller' of this class is created. Think of it like an object inside the game object.

    // new Audio object is created (built in) which has default methods like play(), pause() and built in properties like volume and loop.

    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

class MixOrMatch {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime; // both 100 at start
        this.timer = document.getElementById('time-remaining')
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
    }

    startGame() {

        // these properties are kept here instead of in the constructor because this function will be called again if the game is reset and along with it these properties will be reset as well.

        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.cardToCheck = null;
        this.matchedCards = [];
        this.busy = true;

        setTimeout(() => {
            this.audioController.startMusic();
            this.shuffleCards(this.cardsArray);     // no need to pass but you do have to write 'this' everywhere.
            this.countdown = this.startCountdown();
            this.busy = false;
        }, 500)

        // setTimeout is kept just for better music timing and so we can't flip cards when they are being shuffled else clicking one card could flip another card. 

        // intially this.busy is true and within 500ms the shuffling will be finished and this.busy will be false enabling us to flip cards.

        this.hideCards();  // kept if the user played again after clicking the Victory or Loss overlay

        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
    }
    startCountdown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if(this.timeRemaining === 0)
                this.gameOver();
        }, 1000);
    }
    gameOver() {
        clearInterval(this.countdown);  // terminating the countdown
        this.audioController.gameOver();
        document.getElementById('game-over-text').classList.add('visible');
    }
    victory() {
        clearInterval(this.countdown);  // terminating the countdown
        this.audioController.victory();
        document.getElementById('victory-text').classList.add('visible');
    }
    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    }
    flipCard(card) {
        if(this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');

            if(this.cardToCheck) {
                this.checkForCardMatch(card);
            } else {
                this.cardToCheck = card;
            }
            // when checking for the first time, the cardToCheck will be null so it'll store the card in cardToCheck and when second card is flipped, cardToCheck won't be null so it'll compare the card stored in cardToCheck (previous card) and the current card being flipped.
        }
    }
    checkForCardMatch(card) {
        if(this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else 
            this.cardMismatch(card, this.cardToCheck);

        this.cardToCheck = null; // resetting its value after a sucessful comparision.
    }
    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        this.audioController.match();
        if(this.matchedCards.length === this.cardsArray.length)
            this.victory();
    }
    cardMismatch(card1, card2) {
        this.busy = true;  // so the user can't flip until that one second is over
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);

        // one second timer so the card doesn't immediately flip back
    }
    shuffleCards(cardsArray) { // Fisher-Yates Shuffle Algorithm.
        for (let i = cardsArray.length - 1; i > 0; i--) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            cardsArray[randIndex].style.order = i;
            cardsArray[i].style.order = randIndex;
        }
    }

    /*  order is the placement of the grids. 16 cards so order is from 1 to 16. 
        The loop starts from the index of the last term (15) and goes down to 1.

        Math.random() * (i + 1) generates random number in [0, i+1) and Math.floor() rounds it down to the nearest integer so [0, i]

        then we interchange the order of the randIndex card and i indexed card

    */


    getCardType(card) {
        return card.querySelector('.card-value').getAttribute('src');
    }
    canFlipCard(card) {
        return (!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck);
    }

    // if !false -> true && card not in matchedCards array -> true && card and cardToCheck not equal -> true then returns true.
    // so to flip a card it musn't be busy, musn't be in the array of already matched cards and shouldn't be the card that is currently flipped.

    
}

// *-------- STARTS HERE ---------*

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    // getElement method returns an HTML collection so we convert it into an array using Array.from()

    let game = new MixOrMatch(100, cards);

    // only instanciated once in the entire cycle.

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}

// when overlays (Start or Restart) is clicked it removes the visible class and the display will revert back to none.