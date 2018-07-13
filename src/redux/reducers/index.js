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
            return {
                ...state,
                selectedTools: [
                    ...state.selectedTools,
                    action.payload
                ]
            }
        default: 
            return state;
    }
}

// export const getAllTools = state => {
//     return state.tools;
// };

// export const getSelectedTools = state => {
//     console.log('state >>', state);
//     return state.selectedTools;
// }