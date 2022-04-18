import React from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {decrement, increment, selectCount} from "../store/counterSlice";
import {Button, Container, Typography} from "@mui/material";

export function IncCounterComponent(props: {}) {
	const count = useAppSelector((state) => selectCount(state));
	const dispatch = useAppDispatch();
	return (
		<Container>
			<Typography variant="h6">Shared counter increment</Typography>
			<Button onClick={() => {
				dispatch(increment())
			}}>
				Increment
			</Button>
			<div>Counter value: {count}</div>
		</Container>
	)
}


export function DecCounterComponent() {
	const count = useAppSelector((state) => selectCount(state));
	const dispatch = useAppDispatch();
	return (
		<Container>
			<Typography variant="h6">Shared counter decrement</Typography>
			<Button onClick={() => {
				dispatch(decrement())
			}}>
				Decrement
			</Button>
			<div>Counter value: {count}</div>
		</Container>
	)
}
