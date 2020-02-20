import React from 'react'

const Usercard = props => {
    // fetch("https://api.github.com/users/jeffglanville/followers")
    // .then(res => res.json)
    // .then(followers => this.ListeningStateChangedEvent({ followers }))
    // .catch(err => console.log(err));


    return (
        <div>
            <h2>github followers</h2>
            {props.followers.map(follower => (
                <div key={follower.id} follower={props.follower}></div>
            ))}
        </div>
    )
}


export default Usercard;