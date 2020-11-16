import {cardDrawer} from "../components/game_page/single_resp_functions/cardDrawer";

test('Drawing cards from full draw pile to empty hand should equal with cards being drawn ', () => {


    expect(cardDrawer([],false, [
        {color:'red',value:1},
        {color:'blue',value:1},
        {color:'yellow',value:1},
        {color:'green',value:1},
        {color:'blue',value:1},

        ])).toHaveLength(1);

    expect(cardDrawer([], [
        {color:'red',value:1},
        {color:'blue',value:1},
        {color:'yellow',value:1},
        {color:'green',value:1},
        {color:'blue',value:1},
        {color:'red',value:1},
        {color:'yellow',value:1},
        {color:'green',value:2},
        {color:'blue',value:1},

    ])).toHaveLength(1);
});