import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from '../../context/globalContext/globalContext';

const Index = (props: any) => {

    // let { history } = props;
    const { state, dispatch, getAllUser, upadteUserById, deleteSingleUser }: any = useContext(GlobalContext);
    const [updateData, setUpdateData] = useState()
    useEffect(() => {
        getAllUser(dispatch)
    }, [])

    const updateUser = () => {
        let payload = {
            address: { street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874" },
            company: { name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets" },
            email: "Sincere@april.biz",
            id: 1,
            name: updateData.name,
            phone: "1-770-736-8031 x56442",
            username: "Bret",
            website: "hildegard.org",
        }
        upadteUserById(dispatch, payload, 1);
    }

    return (
        <div>
            {/* form */}
            {/* <div>
                <input 
                    type="text"
                    value={updateData ? updateData.name : ""}
                    onChange={event => {
                        let duplicateData = { ...updateData }
                        duplicateData.name = event.target.value;
                        setUpdateData({ ...duplicateData });
                    }}
                />
                <span
                    onClick={() => updateUser()}
                >Edit</span>
            </div> */}


            {/* table */}
            <div className="py-3">
                <table className="w-full shadow text-left bg-white">
                    <thead>
                        <tr className="border-b border-gray-300">
                            <th className="py-5 pl-2 sm:pl-10 w-1/4 text-base text-gray-800">Name</th>
                            <th className="py-5 w-1/4 text-base text-gray-800 text-center pr-8">Email</th>
                            <th className="py-5 w-1/4 text-base text-gray-800 text-center">Phone</th>
                            <th className="py-5 w-1/4 text-base text-gray-800 text-center pr-2 sm:pr-10">Company</th>
                            <th className="py-5 w-1/4 text-base text-gray-800 text-center pr-4 ">Actions</th>
                        </tr>
                    </thead>
                    {/* {state.length !== 0 ? */}
                    <tbody>
                        {state && state.getDetail && state.getDetail.lenght !== 0 ? state && state.getDetail && state.getDetail.map((single: any) =>
                            <tr className="border-b border-gray-200">
                                <td className="pl-2 sm:pl-10 pr-2 py-4">
                                    <div className="flex items-center">
                                        <div>
                                            <p className="text-gray-800 text-xs sm:text-sm">{single.name}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pr-2 pt-4 pb-5 text- gray-800 text-xs sm:text-sm">
                                    <div className="xl:pl-32 flex flex-col">
                                        <div>
                                            <p className="text-gray-800 text-xs sm:text-sm pb-1">{single.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pr-2 pt-4 pb-5 text-green-400 text-xs sm:text-sm text-center">{single.phone}</td>
                                <td className="pt-4 pb-5 text-gray-800 pr-2 sm:pr-10 text-xs sm:text-sm text-center">{single.company.name}</td>
                                <td className="pt-4 pb-5 text-gray-800  text-xs sm:text-sm text-center pr-4">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded cursor-pointer"
                                        onClick={() => deleteSingleUser(dispatch, single.id)}
                                    >
                                        Delete
                                    </button>
                                    {/* <button className="bg-blue-500 hover:bg-blue-700 text-white ml-2 font-bold py-2 px-4 border border-blue-700 rounded cursor-pointer"
                                        onClick={() => setUpdateData(single)}
                                    >
                                        Edit
                                    </button> */}
                                </td>
                            </tr>
                        )
                            : "No Records"
                        }
                    </tbody>
                    {/* :
                    <tbody className="w-100">
                        <div className="py-5 flex justify-center">
                            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"></div>
                        </div>
                    </tbody>
                } */}
                </table>
            </div>
        </div>
    );
};
export default Index;