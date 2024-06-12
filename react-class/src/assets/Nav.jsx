

import React from 'react';
import figmaLogo from "../assets/images/yellowCardLogo.svg"; 
import Button from '../shared/Button';

function NavBar() {
    const navStyle = {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px", 
    };

    const linksStyle = {
        display: "flex",
        columnGap: "52px",
        alignItems: "center",
    };

    const buttonStyle = {
        background: "black",
        color: "white",
        border: "none",
        padding: "15px 50px",
        borderRadius: "5px",
    };

    return (
        <div className='NavBar' style={navStyle}>
            <div>
                <img src={figmaLogo} alt="logo" />
            </div>
            <div style={linksStyle}>
                <p>Company</p>
                <p>Products</p>
                <p>Services</p>
                <p>Help Centre</p>
            </div>
            <div style={linksStyle}>
                <p>English</p>
                <p>Login</p>
                {/* <button 
                style={{
                    background:"black",
                    color: "white",
                    border:"none",
                    padding:"15px 50px",
                    borderRadius:"5px"

                }}>
                    Sign Up
                </button> */}
                <Button  bgColour ="black"  textColour="white"/>
            </div>
        </div>
    );
}

export default NavBar;



