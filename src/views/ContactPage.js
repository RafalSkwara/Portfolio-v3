import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, NavLink } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "../view_styles/ContactPage.sass";
import Header from '../components/Header/Header'
import { hideMenu, toggleMenu } from '../actions/actions'
import Icon from 'react-icons-kit'
import { socialGithub, socialLinkedin, iosEmail, iphone, documentText } from 'react-icons-kit/ionicons'
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

class ContactPage extends React.Component {
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
		const CV_PL = require("../assets/Rafal_Skwara_CV.pdf");
		const CV_ENG = require("../assets/Rafal_Skwara_CV_ENG.pdf");
		return (

			<div className="contact-page-wrapper page-wrapper">
				<Header animationClass={"swirl"} activeSection={"contact"}/>
				<h3>
					{
					this.props.lang === "en" 
						? "Here's how you can contact me" 
					: "Skontaktuj się ze mną"
					}
				</h3>
				<section className="content">
					<a href="mailto:rafal.skwara@gmail.com" className="item">
						<Icon icon={iosEmail } size={70}/>
						<div className="item__text">rafal.skwara@gmail.com</div>
					</a>
					<a href="https://github.com/RafalSkwara" className="item">
						<Icon icon={ socialGithub } size={70}/>
						<div className="item__text">github.com/RafalSkwara</div>
					</a>
					<a href="https://www.linkedin.com/in/rafa%C5%82-skwara-75746259/" target="_blank" className="item">
						<Icon icon={ socialLinkedin } size={70}/>
						<div className="item__text">/rafał-skwara-75746259/</div>
					</a>
					<a href="callto:+48695729757" className="item">
						<Icon icon={ iphone } size={70}/>
						<div className="item__text">+48 695 729 757</div>
					</a>
					<a href={this.props.lang==="en" ? CV_ENG : CV_PL} className="item item-cv" download>
						<Icon icon={ documentText } size={70}/>
						<div className="item__text">{this.props.lang === "en" ? "Download my CV" : "Pobierz moje CV"}</div>
					</a>
				</section>
			</div>

		)
	}

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactPage))