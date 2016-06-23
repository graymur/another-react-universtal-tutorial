const initialState = [];

export default function blog(state = initialState, action = {}) {
    let newState;

    switch(action.type) {
        default:
            newState = state;
            break;
    }

    return newState;
}