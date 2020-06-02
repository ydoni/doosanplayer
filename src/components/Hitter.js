import React, {Component} from 'react';
import PutScoreHit from './PutScoreHit.js';
import HitterList from './HitterList.js';
import axios from 'axios';
import { faListOl } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Hitter extends Component {
  
  state = {
    
    //선수 데이터
    playerlist : [],
    playerlist_h : [],
    isToggleOn : true
  }

  constructor(props){
    super(props);
    console.log("생명주기 함수 중 가장 먼저 실행되는 생성자인 constructor 메소드 실행");
    this.getList();
  }


  //-- 버튼 클릭 시 성적순으로 정렬

  sortOrder = (e) => {
    const { playerlist, isToggleOn } = this.state;
    e.preventDefault();

    if (isToggleOn === true){
      this.setState({
        playerlist : playerlist.sort((a,b)=>(b.batavg - a.batavg)),
        isToggleOn : !isToggleOn
      });
    } else {
      this.setState({
        playerlist : playerlist.sort((a,b)=>(a.id - b.id)),
        isToggleOn : !isToggleOn
      });
    }
    
  }


  // ------ CRUD 기능 메소드

  //DB에 저장돼있는 데이터 목록을 불러오는 메소드
  // 타자
  getList = () => {
    axios.get('http://localhost:5000/api/hitterlist')
    .then((response) => {
      console.log( "리스트", response);
      this.setState({ playerlist : response.data.playerlist_h })
    })
    .catch((error) => {
      console.log(error);
    })
  }



  // 선수 등록 메소드
  getScore = (data) => {
    console.log("전달받은 타자 데이터 확인용: ", data);

    const {playerlist_h} = this.state;
    
    this.setState({
      playerlist_h : playerlist_h.concat({
        image : data.file ,
        playerNum : data.playerNum ,
        playerName : data.playerName ,
        hits : data.hits ,
        bats : data.bats ,
        batavg : data.hits/data.bats
      })
      
    });
    this.getList();
    console.log("getScoreHitter 메소드 리스트",playerlist_h);
    
  }  


  //선수 삭제 메소드
  removePlayer = (id) => {
    
    axios.delete('http://localhost:5000/api/deletehitter/'+id)
    .then((response)=>{
      console.log( "삭제", response);
      if (response.data.result ==='success'){
        this.getList();
      }
    })
    .catch((error)=>{
      console.log(error);
    }) 
  }


  //선수 수정 메소드
  modifyPlayer = (id, data) => {

    console.log("수정할 id 확인하기", id);
    console.log("수정할 데이터 확인하기 : ",data);
    
    //타자
    axios.put('http://localhost:5000/api/edithitter',
      { id : id, playerNum : data.playerNum , playerName : data.playerName , hits : data.hits , bats : data.bats , batavg : (data.hits/data.bats) })
    .then((response)=> {
      const {playerlist_h} = this.state;
      if (response.data.result === 'success'){
        this.getList();
      }
    })
    .catch ((error)=>{
      console.log("수정 에러");
    })
  
  }



  render (){
      
    const {playerlist} = this.state;    

    return (
      
        <div>    
          <div className = "players">
              <div className="posTitle">
                <h2>타자 평균 타율 (할푼리)</h2>
                <p>타수와 안타수로 타율을 계산합니다. (안타수 / 타수)</p>
                <button
                  className = "sortbtn"
                  onClick = {this.sortOrder}
                >
                  <FontAwesomeIcon
                    icon = {faListOl}
                    size = "1x"
                    className = "sorticon"
                  /> {this.state.isToggleOn ? '성적순' : '등록순'}
                </button>
              </div>
              
              <PutScoreHit grade = {this.getScore} />

              <HitterList
                data = {this.state.playerlist}
                onRemove={this.removePlayer}
                onModify={this.modifyPlayer}
                onSortOrder = {this.sortOrder}
              />      

          </div>

        </div>
      
      );
    }
}
export default Hitter;
    