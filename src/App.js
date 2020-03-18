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
          <h1>두산베어스 선수단 성적 계산</h1>
          <button className="butPitch">투수</button>
          <button className="butHit">타자</button>
          <div className="players">
            <PutScore grade={this.getScore} />
          </div>


        </div>

      </div>


      /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      */
      
      );
    }
}

export default App;
