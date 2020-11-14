import React from 'react';
import Layed from "./Layed";
import CluePile from "./CluePile";
import FailPile from "./FailPile";
import ThrownOut from "./ThrownOut";
import DrawPile from "./DrawPile";

const CardsSection = () => {
    return (
        <div className='cards__section'>
            <div className='millsc-card__container'>
                <DrawPile/>
                <CluePile/>
                <FailPile/>
            </div>
            <div className='main-card__container'>
            <Layed/>
            <ThrownOut/>
            </div>
        </div>
    )
}

export default CardsSection;