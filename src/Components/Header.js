import { useSelector } from "react-redux";
import Logo from "../img/argentBankLogo.png"
import { useDispatch } from "react-redux";
import * as userActions from '../features/user.slice'
import { useNavigate } from 'react-router-dom'

function Header() {
    const isLogged = useSelector(state => state.user.isLogged)
    const firstname = useSelector(state => state.user.firstname)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function onClickSignOut() {
        dispatch(userActions.logout())
        navigate('/sign-in')
    }

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
                <div className="display-flex">
                    <a className="main-nav-item" href="./dashboard">
                        <i className="fa fa-user-circle"></i>
                        {firstname}
                    </a>
                    <div className="main-nav-item sign-out" onClick={() => onClickSignOut()}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </div>
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