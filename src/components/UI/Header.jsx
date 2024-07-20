import { Link } from 'react-router-dom';
function Header() {
    return (
        <header>
            <nav>
                <div>
                    <p>Ryan Cuthbert</p>
                </div>
                <div className="links-container">
                    <Link to="/" >About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </header>

    )
}




export default Header