import React from 'react';

const Card = ({card, isYou}) => {
    if(isYou){
        return (
            <div className={`player-card__container player-card__container--none`}/>

        )
    }

    return (
        <div className={`player-card__container player-card__container--${card.color}`}>
            {card.value}
        </div>
    )
}

export default Card;