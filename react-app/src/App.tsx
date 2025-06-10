import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
	const [alertVisible, setAlertVisible] = useState(false);
	return (
		<div>
			{alertVisible && <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>}
			<Button onClick={() => setAlertVisible(true)}>SUBMIT</Button>
		</div>
	);
}

export default App; //Exporting the component
