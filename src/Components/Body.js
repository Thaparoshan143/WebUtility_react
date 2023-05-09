import React from 'react'
import "./Body.css"
import "../uni.css"

const cardTitles=["Color Picker","Gradient Generator","Box Shadow"];
const cardContents=["Color Picker is the utlity for choosing the color or platte for the web developmet color selection",
                   "Gradient Generator is utility to speed generate the gradient within the given color range formate",
                    "Box Shadow allows to visualize the box shadow that will be seen in any element in real time form" ];

function Body() {
  return (
    <main className="Main-Body">
        <div className="Home-Title">
            <h2>Developed by Roshan Thapa. A Web Development Utility Site.</h2><hr /><br />
            Here you can find differnet utility for the speeding your Web Development process.
        </div>
        <Cards />
    </main>
  )
}

function Cards()
{
    return (
        <div className="flex-row-evenly Main-Bg">
            {
                cardTitles.map((val,ind)=>(
                    <Card title={val} ind={ind} />
                ))
            }
        </div>
    )
}

function Card(props)
{
    return (
        <div className={"Card flex-column-evenly "+props.title}>
            <span className="Card-Title">{props.title}</span>
            <div className='Card-Content'>{cardContents[props.ind]}</div>
            <button className="Button">Explore</button>
        </div>
    )
}

export default Body