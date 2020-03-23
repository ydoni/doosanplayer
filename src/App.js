import React, {Component} from 'react';

import PutScore from './components/PutScore.js';
import List from './components/List.js';
import './App.css';
// import './doosanlogo'

class App extends Component {

  id=8;

  state = {
    playerlist : [
    {id:0, playerNum:"50", inning:"5", score : "8", era:(this.score*9)/this.inning},
    {id:1, playerNum:"50", inning:"", score : ""},
    {id:2, playerNum:"50", inning:"", score : ""},
    {id:3, playerNum:"50", inning:"", score : ""},
    {id:4, playerNum:"50", inning:"", score : ""},
    {id:5, playerNum:"50", inning:"", score : ""},
    {id:6, playerNum:"50", inning:"", score : ""},
    {id:7, playerNum:"50", inning:"", score : ""},
    ]
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
              <button className = "btn butPitch">투수</button>
              <button className = "btn butHit">타자</button>
            </div>
          </div>
          <div className="players">
            <PutScore grade={this.getScore} />
            <List data = {playerlist} />
          </div>


        </div>

      </div>   
      
      );
    }
}

export default App;
