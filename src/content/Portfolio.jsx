import React from 'react';
import "../App.css";


const projects = [
    {
        link:'https://leafy-horse-efb1c0.netlify.app/',
        src: '/todolist.png',
        title:'To do list',
        description:'Create your To Do list and when done mark them completed '
    },
    {
        link:'https://fyle-angular-project-e0a48.web.app/',
        src:'/git.png',
        title:'Pull Github Repositories',
        description:'To pull all the public repositories from any git account'
    },
    {
        link: 'https://make-note-385bb.web.app/',
        src: '/notes.png',
        title: 'Notes',
        description: "Create Notes"
    }
]

function Portfolio() {
  return (
    <div className="con">
        <div className="project">
            {projects.map((item) => (
                <a 
                    href={item.link}
                    key={item.src}
                    target='_blank'
                    className='tag'>
                        <div className="imov">
                        <img src={item.src} className='imghov'/>
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                </a>
            ))}
        </div>
    </div>
  )
}

export default Portfolio


    // <div className="condiv">
    //     {projects.map((project) => (
    //         <div className="procov">
    //         <a 
    //             href={project.link}
    //             target="_blank"
    //             key={project.src}
    //             className="project"
    //         >
    //         <div className="hov">
    //         <img src={project.src} className='img' /></div>
    //         <h1>{project.title}</h1>
    //         <p>{project.description}</p>
    //         </a>
    //         </div>
    //     ))}
    //     </div>
  

