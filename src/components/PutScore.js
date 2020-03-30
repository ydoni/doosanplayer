import React, {Component} from 'react';

class PutScore extends Component {

	state = { playerNum:"", inning:"", score:"", era:"" }

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
			inning:"",
			score:"",
			era:""
			// era : (this.state.score*9)/this.state.inning
			//era : score * 9 / inning
		});
	}	
	
	render (){
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