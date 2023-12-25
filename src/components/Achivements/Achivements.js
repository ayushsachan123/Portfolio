import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Ayush_Sacha_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
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
            
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Technical Lead [Girlscript Surat]"
              date="March 2020 - present"
              content={[
                "As a Part of Community, we arrange lots of event,Like HackerRank contest,ReactJS Live session and lots of other stuff.",
              ]}
            />
            <Resumecontent
              title="Microsoft Learn Student Ambassador"
              date="Sep 2019 - March 2021"
              content={[
                "Under the Microsoft Learn Student Ambassadors programme, I started my cloud journey and learn basics of azure and i hosted several events Like hosting github session, Benifits of open source programme and and its community and much more.",
              ]}
            />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Top 40 of IngineousHunt contest winner and get 16GB pandrive.`,
                `2nd rank in college elocution competition.`,
              ]}
            />
        
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
