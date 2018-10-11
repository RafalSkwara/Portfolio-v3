import React from 'react'
import PropTypes from 'prop-types';

const Rule = ({width, styling}) => {
	const perc = width === undefined ? 100 : width
	return (
	<div 
		className="rule" 
		style={{
			...styling,
			width: perc+"%"
		}}>

	</div>
	)
}

// Rule.propTypes = {
// 	width: PropTypes.number,
// 	styling: PropTypes.object
// }

export default Rule;