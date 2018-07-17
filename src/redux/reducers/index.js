import { RECEIVE_TOOLS, ADD_SELECTED_TOOL } from '../actions/action-types';

const initialState = {
    tools: [],
    selectedTools: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_TOOLS:
            return {
                ...state,
                tools: action.payload
            }
        case ADD_SELECTED_TOOL:
            const element = state.selectedTools.find(element => element.id === action.payload.id);
            let newState;

            if (state.selectedTools.indexOf(element) === -1) {
                newState = {
                    ...state,
                    selectedTools: [
                        ...state.selectedTools,
                        action.payload
                    ]
                }
            } else {
                newState = state;
            }

            return newState;
        default: 
            return state;
    }
}
