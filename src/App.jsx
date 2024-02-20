import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import {GithubUser } from "./GithubUser";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/Welcome" element={<Welcome name={"User"} />}></Route>
				<Route path="/GithubUser" element={<GithubUser username={"Alecs25"} />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

// Create a new branch starting from the first props exercise.
// Modify App component that wraps a Routes component and add a single Route to the /
// path that renders the Welcome component, passing it a name prop. Render the App component within a BrowserRouter component.
