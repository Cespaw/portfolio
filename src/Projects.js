import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <section id='Projects' className='content-div'>
            <div className="content-text">
                <h1>Projects</h1>
                <p>Some of my projects</p>
                <div className='cardholder'>

                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>

                </div>

            </div>
        </section>
    )
}

export default Projects