import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myImg from '../../Assets/languages.png'
import Tilt from 'react-parallax-tilt'
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: '2.6em' }}>
                            LET ME <span className="purple"> INTRODUCE </span>{' '}
                            MYSELF
                        </h1>
                        <p className="home-about-body">
                        I've got this unstoppable enthusiasm for technology, you know? It's like my fuel! Bring on those new challenges, I say!
                        <br /><br />There's nothing like diving headfirst into the latest innovations to keep my spirits high and my brain buzzing.
                        <br /><br />Every problem? That's just another chance to flex my tech muscles and level up.
                        <br /><br />And hey, who said coding couldn't be a blast? I've got this special knack for turning bugs into features.
                        <br /><br />It's like being a digital magician, turning mishaps into marvels. So, let's embrace the chaos and make some magic happen!
                            <br />
                            <br />I love
                            <i>
                                <b className="purple">
                                    {' '}swift{' '}
                                </b>
                            </i>
                            <br />
                            <br />
                            My passion lies in the creation of &nbsp;
                            <i>
                                <b className="purple">
                                    Web Technologies and Products{' '}
                                </b>{' '}
                                and also in areas related to{' '}
                                <b className="purple">
                                    E-commerce and media libraries
                                </b>
                            </i>
                            <br />
                            <br />
                            In addition I'm always trying new Technologies
                            <b className="purple">Swift Vapor, Coredata</b> and
                            <i>
                                <b className="purple">
                                    {' '}
                                    Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> Vuejs, react native and Nuxt</b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src={myImg}
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to{' '}
                            <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/quantumass"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/soufiane-masmoud-676302102/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
export default Home2
