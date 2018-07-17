import reducer from './index';
import * as types from '../actions/action-types';


describe('todos reducer', () => {
    it('should return the initial state', () => {
        const initialState = {
            tools: [],
            selectedTools: []
        };
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle RECEIVE_TOOLS', () => {
        const tools = [
            { id: 1, name: 'test1 tool', price: 9.99 },
            { id: 2, name: 'test2 tool', price: 8.88 },
            { id: 3, name: 'test3 tool', price: 7.77 }
        ];

        expect(reducer([], {
                type: types.RECEIVE_TOOLS,
                payload: tools
            })
        ).toEqual({
            tools
        });
    });

    it('should handle ADD_SELECTED_TOOL', () => {
        const tool = {
            id: 1,
            name: 'hello test',
            price: 3.23
        };

        const initialState = {
            tools: [],
            selectedTools: []
        };
        expect(reducer(initialState, {
                type: types.ADD_SELECTED_TOOL,
                payload: tool
            })
        ).toEqual({
            tools: [],
            selectedTools: [...initialState.selectedTools, tool]
        })
    });
});