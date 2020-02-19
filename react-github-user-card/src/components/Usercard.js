import React, { Component } from 'react'

class Usercard extends Component {
    constructor(){
        super();
        this.state={
            followers: [],
        };
    }

    componentDidMount() {
        fetch("https://api.github.com/users/jeffglanville")
        .then(res => this.setState({ followers: this.followers }))
        .catch(err => console.log(err));
    }

    fetchFollowers = e => {
        e.preventDefault();

        fetch(`https://api.github.com/users/jeffglanville/${this.state.followers}`)
        .then(followers => this.setState({ followers: this.followers }))
        .catch(err => console.log(err));
    }


    render() {
        return (
            <div>

            </div>
        )
    }
}



export default Usercard;