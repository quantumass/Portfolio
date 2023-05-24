import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    'Software Developer',
                    'IOS Developer',
                    'Devops engineer',
                    'Linux Lover',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    )
}

export default Type
