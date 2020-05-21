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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas reiciendis enim vero exercitationem natus odit minus? Adipisci nesciunt voluptas ipsum dolores totam odit, aliquid numquam blanditiis, quis distinctio dolor excepturi.</p>
        </AboutSection>
    )
}