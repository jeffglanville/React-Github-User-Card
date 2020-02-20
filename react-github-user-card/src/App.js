import React from 'react';
import './App.scss';
import Usercard from './components/Usercard';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      followers: []
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/users/jeffglanville/followers")
      .then(res => console.log(res))
      .then(followers => this.setState({ followers }))
      .catch(err => console.log(err));
    }


  render(){
  return (
    <div className="App">
      <Usercard followers={this.state.followers}/>
    </div>
  );
  }
}

export default App;
