import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="resume">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software Engineer Intern [Protut]"
              date="April 2024 - June 2024"
              content={[
                "Currently employed as a software engineer at startup, pioneering the development of cutting-edge tools. Overseeing the visual appeal and responsiveness of over 20+ website pages, while actively identifying and resolving 25+ bugs.",
                "Drive the development of cutting-edge web-based solutions using the MERN stack, demonstrating proficiency in modern web development technologies and frameworks.",
                "Orchestrated the creation of 10+ comprehensive website wireframes and workflows, optimizing project clarity and fostering team collaboration. Leveraged Jira for efficient task management, ensuring alignment with project objectives and timelines."
              ]}
            />

            <Resumecontent
              title="Frontend Developer Intern [IBM]"
              date="June 2023 - July 2023"
              content={[
                "Served as a Frontend Developer Intern at IBM, a leading global technology company, where I contributed to the development and enhancement of various frontend applications and collaborated with cross-functional teams to deliver innovative solutions.",
                "Designed and developed user-friendly and responsive web interfaces using modern frontend technologies, including HTML, CSS and JavaScript.",
              ]}
            />
        </Row>

      </Container>
    </Container>
  );
}

export default Resume;
