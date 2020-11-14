import React, {useState} from 'react';

const CluePile = () => {
    const [clueCount, setClueCount] = useState(8)

    return (
        <>
            <div className='clue-pile__container'>{clueCount}</div>
        </>
    )
}

export default CluePile;