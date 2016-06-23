const initialState = [];

export default function galleries(state = initialState, action = {}) {
    let newState;

    switch(action.type) {
        case 'GALLERIES_DATA_FETCHED':
            newState = action.data;
            break;

        default:
            newState = state;
            break;
    }

    return newState;
}