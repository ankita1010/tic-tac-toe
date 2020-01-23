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
	STEP_SHOW_RESULTS: <Results />
};

import './App.scss';
const App = () => {
	const { state } = useContext(StoreContext);
	const { currentStep } = state;

	return [
		<div className="main-block" key="main-block">
			<h1>Tic Tac Toe</h1>
			{screens[currentStep]}

		</div>,
		<footer className="footer" key="footer">
			<span className="links">
				<a href="https://github.com/ankita1010" target="_black" title="Github profile link">
					<i className="fab fa-github" />
				</a>
				<a href="https://www.linkedin.com/in/ankita-chakraborty-98527b10a/" target="_black" title="Linkedin profile link">
					<i className="fab fa-linkedin"/>
				</a>
			</span>
			<span>Built in &nbsp;<i className="fab fa-react" /></span>
		</footer>
	]
};
export { App };