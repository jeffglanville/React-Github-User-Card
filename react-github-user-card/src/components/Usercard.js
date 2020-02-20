import React from 'react'

function Usercard (props) {

    return (
        <div>
            <h2>github followers</h2>
            {props.followers.map(follower => (
                <div key={props.follower.id} className="follower" />
            ))}
        </div>
    )
}


export default Usercard;