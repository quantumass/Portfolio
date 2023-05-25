import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: 'justify' }}>
                        Hi Everyone, I am{' '}
                        <span className="purple">Masmoud Soufiane </span>
                        from{' '}
                        <span className="purple"> Casablanca, Morocco.</span>
                        <br />I am a senior swift programmer, My focus as an
                        experienced Swift developer is on building large,
                        intuitive apps that users will love
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to
                        do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing video Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Drawing
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Sleeping
                        </li>
                    </ul>

                    <p style={{ color: 'rgb(155 126 172)' }}>
                        "Nothing will come to you. run, walk, crawl to your
                        destiny"{' '}
                    </p>
                    <footer className="blockquote-footer">me</footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default AboutCard
