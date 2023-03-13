window.onload = function () {

    const generalPlayingField = document.getElementById('general-playing-field');
    const resultGame = document.getElementById('result-game-tic-tac-toe');
    const buttonNewGame = document.getElementById('button-new-game-tic-tac-toe');
    const arrayFields = document.querySelectorAll('.general-playing-field__field');
    const zero = `<svg class="zero-svg">
				    <circle r="45" cx="58" cy="58" stroke-width="10" fill="none" stroke-linecap="round" />
			    </svg>`;
    const cross = `<svg class="cross-svg">
				    <line class="first-cross" x1="15" y1="15" x2="100" y2="100"  stroke-width="10" stroke-linecap="round" />
			    	<line class="second-cross" x1="100" y1="15" x2="15" y2="100" stroke-width="10" stroke-linecap="round" />
		         </svg>`;

    const winningCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]];

    let numberMovesInGame = 0;
    let ifWinZero = false;
    let ifWinСross = false;

    const objectClasses = {
        FILED: "general-playing-field__field",
        CLASS_CROSS: "cross-class",
        CLASS_ZERO: "zero-class",
        CLASS_WIN: "win-class"
    }

    const objectWorld = {
        WIN_CROSS: "Выиграли крестики",
        WIN_ZERO: "Выиграли нолики",
        DRAW_IN_GAME: "ничья"
    }

    function selectRendomField() {
        return arrayFields[Math.floor(Math.random() * arrayFields.length)];
    }

    function isStepZero() {
        if (event.target.className === objectClasses.FILED && ifWinZero == false && ifWinСross == false) {
            const containerCross = event.target;
            containerCross.innerHTML = zero;
            containerCross.classList.add(objectClasses.CLASS_ZERO);
            numberMovesInGame++
            iSWinZero();
            isDrawInGame();
            isStepCross();
        }
    }

    function isStepCross() {
        if (numberMovesInGame > 8) return;
        if (ifWinZero == true) return;
        const containerCross = selectRendomField();
        if (containerCross.classList.contains(objectClasses.CLASS_CROSS)) {
            isStepCross();
        }
        else if (containerCross.classList.contains(objectClasses.CLASS_ZERO)) {
            isStepCross();
        }
        else {
            containerCross.innerHTML = cross;
            containerCross.classList.add(objectClasses.CLASS_CROSS);
            numberMovesInGame++
        }
        iSWinСross()
    }

    function iSWinZero() {
        for (let index = 0; index < winningCombination.length; index++) {
            if (arrayFields[winningCombination[index][0]].classList.contains(objectClasses.CLASS_ZERO) &&
                arrayFields[winningCombination[index][1]].classList.contains(objectClasses.CLASS_ZERO) &&
                arrayFields[winningCombination[index][2]].classList.contains(objectClasses.CLASS_ZERO)) {
                arrayFields[winningCombination[index][0]].classList.add(objectClasses.CLASS_WIN);
                arrayFields[winningCombination[index][1]].classList.add(objectClasses.CLASS_WIN);
                arrayFields[winningCombination[index][2]].classList.add(objectClasses.CLASS_WIN);
                resultGame.innerText = objectWorld.WIN_ZERO;
                ifWinZero = true;
            }
        }
    }

    function iSWinСross() {
        for (let index = 0; index < winningCombination.length; index++) {
            if (arrayFields[winningCombination[index][0]].classList.contains(objectClasses.CLASS_CROSS) &&
                arrayFields[winningCombination[index][1]].classList.contains(objectClasses.CLASS_CROSS) &&
                arrayFields[winningCombination[index][2]].classList.contains(objectClasses.CLASS_CROSS)) {
                arrayFields[winningCombination[index][0]].classList.add(objectClasses.CLASS_WIN);
                arrayFields[winningCombination[index][1]].classList.add(objectClasses.CLASS_WIN);
                arrayFields[winningCombination[index][2]].classList.add(objectClasses.CLASS_WIN);
                resultGame.innerText = objectWorld.WIN_CROSS;
                ifWinСross = true;
            }
        }
    }

    function isDrawInGame() {
        if (numberMovesInGame == 9 && ifWinСross == false && ifWinZero == false) {
            resultGame.innerText = objectWorld.DRAW_IN_GAME;
        }
    }

    function newGame() {
        numberMovesInGame = 0;
        arrayFields.forEach(item => {
            item.innerHTML = "";
            resultGame.innerText = "";
            item.classList.remove(objectClasses.CLASS_CROSS, objectClasses.CLASS_ZERO, objectClasses.CLASS_WIN);
            ifWinZero = false;
            ifWinСross = false;
        });
    }

    generalPlayingField.onclick = function () {
        isStepZero();
    }

    buttonNewGame.onclick = function () {
        newGame();
    }

}