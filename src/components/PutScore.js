import React, {Component} from 'react';

class PutScore extends Component {

	state = {
		inputhitter:false,
		playerNum:"",
		playerName:"",
		inning:"",
		score:"",
		era:"",
		hits:"",
		bats:"",
		batavg:""
	}

	onChangeValue = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		});
	}

	onSubmitValue = (e) => {
		e.preventDefault();

		this.props.grade(this.state);
		this.setState({
			playerNum:"",
			playerName:"",
			inning:"",
			score:"",
			era:"",
			hits:"",
			bats:"",
			batavg:""
			// era : (this.state.score*9)/this.state.inning
			// bat : this.state.hits/this.statebats
		});
	}	
	


	// -> 포지션 별로 input 값 다르게 받기 위한 함수
	// componentDidUpdate(prevProps, prevState){
	// 	const { onSubmitPitcher, onSubmitHitter } = this.props.grade;

	// 	//조건 1 (상황 1 : editing 값이 false로 전환될 때 이 조건에 걸린다) 
	// 	//prevState : 이전의 값 
	// 	if (!prevState.inputhitter && this.state.inputhitter) {
	// 		//이전 editing 값은 false 이면서 동시에 현재 state값은 true일 때
	// 		onSubmitPitcher = (e) => {
	// 			e.preventDefault();

	// 			this.props.grade(this.playerlist_p.state);
	// 			this.setState({
	// 				playerNum:"",
	// 				playerName:"",
	// 				inning:"",
	// 				score:"",
	// 				era:""
	// 			});
	// 			console.log("투수 입력값");		
	// 		}
			
	// 	}

	// 	//조건 2 (상황 2 : editing 값이 true로 전환될 때 이 조건에 걸린다) 
	// 	if (prevState.inputhitter && !this.state.inputhitter) {
	// 		//이전 editing 값은 true 이면서 동시에 현재 state값은 false일 때

	// 		//onUpdate(파라미터1 , 파라미터2); 호출
	// 		onSubmitHitter= (e) => {
	// 			e.preventDefault();

	// 			this.props.grade(this.playerlist_h.state);
	// 			this.setState({
	// 				playerNum:"",
	// 				playerName:"",
	// 				hits:"",
	// 				bats:"",
	// 				batavg:""
	// 			});
	// 			console.log("타자 입력값");
	// 		}
				
	// 	}

	// }


	render (){

		// const {inputhitter} = this.state;

		// if (inputhitter) {
		// 	return (
		// 		<form className ="inputGrade" onSubmit = {this.onSubmitHitter}>
		// 		<span>성적 입력 ▶</span>
		// 		<input
		// 			placeholder = "선수번호 입력"
		// 			name = "playerNum"
		// 			value = {this.state.playerNum}
		// 			onChange = {this.onChangeValue}
		// 		/>
		// 		<input
		// 			placeholder = "선수이름 입력"
		// 			name = "playerName"
		// 			value = {this.state.playerName}
		// 			onChange = {this.onChangeValue}
		// 		/>
		// 		<input
		// 			placeholder = "안타수 입력"
		// 			name = "hits"
		// 			value = {this.state.hits}
		// 			onChange = {this.onChangeValue}
		// 		/>
		// 		<input
		// 			placeholder = "타수 입력"
		// 			name = "bats"
		// 			value = {this.state.bats}
		// 			onChange = {this.onChangeValue}
		// 		/>
		// 		<button className = "btn putGrade" type = "submit">등록</button>


		// 	</form>
		// 	);
		// }


		return (

			<form className ="inputGrade" onSubmit = {this.onSubmitValue}>
				<span>성적 입력 ▶</span>
				<input
					placeholder = "선수번호 입력"
					name = "playerNum"
					value = {this.state.playerNum}
					onChange = {this.onChangeValue}
				/>
				<input
					placeholder = "선수이름 입력"
					name = "playerName"
					value = {this.state.playerName}
					onChange = {this.onChangeValue}
				/>
				<input
					placeholder = "이닝수 입력"
					name = "inning"
					value = {this.state.inning}
					onChange = {this.onChangeValue}
				/>
				<input
					placeholder = "자책점 입력"
					name = "score"
					value = {this.state.score}
					onChange = {this.onChangeValue}
				/>
				<button className = "btn putGrade" type = "submit">등록</button>


			</form>
		);
	}


}


export default PutScore;