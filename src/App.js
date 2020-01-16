import React, { useContext } from 'react';
import { StoreContext } from './context';
import { ChoosePlayers, ChooseSides } from './components';
import {
	STEP_CHOOSE_PLAYER,
	STEP_PLAY_GAME,
	STEP_SHOW_RESULTS,
	STEP_CHOOSE_SIDE
} from './constants';

const screens = {
	STEP_CHOOSE_PLAYER: <ChoosePlayers/>,
	STEP_CHOOSE_SIDE: <ChooseSides/>,
	STEP_PLAY_GAME: null,
	STEP_SHOW_RESULTS: null
};

import './App.scss';
const App = () => {
	const { state } = useContext(StoreContext);
	const { currentStep } = state;

	return (
		<div className="main-block">
			<h1>Tic Tac Toe</h1>
			{screens[currentStep]}
		</div>
	)
};
export { App };