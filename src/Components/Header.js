import Logo from "../img/argentBankLogo.png"

function Header() {

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
            {/* {user ? */}
                {/* <div>
                    <a className="main-nav-item" href="./user.html">
                        <i className="fa fa-user-circle"></i>
                        Tony
                    </a>
                    <a className="main-nav-item" href="./index.html">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </a>
                </div>
                : */}
                <div>
                    <a className="main-nav-item" href="./sign-in">
                        <i className="fa fa-user-circle margin-right-5"></i>
                        Sign In
                    </a>
                </div>
            {/* } */}
        </nav>
    )
}

export default Header;