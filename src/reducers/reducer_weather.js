import { FETCH_WEATHER } from '../actions/index';

// NOTE: You never want to manipulate the state directly. Rather
// you should always return a new state.
export default function(state = [], action) {
	switch(action.type) {
		case FETCH_WEATHER:
			// return state.concat( [action.payload.data] );
			return [ action.payload.data, ...state ];
			break;
	}
	return state;
}