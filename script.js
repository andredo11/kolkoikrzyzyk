var playerSymbol = 'X';
var moveCounter = -1;
var wC = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


function endGame(result) {
	if (result == 'Tie') {
		gameStatus.innerHTML = 'Remis!'
	}
	else {
		gameStatus.innerHTML = 'Wygrał gracz "'+playerSymbol+'"!';
	}
	
	cells.forEach(item = (event) => event.removeEventListener("click", makeMove));
}

function checkStatus() {
	for (var i = 0; i < 8; i++) {
		if (cells[wC[i][0]].innerHTML == cells[wC[i][1]].innerHTML && cells[wC[i][1]].innerHTML == cells[wC[i][2]].innerHTML && cells[wC[i][0]].innerHTML != '') {
			endGame('Win');
			return true;
		}
	}
	if (moveCounter == 8) {
		endGame('Tie');
		return true;
	}
	return false;

}
function makeMove() {
	moveCounter += 1;
	
	event.target.innerHTML = playerSymbol;
	if(checkStatus() == false) {
	
		if (moveCounter % 2 == 0) {
			gameStatus.innerHTML = 'Ruch gracza "O"';
			playerSymbol = 'O';
		}
		else {
			gameStatus.innerHTML = 'Ruch gracza "X"';
			playerSymbol = 'X';
		}
		event.target.removeEventListener('click', makeMove)
	}
}


const cells = document.querySelectorAll('div.cell');
var gameStatus = document.getElementById('status');
cells.forEach(item = (event) => event.addEventListener("click", makeMove));

