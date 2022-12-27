import { useSelector } from "react-redux";
import Logo from "../img/argentBankLogo.png"

function Header() {
    const isLogged = useSelector(state => state.user.isLogged)
    const firstname = useSelector(state => state.user.firstname)

    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="./">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            {isLogged ?
                <div>
                    <a className="main-nav-item" href="./dashboard">
                        <i className="fa fa-user-circle"></i>
                        {firstname}
                    </a>
                    <a className="main-nav-item" href="./">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </a>
                </div>
                :
                <div>
                    <a className="main-nav-item" href="./sign-in">
                        <i className="fa fa-user-circle margin-right-5"></i>
                        Sign In
                    </a>
                </div>
            }
        </nav>
    )
}

export default Header;