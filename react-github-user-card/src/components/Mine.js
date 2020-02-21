import React from 'react'



const Mine = props => {

    return (
        <div>
            <h2>My GitHub Name: {props.mine.login}</h2>
            <p>My Number of Followers: {props.mine.followers}</p>
        </div>
    )
}



export default Mine;