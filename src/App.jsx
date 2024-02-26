import { Link, Route, Routes } from "react-router-dom";
import { Greeting } from "./Greeting";
import { ToggleVisibility } from "./ToggleVisibility";
import { UserProfile } from "./UserProfile";

function App() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/products" exact element={<Greeting />} />

				<Route path="/products/:name" element={<ToggleVisibility />} />
				<Route path="/contact" element={<UserProfile />} />
			</Routes>
			<div />
		</div>
	);
}

export default App;
