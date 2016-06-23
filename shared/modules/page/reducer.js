const initialState = {};

export default function page(state = initialState, action = {}) {
    let newState;

    switch(action.type) {
        case 'PAGE_DATA_FETCHED':
            newState = action.data;
            break;

        default:
            newState = state;
            break;
    }

    return newState;
}