import {createStore, combineReducers} from 'redux';

function holidayReducer(state = [], action){
    switch (action.type) {
        case 'GET_HOLIDAY':
            return action.holiday
        default:
            return state
    }
}

function changeSpinner(state = false, action){
    switch (action.type) {
        case 'SET_SPINNER':
            return action.value
        default:
            return state
    }
}

let rootReducer = combineReducers({
    holiday: holidayReducer,
    spinner: changeSpinner
})

let store = createStore(rootReducer)

export default store