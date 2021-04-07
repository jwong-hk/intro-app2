import React from "react";
import {
  Container,
  Jumbotron,
  Navbar,
  Form,
  Nav,
  FormControl,
  Button,
  Footer
} from "react-bootstrap";
import {Link} from "react-router-dom";
import Carol from "../components/Carol.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const MainPage = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://innovatewebdevelopment.com/wp-content/uploads/2020/07/comingsoon.jpg)",
        backgroundSize: "cover",
      }}
    >
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"> Navbar </Navbar.Brand>{" "}
        <Nav className="mr-auto">
          <Nav.Link href="dota2"> Dota2 </Nav.Link>{" "}
          <Nav.Link href="listpage"> User List </Nav.Link>{" "}
          <Nav.Link href="thanks"> Thank You </Nav.Link>{" "}
          <Nav.Link href="feariuslogs"> Fearius Logs </Nav.Link>{" "}
        </Nav>{" "}
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light"> Search </Button>{" "}
        </Form>{" "}
      </Navbar>{" "}
      <Container className="container-fluid p-5">
        <Jumbotron style={{ background: "none" }}>
          <h1 className="frontpage-header"> Justin Wong </h1>{" "}
          <p className="frontpage-lower">
            full-stack developer, gym enthusiast, gamer{" "}
          </p>
        </Jumbotron>
        <Carol />
      </Container>{" "}a
      <Container className="container-fluid p-5 second-container">
      <img className="float-left" src="https://scontent.fhkg4-1.fna.fbcdn.net/v/t1.0-9/75462335_10156244781716207_1430388104304263168_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=oiG4ceeHKDoAX-_ZMOs&_nc_ht=scontent.fhkg4-1.fna&oh=78f3f1527509c633b53034a7e8782304&oe=607667A0"></img>
        <h1 style={{ color: "white" }}>Hi, welcome to my page</h1>
        <p style={{ color: "white" }}>
          My name is Justin, I'm a full stack developer. I specialize in HTML,
          CSS, Javascript, SQL and Mongoose.Outside of coding I'm pretty much a
          gym rat, enjoy games in my spare time, and hanging out with friends
          and family. If you'd like to know more about me please feel free to
          contact me below!{" "}
        </p>
      </Container>
      <Navbar>
      <Container className="p-4" style={{backgroundColor:"white"}}>
      
      <a style={{color:"inherit"}} href="http://www.google.com"><FontAwesomeIcon style={{fontSize:"2rem"}} icon={faInstagram} /></a>
      <a style={{color:"inherit"}} href="http://www.instagram.com"><FontAwesomeIcon style={{fontSize:"2rem"}} icon={faInstagram} /></a>
      <a style={{color:"inherit"}} href="http://www.twitter.com"><FontAwesomeIcon style={{fontSize:"2rem"}} icon={faInstagram} /></a>
      </Container>
      </Navbar>
    </div>
  );
};

export default MainPage;
