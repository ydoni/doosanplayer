import React, {Component} from 'react';

class PitcherList extends Component {

	state = {
		playerNum : "",
		inning : "",
		score : "",
		era : ""
	}

	//삭제버튼
	removePlayer = () => {
		const {listp, onRemove} = this.props;
		onRemove(listp.id);
	}


	//수정버튼
	modifyPlayer = () => {
		const {editing} = this.state;
		this.setState ({ editing : !editing })
	}

	onChangeValue = (e) => {
		const {name, value} = e.target;

		this.setState({
			[name] : value
		});
	}

	componentDidUpdate(prevProps, prevState){
		const {listp, onModify } = this.props;

		//조건 1 (상황 1 : editing 값이 false로 전환될 때 이 조건에 걸린다) 
		//prevState : 이전의 값 
		if (!prevState.editing && this.state.editing) {
			//이전 editing 값은 false 이면서 동시에 현재 state값은 true일 때
			this.setState({
				playerNum : listp.playerNum, inning : listp.inning,
				score : listp.score
			})
		}

		//조건 2 (상황 2 : editing 값이 true로 전환될 때 이 조건에 걸린다) 
		if (prevState.editing && !this.state.editing) {
			//이전 editing 값은 true 이면서 동시에 현재 state값은 false일 때

			//onModify(파라미터1 , 파라미터2); 호출
			onModify(listp.id , {stu_num : this.state.stu_num, stu_name : this.state.stu_name,
				department : this.state.department, avg_grade : this.state.avg_grade })
		}
	}

	render(){

		const {playerNum, inning, score, era} = this.props.listp;

		// const list_pitch = data.map (
		// 	info => (<)
		// );

		return(
			<div className="playerbox">
				<ul className="pitcherInfo">
					<li>선수번호{playerNum}</li>
					<li>이닝수{inning}</li>
					<li>점수{score}</li>
					<li>ERA {era}</li>
				</ul>
				<div className="button_container">
					<button className="change button_p" onClick = {this.modifyPlayer}>V</button>
					<button className="delete button_p" onClick = {this.removePlayer}>X</button>
				</div>
			</div>
		);
	}
}

export default PitcherList;