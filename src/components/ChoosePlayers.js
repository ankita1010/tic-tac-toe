import React, { useContext } from 'react';
import {STEP_CHOOSE_SIDE} from '../constants';
import { StoreContext } from '../context';

import './players.scss';

export const ChoosePlayers = () => {
	const { state, actions } = useContext(StoreContext);
	const {
		playerOne: { name: nameOne },
		playerTwo: { name: nameTwo }
	} = state;

	const {updatePlayerName, updateCurrentStep} = actions;
	
	return [
		<h4 className="choose-header" key="choose-players-header">
			Choose Players
		</h4>,
		<section className="form-group" key="player-1">
			<input
				type="text"
				placeholder="Player 1"
				id="playerOne"
				value={nameOne}
				autoComplete="off"
				onChange={updatePlayerName}
			/>
		</section>,
		<section className="form-group" key="player-2">
			<input
				type="text"
				placeholder="Player 1"
				id="playerTwo"
				value={nameTwo}
				onChange={updatePlayerName}
				autoComplete="off"
			/>
		</section>,
		<button
			className="theme-btn player-btn"
			disabled = {!(nameTwo && nameOne)}
			key="next-btn-players"
			data-side={STEP_CHOOSE_SIDE}
			onClick={updateCurrentStep}
		>
			Next
		</button>
	];
};

