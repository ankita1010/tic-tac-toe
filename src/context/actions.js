import {
	UPDATE_STATE,
	UPDATE_PLAYER_NAME,
	UPDATE_CURRENT_STATE,
	SWAP_CURRENT_SIDE
} from '../constants';

import {
	STEP_SHOW_RESULTS,
	STEP_PLAY_GAME,
	STEP_CHOOSE_PLAYER
} from '../constants';

export const useActions = (state, dispatch) => {

	const updateState = (key, value) => {
		dispatch({
			type: UPDATE_STATE,
			key,
			value
		})
	};
	const updatePlayerName = (event) => {
		const { target: { id: playerID, value: name } } = event;
		dispatch({
			type: UPDATE_PLAYER_NAME,
			playerID,
			name
		})
	};

	const updateCurrentStep = (event) => {
		const { target: { dataset: { side: currentStep } } } = event;
		dispatch({
			type: UPDATE_CURRENT_STATE,
			currentStep
		})
	};
	const swapPlayerSide = (event) => {
		dispatch({
			type: SWAP_CURRENT_SIDE
		})
	};

	return ({
		updateState,
		updatePlayerName,
		updateCurrentStep,
		swapPlayerSide
	});
};