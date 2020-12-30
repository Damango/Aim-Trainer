import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import "./ClickBlock.css"
const ClickBlock = (props) => {

    let blockStyle = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } })






    let theStyle = {
        top: props.MR,
        left: props.ML
    }







    function clearsBlock() {



        props.clearBlock(props.block);


    }


    return (<div className="click-block-container" style={theStyle} onClick={() => { clearsBlock() }}>
        <animated.div className='click-block' style={blockStyle}></animated.div>
    </div>);





}





export default ClickBlock;