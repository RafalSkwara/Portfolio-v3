import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, NavLink } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Icon from 'react-icons-kit'
import { androidLaptop, socialLinkedin, iosEmail, iphone } from 'react-icons-kit/ionicons'
import Header from '../components/Header/Header'
import { hideMenu, toggleMenu } from '../actions/actions'
import "../view_styles/ProjectsPage.sass";

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

class ProjectsPage extends React.Component {
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
		const skydelveImg = require("../assets/img/skydelve.png")
		return (

			<div className="projects-page-wrapper page-wrapper">
				<Header animationClass={"pop"} activeSection={"projects"}/>
				<h3>
					{
						this.props.lang === "en"
							? "Here you can see some of my projects"
							: "Oto kilka moich ostatnich projektów"
					}
				</h3>
				<section className="content">
					<div className="item">
						<div className="item__image" style={{backgroundImage: `url(${skydelveImg})`}}>

						</div>
						<div className="item__content">
							<h3 className="item__title">SkyDelve</h3>
							<div className="item__text">
								"React, Redux, RESTful API" 
							</div>
							<div className="icon-wrapper">
								<Icon class="icon" icon={androidLaptop} size={70} title="See Live Demo" />
							</div>
						</div>
					</div>
					<div className="item">
						<div className="item__image" style={{ backgroundImage: `url(${skydelveImg})` }}>

						</div>
						<div className="item__content">
							<h3 className="item__title">Media Market</h3>
							<div className="item__text">
									"React, Redux, SASS"
							</div>

							<div className="icon-wrapper">
								<Icon class="icon" icon={androidLaptop} size={70} title="See Live Demo"/>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="item__image" style={{ backgroundImage: `url(${skydelveImg})` }}>

						</div>
						<div className="item__content">
							<h3 className="item__title">SpaceX Launch List</h3>
							<div className="item__text">
									"React, Redux, RESTful API
							</div>
							<div className="icon-wrapper">

								<Icon class="icon" icon={androidLaptop} size={70} title="See Live Demo"/>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="item__image" style={{ backgroundImage: `url(${skydelveImg})` }}>

						</div>
						<div className="item__content">
							<h3 className="item__title">Duel - the game</h3>
							<div className="item__text">
								HTML5, CSS3, JS (ES6)
							</div>
							<div className="icon-wrapper">

								<Icon class="icon" icon={androidLaptop} size={70} title="See Live Demo"/>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="item__image" style={{ backgroundImage: `url(${skydelveImg})` }}>

						</div>
						<div className="item__content">
							<h3 className="item__title">Sarbat - static page</h3>
							<div className="item__text">
								HTML5, CSS3, JS (ES6)
							</div>
							<div className="icon-wrapper">

								<Icon class="icon" icon={androidLaptop} size={70} title="See Live Demo"/>
							</div>
						</div>
						
					</div>
					<div className="item">
						<div className="item__image" style={{ backgroundImage: `url(${skydelveImg})` }}>

						</div>
						<div className="item__content">
							<h3 className="item__title">Weather widget</h3>
							<div className="item__text">
								JS, jQuery, RESTful API
							</div>
							<div className="icon-wrapper">

								<Icon class="icon" icon={androidLaptop} size={70} title="See Live Demo"/>
							</div>
						</div>
					</div>
					

				</section>
			</div>

		)
	}

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectsPage))