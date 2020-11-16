export const addCardToPlayerHand = (hand, setActualHand, cardsLeft) => {
    setActualHand([cardsLeft[0], ...hand])
}

