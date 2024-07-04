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

        <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Solved 1000+ Problems solved on Leetcode and geeksforgeeks.`,
                `Ranked 3 star on Codechef — Highest Rating 1715.`,
                `Contributed to multiple open source projects in GirlScript Summer of Code(GSSOC'23).`,
                `2200+ contributions and streak of 400+ consecutive days of coding on GitHub.`,
                `Stood 3rd among all teams in the HackOverflow Hackathon organized by IIT Jodhpur.`,
                `Stood 2nd in 1st year’s competitive programming contest, KIET Ghaziabad.`,
                `Solved 1500+ Algorithmic problems on various online platform and online judges.`
              ]}
            />


            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Core Member, Google Developer Student Club(GDSC), KIET Ghaziabad"
              date="March 2022 - present"
              content={[
                "Full Stack Web Developer, collaborating with other members to work on various projects.",
                "Conducting multiple sessions related to Web Development and deploying various Clubs' websites and project."
              ]}
            />
            <Resumecontent
              title="Campus Ambassador, Internshala"
              date="May 2023 - June 2023"
              content={[
                "As a Campus Ambassador for Internshala, I had the opportunity to play a pivotal role in connecting my university community with valuable internship opportunities.",
                " This role equipped me with essential skills in marketing, communication, and event coordination."
              ]}
            />
              <Resumecontent
              title="Contingent Leader, Mood Indigo, IIT Bombay"
              date="July 2022 - Present"
              content={[
                "Highly motivated and accomplished professional seeking an Event Manager position to leverage leadership, organizational, and event management skills gained as a Contingent Leader at Mood Indigo, IIT Bombay.",
              ]}
            />
        
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
