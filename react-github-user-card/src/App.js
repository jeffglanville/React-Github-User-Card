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
    this.setState({ followers: this.state.followers });
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
