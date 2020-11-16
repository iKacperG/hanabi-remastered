export const playCard = (hand,setActualHand,card) => {
    hand.slice(hand.indexOf(card), 1)
    setActualHand([...hand].filter((el) => {
        return el !== card
    }))
}