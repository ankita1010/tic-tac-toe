import {
	UPDATE_STATE,
	UPDATE_PLAYER_NAME,
	UPDATE_CURRENT_STATE,
	SWAP_CURRENT_SIDE
} from '../constants';
import {
	STEP_CHOOSE_PLAYER,
	STEP_PLAY_GAME,
	STEP_SHOW_RESULTS
} from '../constants';

export const initialState = {
	currentStep: STEP_CHOOSE_PLAYER,
	playerOne: {
		name: 'one',
		side: 'o',
		isCurrent: true
	},
	playerTwo: {
		name: 'two',
		side: 'x',
		isCurrent: false
	}
};

export const rootReducer = (state, action) => {
	switch (action.type) {
		case UPDATE_STATE: {

			const { key, value } = action;
			return ({
				...state,
				[key]: value
			});
		};
		case UPDATE_PLAYER_NAME: {
			const { playerID, name } = action;
			return ({
				...state,
				[playerID]: {
					...state[playerID],
					name
				}
			});
		};
		case UPDATE_CURRENT_STATE: {
			const { currentStep } = action;
			return ({
				...state,
				currentStep
			});
		};
		case SWAP_CURRENT_SIDE: {
			const {
				playerOne,
				playerOne: {side: sideOne},
				playerTwo,
				playerTwo: {side: sideTwo}
			} = state;
			return({
				...state,
				playerOne: {
					...playerOne,
					side: sideTwo
				},
				playerTwo: {
					...playerTwo,
					side: sideOne
				}
			});
		};
		default: return state;
	};
};