import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PutScore from './components/PutScore.js';
import List from './components/List.js';
import './App.css';
// import './doosanlogo'

class App extends Component {

  id=4;

  state = {
    playerTitle : "투수 평균 자책점 (ERA)",
    playerSubTitle : "이닝수와 자책점으로 평균 자책점을 계산합니다.",
    playerlist_p : [
      {id:0, playerNum:"50", playerName:"이영하", inning : 5, score:2, era :""},
      {id:1, playerNum:"29", playerName:"유희관", },
      {id:2, playerNum:"28", playerName:"장원준", },
      {id:3, playerNum:"1", playerName:"함덕주", },
    ],
    playerlist_h : [
      {id:0, playerNum:"37", playerName:"박건우", hitavg : 3.64},
    ]      
  }


  //투수 버튼 클릭 시
  changePitcher = (e) => {
    this.setState({
      playerTitle : "투수 평균 자책점 (ERA)",
      playerSubTitle : "이닝수와 자책점으로 평균 자책점을 계산합니다.",
      
    });
  }

  //타자 버튼 클릭 시
  changeHitter = (e) => {
    this.setState({
      playerTitle : "타자 타율 (할푼리)",
      playerSubTitle : "타수와 안타수로 타율을 계산합니다.",
      
    });
  }
  

  getScore = (data) => {

    const {playerlist_p, playerlist_h} = this.state;
    
    console.log(data);    
    this.setState({
      playerlist_p : playerlist_p.concat({
        id:this.id++, playerNum:data.playerNum, playerName:data.playerName, inning:data.inning,
        score:data.score, era:((data.score*9)/data.inning).toFixed(2)
      }),
      playerlist_h : playerlist_h.concat({
        id:this.id++, playerNum:data.playerNum, playerName:data.playerName, hits:data.hits,
        bats:data.bats, batavg:(data.hits/data.bats).toFixed(2)
      })
    });
  }


  calcuEra = (id, data) => {
    const {playerlist_p, playerlist_h} = this.state;

    this.setState({
      playerlist_p : playerlist_p.map(
        listp => id === listp.id ?
        { era:((data.score*9)/data.inning).toFixed(2) } : listp),
      playerlist_h : playerlist_h.map(
        listp => id === listp.id ?
        { era:(data.hits/data.bats).toFixed(2) } : listp)
    });
    console.log(playerlist_p);
  }


  removePlayer = (id) => {
    const {playerlist_p, playerlist_h} = this.state;
    this.setState({
      playerlist_p : playerlist_p.filter(listp => listp.id !== id),
      playerlist_h : playerlist_h.filter(listh => listh.id !== id)
    });
  }

  modifyPlayer = (id, data) => {
    const {playerlist_p, playerlist_h} = this.state;

    this.setState({

      playerlist_p : playerlist_p.map(
        listp => id === listp.id ?
        {
          id:id,
          playerNum:data.playerNum,
          playerName:data.playerName,
          inning:data.inning,
          score:data.score,
          era:((data.score*9)/data.inning).toFixed(2)}
          : listp
      ),

      playerlist_h : playerlist_h.map(
        listh => id === listh.id ?
        {
          id:id,
          playerNum:data.playerNum,
          playerName:data.playerName,
          hits:data.hits,
          bats:data.bats,
          batavg:(data.hits/data.bats).toFixed(2)}
          : listh
      )

    });
  }



  render (){
      
    const {playerlist_p} = this.state;

    return (
      <Router>
        <div>
          <div className="container">
            <div className="titlebox">
              <img src = "./logo.png" alt="logo" />
              <p>DOOSAN BEARS PLAYERS CALCULATOR</p>
              <h1>두산베어스 선수단 성적 계산</h1>
              <div className = "btnbox">
                <Link to="/">
                  <button
                    className = "btn butPitch"
                    onClick ={this.changePitcher}>
                    투수
                  </button>
                </Link>
                <Link to="/">
                  <button className = "btn butHit"
                    onClick ={this.changeHitter}>
                    타자
                  </button>
                </Link>
                </div>              
            </div>           
            <div className="players">
              <div className="posTitle">
                <h2>{this.state.playerTitle}</h2>
                <p>{this.state.playerSubTitle}</p>
              </div>
              <PutScore grade={this.getScore} />
              <List
                data = {playerlist_p}
                
                onRemove={this.removePlayer}
                onModify={this.modifyPlayer}
                onChangePitch = {this.changePitcher}
                onChangeHit = {this.changeHitter}
              />
              
            </div>


          </div>



        </div>
      </Router>
      
      );
    }
}
 // <Route exact path = '/'  component={Home}/>
export default App;
