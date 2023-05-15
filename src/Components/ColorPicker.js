import "../uni.css"
import "./ColorPicker.css"
import Cards from "./CardsTCB";

const cardTitles=["Random","Complementry"];
const cardDescs=["Gives the random color genereted with random hex value each time you click on generate with input range made available","Gives one random color and next the complementry color of that respective random color"];


function ColorPicker()
{
	return(
		<div className="Color-Picker page-wrapper">
			<span className="page-title">Color Picker Available</span>
			<Cards cardTitles={cardTitles} cardDescs={cardDescs}/>
		</div>
	)
}


export default ColorPicker