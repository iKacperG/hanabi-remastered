import React from 'react';
import {playCard} from "./single_resp_functions/playCard";

const Card = ({card, isYou,hand,setActualHand}) => {
    if(isYou){
        return (
            <div  className={`player-card__container player-card__container--none`}
                  onClick={()=>playCard(hand,setActualHand,card)}/>
        )
    }

    return (
        <div  className={`player-card__container player-card__container--${card.color}`}>
            {card.value}
        </div>
    )
}

export default Card;