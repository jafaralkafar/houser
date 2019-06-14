import { createStore } from 'redux'

const initialState = {
    name: '',
    address: '',
    city: '', 
    state: '',
    zip: '',
    img: '',
    mortgage: '',
    rent: '',
}

export const UPDATENAME = 'UPDATENAME'
export const UPDATEADDRESS = 'UPDATEADDRESS'
export const UPDATECITY = 'UPDATECITY'
export const UPDATESTATE = 'UPDATESTATE'
export const UPDATEZIP = 'UPDATEZIP'
export const UPDATEIMG = 'UPDATEIMG'
export const UPDATEMORTGAGE = 'UPDATEMORTGAGE'
export const UPDATERENT = 'UPDATERENT'

function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case UPDATENAME:
            return {
                ...state,
                name: payload
            }
        case UPDATEADDRESS:
            return {
                ...state,
                address: payload
            }
        case UPDATECITY:
            return {
                ...state,
                city: payload
            }
        case UPDATESTATE:
            return {
                ...state,
                state: payload
            }
        case UPDATEZIP:
            return {
                ...state,
                zip: payload
            }
        case UPDATEIMG:
            return {
                ...state,
                img: payload
            }
        case UPDATEMORTGAGE:
            return {
                ...state,
                mortgage: payload
            }
        case UPDATERENT:
            return {
                ...state,
                rent: payload
            }
        default:
            return state;
    }
}

export default createStore(reducer)