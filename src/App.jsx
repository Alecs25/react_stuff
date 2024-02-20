import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { WelcomeTwo } from "./WelcomeTwo";

function App() {
	return (
		<BrowserRouter>
			<div>
				<ul>
					<li>
						<Link to={"/Welcome"}>Welcome</Link>
					</li>
					<li>
						<Link to={"/WelcomeTwo"}>Welcome</Link>
					</li>
				</ul>
			</div>
			<Routes>
				<Route path="/Welcome" element={<Welcome name={"User"} />}></Route>
				<Route path="/WelcomeTwo" element={<WelcomeTwo name={"User"} />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
