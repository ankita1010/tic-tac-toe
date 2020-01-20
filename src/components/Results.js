import React, { useContext } from 'react';
import { StoreContext } from '../context';

import './results.scss';

export const Results = () => {
	const {
		state: { playerOne, playerTwo },
		actions: { handleRematch, initState }
	} = useContext(StoreContext);
	const players = [playerOne, playerTwo];
	const winner = players.find(eachPlayer => eachPlayer.isWinner);
	return (
		<div className="results-wrapper">
			<h2 className={winner ? "winner-header" : ""}>
				{winner ?
					`Woo hoo! ${winner.name} is the winner!`
					: `Its a tie!!`
				}
			</h2>
			<button className="theme-btn" onClick={handleRematch}>
				Rematch
				</button>
			<p>
				-- Or --
				</p>
			<button className="theme-btn" onClick={initState}>
				Clear and Go Back
				</button>
		</div>
	)
}