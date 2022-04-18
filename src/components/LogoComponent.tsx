import React from "react";
import logo from "../logo.svg";
import {CounterComponent} from "./CounterComponent";

interface ICounterState {
	value: number;
}

export class LogoComponent extends React.Component<{}, ICounterState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			value: 0
		};
	}

	incrementCounter(): void {
		const oldValue = this.state.value;
		this.setState({
			value: oldValue + 1
		});
	}

	render(): React.ReactNode {
		return (
			<div>
				<h2>React Logo</h2>
				<img src={logo} className="App-logo" alt="logo"/>
				<CounterComponent value={this.state.value} callback={() => this.incrementCounter()}/>
				<CounterComponent value={this.state.value} callback={() => this.incrementCounter()}/>
			</div>
		);
	}
}
