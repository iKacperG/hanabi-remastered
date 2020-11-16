
import PlayerHand from "../PlayerHand";
import React from "react";

export const renderPlayersHands = () => {
    class Player {
        constructor(name,isYou,order) {
            this.hand = [];
            this.name = name;
            this.isYou = isYou;
            this.order = order;

        }

    }
const player1 = new Player('First',true,1)
const player2 = new Player('Second',false,2)
const player3 = new Player('Third',false,3)
const player4 = new Player('Fourth',false,4)
let players = [{...player1},{...player2},{...player3},{...player4}]

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