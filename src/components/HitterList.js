import React, {Component} from 'react';

class HitterList extends Component {

	state = {
		playerNum : "",
		hits : "",
		bats : "",
		batavg : ""
	}

	render(){

		const {playerNum, hits, bats, batavg} = this.props.listh;

		// const list_pitch = data.map (
		// 	info => (<)
		// );

		return(
			<div>
				<ul className="hitterInfo">
					<li>선수번호{playerNum}</li>
					<li>안타수{hits}</li>
					<li>타수{bats}</li>
					<li>타율 {batavg}</li>
				</ul>
			</div>
		);
	}
}

export default HitterList;