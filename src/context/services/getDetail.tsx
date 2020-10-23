import { users } from '../../config/config'

export const getDetail = (dispatch: any) => {
    fetch(users + '/users')
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: "GET_DETAIL_LIST",
                payload: json
            })
        })
}

export const deleteSingleRecord = (dispatch: any, id: any) => {
    fetch(users + `/users/${id}`, {
        method: "DELETE"
    })
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: "DELETE_SINGLE_RECORD",
                payload: id
            })
        })
}

export const upadteUser = (id: any) => {
    return (
        fetch(users + `/users/${id}`, {
            method: "PUT"
        })
    )
}