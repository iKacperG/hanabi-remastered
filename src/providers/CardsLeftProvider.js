import React, {useContext, useEffect, useState} from 'react';
import {CardsLeftContext} from "./CardsLeftContext";
import {cards} from "../components/game_page/single_resp_functions/cards_collection";

const CardsLeftProvider = (props) => {
    let [cardsToSort, setCardsToSort] = useState([...cards])
    const [cardsLeft, setCardsLeft] = useState([])
    useEffect(()=>{
       cardsSorter()
    },[cardsToSort])


    let cardsSorter = () => {
        setCardsLeft(cardsToSort.sort(func));

        function func(a, b) {
            return 0.5 - Math.random();
        }

    }



    return (
        <CardsLeftContext.Provider value={{cardsLeft, setCardsLeft}}>
            {props.children}
        </CardsLeftContext.Provider>
    )
}
export default CardsLeftProvider;

// export const CardsLeftProvider = React.createContext(50);