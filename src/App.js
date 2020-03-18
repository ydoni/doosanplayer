import React, {Component} from 'react';

import PutScore from './components/PutScore.js';
import './App.css';
// import './doosanlogo'

class App extends Component {




  getScore = (data) => {
    
    console.log(data);

  }

//<button className="butPitch" onClick={location.href='PitcherList.js'}>투수</button>
//<button className="butHit">타자</button>

  render (){
      

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
           
          </div>


        </div>

      </div>   
      
      );
    }
}

export default App;
