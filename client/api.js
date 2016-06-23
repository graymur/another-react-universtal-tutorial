import fetch from 'isomorphic-fetch';

export default (endpoint, data = {}) => {
    let url = `/api/${endpoint}?` + Object.keys(data).map(k => k + '=' + encodeURIComponent(data[k])).join('&');

    return fetch(url).then(response => {
        return response.json();
    });
}