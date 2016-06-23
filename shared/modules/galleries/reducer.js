const initialState = [];

export default function galleries(state = initialState, action = {}) {
    let newState;

    switch(action.type) {
        default:
            newState = state;
            break;
    }

    return newState;
}