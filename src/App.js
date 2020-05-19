import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PutScore from './components/PutScore.js';
import PutScoreHit from './components/PutScoreHit.js';
import List from './components/List.js';
import axios from 'axios';
import { post } from 'axios';
import './App.css';
// import './doosanlogo'

class App extends Component {

  id=1;

  state = {
    //타이틀 부분
    playerTitle : "투수 평균 자책점 (ERA)",
    playerSubTitle : "이닝수와 자책점으로 평균 자책점을 계산합니다. (자책점 * 9 / 이닝수)",
    
    //선수 데이터
    playerlist : [],
    playerlist_p : [],
    playerlist_h : []
  }


  constructor(props){
    super(props);
    console.log("생명주기 함수 중 가장 먼저 실행되는 생성자인 constructor 메소드 실행");
    this.getList();
  }


  // -- 투수 버튼 클릭 시
  changePitcher = (e) => {
    const { playerlist_p } = this.state;
    this.setState({
      playerTitle : "투수 평균 자책점 (ERA)",
      playerSubTitle : "이닝수와 자책점으로 평균 자책점을 계산합니다. (자책점 * 9 / 이닝수)",
      
    });
    this.getList();
  }

  // -- 타자 버튼 클릭 시
  changeHitter = (e) => {
    const { playerlist_h } = this.state;
    this.setState({
      playerTitle : "타자 평균 타율 (할푼리)",
      playerSubTitle : "타수와 안타수로 타율을 계산합니다. (안타수 / 타수)",
      
    });
    this.getListHitter();
  }


  //-- 버튼 클릭 시 성적순으로 정렬

  sortOrder = () => {
    const {playerlist} = this.state;
    console.log("최종",playerlist);
    this.setState({
      // listsort:playerlist_p.sort((a,b)=>(a.id - b.id))
    });
    
  }




  // ------ CRUD 기능 메소드


  //DB에 저장돼있는 데이터 목록을 불러오는 메소드

  // 투수
  getList = () => {
    //http 통신을 get방식으로
    //get(read) post(create) put(update) delete(delete)
    
    axios.get('http://localhost:5000/api/pitcherlist')
    .then((response) => {
      console.log( "리스트", response);
      this.setState({ playerlist : response.data.playerlist_p })
    })
    .catch((error) => {
      console.log(error);
    })

    
  } 

  // 타자
  getListHitter = () => {
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
  // -- 투수
  getScore = (data) => {
    console.log("전달받은 투수 데이터 확인용: ", data);

    const {playerlist_p} = this.state;
    
    this.setState({
      playerlist_p : playerlist_p.concat({
        image : data.file ,
        playerNum : data.playerNum ,
        playerName : data.playerName ,
        inning : data.inning ,
        score : data.score ,
        era : ((data.score*9)/data.inning)
      })
      
    });
    this.getList();
    console.log("getScore 메소드 리스트",playerlist_p);        
  }  

  // -- 타자
  getScoreHitter = (data) => {
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
    this.getListHitter();
    console.log("getScoreHitter 메소드 리스트",playerlist_h);
    
  }  


  //선수 삭제 메소드
  removePlayer = (id) => {
    axios.delete('http://localhost:5000/api/delete/'+id)
    .then((response)=>{
      console.log( "삭제", response);
      if (response.data.result ==='success'){
        this.getList();
      }
    })
    .catch((error)=>{
      console.log(error);
    })  

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
    //투수
    axios.put('http://localhost:5000/api/edit',
      { id : id, playerNum : data.playerNum , playerName : data.playerName , inning : data.inning , score : data.score , era : ((data.score*9)/data.inning) })
    .then((response)=> {
      const {playerlist_p} = this.state;
      if (response.data.result === 'success'){
        this.getList();

        //오답 *****
        // this.setState({
        //   playerlist_p : playerlist_p.map
        // })
      }
    })
    .catch ((error)=>{
      console.log("수정 에러");
    })

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
      <Router>
        <div>
          <div className="container">

            <div className="titlebox">
              <img src = "./logo.png" alt="logo" />

                <div className ="titleTextBox">
                  <p>DOOSAN BEARS PLAYERS CALCULATOR</p>
                  <h1>두산베어스 선수단 성적 계산</h1>                 
              </div>
              <div className = "btnbox">
                  
                    <button
                      className = "btn butPitch"
                      onClick ={this.changePitcher}>
                      투수
                    </button>
                  
                    <button className = "btn butHit"
                      onClick ={this.changeHitter}>
                      타자
                    </button>
              </div>
            </div>
            

            <div className="players">
              <div className="posTitle">
                <h2>{this.state.playerTitle}</h2>
                <p>{this.state.playerSubTitle}</p>
                
              </div>
              
              <PutScore grade = {this.getScore} />
              <PutScoreHit grade = {this.getScoreHitter} />
              <List
                data = {this.state.playerlist}
                onRemove={this.removePlayer}
                onModify={this.modifyPlayer}
                onSortOrder = {this.sortOrder}
              />
              
            </div>
            <p>MADE BY CHOI YEONDO</p>

          </div>



        </div>
      </Router>
      
      );
    }
}
//  // <Route exact path = '/'  component={Home}/>
// <Route exact path="/PutScore" component={PutScore} />
// <Route exact path="/PutScoreHit" component={PutScoreHit} />
export default App;
    