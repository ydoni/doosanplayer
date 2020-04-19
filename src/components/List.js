import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PitcherList from './PitcherList.js';
import axios from 'axios';
// import HitterList from './HitterList.js';

class List extends Component {

	
	

	render(){


		const {data, onRemove, onModify, onChangePitch, onChangeHit} = this.props;

		const list_pitch = data.map (
			listp => (
				<PitcherList
					key={listp.id} listp={listp} onRemove={onRemove} onModify={onModify} onChangePitch = {onChangePitch}
				/>				
			)
		);

		// const list_hitter = data.map (
		// 	listh => (
		// 		<HitterList
		// 		key={listh.id}
		// 		listh={listh}
		// 		onRemove={onRemove}
		// 		onModify={onModify}
		// 		onChangeHit = {onChangeHit}
		// 		/>)
		// );

		

		return(
			<Router>
				<div>	        
					<div className="playerBigbox">
						{list_pitch}
					</div>
					<Route path='/PitcherList' component={PitcherList} />
				</div>

			</Router>
		);
	}
}

export default List;