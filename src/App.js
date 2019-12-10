import React, { Component} from 'react';
import { voteAngular, voteReact, voteVue } from './actions'; 

import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }

  handleVoteVue = () => {
    this.store.dispatch(voteVue());
  }
  render() {
    return (
      <div >
        <div className="jumbotron text-center" > 
        
            <img src={ require('./frame.png') } height="150px" alt="Angular.js" ></img>
           <h2>Which is your favourite front-end framework in 2019</h2>
           <h4>Click on the below logo to vote</h4>
           <br />
            <div className="row">
               <div className="col-sm-offset-4 col-sm-4">
                  <img src={ require('./angular.png') } height="96px" alt="Angular.js" onClick={this.handleVoteAngular} ></img>
              </div>
              <div className="col-sm-4">
                  <img src={ require('./react.png') } height="96" alt="React.js" onClick={this.handleVoteReact} ></img>
              </div>
              <div className="col-sm-4">
                  <img src={ require('./vue.png') } height="70px;" alt="Vue.js" onClick={this.handleVoteVue} ></img>
              </div>
            </div>
        </div>
      </div>
      );
  }
}

export default App;
