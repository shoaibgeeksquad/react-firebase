export const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_LOGGEDIN':
      return {
        ...state,
        loggedIn: action.payload
      }
    case 'SET_SIGN_UP':
      return {
        ...state,
        signUp: action.payload
      }
    case 'GET_DETAIL_LIST':
      return {
        ...state,
        getDetail: action.payload
      }
    case 'DELETE_SINGLE_RECORD':
      return {
        ...state,
        getDetail: state.getDetail.filter((single: any) => single.id !== action.payload)
      }
    case 'UPADTE_USER_BY_ID':
      return {
        ...state,
        payload: action.payload
      }
    default:
      return state;
  }
}
