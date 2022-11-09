import React from 'react';
import {SocialIcon} from "react-social-icons";
import "../App.css";

function Contact() {
  return (
    <div className="condiv">
        <h1 className='subtopic'>Contact Me</h1>
        <h3>Email:  adityachoudha2000@gmail.com</h3>
        <h3>Phone no. : 9166783939</h3>
        <br></br>
        <h1 className='subtopic'>Social Media</h1>
        <SocialIcon url='https://github.com/adityachoudha' target='_blank' className='icon'/>
        <SocialIcon url='https://www.linkedin.com/in/aditya-choudha-2000/' target='_blank'/>
    </div>
  )
}

export default Contact