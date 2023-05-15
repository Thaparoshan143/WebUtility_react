import './App.css';
import NavBar from './Components/NavBar';
import Body from "./Components/Body"
import { Route, Routes } from 'react-router-dom';
import ColorPicker from './Components/ColorPicker';
import RandomColorPicker from './Components/RandomColorPicker';
import ComplementPicker from './Components/ComplementPicker';
import GradientGenerator from "./Components/GradientGenerator";
import LinearGradient from "./Components/LinearGradientGenerator";
import BoxShadow from "./Components/BoxShadow";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/*" element={<Body />} />
				<Route path="/Home" element={<Body />}/>
				<Route path="/Color Picker" element={<ColorPicker />} />
				<Route path="Random" element={<RandomColorPicker />}/>
				<Route path="/Complementry" element={<ComplementPicker />} />
				<Route path="/Box Shadow" element={<BoxShadow />}/>
				<Route path="/Gradient Generator" element={<GradientGenerator />}/>
				<Route path="/Linear" element={<LinearGradient />} />
			</Routes>
		</div>
	);
}

export default App;