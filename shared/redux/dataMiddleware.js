import data from '../data.json';

export default store => next => action => {
    if (action.type !== 'DATA_PLEASE') {
        return next(action);
    }

    next({
        type: action.resultType,
        data: data[action.key]
    });
};