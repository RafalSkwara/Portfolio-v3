import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import Icon from 'react-icons-kit'
import { close, androidLaptop } from 'react-icons-kit/ionicons'
import { clearProjects, setActiveProject } from '../../actions/actions'
import data from '../../assets/internalData.json'

import "./ProjectDetails.sass";

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

class ProjectDetails extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
		this.state= {
			isAnimatingOut: false
		}
		this.projectClickHandler = this.projectClickHandler.bind(this)
		this.clearOnClick = this.clearOnClick.bind(this)
	}

	projectClickHandler(){
		this.setState({ isAnimatingOut: false })
		this.props.clearProjects()
		this.props.setActiveProject(this.props.data.name)
	}

	clearOnClick(e) {
		let event = e;
		event.stopPropagation()
		this.setState({isAnimatingOut: true})
		setTimeout(() => {
			this.props.clearProjects()
		}, 400);
	}

	render() {
		const projectData = this.props.data,
				image= require(`../../assets/img/${projectData.image}`),
				classes = this.props.activeProject === "" 
				? "" 
				: this.props.activeProject === projectData.name ? "active" : "hidden";
		let description = projectData.desc[this.props.lang];
		let images = projectData.images;
		let live = this.props.lang === "en" ? "See Live" : "Zobacz";
		let eng = this.props.lang === "en";


		return (
			<div className={`item-details ${classes} ${this.state.isAnimatingOut && 'animate-out'}`}
				onClick={this.projectClickHandler}
				>
				<div className="item-details__header" >
					<h3 className="item-details__title">{projectData.name}</h3>
					{this.props.activeProject === projectData.name && (<div 
						className="item-details__close" 
						onClick={this.clearOnClick}
							>
							<Icon icon={close} size={60} onClick={this.clearOnClick}/>
						</div>)}
				</div>
				<div className="item-details__content">
						<div className="column column-images">						
							{images.map((image, i) => <img key={i} src={require(`../../assets/img/${image}`)}/>)}	
						</div>
						<div className="column column-description">
							<h4>{eng ? "Main technologies used" : "Główne technologie"}</h4>
							<p className="tech">{projectData.tech}</p>
							<h4>{eng ? "Detailed description" : "Szczegóły"}</h4>
							{description.map((par, i) => <p key={i}>{par}</p>)}
						</div>
				</div>
				<a href={projectData.link} target="_blank" className="icon-wrapper">
					<Icon className="icon" icon={androidLaptop} size={70} title={live} />
					<p>{live}</p>
				</a>
			</div>
		)
	}

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectDetails))