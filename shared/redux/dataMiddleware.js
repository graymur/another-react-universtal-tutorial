import fetch from 'isomorphic-fetch';

export default store => next => action => {
    if (action.type !== 'DATA_PLEASE') {
        return next(action);
    }

    let url = '/api/' + action.key;

    if (action.payload) {
        url += '?' + Object.keys(action.payload).map(k => k + '=' + encodeURIComponent(action.payload[k])).join('&');
    }

    store.dispatch({ type: 'XHR_STARTED' });

    fetch(url).then(response => {
        if (response.status !== 200) {
            return Promise.reject(response);
        }

        return response.json();
    }).then(data => {
        store.dispatch({ type: 'XHR_SUCCEEDED' });

        next({
            type: action.resultType,
            data: data
        });
    }).catch(response => {
        next({
            type: 'XHR_FAILED',
            error: response.statusText
        });
    });
};