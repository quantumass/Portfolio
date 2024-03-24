import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { DiJavascript1, DiNodejs, DiGit } from 'react-icons/di'
import {
    SiReactivex,
    SiSwift,
    SiVapor,
    SiRealm,
    SiGit,
    SiGnubash,
    SiApple
} from 'react-icons/si'

function Techstack() {
    return (
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiReactivex />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSwift />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVapor />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRealm />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGnubash />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiApple />
            </Col>
        </Row>
    )
}

export default Techstack
