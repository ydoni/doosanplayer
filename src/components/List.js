import React, {Component} from 'react';

import PitcherList from './PitcherList.js';
// import HitterList from './HitterList.js';

class List extends Component {

	render(){

		const {data, onRemove, onModify} = this.props;

		const list_pitch = data.map (
			listp => (<PitcherList key={listp.id} listp={listp} onRemove={onRemove} onModify={onModify} />)
		);

		// const list_hitter = data.map (
		// 	listh => (<HitterList key={listh.id} listh={listh} onRemove={onRemove}/>)
		// );

		// const list_hitter = data.map (
		// 	info => (<HitterList />)
		// );

		// {list_hitter}

		return(
			<div>			
				{list_pitch}
				
			</div>
		);
	}
}

export default List;