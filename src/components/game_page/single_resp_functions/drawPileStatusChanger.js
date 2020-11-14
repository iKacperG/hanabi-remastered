export const drawPileStatusChanger = (cardsLeft,setDrawPileStatus) => {
    if(cardsLeft <=25)setDrawPileStatus('middle')
    if(cardsLeft <=10)setDrawPileStatus('low')
    if(cardsLeft === 0)setDrawPileStatus('none')

}