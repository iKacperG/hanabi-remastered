import React from 'react';
import PlayerHand from "./PlayerHand";
import cardDrawer from "./DealCards";
import {players} from "./single_resp_functions/players_collection";
import {renderPlayersHands} from "./single_resp_functions/renderPlayersHands";

const PlayerSection = () => {

  return (
      <>
      {renderPlayersHands()}
      </>
  )
}

export default PlayerSection;