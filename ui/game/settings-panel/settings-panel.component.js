import {
	GridSelect,
	PointsToWinSelect,
	getPointsToWin,
	getSettings
} from '../../../data.js'


export function SettingsPanel() {
	// const pointsToWinSelectRender = PointsToWinSelect();
	// pointsToWinSelectRender;
	// const gridSelectRender = GridSelect();
	// gridSelectRender;
	const settingsPanel = document.createElement('div');
	settingsPanel.className = 'selectBlocks';

	const gridSelectBlock = document.createElement('div');
	gridSelectBlock.className = 'gridSelectBlock';

	const gridLabel = document.createElement('label');
	gridLabel.htmlFor = 'gridSelect';
	gridLabel.textContent = 'Grid size:';
	gridSelectBlock.append(gridLabel);
	const gridSelect = GridSelect()
	gridSelect.value = `${getSettings().rowsCount}x${getSettings().columnsCount}`;
	gridSelectBlock.append(gridSelect);
	settingsPanel.append(gridSelectBlock);
	const pointsToWinSelectBlock = document.createElement('div');
	pointsToWinSelectBlock.className = 'pointsToWinSelectBlock';
	const pointsLabel = document.createElement('label');
	pointsLabel.htmlFor = 'pointsToWinSelect';
	pointsLabel.textContent = 'Points to win:';
	pointsToWinSelectBlock.append(pointsLabel);
	const pointsSelect = PointsToWinSelect()
	pointsSelect.value = getPointsToWin().winPoints;
	
	pointsToWinSelectBlock.append(pointsSelect);
	settingsPanel.append(pointsToWinSelectBlock);

	return settingsPanel;
}