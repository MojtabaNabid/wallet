import logo from '../assets/imgages/logo-bg-white-1.jpg'

function Nav() {
return (
    <>
        <nav>
            <img src={logo} alt="My Wallet Logo" className='logo' />
            <p className='nav-elements'>|</p>
            <div className='nav-elements nav-welcome'>
                <p>Hello Mojtaba</p>
                <p>Welcome to your Wallet</p>
            </div>
        </nav>
    </>
)
}

export default Nav;