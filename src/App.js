import React, {Component} from 'react';

import PutScore from './components/PutScore.js';
import List from './components/List.js';
import './App.css';
// import './doosanlogo'

class App extends Component {

  id=4;

  state = {
    playerlist : [
    {id:0, playerNum:"50", inning:"5", score : "8", era:(this.score*9)/this.inning},
    {id:1, playerNum:"50", inning:"", score : ""},
    {id:2, playerNum:"50", inning:"", score : ""},
    {id:3, playerNum:"50", inning:"", score : ""},
    ]
  }

  changePitch = (e) => {

    this.setState({

    });
  }

  getScore = (data) => {
    
    console.log(data);

    const {playerlist} = this.state;
    this.setState({
      playerlist : playerlist.concat({
        id:this.id++, playerNum:data.playerNum, inning:data.inning,
        score:data.score, era:((data.score*9)/data.inning).toFixed(2)
      })
    });
  }



//<button className="butPitch" onClick={location.href='PitcherList.js'}>투수</button>
//<button className="butHit">타자</button>

  render (){
      
    const {playerlist} = this.state;

    return (
      <div>
        <div className="container">
          <div className="titlebox">
            <img src = "./logo.png" alt="logo" />
            <p>DOOSAN BEARS PLAYERS CALCULATOR</p>
            <h1>두산베어스 선수단 성적 계산</h1>
            <div className = "btnbox">
              <button className = "btn butPitch" onClick={this.changePitch}>
                투수
              </button>
              <button className = "btn butHit" onClick={this.changeHitter}>
                타자
              </button>
            </div>
          </div>
          <div className="players">
            <h2>투수 평균 자책점 (ERA)</h2>
            <p>이닝수와 자책점으로 평균 자책점을 계산합니다.</p>
            <PutScore grade={this.getScore} />
            <List data = {playerlist} />
          </div>


        </div>

      </div>   
      
      );
    }
}

export default App;
