import React from "react";
import { Col, Row } from "react-bootstrap";

import { FaGitAlt, FaGithub, FaDocker, FaFigma } from "react-icons/fa";

import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiMysql,
  SiMongodb,
  SiStrapi,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaGitAlt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiStrapi />
      </Col>
    </Row>
  );
}

export default Toolstack;
