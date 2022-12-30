import { Fragment } from "react"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { useState } from "react";
import { useDispatch } from 'react-redux'
import * as userActions from '../features/user.slice'
import { useNavigate } from 'react-router-dom'

function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [stayLoggedIn, setStayLoggedIn] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onClickSignIn(e) {
        e.preventDefault()
        fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "email": username,
                "password": password
            })
        })
            .then(function (response) {
                return response.json();
            })
            .then((data) => getProfileData(data.body))

            .catch(function (error) {
                console.log(`Il y a eu un problème avec l'opération fetch : erreur ${error} ${error.message ? error.message : ""}`)
            })

    }

    function getProfileData(data) {
        fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + data.token,
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (userData) {
                const user = [data.token, userData.body.email, userData.body.lastName, userData.body.firstName, stayLoggedIn]
                dispatch(userActions.login(user))
                navigate('/dashboard')
            })
            .catch(function (error) {
                console.log(`Il y a eu un problème avec l'opération fetch : erreur ${error} ${error.message ? error.message : ""}`)
            })
    }


    return (
        <Fragment>
            <Header />
            <main className="main height-468 padding-top-3 bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" onChange={e => setStayLoggedIn(e.target.checked)} />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="sign-in-button" onClick={e => onClickSignIn(e)}>Sign In</button>
                    </form>
                </section>
            </main>
            <Footer />
        </Fragment>
    )
}

export default Signin;