import { Alert } from 'react-native'
export const AUTH_LOADING = "AUTH_LOADING";
export const IS_FIRST = "IS_FIRST";
export const TOKKEN = "TOKKEN";
export const USER_TOKKEN = "USER_TOKKEN";


export const isFirstTime = (value) => {
    return dispatch => {
        dispatch({
            type: IS_FIRST,
            payload: {
                isFirst: value
            }
        })
    }
}

export const saveToken = (value) => {
    return dispatch => {
        dispatch({
            type: TOKKEN,
            payload: {
                token: value
            }
        })
    }
}
export const userToken = (value) => {
    return dispatch => {
        dispatch({
            type: USER_TOKKEN,
            payload: {
                userToken: value
            }
        })
    }
}

