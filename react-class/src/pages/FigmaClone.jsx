

import React from 'react';
import '../css/FigmaClone.css';
import Button from '../shared/Button';

const FigmaClone = ({
    bg,
    phone,
    colorOne,
    colorTwo,
    colorThree,
    colorFour,
    colorFive,
    colorSix,  // Added colorSix to style the button text
    textOne,
    textTwo,
    textThree,
    textFour,
    textFive,
    textSix,
    bgColor,
    flexDirection,
    buttonText,
    bgColour,
    textColour
}) => {
    return (
        <div
            className='background'
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: bgColor,
                flexDirection: flexDirection,
                padding: "3rem 8rem",
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                // height:"77vh",
                backgroundRepeat: "no-repeat" // Corrected from 'none' to 'no-repeat'
            }}
        >
            <div
                className='text-container'
                style={{
                    maxWidth: "50%",
                    boxSizing: "border-box",
                    padding: "10px",
                }}
            >
                <h1 style={{ color: colorOne, fontSize: '3rem' }}>{textOne}</h1>
                <h2 style={{ color: colorTwo,fontSize:"2rem", marginTop:"0" }}>{textTwo}</h2>
                <div style={{ color: colorThree,fontSize:"15px" }}>{textThree}</div>
                <div style={{ color: colorFour,fontSize:"15px" }}>{textFour}</div>
                <div style={{ color: colorFive ,fontSize:"15px"}}>{textFive}</div>
                {/* <button className='button' style={{ color: colorSix }}>{textSix}</button> */}
                <Button text = {buttonText} bgColor= {bgColour} textColor= {textColour}/>
            </div>
            <div>
                <img className='' src={phone} alt="Phone" style={{ width: "30rem" }} />
            </div>
        </div>
    );
};

export default FigmaClone;
