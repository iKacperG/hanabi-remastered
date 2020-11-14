import React, {useContext, useEffect, useState} from 'react';
import {CardsLeftContext} from "../../providers/CardsLeftContext";
import {OrderContext} from "../../providers/CardsLeftContext";
import {cardDrawer} from "./single_resp_functions/cardDrawer";
import Card from "./Card";

const PlayerHand = ({player,order,hand,isYou}) => {
    const [actualHand,setActualHand] = useState(hand)
    const {actualOrder, setActualOrder} = useContext(OrderContext)
    const {cardsLeft, setCardsLeft} = useContext(CardsLeftContext)

    cardDrawer(actualHand,cardsLeft)
    return (
        <>
            <div className='player-hand__container'>
                {hand?.map((card) => {
                    return <Card card={card} isYou={isYou}/>
                })}
            </div>
            <h3>{player}</h3>

        </>
    )
}

export default PlayerHand;