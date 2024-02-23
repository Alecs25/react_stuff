import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser.jsx";
import { GithubUserList } from "./GithubUserList.jsx";
import { ShowMessage } from "./ShowMessage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter basename="/">
		<Routes>
			<Route path="/" element={<App />}></Route>
			<Route path="users/*" element={<GithubUserList />}></Route>
		</Routes>
	</BrowserRouter>
);
