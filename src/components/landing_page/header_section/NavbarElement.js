import React from 'react';
import {Link} from "react-router-dom";

const NavbarElement = ({name, linkTo}) => {
    return (

            <li><Link to={`${linkTo}`} className="nav-link">{name}</Link></li>

    )
}

export default NavbarElement;