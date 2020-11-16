import React from 'react';

const Card = ({card, isYou,hand,setActualHand}) => {
    if(isYou){
        return (
            <div onClick={()=>{
                hand.slice(hand.indexOf(card),1)
                setActualHand([...hand].filter((el)=>{
                    return el!==card
                }))
            }} className={`player-card__container player-card__container--none`}/>

        )
    }

    return (
        <div  className={`player-card__container player-card__container--${card.color}`}>
            {card.value}
        </div>
    )
}

export default Card;