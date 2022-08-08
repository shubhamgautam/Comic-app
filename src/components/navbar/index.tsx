import "./index.css";

import Logo from "./elements/logo";
import { NavBarProps } from "./navbar.props";
import SearchBar from "../searchbar";

const NavBar = (props: NavBarProps) => {
    return <div className="nav-bar">
        <div className="nav-bar-container">
            <Logo />
            <SearchBar />
        </div>
    </div>
};

export default NavBar;