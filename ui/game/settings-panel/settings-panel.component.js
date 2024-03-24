import {
	GoogleSpeedSelect,
	GridSelect,
	PointsToWinSelect,
	getGoogleSpeed,
	getPointsToWin,
	getSettings
} from '../../../data.js';


export function SettingsPanel() {
	const settingsPanel = document.createElement('div');
	settingsPanel.className = 'selectBlocks';
	const pointsToWinSelectBlock = PointsToWinSelectBlock();
	const gridSelectBlock = GridSelectBlock();
	const googleSpeedSelect = GoogleSpeedBlock();
	settingsPanel.append(pointsToWinSelectBlock, gridSelectBlock, googleSpeedSelect);
	return settingsPanel;
};

export function GridSelectBlock() {
	const gridSelectBlock = document.createElement('div');
	gridSelectBlock.className = 'commonSelectBlocks gridSelectBlock';
	const gridLabel = document.createElement('label');
	gridLabel.htmlFor = 'gridLabel';
	gridLabel.textContent = 'Grid size:';
	gridSelectBlock.append(gridLabel);
	const gridSelect = GridSelect();
	gridSelect.value = `${getSettings().rowsCount}x${getSettings().columnsCount}`;
	gridSelectBlock.append(gridSelect);
	return gridSelectBlock;
};



export function GoogleSpeedBlock() {
	const googleSpeedBlock = document.createElement('div');
	googleSpeedBlock.className = 'commonSelectBlocks googleSpeedBlock';
	const googleLabel = document.createElement('label');
	googleLabel.htmlFor = 'googleLabel';
	googleLabel.textContent = 'difficulty level:';
	googleSpeedBlock.append(googleLabel);
	const googleSpeedSelect = GoogleSpeedSelect()
	googleSpeedSelect.value = `${getGoogleSpeed().googleSpeed}`;
	googleSpeedBlock.append(googleSpeedSelect);
	return googleSpeedBlock;
};



export function PointsToWinSelectBlock() {
	const pointsToWinSelectBlock = document.createElement('div');
	pointsToWinSelectBlock.className = 'commonSelectBlocks pointsToWinSelectBlock';
	const pointsLabel = document.createElement('label');
	pointsLabel.htmlFor = 'pointsLabel';
	pointsLabel.textContent = 'Points to win:';
	pointsToWinSelectBlock.append(pointsLabel);
	const pointsSelect = PointsToWinSelect();
	pointsSelect.value = getPointsToWin().winPoints;
	pointsToWinSelectBlock.append(pointsSelect);
	return pointsToWinSelectBlock;
};

