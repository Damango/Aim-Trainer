import React, { useState } from 'react';
import "./AimTrainer.css"
import ClickBlock from "./ClickBlock/ClickBlock"
const AimTrainer = () => {

    const [blockCount, setBlockCount] = useState([0, 1, 2, 3, 4])
    const [stateNumber, setStateNumber] = useState(0)


    return (<div className='aim-trainer-container'>
        <div>


            {blockCount.map((block) =>
                <ClickBlock block={block} />
            )}





        </div>
        <button className="change-button" onClick={changePosition}>Change Position</button>
    </div>);


    function changePosition() {
        setStateNumber(stateNumber + 1)
    }
}

export default AimTrainer;