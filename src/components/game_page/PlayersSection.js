import React from 'react';

import {renderPlayersHands} from "./single_resp_functions/renderPlayersHands";

const PlayerSection = () => {

  return (
      <>
      {renderPlayersHands()}
      </>
  )
}

export default PlayerSection;