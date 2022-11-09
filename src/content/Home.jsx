import React from 'react';
import pic from "/img.jpg";
import ReactTypingEffect from 'react-typing-effect';

function Home() {
  return (
    <div className="condiv home">
      <img src={pic} className="profilepic"></img>
      <ReactTypingEffect className='typingefffict' text={['I am Aditya Choudha','I am a web developer']} speed={500} eraseDelay={600} />
    </div>
  )
}

export default Home