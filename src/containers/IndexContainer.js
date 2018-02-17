import React, { Component } from 'react'
import { connect } from 'react-redux'
import IndexComponent from 'components/IndexComponent'

class IndexContainer extends Component {
	render() {
		let comp = (
			<div>
				test123
			</div>
		)
		return ( 
			<div>
				{comp}
				<IndexComponent/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer)