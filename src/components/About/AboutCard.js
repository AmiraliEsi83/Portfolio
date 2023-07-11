import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amir Ali Eslami </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br />I am a dedicated and driven second-year undergraduate Computer Science student at Toronto Metropolitan University.
            <br />
            Additionally, I am currently employed as a Software Engineering Intern at Veebar Tech
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Piano
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching TedTalks
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "All our dreams can come true, if we have the courage to pursue them!"{" "}
          </p>
          <footer className="blockquote-footer">Walt Disney</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
