import React, { useContext } from 'react';
import { StoreContext } from './context';
import {
	ChoosePlayers,
	ChooseSides,
	GameBox,
	Results
} from './components';

const screens = {
	STEP_CHOOSE_PLAYER: <ChoosePlayers />,
	STEP_CHOOSE_SIDE: <ChooseSides />,
	STEP_PLAY_GAME: <GameBox />,
	STEP_SHOW_RESULTS: <Results/>
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