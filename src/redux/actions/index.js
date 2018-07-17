import tools from '../../products/products.json';
import { RECEIVE_TOOLS, ADD_SELECTED_TOOL } from './action-types';

export const receiveTools = (tools) => {
  return {
    type: RECEIVE_TOOLS,
    payload: tools
  }
}

export const addSelectedTool = (tool) => {
    return {
        type: ADD_SELECTED_TOOL,
        payload: tool
    }
}

export const fetchTools = () => dispatch => {
    // Let's pretend we have an asynchronous call here
    // And return the result
    dispatch(receiveTools(tools));
}

export const onToolClicked = (tool) => dispatch => {
    dispatch(addSelectedTool(tool));
}