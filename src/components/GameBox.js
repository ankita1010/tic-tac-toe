import React, { useContext } from 'react';
import { Square } from './Square';
import { StoreContext } from '../context';

import './gamebox.scss';

export const GameBox = () => {
	const {
		actions : {updateSquare},
		state: {
				boxes,
				playerOne,
				playerTwo,
				winningCombo,
				disableAll
		}
	} = useContext(StoreContext);
	const players = { playerOne, playerTwo };
	return (
		<div className="game-box-wrapper">
			<div className="players-wrapper">
				{
					Object.entries(players).map(
						([key, value]) => {
							const {
								isCurrent,
								side,
								name
							} = value;
							return (
								<h3 key={name} className={isCurrent ? "current-name" : ''}>
									<i
										className="fas fa-circle"
										id={!isCurrent ? 'hidden-icon': ''}
									/>
									{name}
								</h3>
							)
						}
					)
				}
			</div>
			<div className="boxes-wrapper">
				<div className="border-hider"/>
				{
					boxes.map((eachValue, index) =>
						[
							<Square
								value={eachValue}
								key="each-square"
								index={index}
								clickHandler={updateSquare}
								winningCombo={winningCombo}
								disableAll={disableAll}
							/>,
							index && !((index + 1) % 3) ?
								<div
									className="line-breaker"
									key="line-breaker"
								/>
								: null
						]
					)
				}
			</div>
		</div>
	)
}