import { Link } from "react-router-dom"
import BFLogo from "../../asset/BF03.png"
import "../Header/header.css"

function Header () {
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <Link href="/"/><img src={BFLogo} width="125px"/>
                        </div>
                        <nav>
                            <ul id="MenuItems">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="fashtion">Fashion</Link></li>
                                <li><Link to="electronic">Electronics</Link></li>
                                <li><Link to="about">About</Link></li>
                                <li><Link to="contact">Contact</Link></li>
                                <li><Link to="account">Account</Link></li>
                            </ul>
                        </nav>  
                        {/* Cart */}
                        {/* <a href=""><img src="" width="30px" height="30px"/></a>
                        <img src="" className="menu-icon" onclick="menutoggle()"/> */}
                    </div>  
                </div>
            </div>
        </div>
    )
}
export default Header