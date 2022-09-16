import React from 'react'
import Heading from './Heading'

function Projects() {
  return (
    <div>
        <Heading title = 'Milestones of Projects'
            description='Here are a few  people & projects i’ve patnered and worked on.'
        />
        <div className='projects'>
            <div className='project-1'>
                <h1><a href='#' class='project-link'>Project Title</a></h1>
                <p>Android, IoT</p>
            </div>
            <div className='project-2'>
                <h1><a href='#' class='project-link'>Co-Founder @ZURI<br/> Internship</a></h1>
                <p>Web, PHP, Python</p>
            </div>
            <div className='project-3'>
                <h1><a href='#' class='project-link'>Co-Fouder HNG internship</a></h1>
            </div>
            <div className='project-4'>
                <h1><a href='#' class='project-link'>Project Title</a></h1>
                <p>Android, IoT</p>
            </div>
            <div className='project-5'>
                <h1><a href='#' class='project-link'>Project Title</a></h1>
                <p>Android, IoT</p>
            </div>
            <div className='project-6'>
                <h1><a href='#' class='project-link'>Project Title</a></h1>
                <p>Android, IoT</p>
            </div>
        </div>
    </div>
  )
}

export default Projects