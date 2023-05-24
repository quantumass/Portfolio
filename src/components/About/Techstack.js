import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { DiJavascript1, DiNodejs, DiGit } from 'react-icons/di'
import {
    SiLaravel,
    SiSwift,
    SiVapor,
    SiMysql,
    SiNuxtdotjs,
    SiPhp,
    SiVuedotjs,
} from 'react-icons/si'

function Techstack() {
    return (
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVuedotjs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNuxtdotjs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPhp />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLaravel />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSwift />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVapor />
            </Col>
        </Row>
    )
}

export default Techstack
