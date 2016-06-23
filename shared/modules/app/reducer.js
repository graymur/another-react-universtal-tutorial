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
            newState = Object.assign({}, state, action.data);
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

        case 'CLEAR_XHR_ERROR':
            newState = { ...state, xhrError: false };
            break;

        default:
            newState = state;
            break;
    }

    return newState;
}