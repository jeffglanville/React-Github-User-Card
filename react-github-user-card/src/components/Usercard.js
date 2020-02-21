import React from 'react'
import "../components/Usercard.scss";

const Usercard =  props => {
console.log(props)
    return (
        <div className="follower-wrapper">
            <h2>Github Followers:</h2>
            {props.followers.map(follower => {
                return(
                    <div key={follower.id} className="followers">
                        <img width="250" src={follower.avatar_url} alt={follower.login}/>
                        <p>Login: {follower.login}</p>
                        <p>Id: {follower.id}</p>
                        <p>GitHub URL: {follower.url}</p>
                    </div>
                )
            })}


        </div>
    )
}


export default Usercard;