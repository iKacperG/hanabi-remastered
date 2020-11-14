import React from 'react';
import LogoIcon from "./LogoIcon";
import LogoText from "./LogoText";


const Logo = () => {
    return (
        <div className='logo__container'>
            <LogoIcon/>
            <LogoText logoText='simplici.me'/>
        </div>
    )
}

export default Logo;