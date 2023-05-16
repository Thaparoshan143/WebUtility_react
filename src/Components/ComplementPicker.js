import React, { useEffect } from 'react'
import "./ComplementPicker.css"
import { useState } from 'react';
import { RandomColorGenerator } from './RandomColorPicker';

function ComplementPicker() {

  const [chooseColor,setChooseColor]=useState("#ffffff");
  const [compColor,setCompColor]=useState("#000000");
  const [isRandom,setIsRandom]=useState(false);

  function changeRandom()
  {
    setIsRandom(val=>!val);
  }

  function chooseRandomColor()
  {
    setChooseColor(RandomColorGenerator(6))
  }

  useEffect(()=>changeComplement(chooseColor),[chooseColor]);

  function changeChooseColor(val)
  {
    setChooseColor(val);
  }

  function changeComplement(col)
  {
    setCompColor(getColorComplement(chooseColor));
  }

  const chooseStyle={
    backgroundColor:chooseColor
  }

  const compStyle={
    backgroundColor:compColor
  }

  return (
    <div className="Comp-Wrapper page-wrapper flex-column-evenly">
      <span className="page-title">Two Complementry Color Picker</span>
      <div className="Comp-Cont flex-row-evenly">
        <div className="Display-Cont flex-column-evenly">
          <div style={chooseStyle} className="Color-Cont flex-row-evenly"><span>Choosen Color</span></div>
          <div style={compStyle} className="Color-Cont flex-row-evenly"><span>Complementry Color</span></div>
        </div>
        <div className="Input-Cont flex-column-evenly">
          <span className="Input-Title">Color Information</span><br />
          Choose Color : <input type="color" className="Color-Chooser" value={chooseColor} onChange={(e)=>changeChooseColor(e.target.value)} />
          Is Random : <input type="checkbox" className="Alpha" value={isRandom} onChange={changeRandom} />
          <span className="Info-Text">Choosen Color Code : {chooseColor}</span>
          <span className="Info-Text">Complementry Color Code : {compColor}</span>
          {isRandom?<button className="Button" onClick={chooseRandomColor}>Generate</button>:""}
        </div>
      </div>
    </div>
  )
}

function getColorComplement(col)
{
  console.log(col);
  let new_col="";
  new_col+=col[0];
  for(let i=1;i<col.length;i++)
  {
    new_col+=getHexComplement(col[i]);
  }
  return new_col;
}

function getHexComplement(hex)
{
  let temp_comp;
  let hex_corr=['a','b','c','d','e','f'];
  let hex_val;
  switch(hex)
  {
    case 'a':
    hex_val=10;
    break;
    case 'b':
    hex_val=11;
    break;
    case 'c':
    hex_val=12;
    break;
    case 'd':
    hex_val=13;
    break;
    case 'e':
    hex_val=14;
    break;
    case 'f':
    hex_val=15;
    break;
    default:
    hex_val=hex;
  }

  temp_comp=15-hex_val;

  if(temp_comp<=9)
  {
    return temp_comp;
  }
  else
  {
    return hex_corr[temp_comp-10];
  }

}

export default ComplementPicker