import {
	clickStart
} from '../../../data.js'

export function Start() {
	const element = document.createElement('div');
	const startButton = StartButton();
	element.append(startButton);
	return element;
}
export function StartButton() {
	const element = document.createElement('button');
	element.innerHTML = 'START GAME';
	element.addEventListener('click', () => {
		clickStart();
	})
	return element;
}