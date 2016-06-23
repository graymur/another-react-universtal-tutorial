export const fetchPageData = (splat) => ({
    type: 'DATA_PLEASE',
    resultType: 'PAGE_DATA_FETCHED',
    key: 'page',
    payload: {
        splat
    }
});