import React, {useContext, useEffect, useState} from 'react';
import {CardsLeftContext} from "../../providers/CardsLeftContext";
import {OrderContext} from "../../providers/CardsLeftContext";
import {drawCard} from "./single_resp_functions/drawCard";
import Card from "./Card";

const PlayerHand = ({player}) => {
    const [actualHand, setActualHand] = useState(player.hand)
    const {actualOrder, setActualOrder} = useContext(OrderContext)
    const {cardsLeft, setCardsLeft} = useContext(CardsLeftContext)

    console.log(actualHand);
    console.log(player.name)


    return (
        <>
            <div className='player-hand__container'>
                {actualHand?.map((card, i, hand) => {
                    return <Card card={card} isYou={player.isYou} hand={hand} setActualHand={setActualHand}/>
                })}
            </div>
            <button
                onClick={() => {
                    drawCard(actualHand, setActualHand, cardsLeft, setCardsLeft)
                }}>draw
            </button>

            <h3>{player.name}</h3>

        </>
    )
}

export default PlayerHand;