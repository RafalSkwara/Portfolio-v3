import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, NavLink } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from '../components/Header/Header'
import "../view_styles/HomePage.sass";
import { hideMenu, toggleMenu } from '../actions/actions'

const mapStateToProps = state => ({
	menuHidden: state.firstReducer.menuHidden
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
		return (
			<div className="home-page-wrapper page-wrapper">
				<Header animationClass={"enter"} activeSection={"home"}/>
				<section className="content">
					<h1>Well, Hello</h1>
				</section>
			</div>
		)
	}

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage))