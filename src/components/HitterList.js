import React, {Component} from 'react';

class HitterList extends Component {

	state = {
		editing : false,
		playerNum : "",
		playerName : "",
		hits : 0,
		bats : 0,
		batavg : 0
	}

	//삭제버튼
	removePlayer = () => {
		const {listh, onRemove} = this.props;
		onRemove(listh.id);
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
		const {listh, onModify } = this.props;

		//조건 1 (상황 1 : editing 값이 false로 전환될 때 이 조건에 걸린다) 
		//prevState : 이전의 값 
		if (!prevState.editing && this.state.editing) {
			//이전 editing 값은 false 이면서 동시에 현재 state값은 true일 때
			this.setState({
				playerNum : listh.playerNum, playerName : listh.playerName,
				hits : listh.hits, bats : listh.bats, batavg : listh.batavg
			});
		}

		//조건 2 (상황 2 : editing 값이 true로 전환될 때 이 조건에 걸린다) 
		if (prevState.editing && !this.state.editing) {
			//이전 editing 값은 true 이면서 동시에 현재 state값은 false일 때			
			
			//onModify(파라미터1 , 파라미터2); 호출
			onModify(listh.id , {playerNum : this.state.playerNum, playerName: this.state.playerName,
				hits : this.state.hits,	bats : this.state.bats, batavg : this.state.batavg })
			
		}
	}

	render(){

		const {editing} = this.state;

		if (editing) {
			return (
				<div className="playerbox">
					<div className="hitterInfo">
						<div>
							선수 번호 수정 : <input placeholder = "번호 수정" name = "playerNum"
								value = {this.state.playerNum} onChange = {this.onChangeValue}/>
						</div>
						<div>
							안타 수 : <input placeholder = "안타 수 재입력" name = "hits"
								value = {this.state.hits} onChange = {this.onChangeValue}/>
						</div>
						<div>
							타수 : <input placeholder = "타수 재입력" name = "bats"
								value = {this.state.bats} onChange = {this.onChangeValue}/>
						</div>
						<button onClick={this.modifyPlayer}>수정</button>
					</div>
				</div>
			);
		}

		const {playerNum, playerName, hits, bats, batavg} = this.props.listh;

	

		return(
			<div className="playerbox">
				<div className="playerimg"><img src="" alt=""/></div>
				<ul className="pitcherInfo">
					<li>선수번호 {playerNum}</li>
					<li>선수이름 {playerName}</li>					
					<li>안타수 {hits} </li>
					<li>타수 {bats}</li>
					<li>타율 {batavg}</li>
				</ul>
				<div className="button_container">
					<button className="change button_p" onClick = {this.modifyPlayer}>V</button>
					<button className="delete button_p" onClick = {this.removePlayer}>X</button>
				</div>
			</div>
		);
	}
}

export default HitterList;