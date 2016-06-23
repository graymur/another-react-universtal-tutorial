const initialState = {
    menu: []
};

export default function app(state = initialState, action = {}) {
    let newState;

    switch(action.type) {
        case 'APP_DATA_FETCHED':
            newState = action.data;
            break;

        default:
            newState = state;
            break;
    }

    return newState;
}