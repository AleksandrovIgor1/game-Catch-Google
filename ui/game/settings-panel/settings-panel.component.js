import { getPointsToWin, getSettings } from '../../../data.js';
export function SettingsPanel() {
	const element = document.createElement('div');
	const pointsToWin = document.createElement('div');
	const gridSize = document.createElement('div');
	gridSize.append(`Grid size: ${getSettings().columnsCount}x${getSettings().rowsCount}`);
	pointsToWin.append('Points to win: ' + getPointsToWin().winPoints); 
	element.append(pointsToWin, gridSize);
	return element;
}

