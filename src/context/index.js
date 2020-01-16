import React, { createContext, useReducer } from 'react';
import { rootReducer, initialState } from './rootReducer';
import { useActions } from './actions';

export const StoreContext = createContext();

export const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(rootReducer, initialState);
	const actions = useActions(state, dispatch);
	return (
		<StoreContext.Provider
			value={
				{
					actions,
					state,
					dispatch
				}
			}>
			{children}
		</StoreContext.Provider>
	)
};
