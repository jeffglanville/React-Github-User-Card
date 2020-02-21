import React from 'react'

const Mine = props => {
    return (
        <div>
            <h2>GitHub Name: {props.followers.login}</h2>
            <p>Followers: {props.followers.followers}</p>
            <p>BIO: {props.followers.bio}</p>
        </div>
    )
}



export default Mine;