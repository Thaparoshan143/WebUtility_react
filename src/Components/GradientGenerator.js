import "../uni.css"
import "./GradientGenerator.css"
import { useEffect, useState } from "react";


const dirInput=["T","B","L","R","LT","RT","LB","RB"];
const dirInputAbb=["to top","to bottom","to left","to right","to left top","to right top","to left bottom","to right bottom"];

function GradientGenerator()
{
	const [gradDir,setGradDir]=useState("to top");
	const [gradNum,setGradNum]=useState(3);
	const [colInpTitles,setColInpTitles]=useState(["Color 1","Color 2","Color 3"]);
	const [gradColVal,setGradColVal]=useState(["#41aec1","#142eac","#5124ae"]);
	const [gradStyle,setGradStyle]=useState({backgroundImage:`linear-gradient(${gradDir},${getGradColVal()})`});

	function updateGradDir(index)
	{
		setGradDir(dirInputAbb[index]);
	}

	useEffect(()=>(setGradStyle({backgroundImage:`linear-gradient(${gradDir},${getGradColVal()})`})),[gradDir,gradNum,gradColVal]);

	function updateGradNum(num)
	{
		setGradNum(num);
		updateColInpTitles(num);
	}

	function updateColInpTitles(num)
	{
		let newColInpTitles=[];

		for(let i=0;i<num;i++)
		{
			newColInpTitles.push(`Color ${i+1}`);
		}
		setColInpTitles(newColInpTitles);
	}

	function updateGradColVal(val,index)
	{
		let newGradColVal=[...gradColVal];
		newGradColVal.length=gradNum;
		newGradColVal[index]=val;
		setGradColVal(newGradColVal);
		console.log("color changed");
	}

	function getGradColVal()
	{
		let tempGrad="";
		for(let i=0;i<gradColVal.length;i++)
		{
			if(i!==gradColVal.length-1)
			tempGrad+=gradColVal[i] +",";
			else
			tempGrad+=gradColVal[i];
		}
		return tempGrad;
	}

	return(
		<div className="Page-Wrapper Grad-Gen flex-column-evenly" style={gradStyle}>
			<span className="Page-Title" style={{color:"orangered"}}>Gradient Generator</span>
			<div className="Grad-Gen-Wrapper flex-column-evenly">
				<GradGenInputs updateGradDir={updateGradDir}/>
				<div className="Color-Inputs-Cont flex-row-evenly">
					<span className="Info-Text">No. of Gradient Color :</span>
					<button className="Button" onClick={()=>updateGradNum(2)}>2</button>
					<button className="Button" onClick={()=>updateGradNum(3)}>3</button>
					<button className="Button" onClick={()=>updateGradNum(4)}>4</button>
				</div>
				<ColorInputs gradColVal={gradColVal} updateGradColVal={updateGradColVal} colNum={gradNum} colInpTitles={colInpTitles}/>
				<div className="Code-Wrapper">
					<span className="Code-Text">background-image: {String(gradStyle.backgroundImage)} ;</span>
				</div>
			</div>
		</div>
	)
}

function ColorInputs(props)
{
	let colInpTitles=props.colInpTitles;
	return (
		<div className="Color-Inputs flex-row-evenly">
			{colInpTitles.map((val,ind)=>(
				<ColorInput key={val} gradColVal={props.gradColVal} updateGradColVal={props.updateGradColVal} ind={ind} title={val} />
			))}
		</div>
	)
}

function ColorInput(props)
{
	return (
		<div className="Color-Input flex-row-evenly">
			<span className="Info-Text" style={{color:'white'}}>{props.title}</span>
			<input className="Color-Chooser" value={props.gradColVal[props.ind]} type="color" onChange={(e)=>props.updateGradColVal(e.target.value,props.ind)}/>
		</div>
	)
}


function GradGenInputs(props)
{
	return(
		<div className="Grad-Inputs flex-row-evenly">
			{dirInput.map((val,ind)=>(
				<Button key={val} title={val} ind={ind} updateGradDir={props.updateGradDir}/>
			))}
		</div>
	)
}

function Button(props)
{
	return (
		<button className="Button" onClick={()=>props.updateGradDir(props.ind)}>{props.title}</button>
	)
}


export default GradientGenerator