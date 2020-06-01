import React, {Component} from 'react';
import axios, { post } from 'axios';

class PutScorePit extends Component {

	constructor(props){
		super(props);
		this.state = {
			file:null,
			fileName:"",
			playerNum:"",
			playerName:"",
			inning:"",
			score:"",
			era:""
		}
	}
	

	
	handleFileChange = (e) => {
		
		this.setState({
			file : e.target.files[0],
			fileName : e.target.value
		});
	}

	onChangeValue = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		});
	}


	onSubmitValue = (e) => {
		e.preventDefault();

		// 이미지 파일 업로드를 사용하기 위해서는 formdata로 만들어줘야 multer에 인식한다.
		const formData = new FormData();
		formData.append('image', this.state.file);
		formData.append('playerNum', this.state.playerNum);
		formData.append('playerName', this.state.playerName);
		formData.append('inning', this.state.inning);
		formData.append('score', this.state.score);
		formData.append('era', this.state.era);
		const config = {
			headers: {
			'content-type': 'multipart/form-data'
			}
		}
		return axios.post("http://localhost:5000/api/add", formData)
		.then(res => {
			console.log("투수 putScore 성공",res.data);
			this.props.grade(this.state);
			this.setState({
				file:null,
				fileName:"",
				playerNum:"",
				playerName:"",
				inning:"",
				score:"",
				era:""
			});
		})
		.catch(err => {
			console.log("에러");
		})
		// this.grade(this.state); //App.js 에 전달

		
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
				<input
					placeholder = "프로필 사진 첨부"
					className = "file"
					type = "file"
					name = "file"
					file = {this.state.file}
					value = {this.state.fileName}
					onChange = {this.handleFileChange}
				/>
				<button className = "btn putGrade" type = "submit">등록</button>


			</form>
		);
	}


}


export default PutScorePit;