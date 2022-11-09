import React from 'react'
import { useState } from 'react'

function Skills() {

    const [mySkills] = useState(['HTML','CSS','JavaScript','REACT JS','ANGULAR JS', 'Python' , 'C/C++','WordPress','FIREBASE','NETLIFY']);
  return (
    <div className="condiv skills">
        <h1 className='subtopic'>My Skills</h1>
        <ul>
            {mySkills.map((value) => {
                return <li key={value}>{value}</li>
            })}
        </ul>
    </div>
  )
}

export default Skills