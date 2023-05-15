import React from 'react'
import "./Body.css"
import "../uni.css"
import Cards from './CardsTCB';

const cardTitles=["Color Picker","Box Shadow","Gradient Generator"];
const cardDescs=["Color Picker is the utlity for choosing the color or platte for the web developmet color selection",
                    "Box Shadow allows to visualize the box shadow that will be seen in any element in real time form",
                   "Gradient Generator is utility to speed generate the gradient within the given color range formate"];

function Body() {
  return (
    <main className="Main-Body">
        <div className="Home-Title">
            <span>Developed by Roshan Thapa. A Web Development Utility Site.</span><hr /><br />
            Here you can find differnet utility for the speeding your Web Development process.
        </div>
        <Cards cardTitles={cardTitles} cardDescs={cardDescs} />
    </main>
  )
}



export default Body