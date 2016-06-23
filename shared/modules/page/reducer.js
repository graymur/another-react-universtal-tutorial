const initialState = {};

export default function page(state = initialState, action = {}) {
    let newState;

    switch(action.type) {
        default:
            newState = state;
            break;
    }

    return newState;
}