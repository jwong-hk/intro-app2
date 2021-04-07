import React from 'react';
import {Link} from "react-router-dom"
import {Button} from "react-bootstrap";


const ThankYouPage = () => {
    return (
        <div>
        <h1>Thank you for your submission!</h1>
        <Link to={{ pathname: "/listpage"}}  variant="primary">          
            <Button  variant="primary" type="submit">Take me to the list!</Button>
          </Link>
        </div>
    )
}

export default ThankYouPage;