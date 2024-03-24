import { GameGrid } from './game-grid/game-grid.component.js';
import { ScoreBlock } from './score-block/score-block.js';

export function Game() {
	const element = document.createElement('div');
	const scoreBlock = ScoreBlock();
	const gameGrid = GameGrid();
	element.append(scoreBlock, gameGrid);
	return element;
};