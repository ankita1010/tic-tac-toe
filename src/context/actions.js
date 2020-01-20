import {
	UPDATE_STATE,
	UPDATE_PLAYER_NAME,
	UPDATE_CURRENT_STATE,
	SWAP_CURRENT_SIDE,
	UPDATE_SQUARE,
	HANDLE_WINNER,
	HANDLE_DRAW,
	HANDLE_REMATCH,
	INIT_STATE
} from '../constants';

import {
	STEP_SHOW_RESULTS,
	STEP_PLAY_GAME,
	STEP_CHOOSE_PLAYER,
	winningLines
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
		if(name.length < 10)
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
	const updateSquare = async (event) => {
		const { target: { dataset: { value, index, row } } } = event;
		const {
			boxes,
			playerOne,
			playerTwo
		} = state;
		const curretValue = playerOne.isCurrent ? playerOne.side : playerTwo.side;
		const updatedBoxes = boxes.map(
			(eachRow, currentRowIndex) =>
				currentRowIndex === parseInt(index) ?
					curretValue
					: eachRow
		);
		await dispatch({
			type: UPDATE_SQUARE,
			value,
			index,
			updatedBoxes
		});
		const hasWinner = checkWinner(updatedBoxes);
		const currentLength = updatedBoxes.filter(Boolean).length;
		if (hasWinner) {
			dispatch({
				type: HANDLE_WINNER,
				winner: hasWinner
			})
			setTimeout(() => {
				dispatch({
					type: UPDATE_STATE,
					key: 'currentStep',
					value: STEP_SHOW_RESULTS
				})
			}, 1000);
		}
		else if(currentLength === updatedBoxes.length) {
			dispatch({
				type: HANDLE_DRAW
			})
		}

	};
	const checkWinner = (boxes) => {

		for (let i = 0; i < winningLines.length; i++) {
			const [j, k, l] = winningLines[i];
			if (boxes[j] && boxes[j] === boxes[k] && boxes[j] === boxes[l]) {
				return { combination: winningLines[i], side: boxes[j] };
			}
		};
		return 0;
	}
	const handleRematch = () => {
		dispatch({type: HANDLE_REMATCH})
	};
	const initState = () => {
		dispatch({type: INIT_STATE})
	}
	return ({
		updateState,
		updatePlayerName,
		updateCurrentStep,
		swapPlayerSide,
		updateSquare,
		handleRematch,
		initState
	});
};