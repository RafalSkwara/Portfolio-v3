import { hot } from "react-hot-loader"
import * as React from "react"
import {connect} from "react-redux"
import { withRouter } from "react-router-dom"
import * as actions from "./actions/actions"
import { AnimatedSwitch } from "react-router-transition"
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect } from "react-router-dom"

import HomePage from "./views/HomePage";
import ProjectsPage from "./views/ProjectsPage";
import AboutPage from "./views/AboutPage";
import ContactPage from "./views/ContactPage";


import "./view_styles/theme.sass";


class App extends React.Component {
    // eslint-disable-line react/prefer-stateless-function
	;
    render() {
		const timeout = 4000;
		return (
			<Router basename={"/"} > 
			{/* change the string in basename to "/" for development */}
				<div className="main-wrapper" style={{
					// backgroundImage: `url(${bg})`,
					height: "100vh",
					width: "100vw",
					maxWidth: "100%"
				}}>
					<AnimatedSwitch
				    	atEnter={{ opacity: 0 }}
						atLeave={{ opacity: 0}}
						atActive={{ opacity: 1 }}
						className="switch-wrapper"
						timeout={timeout}
					  >
							<Route path={"/"} exact component={HomePage}/>
							<Route path={"/projects"} component={ProjectsPage}/>
							<Route path={"/about"} component={AboutPage}/>
							<Route path={"/contact"} component={ContactPage}/>
							<Redirect from={"*"} to={"/"} />
					</AnimatedSwitch>
				</div>


			</Router>
			)
	}

}

export default withRouter(hot(module)(connect(null)(App)))
