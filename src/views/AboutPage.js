import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, NavLink } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "../view_styles/AboutPage.sass";
import Header from '../components/Header/Header'
import Rule from '../components/Rule/Rule'
import { hideMenu, toggleMenu } from '../actions/actions'
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

class AboutPage extends React.Component {
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
		let eng = this.props.lang === "en";
		return (
			
			<div className="about-page-wrapper page-wrapper">
				<Header animationClass={"fall-down"} activeSection={"about"}/>
				<section className="content">
					<h2>
						{
							eng ? 
							"Personal"
							: "Informacje osobiste"
						}
					</h2>
					<div className="info-item">
						<h4>{eng?"Name" : "Imię i nazwisko"}</h4>
						<p>Rafał Skwara</p>
					</div>
					<div className="info-item">
						<h4>{eng ? "Based" : "Miasto"}</h4>
						<p>{eng ? "Warsaw, Poland" : "Warszawa"}</p>
					</div>
					<div className="info-item">
						<h4>{eng?"Currently" : "Obecnie"}</h4>
						<p>{eng ? "In-house junior front end developer in educational publishing house" 
								: "Junior front end developer w wydawnictwie edukacyjnym"}</p>
					</div>
					<div className="info-item">
						<h4>{eng?"More about me" : "Więcej o mnie"}</h4>
						<p>{eng ? "Fantasy Premier League fan, electric guitar student, problem solver, interested a bit in everything, with never ending thirst for new knowledge. Coder." 
								: "Gracz Fantasy Premier League, uczę się grać na gitarze elektrycznej, rozwiązuję problemy. Interesuję się wszystkim po trochu, zawsze ciekawy nowych rzeczy i głodny nowej wiedzy. Koder."}</p>
					</div>
					<Rule width={80} styling={{ 
						height: "1px", 
						backgroundColor: "#F7EAD6", 
						margin: "0 auto",
						opacity: 0,
						animation: "mount .7s linear .5s forwards",}} />
					<h2>
						{
							eng ? 
							"Skills"
							: "Umiejętności"
						}
					</h2>
					<div className="info-item">
						<h4>HTML5</h4>
						<p>{
							eng ? "Comfortable usage of semantic markup." 
							: "Komfortowe stosowanie semantycznego kodu." 
							}
						</p>
					</div>
					<div className="info-item">
						<h4>CSS3</h4>
						<p>{
							eng ? "Positioning, styling, transitions, animations and more. Basic Bootstrap."
								: "Pozycjonowanie, stylowanie, przejścia, animacje i więcej. Podstawy Bootstrap"
						}
						</p>
					</div>
					<div className="info-item">
						<h4>JavaScript</h4>
						<p>{
							eng ? "Good knowledge of vanilla JS, including ES2015. DOM manipulating and traversing, OOP, MVC, jQuery and a few other libraries, RESTful API, simple algorithms. Basic Node.js knowledge."
								: "Dobry poziom znajomości vanilla JS, w tym ES2015. Manipulacja i trawersowanie DOM, podstawy OOP i MVC, jQuery i inne biblioteki, RESTful API, proste algorytmy. Podstawowa znajomość Node.js."
						}
						</p>
					</div>
					<div className="info-item">
						<h4>React</h4>
						<p>{
							eng ? "Solid junior level knowledge of React, Redux, React Router."
								: "Solidny poziom juniora w React, Redux, React Router."
						}
						</p>
					</div>
					<div className="info-item">
						<h4>{
							eng ? "Preprocessors"
								: "Preprocesory"
						}</h4>
						<p>
							SCSS/Sass, Pug/Jade
						</p>
					</div>
					<div className="info-item">
						<h4>{
							eng ? "Tools and environment"
								: "Narzędzia i środowisko"
						}</h4>
						<p>
							Git, npm, Webpack 4, Gulp, 
						</p>
					</div>
				</section>
			</div>
			
		)
	}

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AboutPage))