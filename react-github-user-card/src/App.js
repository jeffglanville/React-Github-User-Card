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
    return(
    axios
    .get("https://api.github.com/users/jeffglanville")
    .then(res => this.setState({mine: res.data})||console.log(res.data))
    .catch(err => console.log(err)),

    axios
    .get("https://api.github.com/users/jeffglanville/followers")
    .then(res => this.setState({followers: res.data}))
    .catch(err => console.log(err))
    )}

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



