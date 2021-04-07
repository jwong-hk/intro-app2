import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ListPage = (props) => {
  const [list, setList] = useState([]);
  const [isLoaded, setLoaded] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/receive")
      .then((res) => {
        const newList = res.data;
        setList(newList);
        setLoaded(false);
      })
      .catch(() => {
        console.log("Error retrieving data");
      });
  }, []);

  console.log(isLoaded);

  if (isLoaded) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  } else {
    return (
      <div className={"user-form"} style={{backgroundImage: "url(https://i.pinimg.com/originals/53/c8/09/53c8094f4315f17faa57843d9b680222.jpg)"}}>
      <div >
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Key</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
          {list.map((item) => {
            return (
              <tr>
                <td>{item.key}</td>
                <td>{item.fName}</td> 
                <td>{item.lName}</td>
              </tr>
            );
          })}
          </tbody>
        </Table>
        <Link to={{ pathname: "/usersubmit" }} variant="primary">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Link>
      </div>
      </div>
    );
  }
};

export default ListPage;
