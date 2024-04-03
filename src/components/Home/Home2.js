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
                            Started my journey programming with C, my code was
                            so bad, I had more magic variables than Harry
                            Potter's wand 😅 and no comments to explain what any
                            of them did! But things changed so much I had to
                            learn that a clean code is far better than a code
                            that looks like a toddler's finger painting
                            masterpiece, with no rhyme or reason and colors
                            everywhere
                            <br />
                            <br />I am an artist using
                            <i>
                                <b className="purple">
                                    {' '}
                                    Php, Javascript and swift.{' '}
                                </b>
                            </i>
                            <br />
                            <br />
                            My passion lies in the creation of &nbsp;
                            <i>
                                <b className="purple">
                                    Mobile Technologies and Products{' '}
                                </b>{' '}
                                and also in areas related to{' '}
                                <b className="purple">
                                    E-commerce and media libraries
                                </b>
                            </i>
                            <br />
                            <br />
                            In addition I'm always trying new Technologies
                            <b className="purple">
                                Swift Vapor, RxSwift, Combine
                            </b>{' '}
                            and
                            <i>
                                <b className="purple">
                                    {' '}
                                    also some modern Javascript Libraries and
                                    Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> Vuejs and Nuxt</b>
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
                                    href="https://twitter.com/soufiane_ms"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
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
