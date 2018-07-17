import tools from '../../products/products.json';
import { RECEIVE_TOOLS, ADD_SELECTED_TOOL } from './action-types';

export function receiveTools(tools) {
  return {
    type: RECEIVE_TOOLS,
    payload: tools
  }
}

export function addSelectedTool(tool) {
    return {
        type: ADD_SELECTED_TOOL,
        payload: tool
    }
}

export function fetchTools() {
    return function(dispatch) {
        // Let's pretend we have an asynchronous call here
        // And return the result
        dispatch(receiveTools(tools));
    }
}

export const onToolClicked = (tool) => {
    return function (dispatch) {
        dispatch(addSelectedTool(tool));
    }
}