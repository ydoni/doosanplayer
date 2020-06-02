import React, {Component} from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import Pitcher from './components/Pitcher.js';
import Hitter from './components/Hitter.js';
import './App.css';
// import './doosanlogo'

class App extends Component {


  render (){

    return (
      <Router>
        <div>
          <div className = "container">

            <div className = "titlebox">
              <img src = "./logo.png" alt="logo" />

                <div className = "titleTextBox">
                  <p>DOOSAN BEARS PLAYERS CALCULATOR</p>
                  <h1>두산베어스 선수단 성적 계산</h1>                 
              </div>
              <div className = "btnbox">

                <Link to = "/">
                <button className = "btn butPitch">투수</button>
                </Link>

                <Link to = "/hitter">
                <button className = "btn butHitter">타자</button>
                </Link>                

              </div>

            </div>

            <Route exact path = "/" component={Pitcher} />
            <Route path = "/hitter" component={Hitter} />

            <footer>
              <ul>                
                <li className="icon">
                  <a href = "https://www.instagram.com/doosanbears.1982/">
                  <img src = "./insta.png" alt="instagram" />
                  </a>                  
                </li>                
                <li className="icon">
                  <a href = "https://www.youtube.com/channel/UCsebzRfMhwYfjeBIxNX1brg">
                  <img src = "./youtube.png" alt="youtube" />
                  </a>
                </li>
              </ul>
            </footer>

          </div>
          <img src="./bg.png" alt="background" className="bgimg"/>
        </div>
      </Router>
      
      );
    }
}


export default App;
    