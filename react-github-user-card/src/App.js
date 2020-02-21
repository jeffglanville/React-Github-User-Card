import React from 'react';
import './App.scss';
import Usercard from './components/Usercard';
import Mine from './components/Mine';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      mine:{},
      followers: []
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/users/jeffglanville")
    .then(res => this.setState(res.data))
    .catch(err => console.log(err))
}


  render(){
  return (
    <div className="App">
      <Mine />
      <Usercard followers={this.state.followers}
        key={this.state.followers}
      />
    </div>
  );
  }
}

export default App;
