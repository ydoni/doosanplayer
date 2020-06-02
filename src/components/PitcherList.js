import React, {Component} from 'react';
import PitcherListInfo from './PitcherListInfo.js';


class PitcherList extends Component {

	constructor(props) {
		super(props);
		this.state = {isToggleOn : true};
	}	

	render(){		

		const {data, onRemove, onModify} = this.props;

		const list = data.map (
			listp => (
				<PitcherListInfo
					key={listp.id}
					listp={listp}
					onRemove={onRemove}
					onModify={onModify}
				/>				
			)
		);		

		return(
			
				<div>
				        
					<div className="playerBigbox">
						<div className="playerScroll">
							{list}
						</div>
					</div>
				</div>

		);
	}
}

export default PitcherList;