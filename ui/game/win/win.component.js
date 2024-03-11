import {
	getScores,
	restart
} from '../../../data.js'

export function Win() {
	const element = document.createElement('div');
	element.append(`Someone WIN, Player1: ${getScores().player1Points}; Player2: ${getScores().player2Points}`);
	const restartButton = RestartButton();
	element.append(restartButton);
	return element;
}
export function RestartButton() {
	const element = document.createElement('button');
	element.innerHTML = 'RESTART';
	element.addEventListener('click', () => {
		restart();
	})
	return element;
}