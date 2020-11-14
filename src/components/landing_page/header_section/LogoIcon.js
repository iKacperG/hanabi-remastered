import React from 'react';

const LogoIcon = ({logoImage}) => {
    return (
        <>
            <img className='logo__image' src={logoImage} alt='simplici.me logo'/>
        </>
    )
}

export default LogoIcon;