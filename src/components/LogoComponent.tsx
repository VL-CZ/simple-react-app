import React from "react";
import logo from "../logo.svg";
import {Container, Typography} from "@mui/material";

export class LogoComponent extends React.Component{

	render(): React.ReactNode {
		return (
			<Container>
				<Typography variant="h6">React Logo</Typography>
				<img src={logo} className="App-logo" alt="logo"/>
			</Container>
		);
	}
}
