import React, { Component } from 'react'

class Usercard extends Component {
    constructor(){
        super();
        this.state={
            followers: [],
        };
    }

    fetchFollowers = e => {
        e.preventDefault();

        fetch(`https://api.github.com/users/jeffglanville/followers`)
        .then(res => this.setState({ res: this.followers.name  }))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h2>Followers</h2>
            </div>
        )
    }
}



export default Usercard;