import React from 'react';
import './App.css';
import {
	Outlet, Link
} from "react-router-dom";

export default class App extends React.Component {
	render(): React.ReactNode {
		return (
			<div>
				<h1>React Demo App</h1>
				<nav
					style={{
						borderBottom: "solid 1px",
						paddingBottom: "1rem",
					}}
				>
					<Link to="/form">Text input page</Link>
					<br/>
					<Link to="/logo">Logo page</Link>
				</nav>
				<Outlet/>
			</div>
		);
	}
}
