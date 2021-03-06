import React from "react";

export const NameForm = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="fname">First name:</label>
            <input type="text" id="fname" name="fname" />
            <input type="submit" value="Submit" />
        </form>
    )
}