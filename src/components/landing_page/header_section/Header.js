import React from 'react';
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {


    return (
        <header className='header__container'>
            <Logo/>
            <Navbar/>
        </header>
    )
}

export default Header;