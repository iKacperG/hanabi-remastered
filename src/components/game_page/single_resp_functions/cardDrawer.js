import {cards} from "./cards_collection";

export const cardDrawer = (hand,setActualHand, cardsLeft,setCardsLeft) => {
    if (hand.length <= 4 && cardsLeft.length >  0) {
        // hand?.push(cardsLeft[0]);
        setActualHand([cardsLeft[0],...hand])
        setCardsLeft(cardsLeft.filter((el)=>{
           return cardsLeft.indexOf(el)!==0
        }))
            // cardsLeft.shift()
        console.log(cardsLeft);
        console.log('after shift');
    }

    return hand
}