const data = {
	catchPoints: 0,
	missPoints: 0,
	winPoints: 5,
	win: false,
	start: false,
	x: 0,
	y: 0,
	rowsCount: 5,
	columnsCount: 5,
	timeInMinutes: 2,
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
	return Math.floor(Math.random() * N)
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
	googleJumpRunInterval = setInterval(missGoogle, 1500);
}
runGoogleJumpInterval();

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
}
export function restart() {
	data.catchPoints = 0;
	data.missPoints = 0;
	data.x = 0;
	data.y = 0;
	data.win = false;
	runGoogleJumpInterval();
	listener();
}
export function start() {
	data.start = true;
	
}
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
}

function isNewCoordsInsideGrid(x, y) {
	if (x < 0 || y < 0 || x >= data.columnsCount || y >= data.rowsCount) return false;
	return true;
}

function isCellOfGridIsFree(newX, newY) {
	if (newX === data.players[0].x && newY === data.players[0].y) return false;
	if (newX === data.players[1].x && newY === data.players[1].y) return false;
	return true;
}
export function movePlayer1Up() {
	movePlayer({
		x: 0,
		y: -1
	}, data.players[0])
}
export function movePlayer1Down() {
	movePlayer({
		x: 0,
		y: 1
	}, data.players[0])


}
export function movePlayer1Left() {
	movePlayer({
		x: -1,
		y: 0
	}, data.players[0])
}
export function movePlayer1Right() {
	movePlayer({
		x: 1,
		y: 0
	}, data.players[0])
}
export function movePlayer2Up() {
	movePlayer({
		x: 0,
		y: -1
	}, data.players[1])
}
export function movePlayer2Down() {
	movePlayer({
		x: 0,
		y: 1
	}, data.players[1])


}
export function movePlayer2Left() {
	movePlayer({
		x: -1,
		y: 0
	}, data.players[1])
}
export function movePlayer2Right() {
	movePlayer({
		x: 1,
		y: 0
	}, data.players[1])
}

function missGoogle() {
	data.missPoints++;
	changeGoogleCoordinates();
	listener();
}

export function subscribe(observer) {
	listener = observer;
}

export function getGooglePosition() {
	return {
		x: data.x,
		y: data.y
	}
}
export function getPlayer1Position() {
	return {
		x: data.players[0].x,
		y: data.players[0].y,
	}
}
export function getPlayer2Position() {
	return {
		x: data.players[1].x,
		y: data.players[1].y,
	}
}

export function getSettings() {
	return {
		rowsCount: data.rowsCount,
		columnsCount: data.columnsCount,
	}
}
export function getScores() {
	return {
		player1Points: data.players[0].points,
		player2Points: data.players[1].points,
	}
}
export function getGameStatus() {
	if (data.start) return GAME_STATUSES.IN_PROGRESS;
	if (data.win) return GAME_STATUSES.WIN;
	else return GAME_STATUSES.START;
	return {
		catchPoints: data.catchPoints,
		missPoints: data.missPoints,
	}
}
export const GAME_STATUSES = {
	WIN: 'win',
	IN_PROGRESS: 'in-progress',
	START: 'START',
}

export function getPointsToWin() {
	return {
		winPoints: data.winPoints,
	}
}