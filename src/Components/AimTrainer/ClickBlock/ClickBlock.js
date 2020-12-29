import React from 'react';
import "./ClickBlock.css"
const ClickBlock = (props) => {

    let randomNumber = Math.floor(Math.random() * 400);
    let width = randomNumber
    let height = randomNumber * 2;

    let theStyle = {
        marginRight: width,
        marginLeft: height
    }

    return (<div className="click-block-container" style={theStyle}> </div>);
}

export default ClickBlock;