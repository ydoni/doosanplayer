import React, {Component} from 'react';

import PitcherList from './PitcherList.js';
// import HitterList from './HitterList.js';

class List extends Component {

	render(){

		const {data} = this.props;

		const list_pitch = data.map (
			listp => (<PitcherList key={listp.id} listp={listp} />)
		);

		// const list_hitter = data.map (
		// 	info => (<HitterList />)
		// );

		return(
			<div>
			
				{list_pitch}
			</div>
		);
	}
}

export default List;