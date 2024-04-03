import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {
    SiXcode,
    SiVisualstudiocode,
    SiLinux,
    SiJira,
    SiBitbucket
} from 'react-icons/si'

function Toolstack() {
    return (
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiXcode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLinux />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJira />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiBitbucket />
            </Col>
        </Row>
    )
}

export default Toolstack
