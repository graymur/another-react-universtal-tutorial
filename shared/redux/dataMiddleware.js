import fetch from 'isomorphic-fetch';

export default api => store => next => action => {
    if (action.type !== 'DATA_PLEASE') {
        return next(action);
    }

    store.dispatch({ type: 'XHR_STARTED' });

    return api(action.key, action.payload || {})
        .then(data => {
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