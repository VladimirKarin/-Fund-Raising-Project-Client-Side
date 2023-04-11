import '../style/nav.css';

function Nav() {
    return (
        <nav className="navbar">
            <div className="logo">
                <div className="logo">LOGO</div>
            </div>
            <div className="menu">
                <div className="right">
                    <a href="#" className="link">
                        <div className="title">Home</div>
                        <div className="bar"></div>
                    </a>
                    <a href="#" className="link">
                        <div className="title">User</div>
                        <div className="bar"></div>
                    </a>{' '}
                    <a href="#" className="link">
                        <div className="title">Login</div>
                        <div className="bar"></div>
                    </a>{' '}
                    <a href="#" className="link">
                        <div className="title">Register</div>
                        <div className="bar"></div>
                    </a>
                </div>
            </div>
        </nav>
    );
}
export default Nav;
