import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import cloudNote from "../../Assets/Projects/cloudNote.png";
import Taskmaster from "../../Assets/Projects/Taskmaster.jpg";
import Resume_Builder from "../../Assets/Projects/Resume_Builder.png";
import news_app from "../../Assets/Projects/news_app.png";
import profileViewer from "../../Assets/Projects/profileViewer.jpg";
import flimfix_Suggester from "../../Assets/Projects/flimfix_Suggester.jpg";
import netflix from "../../Assets/Projects/netflix.png";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
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
              imgPath={Resume_Builder}
              isBlog={false}
              title="Resume Builder"
              description="Conceptualized, designed, and developed a user-centric Resume Builder tool tailored to address the modern-day needs of job seekers.  Leveraged React for the front-end, Node.js for the back-end, and integrated various libraries and frameworks to ensure optimal performance and user experience."
              link="https://github.com/ayushsachan123/Resume_Builder-Hackoverflow-IIT_Jhodhpr"
              liveLink="https://github.com/ayushsachan123/Resume_Builder-Hackoverflow-IIT_Jhodhpr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flimfix_Suggester}
              isBlog={false}
              title="FilmFlix Suggester"
              description="FilmFlix Suggester is an interactive web application designed to provide personalized movie and TV show recommendations to users based on their preferences. Leveraging the power of modern web technologies and data-driven algorithms, this project aims to enhance the user's entertainment experience by suggesting content tailored to their tastes."
              link="https://github.com/ayushsachan123/FilmFlix_Suggester"
              liveLink="https://github.com/ayushsachan123/FilmFlix_Suggester"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloudNote}
              isBlog={false}
              title="CloudNote"
              description="CloudNote is a feature-rich, cloud-based note-taking application designed to provide users with a seamless and secure platform to capture, organize, and access their notes from anywhere. With its intuitive interface and robust backend infrastructure, CloudNote aims to redefine the way users manage their digital notes."
              link="https://github.com/ayushsachan123/iNotebook"
              liveLink="https://github.com/ayushsachan123/iNotebook"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Taskmaster}
              isBlog={false}
              title="TaskMaster"
              description="TaskMaster is a user-friendly To-Do List application designed to help individuals organize tasks, manage priorities, and enhance productivity. With its clean interface and versatile features, TaskMaster serves as a digital companion for users seeking a structured approach to task management."
              link="https://github.com/ayushsachan123/To-do-List"
              liveLink="https://github.com/ayushsachan123/To-do-List"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news_app}
              isBlog={false}
              title="NewsPulse"
              description="NewsPulse is a cutting-edge News Application designed to deliver personalized and real-time news updates to users. With its comprehensive coverage of diverse topics and seamless user experience, NewsPulse stands as a go-to platform for staying informed and connected with global events."
              link="https://github.com/ayushsachan123/Newz"
              liveLink="https://github.com/ayushsachan123/Newz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={profileViewer}
              isBlog={false}
              title="ProfileView"
              description="ProfileView is a Profile Viewer Application designed to provide users with an intuitive and engaging platform to view, explore, and manage user profiles. ProfileView offers a seamless experience for discovering and connecting with diverse profiles."
              link="https://github.com/ayushsachan123/Profile-Viewer"
              liveLink="https://github.com/ayushsachan123/Profile-Viewer"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="StreamHub"
              description="StreamHub is a sophisticated Netflix Clone Application designed to replicate the core functionalities and user experience of the popular streaming platform, Netflix."
              link="https://github.com/ayushsachan123/Netflix-Clone"
              liveLink="https://github.com/ayushsachan123/Netflix-Clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
