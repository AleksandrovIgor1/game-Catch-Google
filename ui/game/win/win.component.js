import {
	WhoWin,
	restart
} from '../../../data.js'

export function Win() {
	const element = document.createElement('div');
	element.id = 'win';
	const whoWin = WhoWin()
	element.append(whoWin);
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
