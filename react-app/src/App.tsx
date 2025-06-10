import Button from "./components/Button";

function App() {
	return (
		<div>
			<Button onClick={() => console.log("Clicked")}>SUBMIT</Button>
		</div>
	);
}

export default App; //Exporting the component
