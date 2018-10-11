import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, NavLink } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from '../components/Header/Header'
import "../view_styles/HomePage.sass";
import { hideMenu, toggleMenu } from '../actions/actions'

import Rule from "../components/Rule/Rule"

const mapStateToProps = state => ({
	menuHidden: state.firstReducer.menuHidden,
	lang: state.firstReducer.lang
});
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		hideMenu: hideMenu,
		toggleMenu: toggleMenu
	}, dispatch)
}

class HomePage extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
		this.state = {
			style: {
				animation: "mount .3s cubic-bezier(.83,.21,1,1) forwards"
			}
		}

	}
	componentWillMount() {
		window.scrollTo({
			"behavior": "smooth",
			"left": 0,
			"top": 0
		});

	}
	
	componentDidMount() {
		this.props.hideMenu()
	}

	render() {
		const img = require('../assets/img/1.svg')
		return (
			<div className="home-page-wrapper page-wrapper">
				
					<Header animationClass={"enter"} activeSection={"home"}/>
					<section className="content">
						<h1>
							{this.props.lang === "en" ? "Well, Hello" : "Witam!"}
						</h1>
						<h2>
							{this.props.lang === "en" ? "I'm Rafał Skwara but you can call me Raf." : "Jestem Rafał Skwara"}
						</h2>
						<h2>
						{this.props.lang === "en" ? "I code. Front end." : "Koduję. Front end."}
							
						</h2>
						<h3>
						{this.props.lang === "en" ? 
						"By the way, it's really nice of you to visit my portfolio site." 
						: "Przy okazji, bardzo mi miło, że odwiedziłeś/aś moją stronę portfolio."}
							
						</h3>
						<h3>
						{this.props.lang === "en" ? 
						"Wanna see some of my work?" 
						: "Zapraszam do obejrzenia kilku moich projektów."}
							
						</h3>
						<NavLink to="/projects" className="start-button">
						{this.props.lang === "en" ?
							"Let's go!"
							: "Zaczynajmy!"}
			
						</NavLink>
					</section>

			</div>
		)
	}

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage))