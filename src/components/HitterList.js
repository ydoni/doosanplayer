import React, {Component} from 'react';

class HitterList extends Component {

	render(){

		const {data} = this.props;

		// const list_hitter = data.map (
		// 	info => (<)
		// );

		return(
			<div>
				{list_hitter}
			</div>
		);
	}
}

export default HitterList;