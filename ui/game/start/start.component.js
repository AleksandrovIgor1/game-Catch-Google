import { clickStart } from '../../../data.js';
import { SettingsPanel } from '../settings-panel/settings-panel.component.js';
export function Start() {
	const element = document.createElement('div');
	element.id = 'start';
	const settings = SettingsPanel();
	const startButton = StartButton();
	element.append(settings, startButton);
	return element;
};
export function StartButton() {
	const element = document.createElement('button');
	element.innerHTML = 'START GAME';
	element.addEventListener('click', () => {
		clickStart();
	});
	return element;
};