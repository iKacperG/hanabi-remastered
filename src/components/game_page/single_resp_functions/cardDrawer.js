export const cardDrawer = (hand,cardsLeft) => {

    cardsLeft?.forEach((card) => {

        if (hand.length <= 4 && cardsLeft.length >= 0) {
            hand.push(card)
            cardsLeft.shift()

        }})
}