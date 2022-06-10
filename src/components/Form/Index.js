import React, { useState } from "react";
import axios from "axios";

const Form = (props) => {

    const [username, setUsername] = useState();
    const [msgError, setMsgError] = useState();

    const handleForm = (event) => {
        
        setUsername(event.target.value);
        console.log(username)
    }
    const onsubmit = async (event) => {

        event.preventDefault();
        
        try {
            const resp = await axios.get(`https://api.github.com/users/${username}`)
            props.onSubmitForm(resp.data)
            setUsername('')
            setMsgError('')
        } catch (ex) {
            setMsgError(ex.message)
        }

    }

    return (
        <>
        <h1>Add New Repository</h1>
            <form onSubmit={onsubmit}>
                <input type="text" onChange={handleForm} name="name" value={username} />
                <button type="submit">Add</button>
            </form>
            <span>{msgError}</span>
        </>
    )
}

export default Form