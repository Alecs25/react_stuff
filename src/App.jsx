import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<GithubUserList />}></Route> 
				<Route path="/users/:user" element={<ShowGithubUser />}></Route> 
			</Routes>
		</BrowserRouter>
	);
}

export default App;
