export const fetchAppData = () => ({
    type: 'DATA_PLEASE',
    resultType: 'APP_DATA_FETCHED',
    key: 'app'
});

export const clearXhrError = () => ({
    type: 'CLEAR_XHR_ERROR'
});