
import PlayerHand from "../PlayerHand";
import {players} from "../Player";
import React from "react";


export const renderPlayersHands = () => {



    return (
        <div className='player-section__container'>

            {

               players.map((player)=>{
                   return(
                       <PlayerHand player={player}/>
                   )
               })

                // players.map((player,index,array) => {
                //     return (
                //             <PlayerHand player={player.name} hand={player.hand} isYou={player.hand}/>
                //     )
                // })
            }
        </div>
    )
}