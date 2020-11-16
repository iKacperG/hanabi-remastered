import {drawPileStatusChanger} from "../components/game_page/single_resp_functions/drawPileStatusChanger";

const setDrawPileStatus = () => null

test('Border values affect display',()=>{
    expect(drawPileStatusChanger(26)).toBe('full')
    expect(drawPileStatusChanger(25,setDrawPileStatus)).toBe('middle')
    expect(drawPileStatusChanger(10,setDrawPileStatus)).toBe('low')
    expect(drawPileStatusChanger(0,setDrawPileStatus)).toBe('none')
})