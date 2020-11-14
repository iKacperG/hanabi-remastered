import React from 'react';
import NavbarElement from "./NavbarElement";
import {navbarElements} from '../common/rawdata'

const Navbar = () => {
    return (
        <ul className='navbar__list'>
            {
                navbarElements.map((navbarElement) => {
                return (
                    <NavbarElement name={navbarElement.name} linkTo={navbarElement.linkTo}/>

                )
            })
            }

        </ul>
    )
}

export default Navbar;