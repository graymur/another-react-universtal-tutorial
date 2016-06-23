const initialState = {
    menu: [],
    xhrPending: false,
    xhrError: false
};

export default function app(state = initialState, action = {}) {
    let newState;

    switch(action.type) {
        case 'APP_DATA_FETCHED':
            //newState = { ...state, ...action.data };
            newState = Object.assign({}, state, action.data); // here I use Object.assign instead of
                // newState = { ...state, ...action.data } only because my IDE doesn't recognize this syntax
            break;

        case 'XHR_STARTED':
            newState = { ...state, xhrPending: true, xhrError: false };
            break;

        case 'XHR_SUCCEEDED':
            newState = { ...state, xhrPending: false, xhrError: false };
            break;

        case 'XHR_FAILED':
            newState = { ...state, xhrPending: false, xhrError: true };
            break;

        default:
            newState = state;
            break;
    }

    return newState;
}