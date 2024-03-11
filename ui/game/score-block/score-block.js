import {
	getScores
} from "../../../data.js";
export function ScoreBlock() {
	const element = document.createElement('div');
	element.append(`Player1: ${getScores().player1Points}; Player2: ${getScores().player2Points}`);
	const timer = document.createElement('div');
	timer.append('00:00');
	element.append(`Time: `)
	return element;
}