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
            />

        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
