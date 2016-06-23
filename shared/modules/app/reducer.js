const initialState = {
    menu: []
};

export default function app(state = initialState, action = {}) {
    let newState;

    switch(action.type) {
        default:
            newState = state;
            break;
    }

    return newState;
}