import { getPointsToWin, getSettings, getWin, selectOption} from '../../../data.js';
export function SettingsPanel() {
	selectOption()
	const element = document.createElement('div');
	const pointsToWin = document.createElement('div');
	pointsToWin.append('Points to win: ' + getPointsToWin().winPoints); 
	element.append(`win? ${getWin().win}`)
	element.append(pointsToWin);
	return element;
	
}

