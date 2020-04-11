import React, { useState } from 'react'


function SearchForm() {
    const [followers, setFollowers] = useState({ loginId: "" });

    const handleChanges = e => {
        e.preventDefault();
        setFollowers({
            ...followers,
            [e.target.loginId]: e.target.value
        })
    }

    return (
        <div>
            <form>
                <label>Login: </label>
                <input
                    type="text"
                    name="login"
                    onChange={handleChanges}
                />
                <button>Search</button>
            </form>
        </div>
    )

}


export default SearchForm;