import React from "react";
import { LoremIpsum } from 'react-lorem-ipsum';


const Landing = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "centre",
                alignItems: "centre",
                height: "100vh",
            }}
        >
            <h1>Only Quality Food</h1>
             <div>
                < LoremIpsum p={1}/>
             </div>
        </div>
    );
};
 
export default Landing;