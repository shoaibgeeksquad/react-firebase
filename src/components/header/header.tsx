import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import firebase from '../../config/firebase'

const Header = (props: any) => {
    let { history } = props;
    const [name, setName] = useState("")

    const logout = () => {
        firebase.auth().signOut().then((response: any) => {
            history.push("/sign-in")
        })
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user: any) => {
            firebase.firestore().collection('users').doc(user.uid).onSnapshot((snapshot: any) => {
                let data = { ...snapshot.data() }
                setName(data.fullName)
            })
        })
    }, [])


    return (
        <div>
            <div className="bg-gray-800 shadow w-full flex-row flex px-5 py-3">
                <div className="lg:w-9/12 w-4/12 xl:w-9/12 md:w-9/12 flex">
                    {/* logo and The North Text */}
                    <div className="flex">
                        <div className="flex items-center">
                            <svg aria-label="Home" id="logo" enable-background="new 0 0 300 300" height="44" viewBox="0 0 300 300" width="43" xmlns="http://www.w3.org/2000/svg" >
                                <g>
                                    <path fill="#4c51bf" d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z" />
                                </g>
                            </svg>
                        </div>
                        <div className="font-bold flex px-2 py-1 items-center sm:text-sm w-full text-white">
                            <h5>React Firebase</h5>
                        </div>
                    </div>
                    {/* logo and The Users Text */}
                    <div className="xl:flex lg:flex hidden">
                        <div className="flex px-8 ">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon text-blue-400 icon-tabler icon-tabler-grid" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x="4" y="4" width="6" height="6" rx="1" />
                                    <rect x="14" y="4" width="6" height="6" rx="1" />
                                    <rect x="4" y="14" width="6" height="6" rx="1" />
                                    <rect x="14" y="14" width="6" height="6" rx="1" />
                                </svg>
                            </div>
                            <div className="font-thin text-blue-400 flex px-2 py-1 items-center text-sm">
                                <h5 className="cursor-pointer">Users</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-5/12 xl:w-5/12 flex w-6/12 justify-end ">
                    <div className="xl:flex lg:flex hidden w-full justify-end">
                        {/* profile */}
                        <div className="border-gray-400 h-full flex justify-center items-center border-gray-300 w-6/12 py-3 ">
                            <div className="flex justify-end">
                                <div className="text-sm items-center border-r flex text-white px-2 cursor-pointer">
                                    <h6>{name}</h6>
                                </div>
                                <div className="text-sm items-center flex text-white px-2 cursor-pointer"
                                    onClick={() => logout()}
                                >
                                    <h6>Sign Out</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}
export default withRouter(Header);