import React from 'react';
import { render, screen } from '@testing-library/react';
import {renderPlayersHands} from "../components/game_page/single_resp_functions/renderPlayersHands";
import PlayerHand from "../components/game_page/PlayerHand";

const player =  {
        player:'First',
        order: 1,
        hand: [],
        isYou: true,
    }

describe('renderPlayersHands', () => {
    test('renders PlayerHand component', () => {
        render(<PlayerHand player={player}/>);

        screen.debug();
    });
});