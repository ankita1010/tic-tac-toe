import React from 'react';
export const Square = ({
	value,
	clickHandler,
	index,
	winningCombo,
	disableAll
}) => (
		<button
			className={`square-btn ${disableAll ? 'faded' : ''}`}
			data-value={value}
			data-index={index}
			onClick={clickHandler}
			disabled={value || disableAll}
		>
			{
				<i
					className={value && (value === 'x' ? "fas fa-times" : "far fa-circle")}
					id={winningCombo && winningCombo.includes(index) ? "winner-square": ''}
				/>
			}
		</button>
	);