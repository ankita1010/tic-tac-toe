import React from 'react';

export const Square = ({value, clickHandler}) => (
	<button
		className="square-btn"
		data-value={value}
		onClick={clickHandler}
	>
		{value}
	</button>
)