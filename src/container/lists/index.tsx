import React from 'react'
import { withRouter } from 'react-router-dom'
import ListComponent from '../../components/lists/lists'
import Header from '../../components/header/header'

const ListPage = () => {

    // window.addEventListener("beforeunload", (ev) => {
    //     ev.preventDefault();
    //     return ev.returnValue = 'Are you sure you want to close?';
    // });

    return (
        <div>
            <Header />
            <ListComponent />
        </div>
    )
}
export default withRouter(ListPage);