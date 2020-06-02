import React, {Component} from 'react';
import HitterListInfo from './HitterListInfo.js';


class HitterList extends Component {

	constructor(props) {
		super(props);
		this.state = {isToggleOn : true};
	}

	render(){		

		const {data, onRemove, onModify} = this.props;

		const list = data.map (
			listh => (
				<HitterListInfo
					key={listh.id}
					listh={listh}
					onRemove={onRemove}
					onModify={onModify}
				/>				
			)
		);

		console.log("list.js 데이터",data);

		

		//<button onClick = {this.sortOrder}>
		//		    	{this.state.isToggleOn ? '성적순' : '등록순'} 정렬
		//		    </button>
		

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

export default HitterList;