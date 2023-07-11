import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Todo from "../../Assets/Projects/Todo.jpeg";
import Music from "../../Assets/Projects/Music.jpeg";
import Countdown from "../../Assets/Projects/Countdown.png";
import Nasaapi from "../../Assets/Projects/Nasaapi.png";
import backlog from "../../Assets/Projects/backlog.png";
import Quote from "../../Assets/Projects/Quote.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Nasaapi}
              isBlog={false}
              title="Nasa-API"
              description="A web page that incorporates a NASA API to get random astronomy pictures of the day formatted on cards."
              ghLink="https://github.com/AmiraliEsi83/Nasa-API"
              demoLink="https://amiraliesi83.github.io/Nasa-API/"
            />
          </Col>

          <Col md={4} className="randomQuote">
            <ProjectCard
              imgPath={Quote}
              isBlog={false}
              title="randomQuote"
              description="Generate a random (famous) quote at the click of a button and share it on Twitter. add to favorites if a quote appeals to you - you can save it to a favorites list by clicking on the heart icon - this will save the quote to the local storage."
              ghLink="https://github.com/AmiraliEsi83/randomQuote"
              demoLink="https://amiraliesi83.github.io/randomQuote/"
            />
          </Col>

          <Col md={4} className="Custom CountDown">
            <ProjectCard
              imgPath={Countdown}
              isBlog={false}
              title="Custom-Countdown"
              description="This is a custom countdown app. User can title their countdown and enter in a date. Countdown will then display days,hours, minutes, seconds until data arrives accourding to Universal time zone. Localstorage is used to keep the users data everytime they return to the page."
              ghLink="https://github.com/AmiraliEsi83/Custom-Countdown"
              demoLink="https://amiraliesi83.github.io/Custom-Countdown/"              
            />
          </Col>

          <Col md={4} className="Todo-List">
            <ProjectCard
              imgPath={Todo}
              isBlog={false}
              title="Todo-List"
              description="This is a to do list creator. Built using HTML 5, CSS 3, jQuery and JavaScript."
              ghLink="https://github.com/AmiraliEsi83/Todo-List"
              demoLink="https://amiraliesi83.github.io/Todo-List/"
            />
          </Col>

          <Col md={4} className="backlog-site">
            <ProjectCard
              imgPath={backlog}
              isBlog={false}
              title="backlog-site"
              description="Simple workflow management application that allows users to organize their works."
              ghLink="https://github.com/AmiraliEsi83/backlog-site"
              demoLink="https://amiraliesi83.github.io/backlog-site/" 
            />
          </Col>

          <Col md={4} className="Music-Player">
            <ProjectCard
              imgPath={Music}
              isBlog={false}
              title="Music-Player"
              description="music player with custom controls and animation
              responsive design"
              ghLink="https://github.com/AmiraliEsi83/Music-Player"
              demoLink="https://amiraliesi83.github.io/Music-Player"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
