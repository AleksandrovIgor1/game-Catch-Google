const data = {
	catchPoints: 0,
	missPoints: 0,
	winPoints: 10,
	googleSpeed: 2000,
	win: false,
	inProgress: false,
	inStart: true,
	x: 0,
	y: 0,
	rowsCount: 5,
	columnsCount: 5,
	players: [{
		x: 1,
		y: 1,
		points: 0
	}, {
		x: 2,
		y: 2,
		points: 0
	}],
}

let listener = null;

function getRandomInt(N) {
	return Math.floor(Math.random() * N);
};

function changeGoogleCoordinates() {
	let newX = 0;
	let newY = 0;
	let newCoordsIsEqualOldCoords;
	do {
		newX = getRandomInt(data.columnsCount);
		newY = getRandomInt(data.rowsCount);
		newCoordsIsEqualOldCoords = newX === data.x && newY === data.y;
	}
	while (
		newCoordsIsEqualOldCoords || !isCellOfGridIsFree(newX, newY)
	);
	data.x = newX;
	data.y = newY;
}
let googleJumpRunInterval = null;

function runGoogleJumpInterval() {
	clearInterval(googleJumpRunInterval);
	googleJumpRunInterval = setInterval(missGoogle, data.googleSpeed);
};

function catchGoogle(player) {
	player.points++;
	if (player.points === data.winPoints) {
		data.win = true;
		clearInterval(googleJumpRunInterval);
	} else {
		changeGoogleCoordinates();
		runGoogleJumpInterval();
	}
	listener();
};

export function restart() {
	data.players[0].points = 0;
	data.players[1].points = 0;
	data.x = 0;
	data.y = 0;
	data.win = false;
	data.inProgress = false;
	listener();
};

export function clickStart() {
	data.x = 0;
	data.y = 0;
	data.inProgress = true;
	runGoogleJumpInterval();
	listener();
};

function movePlayer(delta, player) {
	const newX = player.x + delta.x;
	const newY = player.y + delta.y;
	if (!isNewCoordsInsideGrid(newX, newY)) return;
	if (!isCellOfGridIsFree(newX, newY)) return;
	player.x = newX;
	player.y = newY;
	if (player.x === data.x && player.y === data.y) {
		catchGoogle(player);
	}
	listener();
};

function isNewCoordsInsideGrid(x, y) {
	if (x < 0 || y < 0 || x >= data.columnsCount || y >= data.rowsCount) return false;
	return true;
};

function isCellOfGridIsFree(newX, newY) {
	if (newX === data.players[0].x && newY === data.players[0].y) return false;
	if (newX === data.players[1].x && newY === data.players[1].y) return false;
	return true;
};

export function movePlayer1Up() {
	movePlayer({
		x: 0,
		y: -1
	}, data.players[0]);
};

export function movePlayer1Down() {
	movePlayer({
		x: 0,
		y: 1
	}, data.players[0]);
};

export function movePlayer1Left() {
	movePlayer({
		x: -1,
		y: 0
	}, data.players[0]);
};

export function movePlayer1Right() {
	movePlayer({
		x: 1,
		y: 0
	}, data.players[0]);
};

export function movePlayer2Up() {
	movePlayer({
		x: 0,
		y: -1
	}, data.players[1]);
};
export function movePlayer2Down() {
	movePlayer({
		x: 0,
		y: 1
	}, data.players[1])
};

export function movePlayer2Left() {
	movePlayer({
		x: -1,
		y: 0
	}, data.players[1]);
};

export function movePlayer2Right() {
	movePlayer({
		x: 1,
		y: 0
	}, data.players[1]);
};

function missGoogle() {
	data.missPoints++;
	changeGoogleCoordinates();
	listener();
};

export function subscribe(observer) {
	listener = observer;
};

export function getGooglePosition() {
	return {
		x: data.x,
		y: data.y
	};
};

export function getPlayer1Position() {
	return {
		x: data.players[0].x,
		y: data.players[0].y,
	};
};

export function getPlayer2Position() {
	return {
		x: data.players[1].x,
		y: data.players[1].y,
	};
};

export function getSettings() {
	return {
		rowsCount: data.rowsCount,
		columnsCount: data.columnsCount,
	};
};

export function getScores() {
	return {
		player1Points: data.players[0].points,
		player2Points: data.players[1].points,
	};
};

export function getGameStatus() {
	if (data.inProgress && !data.win) return GAME_STATUSES.IN_PROGRESS;
	else if (data.win) return GAME_STATUSES.WIN;
	else if (data.inStart) return GAME_STATUSES.START;
	return {
		catchPoints: data.catchPoints,
		missPoints: data.missPoints,
	};
};
export const GAME_STATUSES = {
	WIN: 'win',
	IN_PROGRESS: 'inProgress',
	START: 'start',
};

export function getPointsToWin() {
	return {
		winPoints: data.winPoints,
	};
};

export function getTime() {
	return {
		time: data.time,
	};
};

export function getGoogleSpeed() {
	return {
		googleSpeed: data.googleSpeed
	};
};

export function getWin() {
	return {
		win: data.win
	};
};


export function GridSelect() {
	const gridSelect = document.createElement('select');
	gridSelect.className = 'gridSelect';
	const gridOptions = ["5x5", "6x6", "7x7", "8x8"];
	gridOptions.forEach(option => {
		const opt = document.createElement('option');
		opt.value = option;
		opt.textContent = option;
		gridSelect.append(opt);
	});
	gridSelect.addEventListener('change', function () {
		data.columnsCount = parseInt(gridSelect.value);
		data.rowsCount = parseInt(gridSelect.value);
	});
	return gridSelect;
};

export function GoogleSpeedSelect() {
	const googleSpeedSelect = document.createElement('select');
	googleSpeedSelect.className = 'googleSpeed';
	const googleSpeedOptions = ["hardcore", "hard", "normal", "easy"];
	googleSpeedOptions.forEach(option => {
		const opt = document.createElement('option');
		switch (option) {
			case 'hardcore':
				opt.value = 500;
				break;
			case 'hard':
				opt.value = 1000;
				break;
			case 'normal':
				opt.value = 1500;
				break;
			case 'easy':
				opt.value = 2000;
				break;
		}
		opt.textContent = option;
		googleSpeedSelect.append(opt);
	});
	googleSpeedSelect.addEventListener('change', function () {
		data.googleSpeed = parseInt(googleSpeedSelect.value);
	});
	return googleSpeedSelect;
};


export function PointsToWinSelect() {
	const pointsSelect = document.createElement('select');
	pointsSelect.className = 'pointsToWinSelect';
	const pointsOptions = ["5pts", "10pts", "20pts", "30pts"];
	pointsOptions.forEach(option => {
		const opt = document.createElement('option');
		if (option.length == 4) {
			opt.value = parseInt(option.slice(0, 1));
		} else {
			opt.value = parseInt(option.slice(0, 2));
		}
		opt.textContent = option;
		pointsSelect.append(opt);
	});
	pointsSelect.addEventListener('change', function () {
		data.winPoints = parseInt(pointsSelect.value);
	});
	return pointsSelect;
};