import {removeCardFromDrawPile} from "./removeCardFromDrawPile";
import {addCardToPlayerHand} from "./addCardToPlayerHand";

export const drawCard = (hand, setActualHand, cardsLeft, setCardsLeft) => {
    if (hand.length <= 4 && cardsLeft.length > 0) {

        addCardToPlayerHand(hand,setActualHand,cardsLeft)
        removeCardFromDrawPile(cardsLeft, setCardsLeft)

    }

    return hand
}

//Fails to learn from
// hand?.push(cardsLeft[0]);
// cardsLeft.shift()