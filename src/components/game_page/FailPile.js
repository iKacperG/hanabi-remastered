import React, {useState} from 'react';

const FailPile = () => {
    const [failCount, setFailCount] = useState(3)

    return (
        <>
            <div className='fail-pile__container'>{failCount}</div>
        </>
    )

}

export default FailPile;