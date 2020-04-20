import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PitcherList from './PitcherList.js';
import axios from 'axios';
// import HitterList from './HitterList.js';

class List extends Component {

	// changeListOrder = (e) => {
		
	// }
	

	render(){

		// changeListOrder = (e) => {
		//     const {playerlist_p} = this.state;
		//     console.log(playerlist_p);
		//     this.setState({
		//       // playerlist_p : playerlist_p.concat(era)
		//       // sort((a, b) => b - a);
		//       // playerlist_p.era.sort();
		//     });
  // 		}

		const {data, onRemove, onModify, onChangePitch, onChangeHit, onSortOrder} = this.props;

		const list_pitch = data.map (
			listp => (
				<PitcherList
					key={listp.id}
					listp={listp}
					onRemove={onRemove}
					onModify={onModify}
					onChangePitch = {onChangePitch}
				/>				
			)
		);		

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