
const tools = (state = [], action) => {
    switch (action.type) {
        case 'SOME_ACTION':
            console.log('reduxing');
        default: 
            return state;
    }
}

export default tools;