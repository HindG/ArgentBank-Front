import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import * as userActions from '../features/user.slice'
import AccountItem from "../Components/AccountItem"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { useNavigate } from 'react-router-dom'
import EditModal from "../Components/EditModal"

function Dashboard() {
    const firstname = useSelector(state => state.user.firstname)
    const lastname = useSelector(state => state.user.lastname)
    const isLogged = useSelector(state => state.user.isLogged)
    const token = useSelector(state => state.user.token)
    const [displayEditModal, setDisplayEditModal] = useState(false);
    const [inputFirstname, setInputFirstname] = useState("");
    const [inputLastname, setInputLastname] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        !isLogged && navigate("/sign-in")
    }, [isLogged, navigate])

    function displayHideEditModal() {
        setDisplayEditModal(!displayEditModal)
    }

    function saveNameChange(e) {
        const user = [inputLastname, inputFirstname]
        e.preventDefault()
        fetch('http://localhost:3001/api/v1/user/profile',
            {
                method: 'PUT',
                headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: inputFirstname,
                    lastName: inputLastname,
                })
            })
            .then(function () {
                dispatch(userActions.update(user))
                displayHideEditModal()
            })
            .catch(function (error) {
                console.log(`Il y a eu un problème avec l'opération fetch : erreur ${error} ${error.message ? error.message : ""}`)
            })
    }

    return (
        <Fragment>
            <Header />
            <main className="main height-700 padding-top-21 bg-dark">
                <div className="header">
                    <h1 className="margin-top-0">Welcome back<br />{firstname && `${firstname} ${lastname}`}</h1>
                    <button className="edit-button" onClick={() => displayHideEditModal()}>Edit Name</button>
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
            {displayEditModal &&
                <EditModal
                    displayHideEditModal={displayHideEditModal}
                    setInputFirstname={setInputFirstname}
                    setInputLastname={setInputLastname}
                    saveNameChange={saveNameChange}
                />
            }
            <Footer />
        </Fragment>
    )
}

export default Dashboard;