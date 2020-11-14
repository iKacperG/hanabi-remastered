import React, {useContext, useEffect, useState} from 'react';
import {CardsLeftContext} from "../../providers/CardsLeftContext";
import {drawPileStatusChanger} from "./single_resp_functions/drawPileStatusChanger";

const DrawPile = () => {
    const {cardsLeft, setCardsLeft} = useContext(CardsLeftContext)
    const [drawPileStatus, setDrawPileStatus] = useState('full')


useEffect(()=>{
    drawPileStatusChanger(cardsLeft,setDrawPileStatus);
},[cardsLeft])

    return (
        <>
            <div className={`draw-pile__container draw-pile__container--${drawPileStatus}`}>{cardsLeft.length}</div>
        </>
    )
}

export default DrawPile;