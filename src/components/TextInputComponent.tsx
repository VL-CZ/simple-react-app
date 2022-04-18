import React from "react";

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
			<div className='App'>
				<h2>Text input</h2>
				<input type="text" onChange={this.handleChange} value={this.state.text}/>
				<div>
					{this.state.text}
				</div>
				<button onClick={() => this.setState({text: ''})}>Clear</button>
			</div>
		);
	}
}
