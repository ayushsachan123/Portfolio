import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {
  DiReact,
  DiNodejs,
} from 'react-icons/di'
import { 
SiRedux, 
SiNumpy, 
SiPandas 
} from "react-icons/si";

import { FaBootstrap } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{justifyContent: 'center', paddingBottom: '50px'}}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPandas />
      </Col>

    </Row>
  )
}

export default Techstack
