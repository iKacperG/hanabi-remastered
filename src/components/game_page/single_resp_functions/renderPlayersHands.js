import {players} from "./players_collection";
import PlayerHand from "../PlayerHand";
import React from "react";

export const renderPlayersHands = () => {
    return (
        <div className='player-section__container'>
            {
                players.map((player) => {
                    return (

                        <>
                            <PlayerHand player={player.player} order={player.order} hand={player.hand} isYou={player.isYou}/>
                        </>
                    )
                })
            }
        </div>
    )
}