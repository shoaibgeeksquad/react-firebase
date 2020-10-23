import React, { createContext, useReducer } from 'react';
import { Reducer } from '../reducer'
import { getAllUser, deleteSingleUser, upadteUserById , setLoggedIn , setSignUpMode} from '../actions/getDetail'

// Initial state
const initialState = {
  getDetail: [],
  loggedIn:false,
  signUp:"home"
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (<GlobalContext.Provider value={{
    state,
    dispatch,
    getAllUser,
    initialState,
    deleteSingleUser,
    upadteUserById,
    setLoggedIn,
    setSignUpMode
  }}>
    {children}
  </GlobalContext.Provider>);
}