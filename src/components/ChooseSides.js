import React, { useContext } from 'react';
import { STEP_PLAY_GAME } from '../constants';
import { StoreContext } from '../context';

import './sides.scss';

export const ChooseSides = () => {
	const { state, actions } = useContext(StoreContext);
	const {
		playerOne: {
			side: sideOne,
			name: nameOne
		},
		playerTwo: {
			side: sideTwo,
			name: nameTwo
		}
	} = state;

	const { swapPlayerSide, updateCurrentStep } = actions;

	return [
		<h4 className="choose-header" key="choose-sides-header">
			Choose Sides
		</h4>,
		<div className="choose-sides-wrapper" key="choose-sides-wrapper">
			<div className="sides-display">
				<h1>
					<i class="fas fa-times"></i>
				</h1>
				<button onClick={swapPlayerSide} className="icon-btn">
					<i className="fas fa-sync-alt"/>
			</button>
				<h1>
					<i class="far fa-circle"></i>
				</h1>
			</div>
			<div
				className="players-wrapper"
			>
				<p className={sideOne === "x" ? 'left-most' : 'right-most'}>
					{nameOne}
				</p>
				<p className={sideTwo === "x" ? 'left-most' : 'right-most'}>
					{nameTwo}
				</p>
			</div>
		</div>,
		<button
			className="theme-btn"
			onClick={updateCurrentStep}
			data-side={STEP_PLAY_GAME}
		>
					Confirm
			</button>
	];
};