export const removeCardFromDrawPile = (cardsLeft, setCardsLeft) => {
    setCardsLeft(cardsLeft.filter((el) => {
        return cardsLeft.indexOf(el) !== 0
    }))
}


