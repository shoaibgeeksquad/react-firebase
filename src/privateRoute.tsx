import React, { useContext ,useEffect } from 'react'
import { Route, withRouter } from 'react-router-dom';
import { GlobalContext } from './context/globalContext/globalContext';
import List from './container/lists'
import Loader from './components/commonComponents/loader/loader'
import firebase from './config/firebase'

const PrivateRoute = (props:any) => {
    let {history}=props
    const { state }: any = useContext(GlobalContext)
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user: any) => {
            if ((user && user.uid !== undefined) && (state && state.signUp === "home") ) {
                history.push("/")
            } else {
                history.push("/sign-in")
            }
        });
    }, [])


    return (
        <div>
                <Route path={"/"} component={state && state.signUp === "home" ? List : Loader} exact={true} />
        </div>
    );
}
export default withRouter(PrivateRoute);