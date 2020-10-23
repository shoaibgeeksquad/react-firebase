import React, { useState, useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import firebase from '../../config/firebase'
import ErrorModal from '../../components/signupModals/passwordErrorModal'
import Loader from '../../components/commonComponents/loader/loader'
import { GlobalContext } from '../../context/globalContext/globalContext';

const SignUp = (props: any) => {
    let { history } = props;
    const { state, dispatch, setSignUpMode }: any = useContext(GlobalContext);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [activeUser, setActiveUser] = useState(true);
    const [displayError, setDisplayError] = useState({
        password: false,
        name: false,
        sameAccount: false,
    });
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user: any) => {
            if ((user && user.uid !== undefined) && (state && state.signUp === "home")) {
                history.push("/")
            }else {
                setActiveUser(false);
            }
        });
    }, [])

    const createUserWithEmailAndPasswordHandler = (event: any, email: any, password: any) => {
        event.preventDefault();
        if (!name) {
            let duplicateName = { ...displayError }
            duplicateName.name = true;
            setDisplayError({ ...duplicateName })
            // setNameError(true);
            setLoader(false)
        }
        if (password !== confirmPassword || password.length < 6) {
            let duplicatePassword = { ...displayError }
            duplicatePassword.password = true;
            setDisplayError({ ...duplicatePassword })
            setLoader(false)
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(email, password).then((res: any) => {
                setLoader(true);
                let duplicate = { ...displayError }
                duplicate.password = false;
                duplicate.name = false;
                setDisplayError({ ...duplicate })
                let uid = res.user.uid;
                let userObj = {
                    fullName: name,
                    email,
                    uid
                };
                firebase.firestore().collection('users')
                    .doc(uid)
                    .set(userObj)
                setSignUpMode(dispatch, "signup")
                history.push("/sign-in")
                setLoader(false)
            })
            // .catch((error: any) => {
            //     if (error.message){ 
            //         // === "auth/email-already-in-use") {
            //         console.log("error 2",error && error.message === "EMAIL_EXISTS")
            //         setLoader(false)
            //         let duplicate = { ...displayError }
            //         duplicate.sameAccount = false;
            //         setDisplayError({ ...duplicate })
            //     }
            // })
        }
    };

    return (
        <div>
            {!activeUser ?
                <div>
                    {displayError.password ?
                        < ErrorModal setDisplayError={setDisplayError} displayError={displayError} first="IncorrectPassword!" second="Password not matched" />
                        : ""}
                    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                        {!loader ?
                            <div className="max-w-md w-full">
                                {/* heading and image */}
                                <div>
                                    <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
                                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                                        Create your account
                        </h2>
                                </div>
                                {/* form starts from here */}
                                <form className="mt-8"
                                    onSubmit={(event: any) => createUserWithEmailAndPasswordHandler(event, email, password)}
                                >
                                    <input type="hidden" name="remember" value="true" />
                                    {/* name email */}
                                    <div className="rounded-md shadow-sm">
                                        <div>
                                            <input name="name" type="text" required className={"appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 " + (displayError.name ? "border-red-800" : "border-gray-300")} placeholder="Name"
                                                value={name}
                                                onChange={(event) => {
                                                    setName(event.target.value)
                                                }}
                                            />
                                        </div>
                                        <div className="-mt-px">
                                            <input name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email"
                                                value={email}
                                                onChange={(event) => {
                                                    setEmail(event.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {/* password */}
                                    <div className="rounded-md shadow-sm py-4">
                                        <div>
                                            <input aria-label="Email address" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password"
                                                value={password}
                                                onChange={(event) => {
                                                    setPassword(event.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="-mt-px">
                                            <input aria-label="Password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Confirm Password"
                                                value={confirmPassword}
                                                onChange={(event) => setConfirmPassword(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out cursor-pointer"
                                        // onClick={event => {
                                        //     createUserWithEmailAndPasswordHandler(event, email, password);
                                        // }}
                                        >
                                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                                </svg>
                                            </span>
                            Sign Up
                            </button>
                                    </div>
                                    <div className="mt-1">
                                        <span className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out cursor-pointer"
                                            onClick={() => history.push("/sign-in")}>
                                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                                </svg>
                                            </span>
                            Back to Sign In
                            </span>
                                    </div>
                                </form>
                            </div>
                            :
                            <Loader />
                        }
                    </div>

                </div>
                :
                <Loader />
            }
        </div>
    )
}
export default withRouter(SignUp);
