export const drawPileStatusChanger = (cardsLeft,setDrawPileStatus) => {
    if(cardsLeft === 0){setDrawPileStatus('none'); return 'none'}
    if(cardsLeft <=10){setDrawPileStatus('low'); return 'low'}
    if(cardsLeft <=25){setDrawPileStatus('middle'); return 'middle'}
    if(cardsLeft >25) return 'full'

}