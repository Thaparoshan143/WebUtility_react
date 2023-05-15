import React, { useEffect, useState } from 'react'
import "./RandomColorPicker.css"
import "../uni.css"

function RandomColorPicker() {

    const [randomColors,setRandomColors]=useState(RandomColorsGenerator());
    const [colorNumber,setColorNumber]=useState(5);
    const [isAlpha,setIsAlpha]=useState(false);

    useEffect(()=>getRandomColors,[])

    function getRandomColors()
    {
        let colLen=isAlpha?8:6;
        setRandomColors(RandomColorsGenerator(colorNumber,colLen));
        console.log(randomColors);
    }

    function changeColorNum(e)
    {
        let val=e.target.value;
        console.log(val);
        setColorNumber(val);
    }

    function changeAlpha()
    {
        setIsAlpha(val=>!val);
    }

  return (
    <div className="page-wrapper Rand-Col-Picker">
        <span className="page-title">Random Color Picker</span>
        <div className="Rand-Col-Pick-Wrapper flex-row-evenly">
            <ColorBars randCol={randomColors} />
            <div className="Info-Wrapper flex-column-evenly">
                <div>
                    <span className="Info-Text">Number of Random Colors</span>
                    <span className="Info-Code">{colorNumber}</span><br />
                    <input class="slider" type="range" min="1" max="10" value={colorNumber} onChange={(e)=>changeColorNum(e)} />
                    <br /><span className='Info-Text' style={{color:'orangered'}}>[Hint : Available from 1 to 10]</span>
                </div>
                <div className='flex-row-evenly'>
                    <span className="Info-Text">Alpha enable : </span>
                    <input className="Alpha" type="checkbox" checked={isAlpha} onChange={changeAlpha}/>
                </div>
                <hr color="black" width="100%"/>
                <button className='Button' onClick={getRandomColors}>Generate</button>
            </div>
        </div>
    </div>
  )
}



function ColorBars(props)
{
    return (
        <div className="Platte-Wrapper flex-row-evenly">
        {
            props.randCol.map(col=>(<ColorBar color={col} key={col} />))
        }
        </div>
    )
}

function ColorBar(props)
{
    const bgColor={
        backgroundColor : `${props.color}`
    }
    return (
        <div className="Color-Bar flex-column-evenly" style={bgColor}>
            {props.color}
        </div>
    )
}




function RandomColorsGenerator(colNum,colLen)
{
    let randColors=[];

    for(let i=0;i<colNum;i++)
    {
        randColors.push(RandomColorGenerator(colLen));
    }
    return randColors;
}

// This function generates the hex based color equivalent for random color generation
function RandomColorGenerator(colLen)
{
    // hex len refers to the number of hex required for the color formation
    // len could be 3 for general, 6 for most colors, 8 for color with alpha
    let hexLen=colLen;
    let randomColor="#";
    for(let i=0;i<hexLen;i++)
    {
        randomColor+=getRandomHex();
    }
    return randomColor;
}

// This function is responsible for generating one random hex and returning it
// return type is in string form
function getRandomHex()
{
    // hex equivalent for the num above 9
    let alpha=["a","b","c","d","e","f"];
    let randomNum=getRandomNum(0,16);

    if(randomNum <= 9)
    {
        return String(randomNum);
    }
    else if (randomNum>9)
    {
        return alpha[randomNum-10];
    }
}

// function is responsible for generating random num within given range
// min inclusive, max exclusive
function getRandomNum(min,max)
{
    return Math.floor(Math.random() * (max-min)) + min;
}

export default RandomColorPicker