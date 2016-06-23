import fetch from 'isomorphic-fetch';

export default store => next => action => {
    if (action.type !== 'DATA_PLEASE') {
        return next(action);
    }

    let url = '/api/' + action.key;
    if (typeof window === 'undefined') url = 'http://localhost:3000' + url;

    if (action.payload) {
        url += '?' + Object.keys(action.payload).map(k => k + '=' + encodeURIComponent(action.payload[k])).join('&');
    }

    store.dispatch({ type: 'XHR_STARTED' });

    return fetch(url).then(response => {
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

        return data;
    }).catch(response => {
        console.log(response);
        next({
            type: 'XHR_FAILED',
            error: response.statusText
        });
    });
};