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
                            <ImPointRight /> Bookworm (poetry and novels)
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Gym rat
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Drawing
                        </li>
                    </ul>

                    <p style={{ color: 'rgb(155 126 172)' }}>
                        "I love learning Xcode shortcuts, if you know any useful one send me on my email"{' '}
                    </p>
                    <footer className="blockquote-footer">me</footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default AboutCard
