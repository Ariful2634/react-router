import { NavLink } from "react-router-dom";
import './Style.css'

const Header = () => {

    return (
        <div>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink  to={'/users'}>Users</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;