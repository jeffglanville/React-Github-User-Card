import React from 'react'
import "../components/Usercard.scss";

const Usercard =  props => {
console.log(props)
    return (
        <div className="follower-wrapper">
            {props.followers.map(follower => {
                return(
                    <div key={follower.id} className="followers">
                        <img width="250" src={follower.avatar_url} alt={follower.login}/>
                        <p>Login: {follower.login}</p>
                        <p>Id: {follower.id}</p>
                        <p>Avatar URL: {follower.avatar_url}</p>
                        <p>GitHub URL: {follower.url}</p>
                    </div>
                )
            })}


        </div>
    )
}


export default Usercard;