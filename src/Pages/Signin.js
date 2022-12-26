import { Fragment } from "react"
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import { useState } from "react";

function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remembered, setRemembered] = useState(false);

    function onClickSignIn() {
        fetch('https://api.npms.io/v2/search?q=react')
    }

    return (
        <Fragment>
            <Header />
            <main className="main bg-dark">
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
                            <input type="checkbox" id="remember-me" onChange={e => setRemembered(e.target.checked)} />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="sign-in-button" onClick={() => this.onClickSignIn}>Sign In</button>
                    </form>
                </section>
            </main>
            <Footer />
        </Fragment>
    )
}

export default Signin;