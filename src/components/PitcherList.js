import React, {Component} from 'react';

class PitcherList extends Component {

	state = {
		editing : false,
		image : "",
		playerNum : "",
		playerName : "",
		inning : 0,
		score : 0,
		era : 0
	}

	

	//삭제버튼
	removePlayer = () => {
		const { listp, onRemove } = this.props;
		onRemove(listp.id);
	}


	//수정버튼
	modifyPlayer = () => {
		const { editing } = this.state;
		this.setState ({ editing : !editing })
	}

	onChangeValue = (e) => {
		const { name, value } = e.target;

		this.setState({
			[name] : value
		});
	}

	componentDidUpdate(prevProps, prevState){
		const { listp, onModify } = this.props;

		//조건 1 (상황 1 : editing 값이 false로 전환될 때 이 조건에 걸린다) 
		//prevState : 이전의 값 
		if (!prevState.editing && this.state.editing) {
			//이전 editing 값은 false 이면서 동시에 현재 state값은 true일 때
			this.setState({
				image : listp.image,
				playerNum : listp.playerNum,
				playerName : listp.playerName,
				inning : listp.inning,
				score : listp.score,
				era : listp.era
			});
		}

		//조건 2 (상황 2 : editing 값이 true로 전환될 때 이 조건에 걸린다) 
		if (prevState.editing && !this.state.editing) {
			//이전 editing 값은 true 이면서 동시에 현재 state값은 false일 때			
			
			//onModify(파라미터1 , 파라미터2); 호출
			onModify(listp.id ,{
				image : this.state.image,
				playerNum : this.state.playerNum,
				playerName: this.state.playerName,
				inning : this.state.inning,
				score : this.state.score,
				era : listp.era
			})	

		}
	}

	render(){

		const { editing } = this.state;

		if (editing) {
			return (
				<div className="playerbox">
				<div className="playerimg"><img src={this.state.image} alt="edit profile"/></div>
					<div className="pitcherInfo">
						<div>
							선수 번호 수정 : <input placeholder = "번호 수정" name = "playerNum"
								value = {this.state.playerNum} onChange = {this.onChangeValue}/>
						</div>
						<div>
							이닝 수 : <input placeholder = "이닝 수 재입력" name = "inning"
								value = {this.state.inning} onChange = {this.onChangeValue}/>
						</div>
						<div>
							자책점 : <input placeholder = "자책점 재입력" name = "score"
								value = {this.state.score} onChange = {this.onChangeValue}/>
						</div>
						<button onClick={this.modifyPlayer}>수정</button>
					</div>
				</div>
			);
		}



		const {image, playerNum, playerName, inning, score, era} = this.props.listp;

	

		return(
			<div className="playerbox">
				<div className="playerimg"><img src={image} alt="profile"/></div>
				<ul className="pitcherInfo">
					<li>{playerNum}.</li>
					<li>{playerName}</li>			
					<li>ERA </li>
					<li>{era}</li>
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