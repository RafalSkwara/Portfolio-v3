import * as React from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter, NavLink } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import {hideMenu, toggleMenu} from '../../actions/actions'
import Rule from '../Rule/Rule'
import { Icon } from 'react-icons-kit'
import { ic_expand_less, ic_expand_more } from 'react-icons-kit/md/'
import "./Header.sass"


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
class Header extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);

		this.toggleHidden = this.toggleHidden.bind(this)
	}

	componentDidMount () {
	  	window.addEventListener('resize', this.scrollListener)
	}
	componentWillUnmount () {
		window.removeEventListener('resize', this.scrollListener)
	}
	
	toggleHidden(e) {
		this.props.toggleMenu()
	}

	scrollListener() {
		console.log(window.innerWidth);
		
	}

	render() {
		let hiddenClass = this.props.menuHidden ? "hidden" : "";
		const logo = require("../../assets/img/logo.png")
		return (
			<React.Fragment>
			<header className={`${this.props.animationClass} ${hiddenClass}`}>
				<div className="header__logo">
						<NavLink to="/">
							<img src={logo}/>
						</NavLink>
				</div>
				<div className="header__inner">
					<NavLink to="/">
						<button type="button" className={`button button--1 ${this.props.activeSection ==="home" ? "highlight" : ""}`}>
							{
								this.props.lang === "en" ? 
									"Home"
									: "Strona Główna"
							}
						</button>
					</NavLink>
					<NavLink to="/projects">
						<button type="button" className={`button button--2 ${this.props.activeSection === "projects" ? "highlight" : ""}`}>
							{
								this.props.lang === "en" ?
									"Projects"
									: "Projekty"
							}
						</button>
					</NavLink>
					<NavLink to="/about">
						<button type="button" className={`button button--3 ${this.props.activeSection === "about" ? "highlight" : ""}`}>
								{
									this.props.lang === "en" ?
										"About Me"
										: "O Mnie"
								}
						</button>
					</NavLink>
					<NavLink to="/contact">
						<button type="button" className={`button button--4 ${this.props.activeSection === "contact" ? "highlight" : ""}`}>
								{
									this.props.lang === "en" ?
										"Contact"
										: "Kontakt"
								}
						</button>
					</NavLink>
				
				</div>
			</header>
			<Rule width={90} styling={{
				backgroundColor: "#F7EAD6",
				height: "2px",
				animation: "mount 1s linear forwards",
				margin: "0 auto"
			}} />
			<div className={`menu-toggle ${this.props.menuHidden ? "" : "active"}`} onClick={this.toggleHidden}>
				<div className="spacer" style={{width: "50px"}}></div>
				<p>Menu</p>
				<Icon icon={this.props.menuHidden ? ic_expand_more : ic_expand_less} size={34} onClick={this.toggleHidden}/>
			</div>
			</React.Fragment>

		)
	}

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))