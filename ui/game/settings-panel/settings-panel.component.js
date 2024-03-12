import { getPointsToWin, getSettings, getWin } from '../../../data.js';
export function SettingsPanel() {
	const element = document.createElement('div');
	const pointsToWin = document.createElement('div');
	const gridSize = document.createElement('div');
	gridSize.append(`Grid size: ${getSettings().columnsCount}x${getSettings().rowsCount}`);
	pointsToWin.append('Points to win: ' + getPointsToWin().winPoints); 
	element.append(pointsToWin, gridSize);
	// dele
	const isWin = document.createElement('div');
	isWin.append(`win ? ${getWin().win}`);
	element.append(isWin);
	return element;
}

