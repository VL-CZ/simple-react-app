import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {LogoComponent} from "./components/LogoComponent";
import {TextInputComponent} from "./components/TextInputComponent";
import {IncCounterComponent, DecCounterComponent} from "./components/CounterComponent";
import {store} from "./app/store";
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App/>}>
					<Route path="form" element={<TextInputComponent/>}/>
					<Route path="logo" element={<LogoComponent/>}/>
					<Route path="incCounter" element={<IncCounterComponent/>}/>
					<Route path="decCounter" element={<DecCounterComponent/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	</Provider>,
	rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
