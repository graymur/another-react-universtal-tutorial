const initialState = [];

export default function blog(state = initialState, action = {}) {
    let newState;

    switch(action.type) {
        case 'BLOG_DATA_FETCHED':
            newState = action.data;
            break;

        default:
            newState = state;
            break;
    }

    return newState;
}