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
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}
        <Row className="resume">
          {/* <Col md={6} className="resume-left"> */}
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Frontend Developer Intern [IBM]"
              date="June 2023 - July 2023"
              content={[
                "Served as a Frontend Developer Intern at IBM, a leading global technology company, where I contributed to the development and enhancement of various frontend applications and collaborated with cross-functional teams to deliver innovative solutions.",
                "Designed and developed user-friendly and responsive web interfaces using modern frontend technologies, including HTML, CSS and JavaScript.",
              ]}
            />
            
            {/* <h3 className="resume-title">Extracurricular Activities</h3>
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
            /> */}
          {/* </Col> */}
          {/* <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Science and Engineering [KIET Group of Institutions, Ghaziabad] "
              date="2021 - 2025"
              content={[
                `CGPA: 7.5/10 `,
                "Currently pursuing a Bachelor of Technology (B.Tech) degree from KIET Group of Institutions, Delhi - NCR, Ghaziabad.",
              ]}
            />
              <Resumecontent
              title="Senior Secondary Education [Subhash Public School, Kanpur] "
              date="2020 - 2021"
              content={[
                `Percent: 81%`,
                "Completed Senior secondary Education from Subhash Public School, a reputed institution committed to providing quality education.",
              ]}
            />
              <Resumecontent
              title="High School Education [Subhash Public School, Kanpur] "
              date="2018 - 2019"
              content={[
                `Percent: 89%`,
                "Completed High School Education from Subhash Public School, a reputed institution committed to providing quality education.",
              ]}
            /> */}

            {/* <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Top 40 of IngineousHunt contest winner and get 16GB pandrive.`,
                `2nd rank in college elocution competition.`,
              ]}
            /> */}
          {/* </Col> */}
        </Row>
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Resume;
