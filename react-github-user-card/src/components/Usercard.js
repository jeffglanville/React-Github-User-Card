import React from 'react'

const Usercard =  props => {

    return (
        <div>
            <h2>Github Followers:</h2>
            {props.followers.map(follower => (
                <div key={follower.id} className="follower" />
            ))}
        </div>
    )
}


export default Usercard;