import React from "react"
import styled from "styled-components"

const ResumeSection = styled.section`

    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    width: 40%;
    background-color: dodgerblue;
    border-radius: 2rem;
    border: 2px solid navy;
    height: 50vh;
    box-shadow: 0 0 5rem 0 dodgerblue;

`
const ResumeSectionTitle = styled.h2`

    background-color: skyblue;
    padding: 1rem;
    border-radius: 1rem;
    text-decoration: underline;

`

const JobCard = styled.div`

    width: 100%;
    /* border: 2px solid navy; */
    border-radius: 1rem;
    padding: 1%;
    background-color: skyblue;
    box-shadow: 0 0 2rem 0 skyblue;

`

const Bullet = styled.li`

    background-color: skyblue;
    box-shadow: 0 0 1rem 0 skyblue;
    border-radius: 1rem;
    width: 100%;

`

export default function Resume() {
    return (
        <>
            <ResumeSection>
                <ResumeSectionTitle>EXPERIENCE</ResumeSectionTitle>
                <JobCard>
                    <h2>Team Lead : Lambda School</h2>
                    <li>Mentoring Students</li>
                </JobCard>
                <JobCard>
                    <h2>Cable Technician : Comcast</h2>
                    <li>Residential installs and troubleshooting for cable internet.</li>
                </JobCard>
                <JobCard>
                    <h2>Tech Support : Verizon</h2>
                    <li>Assisted with customer technical issues with their phones.</li>
                    <li>Assisted with customer billing issues with their phones.</li>
                </JobCard>
                <JobCard>
                    <h2>Tech Support : XBOX/HP : Stream Global Services</h2>
                    <li>Assisted with customer technical issues with their phones.</li>
                    <li>Assisted with customer billing issues with their phones.</li>
                </JobCard>
            </ResumeSection>
            <ResumeSection>
                <ResumeSectionTitle>SKILLS</ResumeSectionTitle>
                <Bullet>HTML</Bullet>
                <Bullet>CSS</Bullet>
                <Bullet>LESS</Bullet>
                <Bullet>JAVASCRIPT</Bullet>
                <Bullet>REACT</Bullet>
                <Bullet>STYLED COMPONENTS</Bullet>
                <Bullet>REDUX</Bullet>
                <Bullet>CONTEXT API</Bullet>
                <Bullet>AXIOS</Bullet>
            </ResumeSection>
        </>
        
    )
}