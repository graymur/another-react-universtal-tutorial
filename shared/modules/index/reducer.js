const initialState = {};

export default function index(state = initialState, action = {}) {
    let newState;

    switch(action.type) {
        default:
            newState = state;
            break;
    }

    return newState;
}