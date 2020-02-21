import React from 'react';
import './App.scss';
import Usercard from './components/Usercard';
import Mine from './components/Mine';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      mine: [],
      followers: []
    }
  }



  componentDidMount() {
    axios
    .get("https://api.github.com/users/jeffglanville/followers")
    .then(res => this.setState(res.data))
    .catch(err => console.log(err));
  }

  fetchFollowers = e => {
    axios
    .get("https://api.github.com/users/jeffglanville/followers")
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render(){
  return (
    <div className="App">
      <Mine mine={this.state.mine}/>
      <Usercard followers={this.state.followers} key={this.state.followers} />
    </div>
  );
  }
}

export default App;
