import * as actions from './index'
import * as types from './action-types';

describe('actions', () => {
  it('should get the list of tools', () => {
    const tools = [
        { id: 1, name: 'test1 tool', price: 9.99 },
        { id: 2, name: 'test2 tool', price: 8.88 },
        { id: 3, name: 'test3 tool', price: 7.77 }
    ];

    const expectedAction = {
        type: types.RECEIVE_TOOLS,
        payload: tools
    };
    
    expect(actions.receiveTools(tools)).toEqual(expectedAction);
  });

  it('should add selected tool', () => {
    const tool = { id: 1, name: 'testing selected tool', price: 1.11 };
    const expectedAction = {
        type: types.ADD_SELECTED_TOOL,
        payload: tool
    };

    expect(actions.addSelectedTool(tool)).toEqual(expectedAction);
  });
});
