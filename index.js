import {
	GAME_STATUSES,
	getGameStatus,
	movePlayer1Down,
	movePlayer1Left,
	movePlayer1Right,
	movePlayer1Up,
	movePlayer2Down,
	movePlayer2Left,
	movePlayer2Right,
	movePlayer2Up,
	subscribe
} from './data.js';
import {
	Game
} from "./ui/game/game.component.js";
import { Start } from './ui/game/start/start.component.js';
import {
	Win
} from './ui/game/win/win.component.js';

const appElement = document.querySelector("#app");

function renderApp() {
	appElement.innerHTML = '';
	if (getGameStatus() === GAME_STATUSES.WIN) {
		const win = Win();
		appElement.append(win);
	} else if (getGameStatus() === GAME_STATUSES.IN_PROGRESS){
		const game = Game();
		appElement.append(game);
	}
	else {
		const start = Start();
		appElement.append(start);
	}

}
renderApp()
subscribe(renderApp);

window.addEventListener('keyup', (e) => {
	console.log(e.code)
	switch (e.code) {
		case 'ArrowUp':
			movePlayer1Up();
			break;
		case 'ArrowDown':
			movePlayer1Down();
			break;
		case 'ArrowLeft':
			movePlayer1Left();
			break;
		case 'ArrowRight':
			movePlayer1Right();
			break;
		case "KeyW":
			movePlayer2Up();
			break;
		case "KeyS":
			movePlayer2Down();
			break;
		case "KeyA":
			movePlayer2Left();
			break;
		case "KeyD":
			movePlayer2Right();
			break;
	}
})