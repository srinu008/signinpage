import "../menu/menu.components.css"
import { Link } from "react-router-dom"
export const Menu = () => {
    return (

        <div className="menu">
            <label>
                <Link to="/Signup" className="menu-item">
                    SIGN-UP
                </Link>
            </label>

            <label>
                <Link to="/Signin" className="menu-item">
                    LOG-IN
                </Link>
            </label>

          
        </div>
    )
}