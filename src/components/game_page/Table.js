import React from 'react';
import Layed from "./Layed";
import CardsSection from "./CardsSection";
import PlayerSection from "./PlayersSection";

const Table = () => {
    return (

        <div className='table__container'>
            <CardsSection/>
            <PlayerSection/>
        </div>

    )
}

export default Table;