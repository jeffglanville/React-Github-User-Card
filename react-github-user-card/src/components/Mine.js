import React from 'react'



const Mine = props => {

    return (
        <div>
            <h2>GitHub Name: {props.mine.login}</h2>
            <p>Followers: {props.mine.followers}</p>
            <p>BIO: {props.mine.bio}</p>
        </div>
    )
}



export default Mine;