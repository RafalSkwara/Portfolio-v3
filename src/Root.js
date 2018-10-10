import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import "./assets/favicon.ico"
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
			<Route component={App} />
		</Router>
	</Provider>
)

export default Root;