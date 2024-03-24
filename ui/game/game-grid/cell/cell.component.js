import {
	getGooglePosition, getPlayer1Position, getPlayer2Position
} from '../../../../data.js';
import {
	Google,
	Player1,
	Player2
} from './google/google.component.js';
export function Cell(x, y) {
	const cellElement = document.createElement('td');
	if (x === getGooglePosition().x && y === getGooglePosition().y) {
		cellElement.append(Google());
	}
	if (x === getPlayer1Position().x && y === getPlayer1Position().y) {
		cellElement.append(Player1());
	}
	if (x === getPlayer2Position().x && y === getPlayer2Position().y) {
		cellElement.append(Player2());
	}
	return cellElement;
};