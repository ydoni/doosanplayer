import React, {Component} from 'react';

class PitcherList extends Component {

	state = {
		playerNum : "",
		inning : "",
		score : "",
		era : ""
	}

	render(){

		const {playerNum, inning, score, era} = this.props.listp;

		// const list_pitch = data.map (
		// 	info => (<)
		// );

		return(
			<div>
				<ul className="pitcherInfo">
					<li>선수번호{playerNum}</li>
					<li>이닝수{inning}</li>
					<li>점수{score}</li>
					<li>ERA {era}</li>
				</ul>
			</div>
		);
	}
}

export default PitcherList;