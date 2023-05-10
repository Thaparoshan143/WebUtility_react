import "../uni.css"
import "./BoxShadow.css"
import { useEffect, useState } from "react";

const shadowInputTitle=["Horizontal (Hor)","Vertical (Ver)","Blur (Blur)","Spread (Spr)"];
const tempNav=["Home","Skills","Projects","About","Contact"];

function BoxShadow()
{
	const [boxShaNumVal,setBoxShaVal]=useState([0,0,10,1]);
	const [shaColor,setShaColor]=useState("#999999");
	const [fillColor,setFillColor]=useState("#ffffff");

	// This function change the value of the array element based on index
	function changeBoxShaVal(nVal, ind)
	{
		setBoxShaVal(curr=>{
			let newCurr=[...curr];
			newCurr[ind]=nVal;
			return newCurr;
			});
		console.log(boxShaNumVal);
	}

	function changeCol(col)
	{
		setShaColor(col);
	}

	const getBoxStyle={
		boxShadow: `${boxShaNumVal[0]}px ${boxShaNumVal[1]}px ${boxShaNumVal[2]}px ${boxShaNumVal[3]}px ${shaColor}`,
		backgroundColor:`${fillColor}`
	}

	function resetShaVal()
	{
		setBoxShaVal([0,0,10,1]);
		setShaColor("#999999");
		setFillColor("#ffffff");
	}
	
	function changeFillCol(col)
	{
		setFillColor(col);
	}

	return(
		<div className="Page-Wrapper Box-Shadow">
			<div className="Box-Sha-Wrapper flex-row-evenly">
				<div className="View-Wrapper flex-column-evenly">
					<span className="Info-Text">Box Shadow Demo</span>
					<span className="Info-Text">NavBar Item Shadow</span>
					<div className="NavBar Shadow-Nav">
						<ul className="flex-row-evenly">
						{tempNav.map(val=>
							{
								return <li style={getBoxStyle} className="Nav-Item">{val}</li>
							})}
						</ul>
					</div>
					<hr width="100%" color="black"/>
					<span className="Info-Text">Other Common Element Shadow</span>
					<div className="View-Cont flex-row-evenly">
						<button className="Button Ex-1" style={getBoxStyle}>Rect Button</button>
						<button className="Button Ex-2" style={getBoxStyle}>Cir But</button>
						<div className="Ex-Card flex-row-evenly" style={getBoxStyle}>Card</div>
					</div>
					<br />
				</div>
				<div className="Info-Wrapper flex-column-evenly">
					<ShadowInputs shaVal={boxShaNumVal} chaShaVal={changeBoxShaVal} changeCol={changeCol} colVal={shaColor} fillColVal={fillColor} changeFillCol={changeFillCol}/>
					<button className="Button" onClick={resetShaVal}>Reset</button>
					<hr width="100%" color="black"/>
					<div className="Code">
						<span className="Info-Text">Equivalent Code</span>
						<span className="Code-Text">box-shadow : {boxShaNumVal[0]}px {boxShaNumVal[1]}px {boxShaNumVal[2]}px {boxShaNumVal[3]}px {shaColor};</span>
						<span className="Info-Text">Order</span>
						<span className="Code-Text">box-shadow : Hor Ver Blu Spr Col;</span>
					</div>
				</div>
			</div>
		</div>
	)
}

function ShadowInputs(props)
{
	return (
		<div className="Shadow-Inputs flex-column-evenly">
			{shadowInputTitle.map((val,index)=>(
				<ShadowInput title={val} key={val} shaVal={props.shaVal} chaShaVal={props.chaShaVal} ind={index}/>
				))}
				<span className="Info-Text">[Hint : Slider runs from -100px to 100px]</span>
			<div className="Shadow-Input flex-row-evenly">
				<span className="Info-Text">Sha. Color (Col) - </span>
				<input className="Color-Chooser" type="color" value={props.colVal} onChange={(e)=>props.changeCol(e.target.value)}/>
			</div>
			<div className="Shadow-Input flex-row-evenly">
				<span className="Info-Text">Fill Color (Col) - </span>
				<input className="Color-Chooser" type="color" value={props.fillColVal} onChange={(e)=>props.changeFillCol(e.target.value)}/>
			</div>
		</div>
	)
}

function ShadowInput(props)
{
	let currVal=props.shaVal[props.ind];
	return (
		<div className="Shadow-Input">
			<div className="flex-row-evenly">
				<span className="Info-Text">{props.title} - </span>
				<span className="Info-Text">{props.shaVal[props.ind]} px</span>
			</div>
			<input className="slider" type="range" min={props.ind>1?"0":"-100"} max="100" value={currVal} onChange={(e)=>props.chaShaVal(e.target.value,props.ind)}/>
			{console.log(currVal)}
		</div>
	)
}

export default BoxShadow