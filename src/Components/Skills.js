import React from 'react'
import jsImage from '../Assets/js.png'
import phpImage from '../Assets/php.png'
import microsoftImage from '../Assets/microsoft.png'
import pythonImage from '../Assets/python.png'
import wordpressImage from '../Assets/wordpress.png'
import htmlImage from '../Assets/html.png'

const skills = [
    {
        id: 1,
        image: phpImage,
        name: 'PHP',
        percent: 20
    },

    {
        id: 2,
        image: jsImage,
        name: 'Javascript',
        percent: 90
    },

    {
        id: 3,
        image: microsoftImage,
        name: 'Microsoft Office',
        percent: 90
    },

    {
        id: 4,
        image: pythonImage,
        name: 'Python',
        percent: 90
    },

    {
        id: 5,
        image: wordpressImage,
        name: 'Wordpress',
        percent: 90
    },

    {
        id: 6,
        image: htmlImage,
        name: 'HTML',
        percent: 90
    }
]


function Skills() {
  return (
    <section>
        <div className='skills'>
            {skills.map((skill)=>(
                <Skill key={skill.id} image={skill.image} name={skill.name} percent={skill.percent}/>
            ))}
        </div>
    </section>
  )
}

export default Skills

function Skill({image, name, percent}) {
    return (
      <div className='skill'>
          <div className='skill__img'>
              <img src={image} alt='skill icon'/>
          </div>
          <div className='skill__info'>
              <h3 className='skill__name'>{name}</h3>
              <div className='skill__percent'>
                <div className='skill__percent-inner' style={{
                    width: `${percent ? percent : 100}%`
                }}>
                </div>
              </div>
          </div>
      </div>
    )
}
