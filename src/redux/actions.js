export const getHoliday = (holiday) => {
    return {
        type: 'GET_HOLIDAY',
        holiday
    }
}

export const setSpinner = (value) => {
    return {
        type: 'SET_SPINNER',
        value
    }
}