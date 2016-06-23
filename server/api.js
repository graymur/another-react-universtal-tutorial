import data from './data.json';

const api = (endpoint, query) => {
    return new Promise((resolve, reject) => {
        try {
            let result;

            if (typeof data[endpoint] === 'undefined') throw new Error('Endpoint does not exist');

            if (endpoint === 'page') {
                if (!query.splat) throw new Error('Splat is empty');
                if (!data.page[query.splat]) throw new Error('Splat not found');

                result = data.page[query.splat];
            } else {
                result = data[endpoint];
            }

            resolve(result);
        } catch (e) {
            reject(e);
        }
    });
};

export default api;