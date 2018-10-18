import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, NavLink } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Icon from 'react-icons-kit'
import { androidLaptop, socialLinkedin, iosEmail, iphone } from 'react-icons-kit/ionicons'
import Header from '../components/Header/Header'
import Project from '../components/Project/Project'
import { hideMenu, toggleMenu, clearProjects } from '../actions/actions'
import data from '../assets/internalData.json'

import "../view_styles/ProjectsPage.sass";

const mapStateToProps = state => ({
	menuHidden: state.firstReducer.menuHidden,
	lang: state.firstReducer.lang,
	activeProject: state.firstReducer.activeProject
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		hideMenu: hideMenu,
		toggleMenu: toggleMenu,
		clearProjects: clearProjects
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
		this.props.clearProjects()
		this.props.hideMenu()
	}


	
	render() {
		let wrap = this.props.activeProject === "" ? "wrap" : "no-wrap";
		return (

			<div className="projects-page-wrapper page-wrapper">
				<Header animationClass={"pop"} activeSection={"projects"}/>
				{this.props.activeProject === "" && <React.Fragment>
					<h3 className="section__title">
						{
							this.props.lang === "en"
								? "Here are some of my projects"
								: "Oto kilka z moich projektów"
						}
					</h3>
					<p className="section__title__paragraph">
						{
							this.props.lang === "en"
								? "Click/tap to see the details."
								: "Kliknij, by zobaczyć więcej informacji."
						}
					</p>
				</React.Fragment>}
				<section className="content">		
					{
						data.projects.map((projectData, index) => (
							<Project 
								data={projectData} 
								key={index}
								/>
					
					))}	
				</section>
			</div>

		)
	}

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectsPage))