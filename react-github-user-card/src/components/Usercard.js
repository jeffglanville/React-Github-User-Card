import React from 'react'

const Usercard =  props => {
console.log(props)
    return (
        <div>
            <h2>Github Followers:</h2>
            {/* if (props.followers.length === 0) {

            } */}
            {props.followers.map(follower => {
                return(
                    <div key={follower.id} className="followers">
                        <img src={follower.avatar_url} alt={follower.login}/>
                        <p>{follower.login}</p>
                        <p>{follower.id}</p>
                        <p>{follower.url}</p>
                        <p href = "html_url"/>
                    </div>
                )
            })}


        </div>
    )
}


export default Usercard;