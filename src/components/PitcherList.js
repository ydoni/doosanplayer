import React, {Component} from 'react';

class PitcherList extends Component {

	render(){

		const {data} = this.props;

		// const list_pitch = data.map (
		// 	info => (<)
		// );

		return(
			<div>
				{list_pitch}
			</div>
		);
	}
}

export default PitcherList;