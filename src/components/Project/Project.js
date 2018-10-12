import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import ProjectDetails from '../ProjectDetails/ProjectDetails'
import Icon from 'react-icons-kit'
import { androidLaptop, socialLinkedin, iosEmail, iphone } from 'react-icons-kit/ionicons'
import { clearProjects, setActiveProject } from '../../actions/actions'
import data from '../../assets/internalData.json'

import "./Project.sass";

const mapStateToProps = state => ({
	activeProject: state.firstReducer.activeProject,
	lang: state.firstReducer.lang
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		clearProjects: clearProjects,
		setActiveProject: setActiveProject
	}, dispatch)
}

class Project extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
		this.state= {

		}
		this.projectClickHandler = this.projectClickHandler.bind(this)
		this.clear = this.clear.bind(this)
	}

	projectClickHandler(){

		this.props.clearProjects()

			this.props.setActiveProject(this.props.data.name)

	}

	clear(e) {
		let event = e;
		event.stopPropagation()

			this.props.clearProjects()

	}

	render() {
		const projectData = this.props.data,
				image= require(`../../assets/img/${projectData.image}`),
				classes = this.props.activeProject === ""
					? "" 
					:  "hidden";
		let live = this.props.lang === "en" ? "See\u00A0Live" : "Zobacz";

		return (
			<React.Fragment>
			<div className={`item ${classes}`}
				onClick={this.projectClickHandler}
			>
				<div className="item__image" style={{ backgroundImage: `url(${image})` }} />
				<div className="item__content">
					<h3 className="item__title">{projectData.name}</h3>
					<div className="item__text">
						{projectData.tech}
					</div>
						<a 
							href={projectData.link} 
							target="_blank" 
							className="icon-wrapper"
							onClick={(e) => e.stopPropagation()}>
						<Icon className="icon" icon={androidLaptop} size={40} title={live}/>
						<p>{live}</p>
					</a>
				</div>
			</div>
			{this.props.activeProject === projectData.name && <ProjectDetails data={projectData} />}
			</React.Fragment>
		)
	}

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Project))