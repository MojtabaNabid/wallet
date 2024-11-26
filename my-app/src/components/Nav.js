import logo from '../assets/imgages/logo-bg-white-1.jpg'
import Button from 'react-bootstrap/Button';
import searchIcon from '../assets/imgages/search.png';
import helpicon from '../assets/imgages/help-icon.png';
import notificationIcon from '../assets/imgages/notification-icon.png';
import { Link } from "react-router-dom";

function Nav() {
return (
    <>
        <nav>
            <div className='nav-container'>
                <img src={logo} alt="My Wallet Logo" className='logo' />
                <p className='nav-elements divider'>|</p>
                <div className='nav-elements nav-welcome'>
                    <p>Hello Mojtaba</p>
                    <p>Welcome to your Wallet</p>
                </div>
                <div className='search-box nav-elements'>
                    <img src={searchIcon} width={20} className='search-icon'/>
                    <input type='text' name='search' className='search-input'/>
                </div>
                <img src={helpicon} className='nav-elements nav-icons'/>
                <img src={notificationIcon} className='nav-elements nav-icons'/>
                <p className='nav-elements divider'>|</p>
                <Link to='/Login'>
                    <Button variant="primary" className='m-3 nav-elements log-reg' type="submit">
                            Login / Register
                    </Button>
                </Link>
            </div>
        </nav>
    </>
)
}

export default Nav;