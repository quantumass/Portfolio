import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import dhj from '../../Assets/Projects/dhj.webp'
import precisionpos from '../../Assets/Projects/Logiciel-de-caisse33_en.png'
import doctify from '../../Assets/Projects/doctify.png'
import minyadi from '../../Assets/Projects/minyadi.webp'
import livre from '../../Assets/Projects/livre.webp'
import sodexo from '../../Assets/Projects/sodexo.webp'

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
                            imgPath={precisionpos}
                            isBlog={false}
                            title="La caisse entregistreuse sur IPAD {SWIFT FRONT, VAPOR BACKEND}"
                            description="Une solution complète, basée sur le cloud et dotée de toutes les fonctionnalités nécessaires au métier de commerçant pour vous faire progresser !"
                            demoLink="https://precisionsystemshq.com/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={doctify}
                            isBlog={false}
                            title="Doctify Health SaaS {SWIFT FRONT, VAPOR BACKEND}"
                            description="Logiciel de gestion cabinet, outils cliniques et facturation médicale"
                            demoLink="https://precisionsystemshq.com/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={sodexo}
                            isBlog={false}
                            title="MySodexo Maroc {Vuejs, Cordova, Laravel}"
                            description="l’application mobile Sodexo permet de localiser rapidement sur une carte les commerces affiliés à proximité de l’utilisateur."
                            demoLink="https://mysodexo.ma/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={dhj}
                            isBlog={false}
                            title="My DHJ official app {Vuejs, Cordova, Laravel}"
                            description="L 'application officielle du Difaa el Hassani el Jadidii (DHJ) vous permet de suivre toute l'actualité de l 'équipe première du club. Vous aurez rendez-vous avec des photos exclusives des joueurs et des interviews inédites d'avant et après match Classements, calendriers et résultats, autant d’ occasions de partager votre amour du football et la passion de votre club de football préféré."
                            demoLink="https://utopie.ma/projets/dhj/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={minyadi}
                            isBlog={false}
                            title="Minyadi {Nuxt.js, Cordova, Laravel}"
                            description="Le projet e-commerce consiste à concevoir une boutique en ligne intuitive, responsive, moderne, qui soit simple d’utilisation et qui répond aux standards de la pratique de la vente en ligne."
                            demoLink="https://utopie.ma/projets/minyadi/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={livre}
                            isBlog={false}
                            title="Livré! {Vuejs, Cordova, Laravel}"
                            description="L'app Livré ! vous propose des mets frais et savoureux, préparés dans un environnement sanitaire strict en vous offrant une qualité de service inégalée à chaque étape de votre commande, le tout à un prix accessible."
                            demoLink="https://utopie.ma/projets/livre/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Projects
