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

    function navigateDashboard() {
        navigate('/dashboard')
    }

    function navigateHomePage() {
        navigate('/')
    }

    return (
        <nav className="main-nav">
            <div className="main-nav-logo" onClick={() => navigateHomePage()}>
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </div>
            {isLogged ?
                <div className="display-flex">
                    <div className="main-nav-item" onClick={() => navigateDashboard()}>
                        <i className="fa fa-user-circle"></i>
                        {firstname}
                    </div>
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