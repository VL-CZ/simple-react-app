import React from "react";
import {Button, Container, TextField, Typography} from "@mui/material";

interface IState {
	text: string;
}

export class TextInputComponent extends React.Component<{}, IState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			text: ''
		};
	}

	handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({text: e.target.value});
	};

	render(): React.ReactNode {
		return (
			<Container>
				<Typography variant="h6">Text input</Typography>
				<TextField type="number" onChange={this.handleChange} value={this.state.text}/>
				<div>
					Selected value: {this.state.text}
				</div>
				<Button onClick={() => this.setState({text: ''})}>Clear</Button>
			</Container>
		);
	}
}
