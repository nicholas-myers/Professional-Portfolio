import React from "react"
import styled from "styled-components"

const AboutSection = styled.div`

    display: block;
    width: 50%;

`

export default function About() {
    return (
        <AboutSection>
            <h2>Image goes here</h2>
            <p>My name is Nick, I am 33 years old, and I live in Portland, OR. I love to learn, especially about technology. I've been an avid gamer and computer enthusiast since I was young. I like to build my computers.I beatbox using a RC-505 loop station as hobby.</p>
        </AboutSection>
    )
}