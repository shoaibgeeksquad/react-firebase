import React , {useEffect,useContext} from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import PrivateRoute from './privateRoute'
import SignIn from './container/signIn'
import SignUp from './container/signUp'
import firebase from './config/firebase'
import { GlobalContext } from './context/globalContext/globalContext';

const Routes = (props:any) => {

    let {history}=props;
    const { state, setLoggedIn, dispatch }: any = useContext(GlobalContext);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user: any) => {
            if (user && user.uid !== undefined) {
                setLoggedIn(dispatch, true);
                history.push("/")
            } else {
                setLoggedIn(dispatch, false);
            }
        });
    }, [])


    return (
        <div>
            <Switch>
                <Route path={"/sign-in"} component={SignIn} exact={true} />
                <Route path={"/sign-up"} component={SignUp} exact={true} />
                <Route path={"/"} component={PrivateRoute} exact={true} />
            </Switch>
        </div>
    );
}
export default withRouter(Routes)