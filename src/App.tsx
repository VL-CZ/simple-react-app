import React from 'react';
import './App.css';
import {
	Outlet, Link
} from "react-router-dom";
import {AppBar, Button, Toolbar} from "@mui/material";

export default class App extends React.Component {
	render(): React.ReactNode {
		return (
			<div>
				<AppBar position="static">
					<Toolbar>
						<Button component={Link} to="/form" color="inherit">Text input</Button>
						<Button component={Link} to="/logo" color="inherit">Logo</Button>
						<Button component={Link} to="/incCounter" color="inherit">Counter increment</Button>
						<Button component={Link} to="/decCounter" color="inherit">Counter decrement</Button>
					</Toolbar>
				</AppBar>
				<div>
					<Outlet/>
				</div>
			</div>
		);
	}
}
