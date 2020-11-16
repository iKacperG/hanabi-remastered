import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from "../components/game_page/Card";

const card = {
    color:'red',
    value:1,
}
describe('Card', () => {
    test('renders Card component', () => {
        render(<Card card={card} isYou={true}/>);

        screen.debug();
    });
});