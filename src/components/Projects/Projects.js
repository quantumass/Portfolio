import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import dhj from '../../Assets/Projects/dhj.webp'
import precisionpos from '../../Assets/Projects/Logiciel-de-caisse33_en.png'
import doctify from '../../Assets/Projects/doctify.png'
import tydom from '../../Assets/Projects/tydom.png'
import minyadi from '../../Assets/Projects/minyadi.webp'
import livre from '../../Assets/Projects/livre.webp'
import sodexo from '../../Assets/Projects/sodexo.webp'
import rademacher from '../../Assets/Projects/rademacher.png'
import textgenieai from '../../Assets/Projects/textgenieai.jpg'

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: 'white' }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row
                    style={{ justifyContent: 'center', paddingBottom: '10px' }}
                >
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={rademacher}
                            isBlog={false}
                            title="Rademacher App {UIKit, RestAPI, Viper arch ...}"
                            description="A smart home control app that lets you manage shutters, lights, heating, and other devices from your phone. It works with the Rademacher HomePilot system, supports automation, and offers remote access for convenient home control anytime, anywhere."
                            demoLink="https://www.rademacher.de/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={textgenieai}
                            isBlog={false}
                            title="TextGenieAI {SwiftUI, OpenAI API}"
                            description="Pa macOS assistive writing app designed to enhance productivity and creativity by offering smart, contextual text tools through a popup bar that appears beside selected text. Built for writers, students, professionals, and creatives"
                            demoLink="https://textgenieai.com/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={tydom}
                            isBlog={false}
                            title="Deltadore Tydom APP {SwiftUI/UIKit, Websocket, Rxswift, Combine ...}"
                            description="A smart home control app that allows users to control various systems in their homes such as heating,
                            shutters, lights, alarm, gate, and garage door through their smartphone or
                            tablet"
                            demoLink="https://apps.apple.com/fr/app/tydom/id946440452"
                        />
                    </Col>

                    
                </Row>
                <Row>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={precisionpos}
                            isBlog={false}
                            title="The cash register on iPad {Swift front, Vapor backend}"
                            description="Cloud-based solution for merchants to grow their business. Built with Swift using organized architecture. Utilized DAO/SERVICE/CONTROLLER/VIEW on the front-end and repository pattern on the back-end."
                            demoLink="https://precisionsystemshq.com/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={doctify}
                            isBlog={false}
                            title="Doctify Health SaaS {Swift front, Vapor backend}"
                            description="Practice management software, clinical tools, and medical billing for healthcare providers to manage administrative tasks with ease."
                            demoLink="https://precisionsystemshq.com/"
                        />
                    </Col>
                </Row>

                <h1 className="project-heading">
                    My Archive <strong className="purple">Works </strong>
                </h1>

                <Row
                    style={{ justifyContent: 'center', paddingBottom: '10px' }}
                >
<Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={sodexo}
                            isBlog={false}
                            title="MySodexo Maroc {Vuejs, Cordova, Laravel}"
                            description="Sodexo mobile app helps users locate affiliated merchants nearby on a map, making it easy to find a place to eat or shop."
                            demoLink="https://mysodexo.ma/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={dhj}
                            isBlog={false}
                            title="My DHJ official app {Vuejs, Cordova, Laravel}"
                            description="Official DHJ app offers exclusive news, photos, interviews, standings, schedules, and results for fans of the football club."
                            demoLink="https://utopie.ma/projets/dhj/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={minyadi}
                            isBlog={false}
                            title="Minyadi {Nuxt.js, Cordova, Laravel}"
                            description="E-commerce project designed to create an intuitive, responsive, modern, and easy-to-use online store that meets the standards of online sales practices."
                            demoLink="https://utopie.ma/projets/minyadi/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={livre}
                            isBlog={false}
                            title="Livré! {Vuejs, Cordova, Laravel}"
                            description="Livré! app provides fresh and tasty dishes prepared in a sanitary environment, with high-quality service at an affordable price."
                            demoLink="https://utopie.ma/projets/livre/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Projects
