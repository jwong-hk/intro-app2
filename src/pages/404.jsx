import React from 'react';
import { useHistory } from 'react-router-dom';

const NoPageFound = () => {
    const history = useHistory()
    return (
        <div>
        <h1>PAGE NOT FOUND</h1>
        <input type="button" onClick={() => history.goBack()} value="Go to Google" />
        </div>
    )
}

export default NoPageFound;