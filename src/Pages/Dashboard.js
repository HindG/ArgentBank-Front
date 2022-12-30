import { Fragment, useEffect } from "react"
import { useSelector } from "react-redux"
import AccountItem from "../Components/AccountItem"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const firstname = useSelector(state => state.user.firstname)
    const lastname = useSelector(state => state.user.lastname)
    const isLogged = useSelector(state => state.user.isLogged)
    const navigate = useNavigate();

    useEffect(() => {
        !isLogged && navigate("/sign-in")
    }, [isLogged, navigate])

    return (
        <Fragment>
            <Header />
            <main className="main height-700 padding-top-21 bg-dark">
                <div className="header">
                    <h1 className="margin-top-0">Welcome back<br />{firstname && `${firstname} ${lastname}`}</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <AccountItem
                    type="Checking"
                    accountId="x8349"
                    amount="2,082.79" />
                <AccountItem
                    type="Savings"
                    accountId="x6712"
                    amount="10,928.42" />
                <AccountItem
                    type="Credit Card"
                    accountId="x8349"
                    amount="184.30" />
            </main>
            <Footer />
        </Fragment>
    )
}

export default Dashboard;