import React, { useState } from 'react';
import "./AimTrainer.css"
import ClickBlock from "./ClickBlock/ClickBlock"
const AimTrainer = (props) => {
    const [points, setPoints] = useState(0)
    const [hits, setHits] = useState(0);
    const [clicks, setClicks] = useState(0);


    const [blockCount, setBlockCount] = useState(props.blockData);
    const [stateNumber, setStateNumber] = useState(0);

    setTimeout(function () {
        setStateNumber(stateNumber + 0.1)
    }, 100)



    return (<div className='aim-trainer-container' onClick={() => { setClicks(clicks + 1) }}>
        <div>
            <div className="trainer-points">Score: {points}</div>
            <div className="miss-clicks">Misses: {clicks - hits}</div>


            {blockCount.map((block) =>
                <ClickBlock block={block.blockID} clearBlock={clearBlock} MR={block.positionX} ML={block.positionY} />
            )}





        </div>
        <button className="change-button" onClick={changePosition}>Change Position</button>
    </div>);


    function updatePoints() {


        setPoints(points + 10)
    }

    function clearBlock(blockID) {

        setHits(hits + 1);
        let i;
        let j = 0
        for (i = 0; i < blockCount.length; i++) {
            if (blockCount[i].blockID === blockID) {
                blockCount.splice(i, 1)
            }
        }


        setBlockCount(blockCount);

        makeNewBlock(blockID)
        changePosition()
        updatePoints()

    }


    function makeNewBlock(blockID) {

        setTimeout(function () {

            blockCount.push({
                blockID: blockID,
                positionX: Math.floor(Math.random() * 500),
                positionY: Math.floor(Math.random() * 600)
            })

            setBlockCount(blockCount)

        }, 1000)



    }

    function changePosition() {
        setStateNumber(stateNumber + 1)
    }
}

export default AimTrainer;