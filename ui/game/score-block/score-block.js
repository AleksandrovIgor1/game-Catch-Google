import { getGoogleSpeed, getScores } from "../../../data.js";
export function ScoreBlock() {
	const element = document.createElement('div');
	element.className = 'scoreBlock';
	const player1Element = document.createElement('span');
	player1Element.textContent = `Player1: ${getScores().player1Points}`;
	const player2Element = document.createElement('span');
	player2Element.textContent = `Player2: ${getScores().player2Points}`;
	const difficultyLevel = document.createElement('span');
	difficultyLevel.textContent = `difficulty level: ${getDifficultyLevel()}`;
	element.append(player1Element, player2Element, difficultyLevel);
	return element;
};

export function getDifficultyLevel() {
	let difficultyLevel = '';
	console.log(getGoogleSpeed().googleSpeed)
	switch (getGoogleSpeed().googleSpeed) {
		case 500:
			difficultyLevel = 'hardcore';
			break;
		case 1000:
			difficultyLevel = 'hard';
			break;
		case 1500:
			difficultyLevel = 'normal';
			break;
		case 2000:
			difficultyLevel = 'easy';
			break;
	}
	return difficultyLevel;
};