import React from "react";

interface ICounterProps {
	value: number;
	callback: () => void;
}


export class CounterComponent extends React.Component<ICounterProps> {
	render(): React.ReactNode {
		return (
			<div>
				<h2>Shared counter</h2>
				<button onClick={() => this.props.callback()}>Increment</button>
				<div>{this.props.value}</div>
			</div>
		)
	}
}
