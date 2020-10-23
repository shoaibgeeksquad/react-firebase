import { getDetail, deleteSingleRecord, upadteUser } from '../services/getDetail'

export const getAllUser = (dispatch: any) => {
    getDetail(dispatch);
}

export const deleteSingleUser = (dispatch: any, id: any) => {
    deleteSingleRecord(dispatch, id);
}

export const upadteUserById = (dispatch: any, data: any, id: any) => {
    upadteUser(id).then(response => response.json())
        .then(json => {
            console.log("res", json)
            dispatch({
                type: "UPADTE_USER_BY_ID",
                payload: data
            })
        })
}

export const setLoggedIn = (dispatch :any, status:any) => {
    dispatch({
        type: 'SET_LOGGEDIN',
        payload: status
    });
};

export const setSignUpMode = (dispatch :any, signUp:any) => {
    dispatch({
        type: 'SET_SIGN_UP',
        payload: signUp
    });
};