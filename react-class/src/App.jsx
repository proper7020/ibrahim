


import React from 'react';
// import './App.css';
import Nav from './assets/Nav';
import FigmaClone from './pages/FigmaClone';
import background from "./assets/images/backgroundImage.jpeg";
import phoneImage from "./assets/images/phone.png";
import globeImage from "./assets/images/globe.png";
import fourPicture from "./assets/images/fourPicture.png.png";
import phoneImageTwo from "./assets/images/mobile2.png.png";
import LastSection from   './pages/LastSection';

function App() {
  return (
    <>
      <Nav/>
      <FigmaClone
        bg={background}
        phone={phoneImage}
        colorOne="yellow"
        colorTwo="white"
        colorThree="white"
        colorFour="white"
        colorFive="white"
        // colorSix="black" // Added colorSix for button text color
        textOne="Financial freedom"
        textTwo="starts here"
        textThree="connect your business to Africa with one API Africa"
        textFour="Get crypto. Make payments. What's your money"
        textFive="move?"
        textSix="make your move"
        bgColor=""
        flexDirection="row"
        // textColor="purple"
        // bgColor1="red"
        // backgroundCol="red"
        // height:"77vh",
        buttonText="Get started"
        bgColour ="yellow"
        textColour ="black"
      />

<FigmaClone
        // bg={background}
        phone={globeImage}
        colorOne="black"
        colorTwo="black"
        colorThree="white"
        colorFour="white"
        colorFive="white"
        colorSix="" // Added colorSix for button text color
        textOne="Send money across
        Africa, for free!"
        textTwo="Enjoy borderless payments with Yellow Pay. Make your money move
        now."
        textThree=""
        textFour=""
        textFive=""
        textSix="make your move"
        bgColor="#8AC3B2"
        flexDirection="row-reverse"
        buttonText="Take me to yellow Pay"
        bgColour="black"
        textColour="white"
      />

<FigmaClone
        // bg={background}
        phone={fourPicture}
        colorOne="white"
        colorTwo="white"
        colorThree="white"
        colorFour="white"
        colorFive="white"
        colorSix="" // Added colorSix for button text color
        textOne="Crypto, at your
        fingertips"
        textTwo="Enjoy borderless payments with Yellow Pay. Make your money move
        now."
        textThree=""
        textFour=""
        textFive=""
        textSix="make your move"
        bgColor="#3C2365"
        flexDirection="row"
        buttonText="Get started with Crypto"
        bgColour="yellow"
        textColour="black"
      />
      <FigmaClone
        // bg={background}
        phone={phoneImageTwo}
        colorOne="black"
        colorTwo="black"
        colorThree="white"
        colorFour="white"
        colorFive="white"
        colorSix="" // Added colorSix for button text color
        textOne="Manage your business
        payments"
        textTwo="Connect your business to Africa with one API. Manage customer
        transactions effortlessly."
        textThree=""
        textFour=""
        textFive=""
        textSix="make your move"
        bgColor="#FFDF77"
        flexDirection="row"
        buttonText="Take me to payments API"
        bgColour = "black"
        textColour ="white"
      />
      <LastSection/>
    </>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// // import NavBar from './NavBar';
// import FigmaClone from './pages/FigmaClone';
// import background from "./assets/images/backgroundImage.jpeg";
// import phoneImage from "./assets/images/phone.png";
// import globeImage from "./assets/images/globe.png";
// // import fourPicture from "./assets/images/mobile2.png.png";
// import phoneImageTwo from "./assets/images/mobile2.png";

// function App() {
//   return (
//     <>
//       {/* <NavBar /> */}
//       <FigmaClone
//         bg={background}
//         phone={phoneImage}
//         colorOne="yellow"
//         colorTwo="white"
//         colorThree="white"
//         colorFour="white"
//         colorFive="white"
//         colorSix="black"
//         textOne="Financial freedom"
//         textTwo="starts here"
//         textThree="connect your business to Africa with one API Africa"
//         textFour="Get crypto. Make payments. What's your money"
//         textFive="move?"
//         textSix="make your move"
//         bgColor=""
//         flexDirection="row"
//       />

//       <FigmaClone
//         phone={globeImage}
//         colorOne="black"
//         colorTwo="black"
//         colorThree="white"
//         colorFour="white"
//         colorFive="white"
//         colorSix=""
//         textOne="Send money across Africa, for free!"
//         textTwo="Enjoy borderless payments with Yellow Pay. Make your money move now."
//         textThree=""
//         textFour=""
//         textFive=""
//         textSix="make your move"
//         bgColor="#8AC3B2"
//         flexDirection="row-reverse"
//       />

//       <FigmaClone
//         phone={fourPicture}
//         colorOne="white"
//         colorTwo="white"
//         colorThree="white"
//         colorFour="white"
//         colorFive="white"
//         colorSix=""
//         textOne="Crypto, at your fingertips"
//         textTwo="Enjoy borderless payments with Yellow Pay. Make your money move now."
//         textThree=""
//         textFour=""
//         textFive=""
//         textSix="make your move"
//         bgColor="#3C2365"
//         flexDirection="row-reverse"
//       />

//       <FigmaClone
//         phone={phoneImageTwo}
//         colorOne="black"
//         colorTwo="black"
//         colorThree="white"
//         colorFour="white"
//         colorFive="white"
//         colorSix=""
//         textOne="Manage your business payments"
//         textTwo="Connect your business to Africa with one API. Manage customer transactions effortlessly."
//         textThree=""
//         textFour=""
//         textFive=""
//         textSix="make your move"
//         bgColor="#FFDF77"
//         flexDirection="row"
//       />
//     </>
//   );
// }

// export default App;
