import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import {Link} from "react-router-dom"
import Axios from "axios";
import uuid from 'react-uuid';

const UserSubmit = (props) => {
  const  [input, setInput]  = useState({fName:"", lName:""});
  const [list, setList] = useState([]);

  const handleEvent = (e) => {
    const { value, name } = e.target;
    setInput(prevValue => {
        return {
          ...prevValue,
          [name]: value
        };
      });
  }

  const submitButton = () => {
    Axios.post("http://localhost:3001/api/insert",{
      key: uuid(),
      fName: input.fName,
      lName: input.lName
    })};

  return ( 
    <div className="bg-img" style={{height:"100vh"}}>
    <Container fluid="md" style={{paddingTop:"100px"}}>
        <Form className="bg-white user-form" style={{color:"black"}}>
        <h1>Hello, what is your name?</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control onChange={handleEvent} name="fName" type="email" placeholder="First name" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control onChange={handleEvent} name="lName" type="password" placeholder="Last name" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Link to={{ pathname: "/thankyou"}}  variant="primary">          
            <Button onClick={submitButton} variant="primary" type="submit">Submit</Button>
          </Link>

        </Form>
        </Container>
        </div>
  );
};

export default UserSubmit;
