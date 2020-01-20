import {
	UPDATE_STATE,
	UPDATE_PLAYER_NAME,
	UPDATE_CURRENT_STATE,
	SWAP_CURRENT_SIDE,
	UPDATE_SQUARE,
	HANDLE_WINNER,
	INIT_STATE,
	HANDLE_REMATCH,
	STEP_CHOOSE_SIDE,
	HANDLE_DRAW
} from '../constants';
import {
	STEP_CHOOSE_PLAYER,
	STEP_SHOW_RESULTS
} from '../constants';


export const initialState = {
	currentStep: STEP_CHOOSE_PLAYER,
	playerOne: {
		name: '',
		side: 'x',
		isCurrent: true,
		isWinner: false
	},
	playerTwo: {
		name: '',
		side: 'o',
		isCurrent: false,
		isWinner: false
	},
	boxes: new Array(9).fill(''),
	winningCombo: null,
	disableAll: false
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
				playerOne: { side: sideOne },
				playerTwo,
				playerTwo: { side: sideTwo }
			} = state;
			return ({
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
		case UPDATE_SQUARE: {
			const { playerOne, playerTwo } = state;
			const { updatedBoxes: boxes } = action;
			return ({
				...state,
				playerOne: {
					...playerOne,
					isCurrent: !playerOne.isCurrent
				},
				playerTwo: {
					...playerTwo,
					isCurrent: !playerTwo.isCurrent
				},
				boxes
			})
		};
		case HANDLE_WINNER: {
			const { playerOne, playerTwo } = state;
			const { winner: { combination, side } } = action;
			return ({
				...state,
				playerOne: {
					...playerOne,
					isWinner: playerOne.side === side
				},
				playerTwo: {
					...playerTwo,
					isWinner: playerTwo.side === side
				},
				winningCombo: combination,
				disableAll: true
			})

		};
		case HANDLE_REMATCH: {
			const { playerOne, playerTwo } = state;
			return ({
				...state,
				playerOne: {
					...playerOne,
					isWinner: false
				},
				playerTwo: {
					...playerTwo,
					isWinner: false
				},
				currentStep: STEP_CHOOSE_SIDE,
				winningCombo: null,
				boxes: new Array(9).fill(''),
				disableAll: false
			})
		};
		case INIT_STATE: {
			return initialState;
		};
		case HANDLE_DRAW: {
			return ({
				...state,
				currentStep: STEP_SHOW_RESULTS
			})
		}
		default: return state;
	};
};