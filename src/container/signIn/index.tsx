import React, { useState, useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import firebase from '../../config/firebase'
import { GlobalContext } from '../../context/globalContext/globalContext';
import Loader from '../../components/commonComponents/loader/loader'

const SignIn = (props: any) => {

    let { history } = props;
    const { state, setSignUpMode, setLoggedIn, dispatch }: any = useContext(GlobalContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);
    const [activeUser, setActiveUser] = useState(true);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user: any) => {
            if ((user && user.uid !== undefined) && (state && state.signUp === "home")) {
                // setLoggedIn(dispatch, true);
                history.push("/")
            } else {
                setActiveUser(false);
                // setLoggedIn(dispatch, false);
            }
        });
    }, [])

    const signUp = (event: any) => {
        setLoader(true);
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((data: any) => {
                if (data) {
                    // setLoggedIn(dispatch, true);
                    setSignUpMode(dispatch,"home")
                    history.push("/");
                    setLoader(false);
                }
            })
            .catch((error: any) => {
                setLoader(false);
                window.alert(error);
            });
    }

    return (
        <div>
            {!activeUser ?
                <div>
                    {!loader ?
                        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                            <div className="max-w-md w-full">
                                {/* heading and image */}
                                <div>
                                    <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
                                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                                        Sign in to your account
                        </h2>
                                </div>
                                {/* form starts from here */}
                                <form className="mt-8"
                                    onSubmit={event => signUp(event)}
                                >
                                    <input type="hidden" name="remember" value="true" />
                                    <div className="rounded-md shadow-sm">
                                        <div>
                                            <input aria-label="Email address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address"
                                                value={email}
                                                onChange={(event) => {
                                                    setEmail(event.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="-mt-px">
                                            <input aria-label="Password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password"
                                                value={password}
                                                onChange={(event) => {
                                                    setPassword(event.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input id="remember_me" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                                            <label className="ml-2 block text-sm leading-5 text-gray-900">
                                                Remember me
                                </label>
                                        </div>
                                        <div className="text-sm leading-5">
                                            <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                                Create new account
                                </a>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out cursor-pointer">
                                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                                  Sign in
                                                </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        :
                        <Loader />
                    }
                </div>
                :
                <Loader />
            }
        </div>
    )
}
export default withRouter(SignIn);
